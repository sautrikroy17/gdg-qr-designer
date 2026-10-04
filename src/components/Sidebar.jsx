import React from 'react';
import {
  Wand2,
  LayoutGrid,
  Clock,
  Settings,
  Crown,
  ExternalLink
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { playTap } from '../utils/soundEffects';

/**
 * Creative, High-Tech Studio Sidebar
 * Featuring navigation, visual 3D QR engine showcase card, and candidate profile.
 */
export default function Sidebar({
  activeTab,
  onSelectTab,
  onBackToHome,
  recentCount = 5
}) {
  const menuItems = [
    { id: 'generate', label: 'Studio Generator', shortLabel: 'Generator', icon: Wand2, badge: null },
    { id: 'templates', label: 'Design Presets', shortLabel: 'Presets', icon: LayoutGrid, badge: '9' },
    { id: 'recent', label: 'Recent History', shortLabel: 'History', icon: Clock, badge: recentCount },
    { id: 'settings', label: 'Preferences', shortLabel: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <aside className="app-sidebar">
      {/* 1. Top Section: Brand + Navigation */}
      <div className="sidebar-top-section">
        {/* Brand Logo & Studio Header with Exit Button */}
        <div className="sidebar-header-row">
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
            </div>
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
                onClick={() => {
                  playTap();
                  onSelectTab(item.id);
                }}
              >
                <div className="sidebar-item-content">
                  <Icon size={16} className="sidebar-item-icon" />
                  <span className="sidebar-label-desktop">{item.label}</span>
                  <span className="sidebar-label-mobile">{item.shortLabel}</span>
                </div>
                {item.badge && (
                  <span className={`sidebar-badge-count ${isActive ? 'active-badge' : ''}`}>
                    {item.badge}
                  </span>
                )}
                {isActive && <div className="sidebar-active-indicator" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* 2. Middle Section: Visual Website Showcase Seamlessly Blended */}
      <div className="sidebar-middle-creative">
        <div className="sidebar-showcase-art-card">
          <div className="sidebar-art-img-wrapper">
            <img
              src="/sidebar-qr-art.jpg"
              alt="QRCraft Generator Engine"
              className="sidebar-art-img"
            />
            <div className="sidebar-art-overlay" />
          </div>
          <div className="sidebar-art-caption">
            <div className="sidebar-art-title">
              <span className="sidebar-art-pulse-dot" />
              <span>Instant QR Engine</span>
            </div>
            <div className="sidebar-art-desc">100% private, offline-ready, and print-ready.</div>
          </div>
        </div>
      </div>

      {/* 3. User Profile Card (Bottom) */}
      <div className="user-profile-badge">
        <div className="user-avatar-wrap">
          <div className="user-avatar">
            <span>SR</span>
          </div>
          <span className="user-online-pip" />
        </div>

        <div className="user-details">
          <div className="user-name-row">
            <span className="user-name">Sautrik Roy</span>
          </div>
          <div className="user-plan">
            <Crown size={11} style={{ color: '#fbbf24' }} />
            <span>GDG SRM Candidate</span>
          </div>
        </div>

        <a
          href="https://sautrikroy.me"
          target="_blank"
          rel="noreferrer"
          className="user-portfolio-link"
          title="Open Portfolio (sautrikroy.me)"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={12} />
        </a>
      </div>
    </aside>
  );
}
