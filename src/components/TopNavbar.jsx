import React from 'react';
import { Sun, Moon, ArrowRight, Search, Volume2, VolumeX } from 'lucide-react';

export default function TopNavbar({
  activeTab,
  onSelectTab,
  theme,
  onToggleTheme,
  onOpenSignIn,
  onGetStarted,
  onOpenCommandPalette,
  scrollProgress = 0,
  soundEnabled = true,
  onToggleSound
}) {
  return (
    <header className="top-navbar">
      {/* Scroll Progress Bar along bottom edge */}
      <div
        className="navbar-scroll-progress"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
      />

      {/* Brand Logo on Left (Exact matching 4-square grid squircle) */}
      <div
        className="navbar-brand-box"
        onClick={() => onSelectTab('home')}
        role="button"
        tabIndex={0}
      >
        <div className="brand-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
            <rect x="13.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
            <rect x="2.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
            <rect x="13.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
          </svg>
        </div>
        <span className="brand-logo-text">QRCraft</span>
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
          className={`nav-link-btn ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => onSelectTab('features')}
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
          className={`nav-link-btn ${activeTab === 'pricing' ? 'active' : ''}`}
          onClick={() => onSelectTab('pricing')}
        >
          Pricing
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => onSelectTab('about')}
        >
          About
        </button>
      </nav>

      {/* Right Actions: Command Palette Button, Theme Toggle, Sign In, Get Started */}
      <div className="nav-right-actions">
        {/* Quick Command Palette Button */}
        {onOpenCommandPalette && (
          <button
            type="button"
            className="btn-command-palette-pill"
            onClick={onOpenCommandPalette}
            title="Open Command Palette (⌘K / Ctrl+K)"
          >
            <Search size={13} />
            <span className="command-text-label">Quick Actions</span>
            <kbd className="command-kbd-badge">⌘K</kbd>
          </button>
        )}

        {/* Dual Sun/Moon Pill */}
        <button
          type="button"
          className="theme-toggle-pill"
          onClick={onToggleTheme}
          aria-label={`Current theme is ${theme}. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <span className={`theme-pill-icon ${theme === 'light' ? 'active' : ''}`}>
            <Sun size={14} />
          </span>
          <span className={`theme-pill-icon ${theme === 'dark' ? 'active' : ''}`}>
            <Moon size={14} />
          </span>
        </button>

        {/* Audio Haptic Feedback Toggle */}
        {onToggleSound && (
          <button
            type="button"
            className={`btn-sound-toggle-nav ${soundEnabled ? 'sound-active' : ''}`}
            onClick={onToggleSound}
            title={soundEnabled ? 'Sound Effects Enabled (Click to mute)' : 'Sound Effects Muted (Click to enable)'}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
          >
            {soundEnabled ? <Volume2 size={14} className="text-blue" /> : <VolumeX size={14} />}
          </button>
        )}

        {/* Sign In Button */}
        <button
          type="button"
          className="btn-signin-ghost"
          onClick={onOpenSignIn}
        >
          Sign In
        </button>

        {/* Get Started -> Button */}
        <button
          type="button"
          className="btn-get-started"
          onClick={onGetStarted}
        >
          <span>Get Started</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </header>
  );
}
