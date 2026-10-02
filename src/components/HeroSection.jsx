import React from 'react';
import {
  Sparkles,
  ArrowRight,
  LayoutGrid,
  Globe,
  FileText,
  Mail,
  Phone,
  Wifi,
  MapPin,
  Contact,
  CheckCircle2
} from 'lucide-react';

export default function HeroSection({ onStartCustomizing, onSelectTypeAndStart, onViewTemplates }) {
  const features = [
    {
      type: 'url',
      title: 'Website URL',
      desc: 'Link to any portfolio, GitHub repo, or web application.',
      icon: Globe
    },
    {
      type: 'text',
      title: 'Plain Text',
      desc: 'Share secret keys, notes, and messages with zero setup.',
      icon: FileText
    },
    {
      type: 'email',
      title: 'Email',
      desc: 'Pre-fill recipient, subject line, and draft message body.',
      icon: Mail
    },
    {
      type: 'phone',
      title: 'Phone Number',
      desc: 'Instant direct dial with international dialer support.',
      icon: Phone
    },
    {
      type: 'wifi',
      title: 'Wi-Fi Network',
      desc: 'One-tap router connection with auto-detection.',
      icon: Wifi
    },
    {
      type: 'vcard',
      title: 'Contact vCard',
      desc: 'Electronic business card importable directly to phone contacts.',
      icon: Contact
    }
  ];

  return (
    <div className="hero-landing-wrapper">
      {/* 1. Hero Headline & Visual */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-pill">
            <Sparkles size={14} style={{ color: 'var(--accent-amber)' }} />
            <span>Fast • 100% Free • No Login Required</span>
          </div>

          <h1 className="hero-title">
            QR Codes for the <br />
            <span className="hero-title-highlight">Modern Web</span>
          </h1>

          <p className="hero-subtitle">
            Create stylish, customizable QR codes for URLs, text, email, phone, Wi-Fi and more.
            Fast, free, and built entirely in the browser for GDG on Campus SRM.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onStartCustomizing}
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn-hero-ghost"
              onClick={onViewTemplates}
            >
              <LayoutGrid size={18} />
              <span>View Templates</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <h4>7+</h4>
              <p>QR Data Types</p>
            </div>
            <div className="stat-item">
              <h4>9+</h4>
              <p>Visual Presets</p>
            </div>
            <div className="stat-item">
              <h4>∞</h4>
              <p>Customization</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Browser Based</p>
            </div>
          </div>
        </div>

        {/* 2. Floating 3D Graphic */}
        <div className="hero-visual-card">
          <div className="hero-glow-backdrop" />
          
          <div className="hero-qr-floating-frame">
            {/* Top Left Floating Badge */}
            <div className="floating-badge badge-top-left">
              <Globe size={16} style={{ color: 'var(--accent-blue)' }} />
              <span>github.com/sautrikroy17</span>
            </div>

            {/* Stylized QR SVG Visual */}
            <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-lg)' }}>
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Corner Finder 1 */}
                <rect x="2" y="2" width="7" height="7" rx="2" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
                <rect x="4" y="4" width="3" height="3" rx="1" fill="#1d4ed8" />
                {/* Corner Finder 2 */}
                <rect x="15" y="2" width="7" height="7" rx="2" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
                <rect x="17" y="4" width="3" height="3" rx="1" fill="#1d4ed8" />
                {/* Corner Finder 3 */}
                <rect x="2" y="15" width="7" height="7" rx="2" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
                <rect x="4" y="17" width="3" height="3" rx="1" fill="#1d4ed8" />
                {/* Data Modules with Gradient Dots */}
                <circle cx="12" cy="4" r="1.2" fill="#3b82f6" />
                <circle cx="12" cy="7" r="1.2" fill="#6366f1" />
                <circle cx="12" cy="10" r="1.2" fill="#8b5cf6" />
                <circle cx="12" cy="14" r="1.2" fill="#3b82f6" />
                <circle cx="12" cy="18" r="1.2" fill="#6366f1" />
                <circle cx="4" cy="12" r="1.2" fill="#3b82f6" />
                <circle cx="7" cy="12" r="1.2" fill="#6366f1" />
                <circle cx="16" cy="12" r="1.2" fill="#8b5cf6" />
                <circle cx="19" cy="12" r="1.2" fill="#3b82f6" />
                <circle cx="16" cy="16" r="1.2" fill="#8b5cf6" />
                <circle cx="19" cy="16" r="1.2" fill="#ec4899" />
                <circle cx="16" cy="19" r="1.2" fill="#3b82f6" />
                <circle cx="19" cy="19" r="1.2" fill="#8b5cf6" />
              </svg>
            </div>

            {/* Bottom Right Floating Badge */}
            <div className="floating-badge badge-bottom-right">
              <CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} />
              <span>Real-time Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Everything You Need in One Place Section */}
      <section className="features-section">
        <div className="section-header-center">
          <h2>
            Everything You Need <br />
            <span className="hero-title-highlight">in One Place</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            From simple web links to complex Wi-Fi credentials, QRCraft gives you the tools to create QR codes that look amazing and scan every time.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.type}
                className="feature-box"
                onClick={() => onSelectTypeAndStart(feat.type)}
                role="button"
                tabIndex={0}
              >
                <div className="feature-icon-pill">
                  <Icon size={20} />
                </div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
