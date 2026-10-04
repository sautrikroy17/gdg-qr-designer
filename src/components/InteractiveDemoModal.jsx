import React, { useState } from 'react';
import { X, Play, ArrowRight, CheckCircle2, QrCode, Wand2, ShieldCheck, Download } from 'lucide-react';

export default function InteractiveDemoModal({ isOpen, onClose, onOpenStudio }) {
  if (!isOpen) return null;

  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      title: '1. Select Content Type',
      desc: 'Pick between URL, Plain Text, Email, Phone, Wi-Fi, Location, or vCard.',
      icon: QrCode,
      highlight: 'WIFI:S:SRM_Hostel_5G;T:WPA;P:***;;'
    },
    {
      title: '2. Customize Patterns & Gradients',
      desc: 'Style modules into rounded bubbles, choose minimalist palettes, or add custom corner squares.',
      icon: Wand2,
      highlight: 'Monochrome Slate & Titanium Minimalist Palettes + Rounded Modules'
    },
    {
      title: '3. Real-time Scannability Audit',
      desc: 'W3C WCAG Relative Luminance calculation ensures your QR code scans under any lighting.',
      icon: ShieldCheck,
      highlight: 'Contrast Score: 21:1 (Optimal Scannability)'
    },
    {
      title: '4. Instant PNG/SVG Export',
      desc: 'Download high-res PNG with celebratory confetti or vector SVG for infinite scaling.',
      icon: Download,
      highlight: 'Exported directly from browser memory (0ms backend latency)'
    }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'rgba(12, 17, 28, 0.94)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '2rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="logo-icon-box" style={{ width: '32px', height: '32px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <Play size={16} fill="white" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>QRCraft Interactive Demo</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>How it works in 4 easy steps</p>
            </div>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Step Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {demoSteps.map((step, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              style={{
                padding: '0.5rem',
                borderRadius: 'var(--radius-sm)',
                background: activeStep === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
                color: activeStep === idx ? '#090d16' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: 700,
                border: `1px solid ${activeStep === idx ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'}`,
                transition: 'all 0.2s ease',
                textAlign: 'center'
              }}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>

        {/* Active Step Card */}
        <div style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {React.createElement(demoSteps[activeStep].icon, { size: 20 })}
            </div>
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800 }}>{demoSteps[activeStep].title}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{demoSteps[activeStep].desc}</p>
            </div>
          </div>
          <div style={{ background: 'var(--bg-card)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#cbd5e1' }}>
            ✨ {demoSteps[activeStep].highlight}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            type="button"
            className="btn-create-qr-hero"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              onClose();
              onOpenStudio();
            }}
          >
            <span>Open in Studio & Try Now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
