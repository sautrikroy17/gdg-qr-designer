import React from 'react';
import { QrCode, Sun, Moon } from 'lucide-react';

/**
 * Header Component
 * Displays brand logo, GDG SRM tag, and theme switch button (Light/Dark).
 */
export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Title and Logo */}
        <div className="brand-group">
          <div className="brand-logo-icon">
            <QrCode size={24} />
          </div>
          <div className="brand-text">
            <h1>
              QRCraft Studio
              <span className="brand-tag">GDG SRM</span>
            </h1>
            <p className="brand-subtitle">
              Client-Side QR Code Generator & Visual Designer
            </p>
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
