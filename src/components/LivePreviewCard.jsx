import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import confetti from 'canvas-confetti';
import {
  Download,
  Copy,
  Check,
  Bookmark,
  Share2,
  CheckCircle,
  AlertTriangle,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { auditScanReliability } from '../utils/contrastValidator';

export default function LivePreviewCard({
  payload,
  config,
  onSaveToHistory
}) {
  const qrContainerRef = useRef(null);
  const qrCodeInstanceRef = useRef(null);
  const [previewMode, setPreviewMode] = useState('qr'); // 'qr' | 'styled'
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  // W3C Contrast & Scannability Audit
  const audit = auditScanReliability(
    config.dotsColor,
    config.backgroundColor,
    config.errorCorrectionLevel,
    Boolean(config.logo)
  );

  // Initialize and update QRCodeStyling instance
  useEffect(() => {
    const qrOptions = {
      width: config.size || 280,
      height: config.size || 280,
      type: 'canvas',
      data: payload || 'https://github.com/sautrikroy17',
      margin: config.margin || 8,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: config.errorCorrectionLevel || 'M'
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.32,
        margin: 4,
        crossOrigin: 'anonymous'
      },
      dotsOptions: {
        type: config.dotsType || 'rounded',
        color: config.dotsColor || '#3882f6',
        ...(config.isGradient
          ? {
              gradient: {
                type: config.gradientType || 'linear',
                rotation: 0,
                colorStops: [
                  { offset: 0, color: config.dotsColor },
                  { offset: 1, color: config.gradientColor2 || '#1d4ed8' }
                ]
              }
            }
          : {})
      },
      backgroundOptions: {
        color: config.backgroundColor || '#ffffff'
      },
      cornersSquareOptions: {
        type: config.cornersSquareType || 'extra-rounded',
        color: config.dotsColor || '#3882f6'
      },
      cornersDotOptions: {
        type: config.cornersDotType || 'dot',
        color: config.dotsColor || '#3882f6'
      }
    };

    if (config.logo) {
      qrOptions.image = config.logo;
    } else {
      qrOptions.image = '';
    }

    if (!qrCodeInstanceRef.current) {
      qrCodeInstanceRef.current = new QRCodeStyling(qrOptions);
      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = '';
        qrCodeInstanceRef.current.append(qrContainerRef.current);
      }
    } else {
      qrCodeInstanceRef.current.update(qrOptions);
    }
  }, [payload, config]);

  // Handlers
  const handleDownload = (format) => {
    if (!qrCodeInstanceRef.current) return;
    
    qrCodeInstanceRef.current.download({
      name: `qrcraft-${Date.now()}`,
      extension: format
    });

    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.75 }
    });

    if (onSaveToHistory) {
      onSaveToHistory();
    }
  };

  const handleCopyImage = async () => {
    try {
      const canvas = qrContainerRef.current?.querySelector('canvas');
      if (!canvas) return;

      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch {
      alert('Could not copy image automatically. Use Download PNG.');
    }
  };

  const handleManualSave = () => {
    if (onSaveToHistory) {
      onSaveToHistory();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Custom QR Code | QRCraft Studio',
          text: `Check out this custom QR code: ${payload}`,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(payload);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      // User cancelled share
    }
  };

  return (
    <div className="sticky-preview-wrapper">
      <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
        {/* Header with QR Code / Styled Preview Segmented Switch */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>Live Preview</h3>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Real-time</span>
        </div>

        <div className="preview-toggle-bar">
          <button
            type="button"
            className={`preview-toggle-btn ${previewMode === 'qr' ? 'active' : ''}`}
            onClick={() => setPreviewMode('qr')}
          >
            QR Code
          </button>
          <button
            type="button"
            className={`preview-toggle-btn ${previewMode === 'styled' ? 'active' : ''}`}
            onClick={() => setPreviewMode('styled')}
          >
            Styled Preview
          </button>
        </div>

        {/* QR Display Canvas Box with Single Persistent Ref */}
        <div className={`preview-canvas-wrapper ${previewMode === 'styled' ? 'styled-mode-active' : ''}`}>
          {previewMode === 'styled' && (
            <div className="styled-card-banner">
              <div className="styled-badge-pill">
                <Sparkles size={11} />
                <span>QRCraft Studio</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.3rem' }}>
                Scan to Open Link
              </h4>
            </div>
          )}

          <div className="qr-display-box" style={{ padding: previewMode === 'styled' ? '0.75rem' : '1.25rem' }}>
            <div ref={qrContainerRef} style={{ display: 'flex', justifyContent: 'center', width: '100%' }} />
          </div>

          {previewMode === 'styled' && (
            <div className="styled-card-footer">
              <span className="styled-footer-tag">⚡ 100% Client-Side Verified</span>
            </div>
          )}
        </div>

        {/* Scan Reliability Pill */}
        <div className={`scan-reliability-card ${audit.status}`}>
          <div style={{ marginTop: '2px' }}>
            {audit.status === 'great' && <CheckCircle size={18} />}
            {audit.status === 'warning' && <AlertTriangle size={18} />}
            {audit.status === 'danger' && <ShieldAlert size={18} />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
              <span style={{ fontWeight: 700 }}>
                {audit.status === 'great' && 'Scan Reliability: Excellent'}
                {audit.status === 'warning' && 'Scan Reliability: Moderate'}
                {audit.status === 'danger' && 'Scan Reliability: Low Risk'}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>
                {audit.ratio}:1 Contrast
              </span>
            </div>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.75rem', lineHeight: '1.3' }}>
              {audit.warnings.length > 0
                ? audit.warnings[0]
                : 'This QR code is optimized for scanning across all devices and lighting conditions.'}
            </p>
          </div>
        </div>

        {/* Download Buttons */}
        <button
          type="button"
          className="download-btn-primary"
          onClick={() => handleDownload('png')}
        >
          <Download size={18} />
          <span>Download PNG</span>
        </button>

        <button
          type="button"
          className="download-btn-secondary"
          onClick={() => handleDownload('svg')}
        >
          <Download size={16} />
          <span>Download SVG</span>
        </button>

        {/* Action Row: Copy, Save, Share */}
        <div className="action-row-trio">
          <button
            type="button"
            className="action-trio-btn"
            onClick={handleCopyImage}
            title="Copy image to clipboard"
          >
            {copied ? <Check size={16} style={{ color: 'var(--accent-green)' }} /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            type="button"
            className="action-trio-btn"
            onClick={handleManualSave}
            title="Save to recent history"
          >
            {saved ? <Check size={16} style={{ color: 'var(--accent-green)' }} /> : <Bookmark size={16} />}
            <span>{saved ? 'Saved!' : 'Save'}</span>
          </button>

          <button
            type="button"
            className="action-trio-btn"
            onClick={handleShare}
            title="Share QR link"
          >
            {shared ? <Check size={16} style={{ color: 'var(--accent-green)' }} /> : <Share2 size={16} />}
            <span>{shared ? 'Copied Link' : 'Share'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
