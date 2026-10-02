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
  Sparkles,
  Layers,
  QrCode
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
        color: config.dotsColor || '#2563eb',
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
        color: config.dotsColor || '#2563eb'
      },
      cornersDotOptions: {
        type: config.cornersDotType || 'dot',
        color: config.dotsColor || '#2563eb'
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
      <div className="studio-stage-card">
        {/* Stage Header */}
        <div className="stage-head-bar">
          <div className="stage-title-wrap">
            <span className="stage-dot-pulse" />
            <h3 className="stage-title">Canvas Stage</h3>
          </div>

          {/* Segmented Mode Switcher */}
          <div className="stage-mode-segmented">
            <button
              type="button"
              className={`stage-mode-btn ${previewMode === 'qr' ? 'active' : ''}`}
              onClick={() => setPreviewMode('qr')}
              title="Display raw QR canvas"
            >
              <QrCode size={13} />
              <span>Canvas</span>
            </button>
            <button
              type="button"
              className={`stage-mode-btn ${previewMode === 'styled' ? 'active' : ''}`}
              onClick={() => setPreviewMode('styled')}
              title="Display branded display card mockup"
            >
              <Layers size={13} />
              <span>Mockup</span>
            </button>
          </div>
        </div>

        {/* QR Display Stage */}
        <div className={`canvas-pedestal-stage ${previewMode === 'styled' ? 'mockup-pedestal-mode' : ''}`}>
          {previewMode === 'styled' && (
            <div className="mockup-header-strip">
              <div className="mockup-brand-chip">
                <span className="mockup-brand-circle" />
                <span>QRCRAFT STUDIO</span>
              </div>
              <p className="mockup-scan-heading">Point camera to scan</p>
            </div>
          )}

          <div className="canvas-render-well">
            <div ref={qrContainerRef} className="canvas-center-anchor" />
          </div>

          {previewMode === 'styled' && (
            <div className="mockup-footer-strip">
              <span className="mockup-footer-badge">W3C Accessible • 100% Client Memory</span>
            </div>
          )}
        </div>

        {/* Sleek Minimal Scannability Bar (Replaces bulky AI green card) */}
        <div className={`sleek-scannability-pill ${audit.status}`} title={audit.warnings[0] || 'Optimized for high-speed camera scanning'}>
          <div className="scannability-status-left">
            {audit.status === 'great' && <CheckCircle size={14} className="scannability-icon" />}
            {audit.status === 'warning' && <AlertTriangle size={14} className="scannability-icon" />}
            {audit.status === 'danger' && <ShieldAlert size={14} className="scannability-icon" />}
            <span className="scannability-rating-text">
              {audit.status === 'great' && 'Scan Quality: 100% (AAA)'}
              {audit.status === 'warning' && 'Scan Quality: Moderate (2.8:1)'}
              {audit.status === 'danger' && 'Low Contrast Warning'}
            </span>
          </div>
          <span className="contrast-ratio-chip">{audit.ratio}:1 Contrast</span>
        </div>

        {/* Primary Export Actions Bar */}
        <div className="export-action-grid">
          <button
            type="button"
            className="btn-export-primary"
            onClick={() => handleDownload('png')}
            title="Download high-resolution 2000px PNG raster image"
          >
            <Download size={16} />
            <span>Export PNG</span>
          </button>

          <button
            type="button"
            className="btn-export-secondary"
            onClick={() => handleDownload('svg')}
            title="Download infinite resolution SVG vector asset"
          >
            <Download size={15} />
            <span>SVG Vector</span>
          </button>
        </div>

        {/* Utility Quick Toolbar: Copy, Save, Share */}
        <div className="stage-utility-row">
          <button
            type="button"
            className={`utility-btn ${copied ? 'is-active' : ''}`}
            onClick={handleCopyImage}
            title="Copy image binary directly to clipboard"
          >
            {copied ? <Check size={14} style={{ color: 'var(--accent-green)' }} /> : <Copy size={14} />}
            <span>{copied ? 'Copied Image' : 'Copy'}</span>
          </button>

          <button
            type="button"
            className={`utility-btn ${saved ? 'is-active' : ''}`}
            onClick={handleManualSave}
            title="Save custom design to local history session"
          >
            {saved ? <Check size={14} style={{ color: 'var(--accent-green)' }} /> : <Bookmark size={14} />}
            <span>{saved ? 'Saved!' : 'Save'}</span>
          </button>

          <button
            type="button"
            className={`utility-btn ${shared ? 'is-active' : ''}`}
            onClick={handleShare}
            title="Share payload or studio link"
          >
            {shared ? <Check size={14} style={{ color: 'var(--accent-green)' }} /> : <Share2 size={14} />}
            <span>{shared ? 'Copied' : 'Share'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
