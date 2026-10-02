import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer({ onSelectTab, onOpenStudio }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="landing-footer">
      <div className="landing-footer-container">
        {/* Top Row: Brand & Links */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="navbar-brand-box" onClick={scrollToTop} style={{ marginBottom: '1rem' }}>
              <div className="brand-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
                  <rect x="13.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
                  <rect x="2.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
                  <rect x="13.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
                </svg>
              </div>
              <span className="brand-logo-text">QRCraft</span>
            </div>
            <p className="footer-tagline">
              Ultra-modern, 100% client-side QR code generator and designer engineered for creators, developers, and businesses.
            </p>
            <div className="footer-badges-list">
              <span className="footer-mini-badge">Zero Telemetry</span>
              <span className="footer-mini-badge">HTML5 Canvas</span>
              <span className="footer-mini-badge">WCAG 2.1 AAA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-links-list">
              <li><button type="button" onClick={() => onSelectTab('home')}>Home</button></li>
              <li><button type="button" onClick={() => onSelectTab('features')}>Features</button></li>
              <li><button type="button" onClick={() => onSelectTab('templates')}>Templates</button></li>
              <li><button type="button" onClick={() => onSelectTab('pricing')}>Pricing</button></li>
              <li><button type="button" onClick={() => onSelectTab('about')}>About Candidate</button></li>
            </ul>
          </div>

          {/* Product Types */}
          <div className="footer-links-col">
            <h5 className="footer-heading">QR Capabilities</h5>
            <ul className="footer-links-list">
              <li><button type="button" onClick={onOpenStudio}>Website Links</button></li>
              <li><button type="button" onClick={onOpenStudio}>ZXing Wi-Fi Access</button></li>
              <li><button type="button" onClick={onOpenStudio}>Electronic vCards</button></li>
              <li><button type="button" onClick={onOpenStudio}>Vector SVG Export</button></li>
              <li><button type="button" onClick={onOpenStudio}>Contrast Guard</button></li>
            </ul>
          </div>

          {/* Recruitment & Developer Info */}
          <div className="footer-links-col">
            <h5 className="footer-heading">GDG Recruitment</h5>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
              Built for the <strong>Google Developer Groups on Campus SRM</strong> Recruitment (ODD 2026–27) by <strong>Sautrik Roy</strong>.
            </p>
            <a
              href="https://github.com/sautrikroy17/gdg-qr-designer"
              target="_blank"
              rel="noreferrer"
              className="footer-github-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom-strip">
          <p>© 2026 QRCraft Studio • Open Source MIT License • Pure React 19</p>
          <button type="button" className="btn-scroll-top" onClick={scrollToTop}>
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
