import React from 'react';
import {
  Wand2,
  LayoutGrid,
  Clock,
  Settings,
  Crown,
  Cpu,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Palette
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { playTap } from '../utils/soundEffects';

/**
 * Creative, High-Tech Studio Sidebar
 * Inspired by Linear & Figma with live engine status, quick color mood presets,
 * and candidate profile integration.
 */
export default function Sidebar({
  activeTab,
  onSelectTab,
  onBackToHome,
  recentCount = 5,
  activeColor = '#0f172a',
  onQuickColorSelect
}) {
  const menuItems = [
    { id: 'generate', label: 'Studio Generator', icon: Wand2, badge: null },
    { id: 'templates', label: 'Design Presets', icon: LayoutGrid, badge: '9' },
    { id: 'recent', label: 'Recent History', icon: Clock, badge: recentCount },
    { id: 'settings', label: 'Preferences', icon: Settings, badge: null },
  ];

  const quickPaletteDots = [
    { name: 'Electric Blue', color: '#2563eb' },
    { name: 'Emerald Mint', color: '#059669' },
    { name: 'Cyber Violet', color: '#7c3aed' },
    { name: 'Minimal Slate', color: '#0f172a' },
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

      {/* 2. Creative Middle Section: Engine Diagnostic Card & Quick Mood Bar */}
      <div className="sidebar-middle-creative">
        {/* Quick Color Mood Bar */}
        {onQuickColorSelect && (
          <div className="sidebar-quick-colors-box">
            <div className="sidebar-sub-label">
              <Palette size={11} />
              <span>QUICK ACCENT</span>
            </div>
            <div className="sidebar-palette-pills">
              {quickPaletteDots.map((dot) => (
                <button
                  key={dot.name}
                  type="button"
                  className={`sidebar-color-dot ${activeColor === dot.color ? 'active' : ''}`}
                  style={{ backgroundColor: dot.color }}
                  title={`Apply ${dot.name} accent`}
                  onClick={() => {
                    playTap();
                    onQuickColorSelect(dot.color);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Live Engine Diagnostic HUD Card */}
        <div className="sidebar-engine-hud-card">
          <div className="engine-hud-header">
            <div className="engine-status-pulse">
              <span className="engine-pulse-dot" />
              <span className="engine-status-text">LOCAL WASM ENGINE</span>
            </div>
            <span className="engine-speed-badge">0ms</span>
          </div>

          <div className="engine-spec-rows">
            <div className="engine-spec-item">
              <span className="spec-label">Security</span>
              <span className="spec-val">100% In-Memory</span>
            </div>
            <div className="engine-spec-item">
              <span className="spec-label">Scannability</span>
              <span className="spec-val text-cyan">W3C AAA Grade</span>
            </div>
          </div>

          {/* Mini Scannability Progress Bar */}
          <div className="engine-progress-track">
            <div className="engine-progress-bar" style={{ width: '98%' }} />
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
