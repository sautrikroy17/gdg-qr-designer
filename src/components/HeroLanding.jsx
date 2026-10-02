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
import BrandLogos from './BrandLogos';

export default function HeroLanding({
  onOpenStudio,
  onOpenStudioWithTab,
  onSelectTypeAndOpen,
  onOpenDemo,
  onOpenTemplates
}) {
  const [activeType, setActiveType] = useState('url');
  const [heroPaletteIndex, setHeroPaletteIndex] = useState(0); // 0: Blue/Cyan, 1: Purple/Magenta, 2: Orange/Coral

  const palettePresets = [
    {
      name: 'Electric Blue',
      dot1: '#38bdf8',
      dot2: '#2563eb',
      dot3: '#6366f1',
      glow: 'rgba(56, 189, 248, 0.45)',
      sliderPos: '20%'
    },
    {
      name: 'Cyber Magenta',
      dot1: '#c084fc',
      dot2: '#ec4899',
      dot3: '#f43f5e',
      glow: 'rgba(236, 72, 153, 0.45)',
      sliderPos: '55%'
    },
    {
      name: 'Sunset Orange',
      dot1: '#fb923c',
      dot2: '#f97316',
      dot3: '#ea580c',
      glow: 'rgba(249, 115, 22, 0.45)',
      sliderPos: '90%'
    }
  ];

  const currentHeroPalette = palettePresets[heroPaletteIndex];

  const contentTypes = [
    { id: 'url', title: 'Website URL', desc: 'Link to any website', icon: Globe, iconColor: '#38bdf8', circleBg: 'rgba(56, 189, 248, 0.15)' },
    { id: 'text', title: 'Plain Text', desc: 'Share text instantly', icon: FileText, iconColor: '#a78bfa', circleBg: 'rgba(167, 139, 250, 0.15)' },
    { id: 'email', title: 'Email', desc: 'Open email client', icon: Mail, iconColor: '#f472b6', circleBg: 'rgba(244, 114, 182, 0.15)' },
    { id: 'phone', title: 'Phone', desc: 'Call with one scan', icon: Phone, iconColor: '#34d399', circleBg: 'rgba(52, 211, 153, 0.15)' },
    { id: 'wifi', title: 'Wi-Fi', desc: 'Share Wi-Fi details', icon: Wifi, iconColor: '#38bdf8', circleBg: 'rgba(56, 189, 248, 0.15)' },
    { id: 'location', title: 'Location', desc: 'Share any location', icon: MapPin, iconColor: '#fb7185', circleBg: 'rgba(251, 113, 133, 0.15)' },
    { id: 'vcard', title: 'More', desc: 'And many more', icon: MoreHorizontal, iconColor: '#c084fc', circleBg: 'rgba(192, 132, 252, 0.15)' },
  ];

  return (
    <div className="landing-wrapper-full">
      {/* Background Ambient Cosmic Glows */}
      <div className="landing-ambient-canvas">
        <div className="light-streak-blue" />
        <div className="light-streak-purple" />
        <div className="light-streak-magenta" />
      </div>

      {/* ====================================================================
          1. Hero Section (Pixel-Perfect Match to User Reference Screenshot)
          ==================================================================== */}
      <section className="hero-landing-section">
        {/* Left Column: Headlines, CTAs, 4-Feature Row */}
        <div className="hero-content-left">
          {/* Pill Badge */}
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
                <Play size={10} fill="currentColor" />
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
              <span className="quad-infinity">∞</span>
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

        {/* Right Column: 3D Visual Centerpiece */}
        <div className="hero-visual-right">
          <div className="scene-stage-3d">
            {/* Ambient Spotlight */}
            <div className="scene-spotlight" />

            {/* "Customize every detail" Pointer */}
            <div className="tag-customize-detail">
              <span>Customize every detail</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-curly">
                <path
                  d="M3 14 C9 20, 16 16, 20 4 M20 4 L14 4 M20 4 L20 10"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Floating Color Palette Widget (Interactive Live Color Switcher) */}
            <div
              className="floating-color-palette"
              title="Click color swatches to customize QR colors"
            >
              <div className="palette-dots">
                <button
                  type="button"
                  className={`palette-dot dot-blue ${heroPaletteIndex === 0 ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHeroPaletteIndex(0);
                  }}
                  title="Electric Blue"
                />
                <button
                  type="button"
                  className={`palette-dot dot-purple ${heroPaletteIndex === 1 ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHeroPaletteIndex(1);
                  }}
                  title="Cyber Magenta"
                />
                <button
                  type="button"
                  className={`palette-dot dot-orange ${heroPaletteIndex === 2 ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHeroPaletteIndex(2);
                  }}
                  title="Sunset Orange"
                />
              </div>
              <div
                className="palette-slider-rail"
                onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('colors') : onOpenStudio()}
              >
                <div
                  className="palette-slider-knob"
                  style={{ left: currentHeroPalette.sliderPos }}
                />
              </div>
            </div>

            {/* 3D Elevated Pedestal Base Platform */}
            <div className="pedestal-3d-base">
              {/* Bottom Glowing Rim and Ambient Shadow */}
              <div className="pedestal-glow-rim" />
              
              {/* Metallic 3D Pedestal Stage */}
              <div className="pedestal-tier-bottom" />
              <div className="pedestal-tier-top" />

              {/* Glossy 3D QR Code Card (Isometric Perspective) */}
              <div
                className="gloss-qr-3d-card"
                onClick={onOpenStudio}
                title="Click to open Generator Studio"
              >
                {/* Specular Glass Sheen Highlight */}
                <div className="glass-specular-glare" />

                {/* Rich Authentic QR Code Matrix */}
                <div className="card-qr-surface">
                  <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="heroQrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={currentHeroPalette.dot2} />
                        <stop offset="50%" stopColor={currentHeroPalette.dot1} />
                        <stop offset="100%" stopColor={currentHeroPalette.dot3} />
                      </linearGradient>
                      <linearGradient id="finderBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>

                    {/* Top-Left Finder Pattern */}
                    <rect x="6" y="6" width="26" height="26" rx="7.5" stroke="url(#finderBorderGradient)" strokeWidth="4.2" fill="#f0f7ff" />
                    <rect x="13" y="13" width="12" height="12" rx="4" fill="#2563eb" />

                    {/* Top-Right Finder Pattern */}
                    <rect x="68" y="6" width="26" height="26" rx="7.5" stroke="url(#finderBorderGradient)" strokeWidth="4.2" fill="#f0f7ff" />
                    <rect x="75" y="13" width="12" height="12" rx="4" fill="#2563eb" />

                    {/* Bottom-Left Finder Pattern */}
                    <rect x="6" y="68" width="26" height="26" rx="7.5" stroke="url(#finderBorderGradient)" strokeWidth="4.2" fill="#f0f7ff" />
                    <rect x="13" y="75" width="12" height="12" rx="4" fill="#2563eb" />

                    {/* Timing & Alignment Dot Matrix (High Fidelity Dense Grid) */}
                    <g fill="url(#heroQrGradient)">
                      {/* Top Horizontal Timing Line */}
                      <circle cx="38" cy="11" r="2.2" />
                      <circle cx="45" cy="11" r="2.2" />
                      <circle cx="52" cy="11" r="2.2" />
                      <circle cx="59" cy="11" r="2.2" />

                      <circle cx="38" cy="18" r="2.2" />
                      <circle cx="52" cy="18" r="2.2" />

                      <circle cx="38" cy="25" r="2.2" />
                      <circle cx="45" cy="25" r="2.2" />
                      <circle cx="59" cy="25" r="2.2" />

                      {/* Middle Data Block Above Logo */}
                      <circle cx="11" cy="38" r="2.2" />
                      <circle cx="18" cy="38" r="2.2" />
                      <circle cx="25" cy="38" r="2.2" />
                      <circle cx="32" cy="38" r="2.2" />
                      <circle cx="39" cy="38" r="2.2" />
                      <circle cx="61" cy="38" r="2.2" />
                      <circle cx="68" cy="38" r="2.2" />
                      <circle cx="75" cy="38" r="2.2" />
                      <circle cx="82" cy="38" r="2.2" />
                      <circle cx="89" cy="38" r="2.2" />

                      {/* Left and Right Data Columns */}
                      <circle cx="11" cy="45" r="2.2" />
                      <circle cx="25" cy="45" r="2.2" />
                      <circle cx="32" cy="45" r="2.2" />
                      <circle cx="68" cy="45" r="2.2" />
                      <circle cx="82" cy="45" r="2.2" />

                      <circle cx="11" cy="52" r="2.2" />
                      <circle cx="18" cy="52" r="2.2" />
                      <circle cx="32" cy="52" r="2.2" />
                      <circle cx="68" cy="52" r="2.2" />
                      <circle cx="75" cy="52" r="2.2" />
                      <circle cx="89" cy="52" r="2.2" />

                      <circle cx="11" cy="59" r="2.2" />
                      <circle cx="25" cy="59" r="2.2" />
                      <circle cx="39" cy="59" r="2.2" />
                      <circle cx="61" cy="59" r="2.2" />
                      <circle cx="75" cy="59" r="2.2" />
                      <circle cx="89" cy="59" r="2.2" />

                      {/* Bottom Right Area Alignment & Codewords */}
                      <circle cx="38" cy="68" r="2.2" />
                      <circle cx="45" cy="68" r="2.2" />
                      <circle cx="52" cy="68" r="2.2" />
                      <circle cx="68" cy="68" r="2.2" />
                      <circle cx="75" cy="68" r="2.2" />
                      <circle cx="82" cy="68" r="2.2" />
                      <circle cx="89" cy="68" r="2.2" />

                      <circle cx="38" cy="75" r="2.2" />
                      <circle cx="52" cy="75" r="2.2" />
                      <circle cx="59" cy="75" r="2.2" />
                      <circle cx="68" cy="75" r="2.2" />
                      <circle cx="82" cy="75" r="2.2" />

                      <circle cx="38" cy="82" r="2.2" />
                      <circle cx="45" cy="82" r="2.2" />
                      <circle cx="61" cy="82" r="2.2" />
                      <circle cx="75" cy="82" r="2.2" />
                      <circle cx="82" cy="82" r="2.2" />
                      <circle cx="89" cy="82" r="2.2" />

                      <circle cx="38" cy="89" r="2.2" />
                      <circle cx="52" cy="89" r="2.2" />
                      <circle cx="68" cy="89" r="2.2" />
                      <circle cx="75" cy="89" r="2.2" />
                      <circle cx="89" cy="89" r="2.2" />
                    </g>

                    {/* Center Brand Watermark Logo Badge (QRCraft 4-squares grid) */}
                    <rect x="39" y="39" width="22" height="22" rx="6" fill="#2563eb" filter="drop-shadow(0 2px 6px rgba(37,99,235,0.4))" />
                    <rect x="43" y="43" width="5.5" height="5.5" rx="1.5" fill="white" />
                    <rect x="51.5" y="43" width="5.5" height="5.5" rx="1.5" fill="white" />
                    <rect x="43" y="51.5" width="5.5" height="5.5" rx="1.5" fill="white" />
                    <rect x="51.5" y="51.5" width="5.5" height="5.5" rx="1.5" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Floating Vertical Tool Shelf on Right (Exact Match) */}
              <div className="floating-tools-dock">
                <button
                  type="button"
                  className="dock-tool-btn"
                  title="Customize Style & Padding"
                  onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('style') : onOpenStudio()}
                >
                  <Sliders size={16} />
                  <span>Style</span>
                </button>
                <button
                  type="button"
                  className="dock-tool-btn"
                  title="Upload Center Logo"
                  onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('logo') : onOpenStudio()}
                >
                  <ImageIcon size={16} />
                  <span>Logo</span>
                </button>
                <button
                  type="button"
                  className="dock-tool-btn"
                  title="Change Module Pattern"
                  onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('shapes') : onOpenStudio()}
                >
                  <Shapes size={16} />
                  <span>Pattern</span>
                </button>
                <button
                  type="button"
                  className="dock-tool-btn"
                  title="Customize Frame & Margin"
                  onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('style') : onOpenStudio()}
                >
                  <Square size={16} />
                  <span>Frame</span>
                </button>
                <button
                  type="button"
                  className="dock-tool-btn active-blue"
                  title="Palette & Gradients"
                  onClick={() => onOpenStudioWithTab ? onOpenStudioWithTab('colors') : onOpenStudio()}
                >
                  <Palette size={16} />
                  <span>Colors</span>
                </button>
              </div>
            </div>

            {/* Floating Metric Badge: "8.2M+ QR Codes Generated" */}
            <div
              className="badge-metric-stat"
              onClick={onOpenStudio}
              title="Over 8.2 million QR codes generated worldwide"
            >
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
          2. Trusted by Brand Logos Bar (Crisp Monochrome Vector SVGs)
          ==================================================================== */}
      <section className="trusted-brands-strip">
        <div className="trusted-container">
          <div className="trusted-caption">
            TRUSTED BY CREATORS, <br />DEVELOPERS AND BUSINESSES
          </div>
          <BrandLogos />
        </div>
      </section>

      {/* ====================================================================
          3. "Create QR Codes for Any Purpose" Section (7 Purpose Cards)
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
                <div
                  className="tile-icon-box"
                  style={{
                    backgroundColor: item.circleBg,
                    color: item.iconColor
                  }}
                >
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
