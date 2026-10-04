import React from 'react';
import { ExternalLink, Code2, Award, Cpu, ShieldCheck, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { playTap, playSuccessChime } from '../utils/soundEffects';

export default function AboutView({ onOpenStudio }) {

  const handleSpotlightMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };


  return (
    <div className="view-page-container">
      {/* Background Ambient Cosmic Glows */}
      <div className="landing-ambient-canvas" style={{ height: '600px' }}>
        <div className="light-streak-blue" />
        <div className="light-streak-purple" />
      </div>

      {/* Header */}
      <div className="view-header-centered" style={{ position: 'relative', zIndex: 5 }}>
        <div className="purpose-badge-pill">
          <Code2 size={13} style={{ color: '#ffffff' }} />
          <span>Technical Domain Recruitment 2026–27</span>
        </div>
        <h1 className="view-main-heading">
          About <span className="headline-gradient-word">QRCraft Studio</span>
        </h1>
        <p className="view-sub-heading">
          Engineered for the Google Developer Groups on Campus SRM Recruitment (ODD 2026–27) by Sautrik Roy.
        </p>
      </div>

      {/* Candidate Profile Showcase Hero Card */}
      <div className="about-profile-hero-card spotlight-card" onMouseMove={handleSpotlightMouseMove} style={{ position: 'relative', zIndex: 5, overflow: 'hidden' }}>
        <div className="profile-badge-avatar">
          <span className="avatar-monogram">SR</span>
        </div>
        <div className="profile-info-body" style={{ flex: 1 }}>
          <div className="profile-name-row">
            <h2>Sautrik Roy</h2>
            <span className="candidate-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={12} style={{ color: 'var(--accent-green)' }} />
              <span>GDG Technical Candidate</span>
            </span>
          </div>
          <p className="profile-bio">
            2nd Year B.Tech Computer Science & Engineering • SRM Institute of Science and Technology, Kattankulathur.
            Smart India Hackathon (SIH 2026) Top 100 Finalist, Microsoft Learn Student Ambassador (MLSA), and Open Source Contributor.
          </p>

          <div className="profile-links-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            <a
              href="https://sautrikroy.me"
              target="_blank"
              rel="noreferrer"
              className="profile-link-btn"
              onClick={() => playTap()}
              style={{ background: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Globe size={14} style={{ color: '#ffffff' }} />
              <span>Portfolio: sautrikroy.me</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://github.com/sautrikroy17/gdg-qr-designer"
              target="_blank"
              rel="noreferrer"
              className="profile-link-btn"
              onClick={() => playTap()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repo</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Developer Studio & Engineering Setup Visual Card */}
      <div
        className="about-studio-showcase-card spotlight-card"
        onMouseMove={handleSpotlightMouseMove}
        style={{ position: 'relative', zIndex: 5, marginBottom: '3rem', overflow: 'hidden' }}
      >
        <div className="studio-card-img-backdrop">
          <img
            src="/about-workspace.webp"
            alt="Developer Workstation Setup"
            className="studio-workstation-photo"
          />
          <div className="studio-card-overlay-gradient" />
        </div>

        <div className="studio-card-content">
          <div className="purpose-badge-pill" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
            <Cpu size={13} style={{ color: '#ffffff' }} />
            <span>Developer Studio & Workstation Architecture</span>
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
            Crafted with Engineering Discipline
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', maxWidth: '720px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Built for maximum client-side throughput and mathematical accuracy. QRCraft compiles error correction codes, vector paths, and contrast analytics entirely in browser memory with zero telemetry, zero analytics tracking, and zero cloud dependencies.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            <span className="stat-pill-chip">⚡ 0ms Server Roundtrips</span>
            <span className="stat-pill-chip">🔒 100% Private Browser Memory</span>
            <span className="stat-pill-chip">🎨 4K Vector SVG & Raster</span>
            <span className="stat-pill-chip">📐 Reed-Solomon Galois GF(2^8)</span>
            <span className="stat-pill-chip">👁️ W3C WCAG Contrast Guard</span>
          </div>
        </div>
      </div>

      {/* Technical Architecture Cards */}
      <div className="architecture-grid" style={{ marginBottom: '3.5rem', position: 'relative', zIndex: 5 }}>
        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove}>
          <div className="arch-icon-box">
            <Cpu size={20} />
          </div>
          <h4>Zero-Backend Client-Side Engine</h4>
          <p>
            Runs 100% within browser memory using React 19 and HTML5 Canvas. Payload generation, error-correction codewords, and vector paths execute with zero server roundtrips, guaranteeing sub-millisecond updates and total data privacy.
          </p>
        </div>

        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove}>
          <div className="arch-icon-box">
            <ShieldCheck size={20} />
          </div>
          <h4>W3C WCAG Contrast Auditor</h4>
          <p>
            Implements the W3C Relative Luminance equation <code>L = 0.2126R + 0.7152G + 0.0722B</code> after sRGB gamma-expansion. Audits the contrast ratio in real-time, warning users if custom palettes risk optical scanner failures.
          </p>
        </div>

        <div className="arch-card spotlight-card" onMouseMove={handleSpotlightMouseMove}>
          <div className="arch-icon-box">
            <Award size={20} />
          </div>
          <h4>Reed-Solomon Redundancy</h4>
          <p>
            Full support for Level L (7%), M (15%), Q (25%), and H (30%) polynomial error correction. Attaching a center logo automatically activates Level H, mathematically restoring up to 30% of data obscured by the brand graphic.
          </p>
        </div>
      </div>

      {/* Bottom Direct CTA */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 5 }}>
        <button
          type="button"
          className="btn-create-qr-hero"
          onClick={() => {
            playSuccessChime();
            onOpenStudio();
          }}
          style={{ margin: '0 auto' }}
        >
          <span>Launch Generator Studio</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
