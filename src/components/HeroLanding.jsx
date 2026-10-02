import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Play,
  Zap,
  Lock,
  Wifi,
  Smartphone,
  Globe,
  FileText,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  TrendingUp,
  Palette,
  Shapes,
  Image as ImageIcon,
  Square,
  Sliders
} from 'lucide-react';

export default function HeroLanding({
  onOpenStudio,
  onSelectTypeAndOpen,
  onOpenDemo,
  onOpenTemplates
}) {
  const [activeTypePreview, setActiveTypePreview] = useState('url');

  const contentTypes = [
    { id: 'url', title: 'Website URL', desc: 'Link to any website', icon: Globe },
    { id: 'text', title: 'Plain Text', desc: 'Share text instantly', icon: FileText },
    { id: 'email', title: 'Email', desc: 'Open email client', icon: Mail },
    { id: 'phone', title: 'Phone', desc: 'Call with one scan', icon: Phone },
    { id: 'wifi', title: 'Wi-Fi', desc: 'Share Wi-Fi details', icon: Wifi },
    { id: 'location', title: 'Location', desc: 'Share any location', icon: MapPin },
    { id: 'vcard', title: 'More', desc: 'And many more', icon: MoreHorizontal },
  ];

  return (
    <div className="landing-page-root">
      {/* ====================================================================
          1. Hero Section
          ==================================================================== */}
      <section className="landing-hero-container">
        {/* Left Headline Column */}
        <div className="landing-hero-left">
          {/* Badge Pill */}
          <div className="landing-badge-pill">
            <Sparkles size={14} style={{ color: 'var(--accent-amber)' }} />
            <span>Fast • Free • No Login Required</span>
          </div>

          {/* Main Title */}
          <h1 className="landing-main-title">
            Beautiful <br />
            <span className="title-qr-glow">QR Codes</span> <br />
            for Everything.
          </h1>

          {/* Subtitle */}
          <p className="landing-hero-subtitle">
            Create stunning, customizable QR codes for URLs, text, email, phone, Wi-Fi and more.
            Fast, free, and works entirely in your browser.
          </p>

          {/* CTA Buttons */}
          <div className="landing-cta-row">
            <button
              type="button"
              className="btn-create-qr"
              onClick={onOpenStudio}
            >
              <span>Create Your QR Code</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn-watch-demo"
              onClick={onOpenDemo}
            >
              <div className="play-icon-bubble">
                <Play size={12} fill="currentColor" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* 4 Feature Badges Underneath CTAs */}
          <div className="hero-micro-features-grid">
            <div className="micro-feat-item">
              <Zap size={16} className="micro-icon" />
              <div>
                <h5>Instant Generation</h5>
                <p>Real-time preview</p>
              </div>
            </div>

            <div className="micro-feat-item">
              <Lock size={16} className="micro-icon" />
              <div>
                <h5>100% Client-Side</h5>
                <p>No login required</p>
              </div>
            </div>

            <div className="micro-feat-item">
              <Wifi size={16} className="micro-icon" />
              <div>
                <h5>Works Offline</h5>
                <p>Even without internet</p>
              </div>
            </div>

            <div className="micro-feat-item">
              <Smartphone size={16} className="micro-icon" />
              <div>
                <h5>All Devices</h5>
                <p>Desktop, tablet, mobile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 3D Visual Column */}
        <div className="landing-hero-right">
          <div className="pedestal-stage">
            {/* Ambient Background Glow Mesh */}
            <div className="ambient-blue-glow" />
            <div className="ambient-purple-glow" />

            {/* Floating Pointer Pill: "Customize every detail" */}
            <div className="floating-pointer-pill">
              <span>Customize every detail</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="curved-arrow-svg">
                <path d="M4 12c6 6 12 4 16-2m0 0l-4-1m4 1l-1 4" stroke="#8ab4f8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Floating Color Palette Tool Widget */}
            <div className="floating-color-widget" onClick={onOpenStudio} title="Click to customize colors">
              <div className="color-dots-row">
                <span className="dot-swatch blue" />
                <span className="dot-swatch purple" />
                <span className="dot-swatch orange" />
              </div>
              <div className="mini-slider-track">
                <div className="mini-slider-thumb" />
              </div>
            </div>

            {/* The 3D Glass Pedestal Base */}
            <div className="glass-pedestal-platform">
              <div className="pedestal-rim-glow" />

              {/* The Hero QR Code Card */}
              <div className="hero-qr-gloss-card" onClick={onOpenStudio}>
                <div className="qr-inner-canvas-box">
                  <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Corner 1 */}
                    <rect x="2" y="2" width="7" height="7" rx="2" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
                    <rect x="4" y="4" width="3" height="3" rx="1" fill="#2563eb" />
                    
                    {/* Corner 2 */}
                    <rect x="15" y="2" width="7" height="7" rx="2" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
                    <rect x="17" y="4" width="3" height="3" rx="1" fill="#2563eb" />
                    
                    {/* Corner 3 */}
                    <rect x="2" y="15" width="7" height="7" rx="2" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
                    <rect x="4" y="17" width="3" height="3" rx="1" fill="#2563eb" />

                    {/* Gradient Modules Matrix */}
                    <circle cx="12" cy="4" r="1.1" fill="#3b82f6" />
                    <circle cx="12" cy="7" r="1.1" fill="#6366f1" />
                    <circle cx="4" cy="12" r="1.1" fill="#3b82f6" />
                    <circle cx="7" cy="12" r="1.1" fill="#6366f1" />
                    <circle cx="16" cy="12" r="1.1" fill="#8b5cf6" />
                    <circle cx="19" cy="12" r="1.1" fill="#3b82f6" />
                    <circle cx="12" cy="17" r="1.1" fill="#6366f1" />
                    <circle cx="12" cy="20" r="1.1" fill="#3b82f6" />
                    <circle cx="16" cy="16" r="1.1" fill="#a855f7" />
                    <circle cx="19" cy="16" r="1.1" fill="#ec4899" />
                    <circle cx="16" cy="19" r="1.1" fill="#3b82f6" />
                    <circle cx="19" cy="19" r="1.1" fill="#8b5cf6" />

                    {/* Center Brand Watermark */}
                    <rect x="9.5" y="9.5" width="5" height="5" rx="1.5" fill="#2563eb" />
                    <rect x="10.5" y="10.5" width="1.2" height="1.2" rx="0.3" fill="white" />
                    <rect x="12.3" y="10.5" width="1.2" height="1.2" rx="0.3" fill="white" />
                    <rect x="10.5" y="12.3" width="1.2" height="1.2" rx="0.3" fill="white" />
                    <rect x="12.3" y="12.3" width="1.2" height="1.2" rx="0.3" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Floating Right Tool Shelf */}
              <div className="floating-tools-shelf" onClick={onOpenStudio}>
                <div className="tool-shelf-item" title="Style">
                  <Sliders size={14} />
                  <span>Style</span>
                </div>
                <div className="tool-shelf-item" title="Logo">
                  <ImageIcon size={14} />
                  <span>Logo</span>
                </div>
                <div className="tool-shelf-item" title="Pattern">
                  <Shapes size={14} />
                  <span>Pattern</span>
                </div>
                <div className="tool-shelf-item" title="Frame">
                  <Square size={14} />
                  <span>Frame</span>
                </div>
                <div className="tool-shelf-item active" title="Colors">
                  <Palette size={14} />
                  <span>Colors</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Floating Metric Badge: 8.2M+ QR Codes */}
            <div className="floating-metric-badge">
              <div className="metric-icon-circle">
                <TrendingUp size={16} />
              </div>
              <div>
                <h4>8.2M+</h4>
                <p>QR Codes Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Trusted by Brand Logos Bar
          ==================================================================== */}
      <section className="trusted-brands-bar">
        <span className="trusted-label">TRUSTED BY CREATORS, DEVELOPERS AND BUSINESSES</span>
        <div className="brands-logo-row">
          <span className="brand-logo-text">Google</span>
          <span className="brand-logo-text">Microsoft</span>
          <span className="brand-logo-text">GitHub</span>
          <span className="brand-logo-text">Notion</span>
          <span className="brand-logo-text">Figma</span>
          <span className="brand-logo-text">Vercel</span>
          <span className="brand-logo-text">Spotify</span>
          <span className="brand-logo-text">airbnb</span>
        </div>
      </section>

      {/* ====================================================================
          3. "Create QR Codes for Any Purpose" Section
          ==================================================================== */}
      <section className="purpose-section">
        <div className="purpose-header">
          <div className="purpose-pill">
            <Sparkles size={13} style={{ color: 'var(--accent-blue)' }} />
            <span>Everything You Need</span>
          </div>

          <h2 className="purpose-title">
            Create QR Codes for <span className="title-gradient-span">Any Purpose</span>
          </h2>

          <p className="purpose-subtitle">
            Choose from multiple content types and customize every detail to match your style.
          </p>
        </div>

        {/* 7 Interactive Content Type Cards */}
        <div className="purpose-cards-row">
          {contentTypes.map((item) => {
            const Icon = item.icon;
            const isSelected = activeTypePreview === item.id;
            return (
              <div
                key={item.id}
                className={`purpose-type-card ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  setActiveTypePreview(item.id);
                  onSelectTypeAndOpen(item.id);
                }}
                role="button"
                tabIndex={0}
              >
                <div className="purpose-icon-pill">
                  <Icon size={20} />
                </div>
                <h4 className="purpose-card-name">{item.title}</h4>
                <p className="purpose-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
