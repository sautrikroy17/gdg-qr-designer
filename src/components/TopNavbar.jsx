import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight, Search, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'templates', label: 'Templates' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="floating-navbar-wrapper">
      {/* Scroll Progress Bar along top edge of viewport */}
      <div
        className="navbar-scroll-progress"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
      />

      {/* Floating Capsule Island Container (Inspired by sautrikroy.me) */}
      <div className={`floating-navbar-capsule ${isScrolled ? 'is-scrolled' : ''}`}>
        {/* Left: Brand Logo */}
        <div
          className="navbar-brand-box"
          onClick={() => onSelectTab('home')}
          role="button"
          tabIndex={0}
          title="QRCraft Home"
        >
          <BrandLogo size={28} showText={true} />
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTab(item.id)}
              >
                <span>{item.label}</span>
                {isActive && <span className="active-pill-dot" />}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="nav-right-actions">
          {/* Quick Command Palette Button */}
          {onOpenCommandPalette && (
            <button
              type="button"
              className="btn-command-palette-pill"
              onClick={onOpenCommandPalette}
              title="Open Command Palette (⌘K / Ctrl+K)"
            >
              <Search size={13} className="command-search-icon" />
              <span className="command-text-label">Quick Actions</span>
              <kbd className="command-kbd-badge">⌘K</kbd>
            </button>
          )}

          {/* Dual Sun/Moon Theme Toggle Pill */}
          <button
            type="button"
            className="theme-toggle-pill"
            onClick={onToggleTheme}
            aria-label={`Current theme is ${theme}. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className={`theme-pill-icon ${theme === 'light' ? 'active' : ''}`}>
              <Sun size={13} />
            </span>
            <span className={`theme-pill-icon ${theme === 'dark' ? 'active' : ''}`}>
              <Moon size={13} />
            </span>
          </button>

          {/* Audio Haptic Feedback Toggle */}
          {onToggleSound && (
            <button
              type="button"
              className={`btn-sound-toggle-nav ${soundEnabled ? 'sound-active' : ''}`}
              onClick={onToggleSound}
              title={soundEnabled ? 'Sound FX Enabled (Click to mute)' : 'Sound FX Muted (Click to enable)'}
              aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            >
              {soundEnabled ? <Volume2 size={13} className="text-blue" /> : <VolumeX size={13} />}
            </button>
          )}

          {/* Launch Studio CTA Button */}
          <button
            type="button"
            className="btn-get-started"
            onClick={onGetStarted}
            title="Open Studio Workspace"
          >
            <span>Launch Studio</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectTab(item.id);
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              className="btn-mobile-studio"
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStarted();
              }}
            >
              <span>Launch Studio</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
