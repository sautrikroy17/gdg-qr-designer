import React from 'react';
import { Wand2, LayoutGrid, Clock, Settings, Crown } from 'lucide-react';
import BrandLogo from './BrandLogo';

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
          <BrandLogo size={28} />
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
        </nav>
      </div>

      {/* User Profile Badge (Bottom) */}
      <div className="user-profile-badge">
        <div className="user-avatar" style={{ overflow: 'hidden', padding: 0 }}>
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
