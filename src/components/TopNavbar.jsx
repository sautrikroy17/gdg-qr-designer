import React from 'react';
import { Sun, Moon, ArrowRight, QrCode, Sparkles } from 'lucide-react';

export default function TopNavbar({
  activeTab,
  onSelectTab,
  theme,
  onToggleTheme,
  onOpenPricing,
  onOpenAbout,
  onOpenSignIn,
  onGetStarted
}) {
  return (
    <header className="top-navbar">
      {/* Brand Logo */}
      <div
        className="sidebar-logo"
        style={{ padding: 0, cursor: 'pointer' }}
        onClick={() => onSelectTab('home')}
      >
        <div className="logo-icon-box" style={{ width: '36px', height: '36px' }}>
          <QrCode size={20} />
        </div>
        <span className="logo-text" style={{ fontSize: '1.25rem' }}>QRCraft</span>
      </div>

      {/* Center Nav Links */}
      <nav className="navbar-links" aria-label="Main Navigation">
        <button
          type="button"
          className={`nav-link-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => onSelectTab('home')}
        >
          Home
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeTab === 'generate' ? 'active' : ''}`}
          onClick={() => onSelectTab('generate')}
        >
          Features
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => onSelectTab('templates')}
        >
          Templates
        </button>
        <button
          type="button"
          className="nav-link-btn"
          onClick={onOpenPricing}
        >
          Pricing
        </button>
        <button
          type="button"
          className="nav-link-btn"
          onClick={onOpenAbout}
        >
          About
        </button>
      </nav>

      {/* Right Actions: Theme, Sign In, Get Started */}
      <div className="nav-right-actions">
        {/* Dark/Light Mode Switch */}
        <button
          type="button"
          className="icon-btn-circle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Sign In Button */}
        <button
          type="button"
          className="btn-hero-ghost"
          style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
          onClick={onOpenSignIn}
        >
          Sign In
        </button>

        {/* Get Started -> Button */}
        <button
          type="button"
          className="btn-create-qr"
          style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem', boxShadow: '0 4px 14px var(--accent-blue-glow)' }}
          onClick={onGetStarted}
        >
          <span>Get Started</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </header>
  );
}
