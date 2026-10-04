import React, { useState } from 'react';
import { User, ExternalLink, Code2, Award, Cpu, ShieldCheck, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Globe } from 'lucide-react';
import { playTap, playSuccessChime } from '../utils/soundEffects';

export default function AboutView({ onOpenStudio }) {
  const [openVivaIndex, setOpenVivaIndex] = useState(0);

  const handleSpotlightMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const vivaQuestions = [
    {
      q: 'Why HTML5 Canvas instead of an external QR generation API server?',
      a: 'Using an external API (like Google Charts or QR Server) introduces network latency (100–400ms), requires an active internet connection, sends user Wi-Fi passwords and private URLs to third-party logs, and creates an external point of failure. HTML5 Canvas runs 100% client-side in browser memory with 0ms backend latency, zero cloud hosting costs, and complete privacy.'
    },
    {
      q: 'How does the W3C Relative Luminance & Contrast Guard work mathematically?',
      a: 'Color perception is non-linear. First, 8-bit sRGB channels (0-255) are normalized and gamma-expanded: if c <= 0.04045, c_lin = c / 12.92; else c_lin = ((c + 0.055) / 1.055)^2.4. Luminance is calculated using human photopic eye sensitivity weights: L = 0.2126R + 0.7152G + 0.0722B. The contrast ratio is (L1 + 0.05) / (L2 + 0.05). If below 4.5:1, QRCraft warns the user to avoid unreadable prints.'
    },
    {
      q: 'Why does uploading a center logo automatically bump Reed-Solomon to Level H (30%)?',
      a: 'Reed-Solomon error correction uses polynomial long division over Galois Fields GF(2^8). Level L corrects ~7%, M ~15%, Q ~25%, and H ~30% damaged codewords. A center logo physically obscures 15–22% of the central modules. Level H mathematically reconstructs all missing data from the remaining parity bytes so scanners decode the QR code without errors.'
    },
    {
      q: 'How are Wi-Fi passwords with semicolons and colons safely formatted?',
      a: 'The ZXing WIFI URI schema requires strict backslash escaping. If an SSID or password contains colons (:), semicolons (;), commas (,), or backslashes (\\), QRCraft applies automated regex escaping (e.g., "pass;word" becomes "pass\\;word"). Without this, barcode parsers terminate the field prematurely, causing mobile device connection failures.'
    }
  ];

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
          <Code2 size={13} style={{ color: 'var(--accent-blue-vibrant)' }} />
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
              style={{ background: 'rgba(56, 189, 248, 0.12)', borderColor: 'rgba(56, 189, 248, 0.4)' }}
            >
              <Globe size={14} style={{ color: 'var(--accent-blue-vibrant)' }} />
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
            <Cpu size={13} style={{ color: 'var(--accent-blue-vibrant)' }} />
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

      {/* Interactive Viva Defense Accordion */}
      <div className="faq-section-wrapper" style={{ position: 'relative', zIndex: 5, marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="purpose-badge-pill">
            <HelpCircle size={13} style={{ color: 'var(--accent-blue-vibrant)' }} />
            <span>Recruitment Defense & Viva Ready</span>
          </div>
          <h3 className="faq-heading" style={{ fontSize: '1.75rem' }}>
            Technical Viva & Architectural Interview Defense
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
            Click any question to inspect the underlying computer science concepts and architectural choices behind this project.
          </p>
        </div>

        <div className="faq-accordion-list">
          {vivaQuestions.map((item, idx) => {
            const isOpen = openVivaIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item-card ${isOpen ? 'expanded' : ''}`}
                onClick={() => {
                  playTap();
                  setOpenVivaIndex(isOpen ? -1 : idx);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="faq-q-row">
                  <span style={{ fontWeight: 700, fontSize: '0.96rem' }}>{item.q}</span>
                  <span className="faq-toggle-sign">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <p className="faq-a-text" style={{ marginTop: '0.85rem', lineHeight: '1.65' }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
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
