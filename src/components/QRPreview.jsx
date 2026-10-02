import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import confetti from 'canvas-confetti';
import { Download, Copy, Check, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';
import { auditScanReliability } from '../utils/contrastValidator';

/**
 * QRPreview Component
 * Renders the real-time canvas preview of the QR code, performs live WCAG
 * scannability audits, and provides client-side PNG/SVG export & clipboard copy.
 */
export default function QRPreview({
  payload,
  config,
  onSaveToHistory
}) {
  const qrContainerRef = useRef(null);
  const qrCodeInstanceRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // 1. Audit Scannability & Contrast in real-time
  const audit = auditScanReliability(
    config.dotsColor,
    config.backgroundColor,
    config.errorCorrectionLevel,
    Boolean(config.logo)
  );

  // 2. Initialize and update QRCodeStyling instance
  useEffect(() => {
    // Generate QRCodeStyling configuration object
    const qrOptions = {
      width: config.size || 300,
      height: config.size || 300,
      type: 'canvas',
      data: payload || 'https://gdg.community.dev/',
      margin: config.margin || 8,
      qrOptions: {
        typeNumber: 0,
        mode: 'Byte',
        errorCorrectionLevel: config.errorCorrectionLevel || 'M'
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.35,
        margin: 4,
        crossOrigin: 'anonymous'
      },
      dotsOptions: {
        type: config.dotsType || 'square',
        color: config.dotsColor || '#000000',
        ...(config.isGradient
          ? {
              gradient: {
                type: config.gradientType || 'linear',
                rotation: 0,
                colorStops: [
                  { offset: 0, color: config.dotsColor },
                  { offset: 1, color: config.gradientColor2 || '#000000' }
                ]
              }
            }
          : {})
      },
      backgroundOptions: {
        color: config.backgroundColor || '#ffffff'
      },
      cornersSquareOptions: {
        type: config.cornersSquareType || 'square',
        color: config.dotsColor || '#000000'
      },
      cornersDotOptions: {
        type: config.cornersDotType || 'square',
        color: config.dotsColor || '#000000'
      }
    };

    if (config.logo) {
      qrOptions.image = config.logo;
    } else {
      qrOptions.image = '';
    }

    if (!qrCodeInstanceRef.current) {
      // First mount: instantiate and append to DOM
      qrCodeInstanceRef.current = new QRCodeStyling(qrOptions);
      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = '';
        qrCodeInstanceRef.current.append(qrContainerRef.current);
      }
    } else {
      // Subsequent renders: update instance
      qrCodeInstanceRef.current.update(qrOptions);
    }
  }, [payload, config]);

  // 3. Download Handlers
  const handleDownload = (format) => {
    if (!qrCodeInstanceRef.current) return;
    
    qrCodeInstanceRef.current.download({
      name: `qrcraft-${Date.now()}`,
      extension: format // 'png' or 'svg'
    });

    // Fire celebration confetti!
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    // Save to local storage history
    if (onSaveToHistory) {
      onSaveToHistory();
    }
  };

  // 4. Copy Image to OS Clipboard (Canvas to Blob API)
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
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      alert('Could not copy image automatically. Use Download PNG instead.');
    }
  };

  return (
    <div className="preview-sidebar">
      <div className="card preview-card">
        <div className="card-header" style={{ width: '100%', marginBottom: '1rem' }}>
          <h3 className="card-title">Live QR Preview</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Real-time Browser Render
          </span>
        </div>

        {/* QR Canvas Render Target */}
        <div className="qr-canvas-wrapper">
          <div ref={qrContainerRef} style={{ display: 'flex', justifyContent: 'center' }} />
        </div>

        {/* Scan Reliability Audit Banner */}
        <div className={`reliability-banner ${audit.status}`}>
          <div style={{ marginTop: '2px' }}>
            {audit.status === 'great' && <CheckCircle size={18} />}
            {audit.status === 'warning' && <AlertTriangle size={18} />}
            {audit.status === 'danger' && <ShieldAlert size={18} />}
          </div>
          <div style={{ flex: 1 }}>
            <div className="reliability-title">
              <span>
                {audit.status === 'great' && 'Scan Reliability: Excellent'}
                {audit.status === 'warning' && 'Scan Reliability: Moderate'}
                {audit.status === 'danger' && 'Scan Reliability: Unscannable Risk'}
              </span>
              <span className="contrast-badge">{audit.ratio}:1 Contrast</span>
            </div>
            {audit.warnings.length > 0 ? (
              <ul style={{ paddingLeft: '1rem', marginTop: '0.25rem', lineHeight: '1.4' }}>
                {audit.warnings.map((msg, idx) => (
                  <li key={idx} style={{ marginTop: '0.2rem' }}>{msg}</li>
                ))}
              </ul>
            ) : (
              <p style={{ margin: 0, opacity: 0.9 }}>
                Optimal contrast ratio and redundancy. This QR code will be easily scanned under any lighting.
              </p>
            )}
          </div>
        </div>

        {/* Export & Action Buttons */}
        <div className="export-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => handleDownload('png')}
          >
            <Download size={16} />
            <span>Download PNG</span>
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => handleDownload('svg')}
          >
            <Download size={16} />
            <span>Download SVG</span>
          </button>

          <button
            type="button"
            className="btn-secondary btn-full"
            onClick={handleCopyImage}
          >
            {copied ? (
              <>
                <Check size={16} style={{ color: 'var(--accent-green)' }} />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Image to Clipboard</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
