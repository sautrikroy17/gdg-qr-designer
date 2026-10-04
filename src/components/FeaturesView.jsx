import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Globe,
  Wifi,
  FileCode,
  Lock,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { playTap, playSuccessChime } from '../utils/soundEffects';

export default function FeaturesView({ onOpenStudio, onOpenStudioWithTab, onSelectTypeAndOpen }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedErrorLevel, setSelectedErrorLevel] = useState('H');

  const errorLevels = [
    { level: 'L', recovery: '7%', desc: 'Ideal for low data density without obstructions' },
    { level: 'M', recovery: '15%', desc: 'Default standard, reliable for clean surfaces' },
    { level: 'Q', recovery: '25%', desc: 'High resilience, resists scuffs and outdoor glare' },
    { level: 'H', recovery: '30%', desc: 'Maximum redundancy, required for center brand logos' },
  ];

  const handleCopyCode = (text, idx) => {
    navigator.clipboard.writeText(text);
    playSuccessChime();
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleSpotlightMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="view-page-container">
      {/* Background Ambient Cosmic Glows & Atmospheric Backdrop */}
      <div className="landing-ambient-canvas" style={{ height: '650px' }}>
        <img src="/skills-workspace.webp" alt="" className="section-ambient-img" />
        <div className="section-ambient-vignette" />
        <div className="light-streak-blue" />
        <div className="light-streak-purple" />
      </div>

      {/* Page Header */}
      <div className="view-header-centered" style={{ position: 'relative', zIndex: 5 }}>
        <div className="purpose-badge-pill">
          <Zap size={13} style={{ color: '#ffffff' }} />
          <span>Core Engineering Architecture</span>
        </div>
        <h1 className="view-main-heading">
          Engineered for <span className="headline-gradient-word">Precision</span>
        </h1>
        <p className="view-sub-heading">
          Explore the mathematical foundations, zero-backend memory architecture, and W3C accessibility compliance that power QRCraft Studio.
        </p>
      </div>

      {/* 6 High-Fidelity Interactive Architecture Cards */}
      <div className="architecture-grid" style={{ marginBottom: '4rem', position: 'relative', zIndex: 5 }}>
        {/* Card 1: Automated Wi-Fi Handshake */}
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div className="arch-icon-box" style={{ margin: 0 }}>
                <Wifi size={20} />
              </div>
              <span className="candidate-tag">ZXing Protocol</span>
            </div>
            <h4>Automated Wi-Fi Handshake</h4>
            <p style={{ marginTop: '0.6rem' }}>
              Generates standard ZXing WIFI payloads with automated character escaping for passwords containing colons, semicolons, backslashes, and quotes. Scans instantly configure iOS & Android devices.
            </p>

            {/* Interactive Code Preview */}
            <div
              style={{
                marginTop: '1.2rem',
                background: 'var(--bg-input)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 0.95rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <code style={{ fontSize: '0.75rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                WIFI:S:SRM_Hostel_5G;T:WPA;P:pass\;word;;
              </code>
              <button
                type="button"
                onClick={() => handleCopyCode('WIFI:S:SRM_Hostel_5G;T:WPA;P:pass\\;word;;', 1)}
                style={{ color: 'var(--text-muted)' }}
                title="Copy sample payload"
              >
                {copiedIndex === 1 ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={() => onSelectTypeAndOpen('wifi')}
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center', padding: '0.55rem', fontSize: '0.82rem' }}
            >
              <span>Test Wi-Fi Generator</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 2: W3C Contrast Scannability Guard */}
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div className="arch-icon-box" style={{ margin: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <span className="candidate-tag">WCAG 2.1 AAA</span>
            </div>
            <h4>W3C Contrast Scannability Guard</h4>
            <p style={{ marginTop: '0.6rem' }}>
              Audits Relative Luminance using the W3C sRGB formula <code>L = 0.2126R + 0.7152G + 0.0722B</code>. Warns in real-time if foreground and background color combinations risk camera autofocus or laser scanner decode failures.
            </p>

            {/* Interactive Contrast Meter */}
            <div
              style={{
                marginTop: '1.2rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <CheckCircle2 size={18} color="#34d399" />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#34d399' }}>Contrast Ratio: 21:1</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Exceeds WCAG 4.5:1 requirement • 100% Scannable</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('colors') : onOpenStudio()}
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center', padding: '0.55rem', fontSize: '0.82rem' }}
            >
              <span>Test Color Auditor</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 3: Reed-Solomon Redundancy Polynomial Math */}
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div className="arch-icon-box" style={{ margin: 0 }}>
                <Layers size={20} />
              </div>
              <span className="candidate-tag">Galois Field GF(256)</span>
            </div>
            <h4>Reed-Solomon Redundancy</h4>
            <p style={{ marginTop: '0.6rem' }}>
              Encodes error-correction codewords using polynomial long division. Permits complete data recovery even if the physical QR code is scratched, smudged, or covered by a center brand logo.
            </p>

            {/* Interactive Redundancy Level Selector */}
            <div style={{ marginTop: '1.2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
              {errorLevels.map((el) => (
                <button
                  key={el.level}
                  type="button"
                  onClick={() => {
                    playTap();
                    setSelectedErrorLevel(el.level);
                  }}
                  style={{
                    padding: '0.5rem 0.2rem',
                    borderRadius: 'var(--radius-xs)',
                    background: selectedErrorLevel === el.level ? '#ffffff' : 'var(--bg-input)',
                    border: `1px solid ${selectedErrorLevel === el.level ? '#ffffff' : 'var(--border-color)'}`,
                    color: selectedErrorLevel === el.level ? '#090d16' : 'var(--text-secondary)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                >
                  <div style={{ fontSize: '0.78rem', fontWeight: 800 }}>Level {el.level}</div>
                  <div style={{ fontSize: '0.68rem', opacity: 0.85 }}>{el.recovery}</div>
                </button>
              ))}
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              {errorLevels.find(e => e.level === selectedErrorLevel)?.desc}
            </p>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('style') : onOpenStudio()}
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center', padding: '0.55rem', fontSize: '0.82rem' }}
            >
              <span>Test Error Correction</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 4: Infinite Vector SVG Export */}
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div className="arch-icon-box" style={{ margin: 0 }}>
                <FileCode size={20} />
              </div>
              <span className="candidate-tag">Lossless XML</span>
            </div>
            <h4>Infinite Vector SVG Export</h4>
            <p style={{ marginTop: '0.6rem' }}>
              Generates mathematically pure <code>&lt;path&gt;</code> and <code>&lt;rect&gt;</code> nodes with zero raster compression artifacts. Scales infinitely for massive billboard prints, conference lanyards, and laser engraving.
            </p>

            <div
              style={{
                marginTop: '1.2rem',
                background: 'var(--bg-input)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 0.95rem',
                border: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Resolution Comparison:</span>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>∞ DPI (Vector) vs 300 DPI</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #94a3b8, #ffffff)' }} />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={onOpenStudio}
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center', padding: '0.55rem', fontSize: '0.82rem' }}
            >
              <span>Export Vector SVG</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 5: 100% Client-Side Privacy */}
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div className="arch-icon-box" style={{ margin: 0 }}>
                <Lock size={20} />
              </div>
              <span className="candidate-tag">Zero Cloud Logging</span>
            </div>
            <h4>100% Client-Side Privacy</h4>
            <p style={{ marginTop: '0.6rem' }}>
              Your passwords, sensitive URLs, and contact vCards never touch an external server or third-party analytics tracker. Execution occurs strictly within local browser memory via HTML5 Canvas.
            </p>

            <div
              style={{
                marginTop: '1.2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <CheckCircle2 size={16} color="#ffffff" />
              <span style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 600 }}>
                0 Network Packets Sent • Full Offline Operation
              </span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={onOpenStudio}
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center', padding: '0.55rem', fontSize: '0.82rem' }}
            >
              <span>Launch Offline Studio</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 6: Smart URL Sanitization & Encoding */}
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div className="arch-icon-box" style={{ margin: 0 }}>
                <Globe size={20} />
              </div>
              <span className="candidate-tag">RFC 3986 Standards</span>
            </div>
            <h4>Smart URL Sanitization</h4>
            <p style={{ marginTop: '0.6rem' }}>
              Automatically detects missing protocols and prepends <code>https://</code>, strips leading and trailing whitespaces, and normalizes UTF-8 query strings so every scan opens effortlessly on modern mobile browsers.
            </p>

            <div
              style={{
                marginTop: '1.2rem',
                background: 'var(--bg-input)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 0.95rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ fontSize: '0.74rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Input: </span>
                <span style={{ color: '#f87171', textDecoration: 'line-through' }}>srmist.edu.in</span>
                <br />
                <span style={{ color: 'var(--text-muted)' }}>Sanitized: </span>
                <span style={{ color: '#34d399', fontWeight: 700 }}>https://srmist.edu.in</span>
              </div>
              <CheckCircle2 size={16} color="#34d399" />
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={() => onSelectTypeAndOpen('url')}
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center', padding: '0.55rem', fontSize: '0.82rem' }}
            >
              <span>Test URL Sanitizer</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div
        className="glass-card"
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          maxWidth: '820px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 5,
          boxShadow: '0 20px 50px rgba(0,0,0,0.7)'
        }}
      >
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Ready to experience the precision of QRCraft?
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '540px', margin: '0 auto 2rem' }}>
          Create your personalized QR code now with custom gradients, shapes, and center logos.
        </p>
        <button
          type="button"
          className="btn-create-qr-hero"
          onClick={onOpenStudio}
          style={{ margin: '0 auto' }}
        >
          <span>Open Generator Studio</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
