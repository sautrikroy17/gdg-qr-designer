import React from 'react';
import { Wand2, LayoutGrid, Clock, Settings, Crown, ArrowLeft } from 'lucide-react';

/**
 * Sidebar Component
 * Sleek, high-precision Studio Left Navigation inspired by Figma / Linear.
 */
export default function Sidebar({ activeTab, onSelectTab, onBackToHome }) {
  const menuItems = [
    { id: 'generate', label: 'Studio Generator', icon: Wand2 },
    { id: 'templates', label: 'Design Presets', icon: LayoutGrid },
    { id: 'recent', label: 'Recent History', icon: Clock },
    { id: 'settings', label: 'Preferences', icon: Settings },
  ];

  return (
    <aside className="app-sidebar">
      <div className="sidebar-top-section">
        {/* Brand Logo & Studio Header */}
        <div 
          className="sidebar-logo" 
          onClick={onBackToHome} 
          title="Return to Public Landing Page"
          role="button"
          tabIndex={0}
        >
          <div className="brand-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
              <rect x="13.5" y="2.5" width="8" height="8" rx="2.5" fill="white" />
              <rect x="2.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
              <rect x="13.5" y="13.5" width="8" height="8" rx="2.5" fill="white" />
            </svg>
          </div>
          <div className="sidebar-logo-text-group">
            <span className="logo-text">QRCraft</span>
            <span className="studio-subtag">PRO</span>
          </div>
        </div>

        {/* Studio Navigation Menu */}
        <nav className="sidebar-menu" aria-label="Studio Workspace Navigation">
          <div className="sidebar-section-label">WORKSPACE</div>
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
                <Icon size={17} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="sidebar-section-label" style={{ marginTop: '1.25rem' }}>NAVIGATION</div>
          <button
            type="button"
            className="sidebar-item sidebar-exit-link"
            onClick={onBackToHome}
            title="Return to Landing Page"
          >
            <ArrowLeft size={16} />
            <span>Landing Page</span>
          </button>
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
