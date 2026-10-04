import React from 'react';
import { ArrowLeft, RotateCcw, Sun, Moon, Search, Volume2, VolumeX } from 'lucide-react';

export default function StudioHeader({
  currentType,
  theme,
  onToggleTheme,
  onBackToHome,
  onResetFactory,
  onOpenSignIn,
  onOpenSettings,
  onOpenCommandPalette,
  soundEnabled,
  onToggleSound
}) {
  const typeLabels = {
    url: 'Website URL',
    text: 'Plain Text',
    email: 'Email Draft',
    phone: 'Direct Phone',
    wifi: 'Wi-Fi Network',
    location: 'Geo Location',
    vcard: 'Contact Card'
  };

  return (
    <header className="studio-top-header">
      {/* Left: Back to Home Button & Breadcrumb */}
      <div className="studio-header-left">
        <button
          type="button"
          className="btn-back-home"
          onClick={onBackToHome}
          title="Return to Public Landing Page"
        >
          <ArrowLeft size={15} />
          <span>Back to Home</span>
        </button>

        <div className="studio-breadcrumb-divider" />

        <div className="studio-title-badge">
          <span className="studio-brand-dot" />
          <span className="studio-badge-title">Studio</span>
          <span className="studio-breadcrumb-slash">/</span>
          <span className="studio-type-pill">{typeLabels[currentType] || 'Custom QR'}</span>
        </div>
      </div>

      {/* Right: Actions, Command Palette, Theme Toggle, Reset, Profile */}
      <div className="studio-header-right">
        {/* Quick Command Palette Button */}
        {onOpenCommandPalette && (
          <button
            type="button"
            className="studio-btn-subtle command-pill-btn"
            onClick={onOpenCommandPalette}
            title="Command Center (⌘K)"
          >
            <Search size={13} />
            <span className="btn-text-desktop">Commands</span>
            <kbd className="command-kbd-badge-subtle">⌘K</kbd>
          </button>
        )}

        {/* Reset Defaults Button */}
        <button
          type="button"
          className="studio-btn-subtle"
          onClick={onResetFactory}
          title="Reset QR styling to clean defaults"
        >
          <RotateCcw size={13} />
          <span className="btn-text-desktop">Reset Defaults</span>
        </button>

        {/* Dual Sun/Moon Theme Toggle Pill */}
        <button
          type="button"
          className="theme-toggle-pill"
          onClick={onToggleTheme}
          aria-label={`Current theme is ${theme}. Click to switch theme`}
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
            className={`studio-btn-subtle sound-toggle-btn ${soundEnabled ? 'sound-active' : ''}`}
            onClick={onToggleSound}
            title={soundEnabled ? 'Sound FX Enabled (Click to mute)' : 'Sound FX Muted (Click to enable)'}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
          >
            {soundEnabled ? <Volume2 size={13} className="text-blue" /> : <VolumeX size={13} />}
          </button>
        )}

        {/* Candidate Session Pill */}
        <button
          type="button"
          className="studio-candidate-pill"
          onClick={onOpenSignIn}
          title="Sautrik Roy | GDG Candidate Session"
        >
          <div className="candidate-avatar-mini" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              src="/sautrik-avatar.jpg"
              alt="Sautrik Roy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerText = 'SR';
              }}
            />
          </div>
          <span className="candidate-name-mini">Sautrik Roy</span>
        </button>
      </div>
    </header>
  );
}
