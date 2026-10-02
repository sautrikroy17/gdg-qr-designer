import React from 'react';
import { X, Settings, Trash2, RotateCcw, Check } from 'lucide-react';

export default function SettingsModal({
  isOpen,
  onClose,
  defaultFormat,
  onChangeDefaultFormat,
  autoSave,
  onToggleAutoSave,
  onClearAllHistory,
  onResetFactory
}) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
          border: '1px solid var(--border-color)',
          padding: '1.75rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Settings size={20} style={{ color: 'var(--accent-blue)' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Application Settings</h3>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Default Download Format */}
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Default Export Format</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <button
                type="button"
                className={`option-btn ${defaultFormat === 'png' ? 'active' : ''}`}
                onClick={() => onChangeDefaultFormat('png')}
                style={{ padding: '0.65rem' }}
              >
                PNG (High-Res Raster)
              </button>
              <button
                type="button"
                className={`option-btn ${defaultFormat === 'svg' ? 'active' : ''}`}
                onClick={() => onChangeDefaultFormat('svg')}
                style={{ padding: '0.65rem' }}
              >
                SVG (Scalable Vector)
              </button>
            </div>
          </div>

          {/* Auto-Save Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>Auto-Save to Recent History</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Automatically store generated codes locally</div>
            </div>
            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e) => onToggleAutoSave(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--accent-blue)', cursor: 'pointer' }}
            />
          </div>

          {/* Danger Zone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all locally saved QR codes?')) {
                  onClearAllHistory();
                }
              }}
              style={{ justifyContent: 'center', gap: '0.5rem', color: 'var(--accent-red)' }}
            >
              <Trash2 size={16} />
              <span>Clear Recent History</span>
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                if (window.confirm('Reset all colors, dimensions, and inputs to defaults?')) {
                  onResetFactory();
                  onClose();
                }
              }}
              style={{ justifyContent: 'center', gap: '0.5rem' }}
            >
              <RotateCcw size={16} />
              <span>Reset Designer to Defaults</span>
            </button>
          </div>
        </div>

        {/* Footer Done Button */}
        <div style={{ marginTop: '1.75rem' }}>
          <button
            type="button"
            className="btn-hero-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={onClose}
          >
            <Check size={18} />
            <span>Save & Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
