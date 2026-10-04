import React, { useState } from 'react';
import {
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
  Palette,
  Shapes,
  Image as ImageIcon,
  Square,
  Sliders,
  ScanLine,
  Sparkles
} from 'lucide-react';


export default function HeroLanding({
  onOpenStudio,
  onOpenStudioWithTab,
  onSelectTypeAndOpen,
  onOpenDemo,
  onOpenTemplates
}) {
  const [activeType, setActiveType] = useState('url');
  const [heroPaletteIndex, setHeroPaletteIndex] = useState(0); // 0: Blue, 1: Magenta, 2: Orange, 3: Emerald
  const [heroShape, setHeroShape] = useState('dots'); // 'dots' | 'square' | 'rounded'
  const [heroFrame, setHeroFrame] = useState('rounded'); // 'rounded' | 'sharp' | 'circle'
  const [showLogo, setShowLogo] = useState(true);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const palettePresets = [
    {
      name: 'Electric Blue',
      dot1: '#3b82f6',
      dot2: '#2563eb',
      dot3: '#1d4ed8',
      glow: 'rgba(37, 99, 235, 0.45)',
      sliderPos: '15%'
    },
    {
      name: 'Minimal Slate',
      dot1: '#475569',
      dot2: '#0f172a',
      dot3: '#1e293b',
      glow: 'rgba(255, 255, 255, 0.15)',
      sliderPos: '45%'
    },
    {
      name: 'Emerald Mint',
      dot1: '#10b981',
      dot2: '#059669',
      dot3: '#047857',
      glow: 'rgba(16, 185, 129, 0.35)',
      sliderPos: '75%'
    },
    {
      name: 'Dark Obsidian',
      dot1: '#27272a',
      dot2: '#18181b',
      dot3: '#09090b',
      glow: 'rgba(255, 255, 255, 0.12)',
      sliderPos: '95%'
    }
  ];

  const currentHeroPalette = palettePresets[heroPaletteIndex];

  const contentTypes = [
    { id: 'url', title: 'Website URL', desc: 'Link to any website', icon: Globe, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'text', title: 'Plain Text', desc: 'Share text instantly', icon: FileText, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'email', title: 'Email', desc: 'Open email client', icon: Mail, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'phone', title: 'Phone', desc: 'Call with one scan', icon: Phone, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'wifi', title: 'Wi-Fi', desc: 'Share Wi-Fi details', icon: Wifi, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'location', title: 'Location', desc: 'Share any location', icon: MapPin, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'vcard', title: 'vCard Contact', desc: 'Share complete contact card', icon: MoreHorizontal, iconColor: '#ffffff', circleBg: 'rgba(255, 255, 255, 0.06)' },
  ];

  // Mouse move 3D tilt calculation
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({ x: x * 14, y: -y * 14 });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  // Mouse spotlight for purpose cards
  const handleTileMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="landing-wrapper-full">
      {/* Background Ambient Cosmic Glows */}
      <div className="landing-ambient-canvas">
        <div className="light-streak-blue" />
        <div className="light-streak-purple" />
        <div className="light-streak-magenta" />
      </div>

      {/* Atmospheric Developer Workspace Backdrop (Inspired by sautrikroy.me aesthetic) */}
      <div className="hero-workspace-atmosphere" aria-hidden="true">
        <img
          src="/hero-workspace.webp"
          alt=""
          className="hero-workspace-bg-img"
        />
        <div className="hero-workspace-vignette" />
      </div>

      {/* ====================================================================
          1. Hero Section (Pixel-Perfect Match to User Reference Screenshot)
          ==================================================================== */}
      <section className="hero-landing-section">
        {/* Left Column: Headlines, CTAs, 4-Feature Row */}
        <div className="hero-content-left">
          {/* High-Tech Product Announcement Badge (No personal selfies) */}
          <div className="hero-announcement-pill" onClick={onOpenStudio} role="button" tabIndex={0}>
            <span className="announcement-pulse-dot" />
            <span className="announcement-tag">GDG SRM Recruitment 2026–27</span>
            <span className="announcement-separator">•</span>
            <span className="announcement-text">Interactive QR Designer Studio</span>
            <Sparkles size={12} className="announcement-sparkle" />
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

          {/* 4 Bento Glass Tiles (Matched to sautrikroy.me Bento Architecture) */}
          <div className="hero-bento-grid">
            <div className="bento-tile-card" onClick={onOpenStudio} role="button" tabIndex={0}>
              <div className="bento-tile-head">
                <div className="bento-icon-box">
                  <Zap size={15} />
                </div>
                <span className="bento-index-num">01</span>
              </div>
              <h3 className="bento-tile-title">Instant Speed</h3>
              <p className="bento-tile-desc">0ms local generation with zero server latency.</p>
              <div className="bento-bottom-glow" />
            </div>

            <div className="bento-tile-card" onClick={onOpenStudio} role="button" tabIndex={0}>
              <div className="bento-tile-head">
                <div className="bento-icon-box">
                  <Lock size={15} />
                </div>
                <span className="bento-index-num">02</span>
              </div>
              <h3 className="bento-tile-title">Pure Client-Side</h3>
              <p className="bento-tile-desc">100% in-browser memory. Zero cloud telemetry.</p>
              <div className="bento-bottom-glow" />
            </div>

            <div className="bento-tile-card" onClick={onOpenStudio} role="button" tabIndex={0}>
              <div className="bento-tile-head">
                <div className="bento-icon-box">
                  <Smartphone size={15} />
                </div>
                <span className="bento-index-num">03</span>
              </div>
              <h3 className="bento-tile-title">Vector SVGs</h3>
              <p className="bento-tile-desc">Infinite scaling, print-ready crisp resolution.</p>
              <div className="bento-bottom-glow" />
            </div>

            <div className="bento-tile-card" onClick={onOpenStudio} role="button" tabIndex={0}>
              <div className="bento-tile-head">
                <div className="bento-icon-box">
                  <Sparkles size={15} />
                </div>
                <span className="bento-index-num">04</span>
              </div>
              <h3 className="bento-tile-title">W3C Audited</h3>
              <p className="bento-tile-desc">Real-time contrast ratio & camera scannability.</p>
              <div className="bento-bottom-glow" />
            </div>
          </div>
        </div>

        {/* Right Column: 3D Floating Interactive QR Showcase Platform */}
        <div className="hero-content-right">
          <div className="pedestal-showcase-wrapper">
            {/* Interactive Color Slider Above Pedestal */}
            <div className="palette-customizer-hud">
              <div className="hud-label-row">
                <div className="hud-title-badge">
                  <span className="hud-live-indicator" />
                  <span className="hud-title">INTERACTIVE PREVIEW</span>
                </div>
                <span className="hud-active-palette">{currentHeroPalette.name}</span>
              </div>
              <div className="palette-controls-row">
                <div className="palette-dots-track" role="tablist" aria-label="Palette Presets">
                  {palettePresets.map((preset, idx) => (
                    <button
                      key={preset.name}
                      type="button"
                      className={`palette-dot-pill ${idx === heroPaletteIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setHeroPaletteIndex(idx);
                      }}
                      title={preset.name}
                    >
                      <span className="dot-color-core" style={{ background: preset.dot2 }} />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="palette-cycle-pill-btn"
                  onClick={() => setHeroPaletteIndex((prev) => (prev + 1) % palettePresets.length)}
                  title="Click to cycle next designer palette"
                >
                  <span>Cycle</span>
                  <span className="palette-counter">{heroPaletteIndex + 1}/{palettePresets.length}</span>
                </button>
              </div>
            </div>

            {/* 3D Elevated Pedestal Base Platform with Interactive Tilt */}
            <div
              className="pedestal-3d-base"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt.y}deg) rotateY(${cardTilt.x}deg)`,
                transition: cardTilt.x === 0 && cardTilt.y === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out'
              }}
            >
              {/* Bottom Glowing Rim and Ambient Shadow */}
              <div className="pedestal-glow-rim" style={{ boxShadow: `0 0 50px 10px ${currentHeroPalette.glow}` }} />
              
              {/* Metallic 3D Pedestal Stage */}
              <div className="pedestal-tier-bottom" />
              <div className="pedestal-tier-top" />

              {/* Glossy 3D QR Code Card */}
              <div
                className="gloss-qr-3d-card"
                onClick={onOpenStudio}
                title="Double click or click to open Studio Workspace"
              >
                {/* Specular Glass Sheen Highlight */}
                <div className="glass-specular-glare" />

                {/* Laser Scan Sweep Beam */}
                <div className="hero-laser-scanner" />

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
                        <stop offset="0%" stopColor={currentHeroPalette.dot2} />
                        <stop offset="100%" stopColor={currentHeroPalette.dot1} />
                      </linearGradient>
                    </defs>

                    {/* Corner Finders with dynamic frame shape */}
                    {/* Top-Left */}
                    <rect
                      x="6"
                      y="6"
                      width="26"
                      height="26"
                      rx={heroFrame === 'sharp' ? 1.5 : heroFrame === 'circle' ? 13 : 7.5}
                      stroke="url(#finderBorderGradient)"
                      strokeWidth="4.2"
                      fill="#ffffff"
                    />
                    <rect
                      x="13"
                      y="13"
                      width="12"
                      height="12"
                      rx={heroFrame === 'sharp' ? 1 : heroFrame === 'circle' ? 6 : 4}
                      fill={currentHeroPalette.dot2}
                    />

                    {/* Top-Right */}
                    <rect
                      x="68"
                      y="6"
                      width="26"
                      height="26"
                      rx={heroFrame === 'sharp' ? 1.5 : heroFrame === 'circle' ? 13 : 7.5}
                      stroke="url(#finderBorderGradient)"
                      strokeWidth="4.2"
                      fill="#ffffff"
                    />
                    <rect
                      x="75"
                      y="13"
                      width="12"
                      height="12"
                      rx={heroFrame === 'sharp' ? 1 : heroFrame === 'circle' ? 6 : 4}
                      fill={currentHeroPalette.dot2}
                    />

                    {/* Bottom-Left */}
                    <rect
                      x="6"
                      y="68"
                      width="26"
                      height="26"
                      rx={heroFrame === 'sharp' ? 1.5 : heroFrame === 'circle' ? 13 : 7.5}
                      stroke="url(#finderBorderGradient)"
                      strokeWidth="4.2"
                      fill="#ffffff"
                    />
                    <rect
                      x="13"
                      y="75"
                      width="12"
                      height="12"
                      rx={heroFrame === 'sharp' ? 1 : heroFrame === 'circle' ? 6 : 4}
                      fill={currentHeroPalette.dot2}
                    />

                    {/* Timing & Alignment Dot Matrix */}
                    <g fill="url(#heroQrGradient)">
                      {heroShape === 'square' ? (
                        <>
                          <rect x="36" y="9" width="4.2" height="4.2" rx="0.5" />
                          <rect x="43" y="9" width="4.2" height="4.2" rx="0.5" />
                          <rect x="50" y="9" width="4.2" height="4.2" rx="0.5" />
                          <rect x="57" y="9" width="4.2" height="4.2" rx="0.5" />
                          <rect x="36" y="16" width="4.2" height="4.2" rx="0.5" />
                          <rect x="50" y="16" width="4.2" height="4.2" rx="0.5" />
                          <rect x="36" y="23" width="4.2" height="4.2" rx="0.5" />
                          <rect x="43" y="23" width="4.2" height="4.2" rx="0.5" />
                          <rect x="57" y="23" width="4.2" height="4.2" rx="0.5" />
                          <rect x="36" y="30" width="4.2" height="4.2" rx="0.5" />
                          <rect x="50" y="30" width="4.2" height="4.2" rx="0.5" />
                          <rect x="57" y="30" width="4.2" height="4.2" rx="0.5" />
                          <rect x="9" y="36" width="4.2" height="4.2" rx="0.5" />
                          <rect x="23" y="36" width="4.2" height="4.2" rx="0.5" />
                          <rect x="30" y="36" width="4.2" height="4.2" rx="0.5" />
                          <rect x="66" y="36" width="4.2" height="4.2" rx="0.5" />
                          <rect x="80" y="36" width="4.2" height="4.2" rx="0.5" />
                          <rect x="87" y="36" width="4.2" height="4.2" rx="0.5" />
                          <rect x="9" y="43" width="4.2" height="4.2" rx="0.5" />
                          <rect x="16" y="43" width="4.2" height="4.2" rx="0.5" />
                          <rect x="66" y="43" width="4.2" height="4.2" rx="0.5" />
                          <rect x="80" y="43" width="4.2" height="4.2" rx="0.5" />
                          <rect x="9" y="50" width="4.2" height="4.2" rx="0.5" />
                          <rect x="16" y="50" width="4.2" height="4.2" rx="0.5" />
                          <rect x="30" y="50" width="4.2" height="4.2" rx="0.5" />
                          <rect x="66" y="50" width="4.2" height="4.2" rx="0.5" />
                          <rect x="73" y="50" width="4.2" height="4.2" rx="0.5" />
                          <rect x="87" y="50" width="4.2" height="4.2" rx="0.5" />
                          <rect x="36" y="66" width="4.2" height="4.2" rx="0.5" />
                          <rect x="43" y="66" width="4.2" height="4.2" rx="0.5" />
                          <rect x="66" y="66" width="4.2" height="4.2" rx="0.5" />
                          <rect x="73" y="66" width="4.2" height="4.2" rx="0.5" />
                          <rect x="87" y="66" width="4.2" height="4.2" rx="0.5" />
                          <rect x="36" y="73" width="4.2" height="4.2" rx="0.5" />
                          <rect x="50" y="73" width="4.2" height="4.2" rx="0.5" />
                          <rect x="66" y="73" width="4.2" height="4.2" rx="0.5" />
                          <rect x="80" y="73" width="4.2" height="4.2" rx="0.5" />
                          <rect x="36" y="80" width="4.2" height="4.2" rx="0.5" />
                          <rect x="43" y="80" width="4.2" height="4.2" rx="0.5" />
                          <rect x="73" y="80" width="4.2" height="4.2" rx="0.5" />
                          <rect x="80" y="80" width="4.2" height="4.2" rx="0.5" />
                          <rect x="87" y="80" width="4.2" height="4.2" rx="0.5" />
                        </>
                      ) : (
                        <>
                          <circle cx="38" cy="11" r="2.2" />
                          <circle cx="45" cy="11" r="2.2" />
                          <circle cx="52" cy="11" r="2.2" />
                          <circle cx="59" cy="11" r="2.2" />
                          <circle cx="38" cy="18" r="2.2" />
                          <circle cx="52" cy="18" r="2.2" />
                          <circle cx="38" cy="25" r="2.2" />
                          <circle cx="45" cy="25" r="2.2" />
                          <circle cx="59" cy="25" r="2.2" />
                          <circle cx="38" cy="32" r="2.2" />
                          <circle cx="52" cy="32" r="2.2" />
                          <circle cx="59" cy="32" r="2.2" />
                          <circle cx="11" cy="38" r="2.2" />
                          <circle cx="25" cy="38" r="2.2" />
                          <circle cx="32" cy="38" r="2.2" />
                          <circle cx="68" cy="38" r="2.2" />
                          <circle cx="82" cy="38" r="2.2" />
                          <circle cx="89" cy="38" r="2.2" />
                          <circle cx="11" cy="45" r="2.2" />
                          <circle cx="18" cy="45" r="2.2" />
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
                        </>
                      )}
                    </g>

                    {/* Center Brand Watermark Logo Badge */}
                    {showLogo && (
                      <g>
                        <rect x="39" y="39" width="22" height="22" rx="6" fill={currentHeroPalette.dot2} filter="drop-shadow(0 2px 8px rgba(0,0,0,0.4))" />
                        <rect x="43" y="43" width="5.5" height="5.5" rx="1.5" fill="white" />
                        <rect x="51.5" y="43" width="5.5" height="5.5" rx="1.5" fill="white" />
                        <rect x="43" y="51.5" width="5.5" height="5.5" rx="1.5" fill="white" />
                        <rect x="51.5" y="51.5" width="5.5" height="5.5" rx="1.5" fill="white" />
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              {/* Floating Vertical Tool Shelf on Right (Interactive!) */}
              <div className="floating-tools-dock" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="dock-tool-btn"
                  title="Click to toggle Center Logo"
                  onClick={() => setShowLogo(!showLogo)}
                >
                  <ImageIcon size={16} />
                  <span>Logo</span>
                </button>
                <button
                  type="button"
                  className={`dock-tool-btn ${heroShape === 'square' ? 'active-blue' : ''}`}
                  title="Click to toggle Dot/Square Pattern"
                  onClick={() => setHeroShape(heroShape === 'dots' ? 'square' : 'dots')}
                >
                  <Shapes size={16} />
                  <span>Pattern</span>
                </button>
                <button
                  type="button"
                  className={`dock-tool-btn ${heroFrame === 'circle' ? 'active-blue' : ''}`}
                  title="Click to cycle Frame Corner styles"
                  onClick={() => {
                    const frames = ['rounded', 'sharp', 'circle'];
                    const next = frames[(frames.indexOf(heroFrame) + 1) % frames.length];
                    setHeroFrame(next);
                  }}
                >
                  <Square size={16} />
                  <span>Frame</span>
                </button>
                <button
                  type="button"
                  className="dock-tool-btn active-blue"
                  title="Click to cycle Designer Palettes"
                  onClick={() => setHeroPaletteIndex((prev) => (prev + 1) % palettePresets.length)}
                >
                  <Palette size={16} />
                  <span>Colors</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. "Create QR Codes for Any Purpose" Section (7 Interactive Purpose Cards)
          ==================================================================== */}
      <section className="purpose-section-container" id="features">
        <div className="purpose-section-header">
          <h2 className="purpose-headline">
            Create QR Codes for <span className="headline-gradient-word">Any Purpose</span>
          </h2>

          <p className="purpose-subtext">
            Choose from multiple content types and customize every detail to match your style.
          </p>
        </div>

        {/* 7 Content Type Cards with Mouse Spotlight Effect */}
        <div className="purpose-types-grid">
          {contentTypes.map((item) => {
            const Icon = item.icon;
            const isSelected = activeType === item.id;
            return (
              <div
                key={item.id}
                className={`purpose-type-tile spotlight-card ${isSelected ? 'active-glow' : ''}`}
                onMouseMove={handleTileMouseMove}
                onClick={() => {
                  setActiveType(item.id);
                  onSelectTypeAndOpen(item.id);
                }}
                role="button"
                tabIndex={0}
                title={`Create ${item.title} QR Code`}
              >
                <div
                  className="tile-icon-box"
                  style={{
                    backgroundColor: item.circleBg,
                    color: item.iconColor
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="tile-title">{item.title}</h3>
                <p className="tile-desc">{item.desc}</p>
                <div className="tile-hover-arrow">
                  <span>Open Studio</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
