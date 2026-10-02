import React from 'react';
import { QrCode, Wand2, LayoutGrid, Clock, Settings, Crown } from 'lucide-react';

/**
 * Sidebar Component
 * Left navigation drawer matching the reference layout.
 */
export default function Sidebar({ activeTab, onSelectTab }) {
  const menuItems = [
    { id: 'generate', label: 'Generate', icon: Wand2 },
    { id: 'templates', label: 'Templates', icon: LayoutGrid },
    { id: 'recent', label: 'Recent Codes', icon: Clock },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="app-sidebar">
      <div>
        {/* Brand Logo */}
        <div className="sidebar-logo" onClick={() => onSelectTab('home')}>
          <div className="logo-icon-box">
            <QrCode size={22} />
          </div>
          <span className="logo-text">QRCraft</span>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-menu" aria-label="Main Sidebar Navigation">
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
