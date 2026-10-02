import React from 'react';
import { ArrowLeft, RotateCcw, Sun, Moon, Sparkles, UserCheck } from 'lucide-react';

export default function StudioHeader({
  currentType,
  theme,
  onToggleTheme,
  onBackToHome,
  onResetFactory,
  onOpenSignIn,
  onOpenSettings
}) {
  const typeLabels = {
    url: 'Website URL',
    text: 'Plain Text',
    email: 'Email Message',
    phone: 'Phone Call',
    wifi: 'Wi-Fi Network',
    location: 'Geo Location',
    vcard: 'vCard Contact'
  };

  return (
    <header className="studio-top-header">
      {/* Left: Back to Home Button & Breadcrumb */}
      <div className="studio-header-left">
        <button
          type="button"
          className="btn-back-home"
          onClick={onBackToHome}
          title="Return to Landing Page"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>

        <div className="studio-breadcrumb-divider" />

        <div className="studio-title-badge">
          <span className="studio-brand-dot" />
          <span className="studio-badge-title">QRCraft Studio</span>
          <span className="studio-type-pill">{typeLabels[currentType] || 'Custom QR'}</span>
        </div>
      </div>

      {/* Right: Actions, Theme Toggle, Reset, Profile */}
      <div className="studio-header-right">
        {/* Reset Button */}
        <button
          type="button"
          className="studio-btn-subtle"
          onClick={onResetFactory}
          title="Reset QR styling to default"
        >
          <RotateCcw size={14} />
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
            <Sun size={14} />
          </span>
          <span className={`theme-pill-icon ${theme === 'dark' ? 'active' : ''}`}>
            <Moon size={14} />
          </span>
        </button>

        {/* Candidate Session Pill */}
        <button
          type="button"
          className="studio-candidate-pill"
          onClick={onOpenSignIn}
          title="Sautrik Roy | GDG Candidate Session"
        >
          <div className="candidate-avatar-mini">SR</div>
          <span className="candidate-name-mini">Sautrik Roy</span>
        </button>
      </div>
    </header>
  );
}
