import React from 'react';
import {
  Wand2,
  LayoutGrid,
  Clock,
  Settings,
  Crown,
  ArrowLeft,
  ExternalLink,
  Sparkles
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
    { id: 'generate', label: 'Studio Generator', icon: Wand2, badge: null },
    { id: 'templates', label: 'Design Presets', icon: LayoutGrid, badge: '9' },
    { id: 'recent', label: 'Recent History', icon: Clock, badge: recentCount },
    { id: 'settings', label: 'Preferences', icon: Settings, badge: null },
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
              <span className="studio-subtag">PRO</span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-exit-btn"
            onClick={onBackToHome}
            title="Exit Studio back to Home"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </button>
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
                  <span>{item.label}</span>
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

      {/* 2. Middle Section: Visual Website Showcase Art Card */}
      <div className="sidebar-middle-creative">
        <div className="sidebar-showcase-art-card">
          <div className="sidebar-art-img-wrapper">
            <img
              src="/sidebar-qr-art.jpg"
              alt="QRCraft Holographic Generator"
              className="sidebar-art-img"
            />
            <div className="sidebar-art-badge">
              <Sparkles size={11} className="badge-sparkle-icon" />
              <span>4K Vector Studio</span>
            </div>
            <div className="sidebar-art-overlay" />
          </div>
          <div className="sidebar-art-caption">
            <div className="sidebar-art-title">QRCraft Studio</div>
            <div className="sidebar-art-desc">Real-time vector engine with sub-millisecond client-side precision.</div>
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
