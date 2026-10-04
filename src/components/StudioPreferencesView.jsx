import React from 'react';
import {
  Sliders,
  Check,
  RotateCcw,
  Trash2,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  ShieldCheck,
  Database,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Laptop
} from 'lucide-react';
import { playTap, playSuccessChime } from '../utils/soundEffects';

export default function StudioPreferencesView({
  defaultFormat,
  onChangeDefaultFormat,
  autoSave,
  onToggleAutoSave,
  onClearAllHistory,
  onResetFactory,
  historyCount = 0,
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onBackToGenerator,
  onNotify
}) {
  return (
    <div className="studio-subview-wrapper">
      {/* Top Banner & Breadcrumb */}
      <div className="subview-header-bar">
        <div>
          <div className="subview-breadcrumb">
            <span>Studio</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Preferences</span>
          </div>
          <h2 className="subview-main-title">Studio Preferences & Configuration</h2>
          <p className="subview-sub-title">
            Configure export defaults, privacy policies, audio haptics, theme appearance, and session storage.
          </p>
        </div>

        <button
          type="button"
          className="btn-back-home"
          onClick={onBackToGenerator}
          title="Return to Studio Generator"
        >
          <ArrowLeft size={14} />
          <span>Return to Generator</span>
        </button>
      </div>

      {/* Grid of Preference Cards */}
      <div className="preferences-cards-grid">
        {/* Card 1: Export Defaults */}
        <div className="preference-card">
          <div className="preference-card-head">
            <div className="pref-icon-box blue">
              <Sliders size={18} />
            </div>
            <div>
              <h3 className="pref-card-title">Default Export Engine</h3>
              <p className="pref-card-desc">Choose primary file format for instant downloads</p>
            </div>
          </div>

          <div className="preference-card-body">
            <label className="section-micro-label">PRIMARY EXPORT FORMAT</label>
            <div className="settings-format-grid" style={{ marginBottom: '1rem' }}>
              <button
                type="button"
                className={`settings-format-btn ${defaultFormat === 'png' ? 'active' : ''}`}
                onClick={() => {
                  onChangeDefaultFormat('png');
                  playTap();
                  onNotify?.({
                    type: 'info',
                    title: 'Format Updated',
                    message: 'Default export set to High-Res PNG raster.'
                  });
                }}
              >
                <span className="format-btn-badge">PNG</span>
                <span className="format-btn-name">300 DPI High-Res Raster</span>
                {defaultFormat === 'png' && <Check size={14} className="format-active-check" />}
              </button>

              <button
                type="button"
                className={`settings-format-btn ${defaultFormat === 'svg' ? 'active' : ''}`}
                onClick={() => {
                  onChangeDefaultFormat('svg');
                  playTap();
                  onNotify?.({
                    type: 'info',
                    title: 'Format Updated',
                    message: 'Default export set to Infinite Vector SVG.'
                  });
                }}
              >
                <span className="format-btn-badge">SVG</span>
                <span className="format-btn-name">Infinite Scalable Vector</span>
                {defaultFormat === 'svg' && <Check size={14} className="format-active-check" />}
              </button>
            </div>

            {/* Auto Save Toggle */}
            <div className="settings-toggle-row">
              <div className="settings-toggle-info">
                <div className="settings-toggle-title">Auto-Save Generated Codes</div>
                <div className="settings-toggle-desc">Automatically archive customized QR codes to local vault on export</div>
              </div>
              <label className="settings-switch-label">
                <input
                  type="checkbox"
                  className="settings-switch-input"
                  checked={autoSave}
                  onChange={(e) => {
                    onToggleAutoSave(e.target.checked);
                    playTap();
                    onNotify?.({
                      type: 'info',
                      title: e.target.checked ? 'Auto-Save Enabled' : 'Auto-Save Disabled',
                      message: e.target.checked ? 'Downloads will be saved to Recent History.' : 'Session archiving disabled.'
                    });
                  }}
                />
                <span className="settings-switch-slider" />
              </label>
            </div>
          </div>
        </div>

        {/* Card 2: Appearance & Sensory Haptics */}
        <div className="preference-card">
          <div className="preference-card-head">
            <div className="pref-icon-box purple">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="pref-card-title">Appearance & Sensory Feedback</h3>
              <p className="pref-card-desc">Control studio visual theme and synthetic audio haptics</p>
            </div>
          </div>

          <div className="preference-card-body">
            <label className="section-micro-label">STUDIO THEME</label>
            <div className="settings-format-grid" style={{ marginBottom: '1.25rem' }}>
              <button
                type="button"
                className={`settings-format-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => {
                  if (theme !== 'dark') onToggleTheme();
                  playTap();
                }}
              >
                <Moon size={16} style={{ color: '#60a5fa' }} />
                <span className="format-btn-name">Dark Obsidian</span>
                {theme === 'dark' && <Check size={14} className="format-active-check" />}
              </button>

              <button
                type="button"
                className={`settings-format-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => {
                  if (theme !== 'light') onToggleTheme();
                  playTap();
                }}
              >
                <Sun size={16} style={{ color: '#f59e0b' }} />
                <span className="format-btn-name">Clean Daylight</span>
                {theme === 'light' && <Check size={14} className="format-active-check" />}
              </button>
            </div>

            {/* Sound Effects Toggle */}
            <div className="settings-toggle-row">
              <div className="settings-toggle-info">
                <div className="settings-toggle-title">Interactive Audio Haptics</div>
                <div className="settings-toggle-desc">Web Audio synthesized clicks, lasers, and export celebration chimes</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <button
                  type="button"
                  className="quick-chip-btn"
                  onClick={() => {
                    playSuccessChime();
                  }}
                  style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
                  title="Test chime sound"
                >
                  Test Sound
                </button>
                <label className="settings-switch-label">
                  <input
                    type="checkbox"
                    className="settings-switch-input"
                    checked={soundEnabled}
                    onChange={() => {
                      onToggleSound();
                    }}
                  />
                  <span className="settings-switch-slider" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Storage & Data Management */}
        <div className="preference-card">
          <div className="preference-card-head">
            <div className="pref-icon-box emerald">
              <Database size={18} />
            </div>
            <div>
              <h3 className="pref-card-title">Local Storage & Session Vault</h3>
              <p className="pref-card-desc">Audit cached history and execute full factory restores</p>
            </div>
          </div>

          <div className="preference-card-body">
            <div className="pref-stat-row">
              <div className="pref-stat-item">
                <span className="pref-stat-label">Saved QR Codes</span>
                <span className="pref-stat-val">{historyCount}</span>
              </div>
              <div className="pref-stat-item">
                <span className="pref-stat-label">Storage Engine</span>
                <span className="pref-stat-val">Client LocalStorage</span>
              </div>
              <div className="pref-stat-item">
                <span className="pref-stat-label">Encryption</span>
                <span className="pref-stat-val">Zero-Telemetry</span>
              </div>
            </div>

            <div className="settings-actions-group" style={{ marginTop: '1.25rem' }}>
              <button
                type="button"
                className="btn-settings-danger"
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear all locally saved QR codes?')) {
                    onClearAllHistory();
                    playTap();
                    onNotify?.({
                      type: 'info',
                      title: 'History Cleared',
                      message: 'All local session QR codes removed.'
                    });
                  }
                }}
              >
                <Trash2 size={15} />
                <span>Clear All Saved History ({historyCount})</span>
              </button>

              <button
                type="button"
                className="btn-settings-reset"
                onClick={() => {
                  if (window.confirm('Reset all colors, dimensions, and inputs to factory defaults?')) {
                    onResetFactory();
                    playTap();
                    onNotify?.({
                      type: 'success',
                      title: 'Factory Reset Complete',
                      message: 'Studio restored to pristine defaults.'
                    });
                  }
                }}
              >
                <RotateCcw size={15} />
                <span>Reset Studio to Defaults</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 4: Viva Defense & Candidate Certification */}
        <div className="preference-card">
          <div className="preference-card-head">
            <div className="pref-icon-box amber">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="pref-card-title">Candidate & Viva Verification</h3>
              <p className="pref-card-desc">Architecture and security guarantee details</p>
            </div>
          </div>

          <div className="preference-card-body">
            <div className="pref-viva-pill-list">
              <div className="pref-viva-pill">
                <span className="pill-dot emerald" />
                <span>100% Client-Side In-Memory Canvas & SVG Generation</span>
              </div>
              <div className="pref-viva-pill">
                <span className="pill-dot emerald" />
                <span>W3C WCAG 2.1 AAA Real-Time Contrast Validator</span>
              </div>
              <div className="pref-viva-pill">
                <span className="pill-dot emerald" />
                <span>Sub-Millisecond Native Virtual DOM React 18 Engine</span>
              </div>
            </div>

            <div className="pref-author-badge">
              <div className="author-avatar-sm">SR</div>
              <div className="author-text">
                <div className="author-name">Sautrik Roy</div>
                <div className="author-school">B.Tech CSE • SRM IST Batch 2029 • GDG on Campus Candidate</div>
              </div>
              <a
                href="https://sautrikroy.me"
                target="_blank"
                rel="noreferrer"
                className="profile-link-btn"
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', marginLeft: 'auto' }}
              >
                <span>Portfolio</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
