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
  QrCode,
  ScanLine,
  ExternalLink
} from 'lucide-react';
import { auditScanReliability } from '../utils/contrastValidator';
import { playTap, playScanSound, playSuccessChime } from '../utils/soundEffects';

export default function LivePreviewCard({
  payload,
  config,
  onSaveToHistory,
  onNotify
}) {
  const qrContainerRef = useRef(null);
  const qrCodeInstanceRef = useRef(null);
  const [previewMode, setPreviewMode] = useState('qr'); // 'qr' | 'styled'
  const [mockupScene, setMockupScene] = useState('desk'); // 'desk' | 'cafe' | 'badge'
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

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
        color: config.dotsColor || '#0f172a',
        ...(config.isGradient
          ? {
              gradient: {
                type: config.gradientType || 'linear',
                rotation: 0,
                colorStops: [
                  { offset: 0, color: config.dotsColor },
                  { offset: 1, color: config.gradientColor2 || '#334155' }
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
        color: config.dotsColor || '#0f172a'
      },
      cornersDotOptions: {
        type: config.cornersDotType || 'dot',
        color: config.dotsColor || '#0f172a'
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

  // Laser Scan Simulator Handler
  const handleTriggerScanTest = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanResult(null);
    playScanSound();

    setTimeout(() => {
      setIsScanning(false);
      playSuccessChime();
      
      setScanResult({
        payload: payload || 'https://github.com/sautrikroy17',
        time: 14
      });

      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.6 }
      });

      onNotify?.({
        type: 'scan',
        title: 'Camera Scan Verified (14ms)',
        message: `Decoded payload: ${payload.length > 40 ? payload.substring(0, 40) + '...' : payload}`
      });

      setTimeout(() => {
        setScanResult(null);
      }, 3500);
    }, 750);
  };

  // Handlers
  const handleDownload = (format) => {
    if (!qrCodeInstanceRef.current) return;
    
    qrCodeInstanceRef.current.download({
      name: `qrcraft-${Date.now()}`,
      extension: format
    });

    playSuccessChime();

    confetti({
      particleCount: 75,
      spread: 75,
      origin: { y: 0.75 }
    });

    if (onSaveToHistory) {
      onSaveToHistory();
    }

    if (format === 'png') {
      onNotify?.({
        type: 'success',
        title: 'PNG Export Complete',
        message: 'High-resolution raster image downloaded.'
      });
    } else {
      onNotify?.({
        type: 'success',
        title: 'SVG Vector Export Complete',
        message: 'Infinite resolution scalable vector downloaded.'
      });
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
        playSuccessChime();
        setTimeout(() => setCopied(false), 2000);
        onNotify?.({
          type: 'success',
          title: 'Copied Image to Clipboard',
          message: 'Direct PNG binary ready to paste into Figma or docs.'
        });
      });
    } catch {
      onNotify?.({
        type: 'error',
        title: 'Clipboard Permission Needed',
        message: 'Browser restricted direct clipboard write. Use Export PNG instead.'
      });
    }
  };

  const handleManualSave = () => {
    if (onSaveToHistory) {
      onSaveToHistory();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      onNotify?.({
        type: 'success',
        title: 'Saved to Session History',
        message: 'Accessible anytime in the Recent Codes table.'
      });
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
        onNotify?.({
          type: 'info',
          title: 'Payload Link Copied',
          message: 'Target address copied to clipboard.'
        });
      }
    } catch {
      // User cancelled share
    }
  };

  // Global Event Listener for Command Palette & Shortcuts
  useEffect(() => {
    const handleGlobalExport = (e) => {
      const format = e.detail?.format || 'png';
      handleDownload(format);
    };
    const handleGlobalCopy = () => {
      handleCopyImage();
    };

    window.addEventListener('qrcraft:export', handleGlobalExport);
    window.addEventListener('qrcraft:copy', handleGlobalCopy);
    return () => {
      window.removeEventListener('qrcraft:export', handleGlobalExport);
      window.removeEventListener('qrcraft:copy', handleGlobalCopy);
    };
  }, [payload, config]);

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
              onClick={() => {
                playTap();
                setPreviewMode('qr');
              }}
              title="Display raw QR canvas"
            >
              <QrCode size={13} />
              <span>Canvas</span>
            </button>
            <button
              type="button"
              className={`stage-mode-btn ${previewMode === 'styled' ? 'active' : ''}`}
              onClick={() => {
                playTap();
                setPreviewMode('styled');
              }}
              title="Display branded display card mockup"
            >
              <Layers size={13} />
              <span>Mockup</span>
            </button>
          </div>
        </div>

        {/* Mockup Scene Presets Selector */}
        {previewMode === 'styled' && (
          <div className="mockup-scene-bar">
            <button
              type="button"
              className={`mockup-scene-btn ${mockupScene === 'desk' ? 'active' : ''}`}
              onClick={() => {
                playTap();
                setMockupScene('desk');
              }}
              title="Tech Desk Phone Mockup"
            >
              <span>💻 Tech Desk</span>
            </button>
            <button
              type="button"
              className={`mockup-scene-btn ${mockupScene === 'cafe' ? 'active' : ''}`}
              onClick={() => {
                playTap();
                setMockupScene('cafe');
              }}
              title="Cafe Wooden Table Stand"
            >
              <span>☕ Cafe Stand</span>
            </button>
            <button
              type="button"
              className={`mockup-scene-btn ${mockupScene === 'badge' ? 'active' : ''}`}
              onClick={() => {
                playTap();
                setMockupScene('badge');
              }}
              title="Event Pass Lanyard Badge"
            >
              <span>🎫 Event Pass</span>
            </button>
          </div>
        )}

        {/* QR Display Stage */}
        <div className={`canvas-pedestal-stage ${previewMode === 'styled' ? `mockup-pedestal-mode mockup-scene-${mockupScene}` : ''}`}>
          {previewMode === 'styled' && (
            <div className="mockup-scene-bg-layer" aria-hidden="true">
              {mockupScene === 'desk' && <img src="/mockup-desk.jpg" alt="" className="mockup-photo-bg" />}
              {mockupScene === 'cafe' && <img src="/mockup-cafe.jpg" alt="" className="mockup-photo-bg" />}
              {mockupScene === 'badge' && <img src="/projects-workspace.webp" alt="" className="mockup-photo-bg" />}
              <div className="mockup-photo-scrim" />
            </div>
          )}

          {previewMode === 'styled' && mockupScene === 'desk' && (
            <div className="mockup-header-strip mockup-desk-phone-notch">
              <div className="phone-dynamic-island">
                <span className="island-camera" />
                <span className="island-lens" />
              </div>
              <div className="phone-status-row">
                <span className="phone-time">9:41</span>
                <span className="phone-tag-badge">Safari • Live Detection</span>
                <span className="phone-battery">100%</span>
              </div>
              <div className="phone-floating-pill">
                <ExternalLink size={11} style={{ color: '#ffffff' }} />
                <span className="phone-pill-url">{payload.length > 32 ? payload.substring(0, 32) + '...' : payload}</span>
              </div>
            </div>
          )}

          {previewMode === 'styled' && mockupScene === 'cafe' && (
            <div className="mockup-header-strip mockup-cafe-header">
              <div className="cafe-brand-title">☕ BREW & CO. • TABLE 14</div>
              <p className="cafe-sub-heading">Scan to order contactless & view specials</p>
            </div>
          )}

          {previewMode === 'styled' && mockupScene === 'badge' && (
            <div className="mockup-header-strip mockup-badge-header">
              <div className="badge-lanyard-hole" />
              <div className="badge-conf-name">GDG ON CAMPUS SRM 2026</div>
              <div className="badge-pass-type">VIP ALL ACCESS • TECHNICAL DOMAIN</div>
            </div>
          )}

          <div className="canvas-render-well">
            {/* High-Tech Viewfinder HUD Crosshair Brackets during Scanning */}
            {isScanning && (
              <div className="scanner-hud-overlay">
                <div className="hud-corner hud-tl" />
                <div className="hud-corner hud-tr" />
                <div className="hud-corner hud-bl" />
                <div className="hud-corner hud-br" />
                <div className="qr-laser-beam active-beam" />
              </div>
            )}

            {/* Holographic Camera Scan Verified Pop-up */}
            {scanResult && (
              <div className="scan-verified-hologram">
                <div className="hologram-card">
                  <div className="hologram-head">
                    <div className="hologram-badge">
                      <CheckCircle size={14} className="hologram-check-icon" />
                      <span>CAMERA DECODE VERIFIED</span>
                    </div>
                    <span className="hologram-ms">{scanResult.time}ms</span>
                  </div>
                  <div className="hologram-payload-strip">
                    <code className="hologram-payload-text">{scanResult.payload}</code>
                  </div>
                </div>
              </div>
            )}

            <div ref={qrContainerRef} className="canvas-center-anchor" />
          </div>

          {previewMode === 'styled' && (
            <div className="mockup-footer-strip">
              {mockupScene === 'desk' && <span className="mockup-footer-badge">Tap banner to launch website</span>}
              {mockupScene === 'cafe' && <span className="mockup-footer-badge">Wi-Fi: BrewCo_Guest • Zero App Install</span>}
              {mockupScene === 'badge' && <span className="mockup-footer-badge">Scan to verify delegate credentials</span>}
            </div>
          )}
        </div>

        {/* Sleek Minimal Scannability Bar + Interactive Laser Scan Test */}
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
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="contrast-ratio-chip">{audit.ratio}:1</span>
            <button
              type="button"
              className="btn-trigger-scan-test"
              onClick={handleTriggerScanTest}
              disabled={isScanning}
              title="Run automated camera decoder simulation"
            >
              <ScanLine size={12} />
              <span>{isScanning ? 'Scanning...' : 'Test Scan'}</span>
            </button>
          </div>
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
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            className={`utility-btn ${saved ? 'is-active' : ''}`}
            onClick={handleManualSave}
            title="Save custom design to local history session"
          >
            {saved ? <Check size={14} style={{ color: 'var(--accent-green)' }} /> : <Bookmark size={14} />}
            <span>{saved ? 'Saved' : 'Save'}</span>
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
