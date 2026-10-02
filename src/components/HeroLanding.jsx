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
  const [activeType, setActiveType] = useState('url');

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
    <div className="landing-wrapper-full">
      {/* Background Ambient Lighting Sweeps */}
      <div className="landing-ambient-canvas">
        <div className="light-streak-blue" />
        <div className="light-streak-purple" />
        <div className="light-streak-magenta" />
      </div>

      {/* ====================================================================
          1. Hero Section
          ==================================================================== */}
      <section className="hero-landing-section">
        <div className="hero-content-left">
          {/* Badge Pill */}
          <div className="hero-pill-badge">
            <span className="sparkle-amber">✦</span>
            <span>Fast • Free • No Login Required</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-bold-title">
            Beautiful <br />
            <span className="hero-title-gradient">QR Codes</span> <br />
            for Everything.
          </h1>

          {/* Subtitle */}
          <p className="hero-lead-subtitle">
            Create stunning, customizable QR codes for URLs, text, email, phone, Wi-Fi and more.
            Fast, free, and works entirely in your browser.
          </p>

          {/* Primary CTA Buttons */}
          <div className="hero-cta-buttons-row">
            <button
              type="button"
              className="btn-create-qr-hero"
              onClick={onOpenStudio}
            >
              <span>Create Your QR Code</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="btn-watch-demo-hero"
              onClick={onOpenDemo}
            >
              <div className="demo-play-circle">
                <Play size={11} fill="currentColor" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* 4 Feature Badges Underneath CTAs */}
          <div className="hero-quad-badges-row">
            <div className="quad-badge-item">
              <Zap size={16} className="quad-icon blue" />
              <div>
                <h5>Instant Generation</h5>
                <p>Real-time preview</p>
              </div>
            </div>

            <div className="quad-badge-item">
              <Lock size={16} className="quad-icon blue" />
              <div>
                <h5>100% Client-Side</h5>
                <p>No login required</p>
              </div>
            </div>

            <div className="quad-badge-item">
              <span className="quad-infinity">∞</span >
              <div>
                <h5>Works Offline</h5>
                <p>Even without internet</p>
              </div>
            </div>

            <div className="quad-badge-item">
              <Smartphone size={16} className="quad-icon blue" />
              <div>
                <h5>All Devices</h5>
                <p>Desktop, tablet, mobile</p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================================
            Hero 3D Visual Artwork (Right Side)
            ==================================================================== */}
        <div className="hero-visual-right">
          <div className="scene-stage-3d">
            {/* Ambient Radial Spotlight */}
            <div className="scene-spotlight" />

            {/* "Customize every detail" Pointer */}
            <div className="tag-customize-detail">
              <span>Customize every detail</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="arrow-curly">
                <path d="M4 14c8 6 14 3 17-3m0 0l-4-1m4 1l-1 4" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Floating Color Picker Widget */}
            <div className="floating-color-palette" onClick={onOpenStudio} title="Click to customize colors">
              <div className="palette-dots">
                <span className="palette-dot dot-blue" />
                <span className="palette-dot dot-purple" />
                <span className="palette-dot dot-orange" />
              </div>
              <div className="palette-slider-rail">
                <div className="palette-slider-knob" />
              </div>
            </div>

            {/* 3D Pedestal Base Platform */}
            <div className="pedestal-3d-base">
              <div className="pedestal-glow-rim" />
              
              {/* Glossy 3D QR Code Card */}
              <div className="gloss-qr-3d-card" onClick={onOpenStudio}>
                <div className="card-qr-surface">
                  <svg width="230" height="230" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top-Left Corner Square */}
                    <rect x="2" y="2" width="7" height="7" rx="2.2" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
                    <rect x="4" y="4" width="3" height="3" rx="1" fill="#2563eb" />
                    
                    {/* Top-Right Corner Square */}
                    <rect x="15" y="2" width="7" height="7" rx="2.2" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
                    <rect x="17" y="4" width="3" height="3" rx="1" fill="#2563eb" />
                    
                    {/* Bottom-Left Corner Square */}
                    <rect x="2" y="15" width="7" height="7" rx="2.2" stroke="#2563eb" strokeWidth="2" fill="#eff6ff" />
                    <rect x="4" y="17" width="3" height="3" rx="1" fill="#2563eb" />

                    {/* Gradient Modules Matrix */}
                    <circle cx="12" cy="4" r="1.15" fill="#3b82f6" />
                    <circle cx="12" cy="7.2" r="1.15" fill="#6366f1" />
                    <circle cx="4" cy="12" r="1.15" fill="#3b82f6" />
                    <circle cx="7.2" cy="12" r="1.15" fill="#6366f1" />
                    <circle cx="16" cy="12" r="1.15" fill="#8b5cf6" />
                    <circle cx="19.2" cy="12" r="1.15" fill="#3b82f6" />
                    <circle cx="12" cy="16.5" r="1.15" fill="#6366f1" />
                    <circle cx="12" cy="19.8" r="1.15" fill="#3b82f6" />
                    <circle cx="16" cy="16.5" r="1.15" fill="#c084fc" />
                    <circle cx="19.2" cy="16.5" r="1.15" fill="#ec4899" />
                    <circle cx="16" cy="19.8" r="1.15" fill="#3b82f6" />
                    <circle cx="19.2" cy="19.8" r="1.15" fill="#8b5cf6" />

                    {/* Center Brand Watermark Logo (4 squares grid) */}
                    <rect x="9.4" y="9.4" width="5.2" height="5.2" rx="1.6" fill="#2563eb" />
                    <rect x="10.3" y="10.3" width="1.4" height="1.4" rx="0.4" fill="white" />
                    <rect x="12.3" y="10.3" width="1.4" height="1.4" rx="0.4" fill="white" />
                    <rect x="10.3" y="12.3" width="1.4" height="1.4" rx="0.4" fill="white" />
                    <rect x="12.3" y="12.3" width="1.4" height="1.4" rx="0.4" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Floating Vertical Tool Shelf on Right */}
              <div className="floating-tools-dock" onClick={onOpenStudio}>
                <div className="dock-tool-btn" title="Style">
                  <Sliders size={15} />
                  <span>Style</span>
                </div>
                <div className="dock-tool-btn" title="Logo">
                  <ImageIcon size={15} />
                  <span>Logo</span>
                </div>
                <div className="dock-tool-btn" title="Pattern">
                  <Shapes size={15} />
                  <span>Pattern</span>
                </div>
                <div className="dock-tool-btn" title="Frame">
                  <Square size={15} />
                  <span>Frame</span>
                </div>
                <div className="dock-tool-btn active-blue" title="Colors">
                  <Palette size={15} />
                  <span>Colors</span>
                </div>
              </div>
            </div>

            {/* Floating Metric Badge: "8.2M+ QR Codes Generated" */}
            <div className="badge-metric-stat">
              <div className="metric-pulse-icon">
                <TrendingUp size={16} />
              </div>
              <div className="metric-text-box">
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
      <section className="trusted-brands-strip">
        <div className="trusted-container">
          <div className="trusted-caption">
            TRUSTED BY CREATORS, <br />DEVELOPERS AND BUSINESSES
          </div>
          <div className="brand-logos-cluster">
            {/* Google */}
            <span className="brand-svg-logo">
              <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>Google</span>
            </span>
            {/* Microsoft */}
            <span className="brand-svg-logo">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '1.15rem' }}>
                <span style={{ display: 'grid', gridTemplateColumns: '7px 7px', gap: '2px' }}>
                  <span style={{ width: '7px', height: '7px', background: '#f25022' }} />
                  <span style={{ width: '7px', height: '7px', background: '#7fba00' }} />
                  <span style={{ width: '7px', height: '7px', background: '#00a4ef' }} />
                  <span style={{ width: '7px', height: '7px', background: '#ffb900' }} />
                </span>
                Microsoft
              </span>
            </span>
            {/* GitHub */}
            <span className="brand-svg-logo">
              <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>GitHub</span>
            </span>
            {/* Notion */}
            <span className="brand-svg-logo">
              <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>N Notion</span>
            </span>
            {/* Figma */}
            <span className="brand-svg-logo">
              <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>Figma</span>
            </span>
            {/* Vercel */}
            <span className="brand-svg-logo">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 800, fontSize: '1.15rem' }}>
                ▲ vercel
              </span>
            </span>
            {/* Spotify */}
            <span className="brand-svg-logo">
              <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>Spotify</span>
            </span>
            {/* Airbnb */}
            <span className="brand-svg-logo">
              <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>airbnb</span>
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. "Create QR Codes for Any Purpose" Section
          ==================================================================== */}
      <section className="purpose-section-container">
        <div className="purpose-section-header">
          <div className="purpose-badge-pill">
            <Sparkles size={13} style={{ color: 'var(--accent-blue-vibrant)' }} />
            <span>Everything You Need</span>
          </div>

          <h2 className="purpose-headline">
            Create QR Codes for <span className="headline-gradient-word">Any Purpose</span>
          </h2>

          <p className="purpose-subtext">
            Choose from multiple content types and customize every detail to match your style.
          </p>
        </div>

        {/* 7 Content Type Cards */}
        <div className="purpose-types-grid">
          {contentTypes.map((item) => {
            const Icon = item.icon;
            const isSelected = activeType === item.id;
            return (
              <div
                key={item.id}
                className={`purpose-type-tile ${isSelected ? 'active-glow' : ''}`}
                onClick={() => {
                  setActiveType(item.id);
                  onSelectTypeAndOpen(item.id);
                }}
                role="button"
                tabIndex={0}
              >
                <div className="tile-icon-box">
                  <Icon size={20} />
                </div>
                <h4 className="tile-title">{item.title}</h4>
                <p className="tile-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
