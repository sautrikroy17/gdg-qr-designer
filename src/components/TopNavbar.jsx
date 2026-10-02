import React from 'react';
import { Sun, Moon, Download, QrCode } from 'lucide-react';

export default function TopNavbar({
  activeTab,
  onSelectTab,
  theme,
  onToggleTheme,
  onQuickDownload
}) {
  return (
    <header className="top-navbar">
      {/* Mobile Brand View */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <div className="logo-icon-box" style={{ width: '32px', height: '32px' }}>
          <QrCode size={18} />
        </div>
        <span className="logo-text" style={{ fontSize: '1.1rem' }}>QRCraft</span>
      </div>

      {/* Center Nav Links */}
      <nav className="navbar-links" aria-label="Top Navigation">
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
          Studio
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
          className={`nav-link-btn ${activeTab === 'recent' ? 'active' : ''}`}
          onClick={() => onSelectTab('recent')}
        >
          Recent Codes
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => onSelectTab('settings')}
        >
          Settings
        </button>
      </nav>

      {/* Right Actions */}
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

        {/* Quick Download Button */}
        <button
          type="button"
          className="btn-download-quick"
          onClick={onQuickDownload}
        >
          <Download size={15} />
          <span>Download</span>
        </button>
      </div>
    </header>
  );
}
