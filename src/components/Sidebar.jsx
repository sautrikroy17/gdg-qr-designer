import React from 'react';
import { Wand2, LayoutGrid, Clock, Settings, Crown, ArrowLeft } from 'lucide-react';

/**
 * Sidebar Component
 * Dedicated Studio Left Navigation with clear Back to Home and active states.
 */
export default function Sidebar({ activeTab, onSelectTab, onBackToHome }) {
  const menuItems = [
    { id: 'generate', label: 'Generator', icon: Wand2 },
    { id: 'templates', label: 'Templates', icon: LayoutGrid },
    { id: 'recent', label: 'Recent Codes', icon: Clock },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="app-sidebar">
      <div>
        {/* Brand Logo & Back to Home */}
        <div className="sidebar-logo" onClick={onBackToHome} title="Return to Landing Page">
          <div className="brand-logo-icon" style={{ width: '32px', height: '32px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
              <rect x="13.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
              <rect x="2.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
              <rect x="13.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
            </svg>
          </div>
          <div className="sidebar-logo-text-group">
            <span className="logo-text">QRCraft</span>
            <span className="studio-subtag">STUDIO</span>
          </div>
        </div>

        {/* Back to Home Quick Link */}
        <button
          type="button"
          className="sidebar-back-home-btn"
          onClick={onBackToHome}
          title="Return to Public Landing Page"
        >
          <ArrowLeft size={14} />
          <span>Exit to Landing Page</span>
        </button>

        {/* Studio Navigation Menu */}
        <nav className="sidebar-menu" aria-label="Studio Workspace Navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTab(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Badge (Bottom) */}
      <div className="user-profile-badge">
        <div className="user-avatar">SR</div>
        <div className="user-details">
          <div className="user-name">Sautrik Roy</div>
          <div className="user-plan">
            <Crown size={12} style={{ color: 'var(--accent-amber)' }} />
            <span>GDG SRM Candidate</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
