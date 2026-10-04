import React from 'react';
import { X, Sliders, Trash2, RotateCcw, Check } from 'lucide-react';
import { playTap, playSuccessChime } from '../utils/soundEffects';

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
    <div className="settings-modal-backdrop" onClick={onClose}>
      <div
        className="settings-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-modal-title"
      >
        {/* Header */}
        <div className="settings-modal-header">
          <div className="settings-title-group">
            <div className="settings-icon-bubble">
              <Sliders size={18} />
            </div>
            <div>
              <h3 id="settings-modal-title" className="settings-modal-heading">Application Settings</h3>
              <p className="settings-modal-subheading">Customize default export & studio behavior</p>
            </div>
          </div>
          <button
            type="button"
            className="settings-close-btn"
            onClick={onClose}
            title="Close Settings (Esc)"
            aria-label="Close Settings"
          >
            <X size={18} />
          </button>
        </div>

        {/* Options Body */}
        <div className="settings-modal-body">
          {/* Default Download Format */}
          <div className="settings-section">
            <label className="settings-field-label">Default Export Format</label>
            <div className="settings-format-grid">
              <button
                type="button"
                className={`settings-format-btn ${defaultFormat === 'png' ? 'active' : ''}`}
                onClick={() => {
                  onChangeDefaultFormat('png');
                  playTap();
                }}
              >
                <span className="format-btn-badge">PNG</span>
                <span className="format-btn-name">High-Res Raster</span>
                {defaultFormat === 'png' && <Check size={14} className="format-active-check" />}
              </button>
              <button
                type="button"
                className={`settings-format-btn ${defaultFormat === 'svg' ? 'active' : ''}`}
                onClick={() => {
                  onChangeDefaultFormat('svg');
                  playTap();
                }}
              >
                <span className="format-btn-badge">SVG</span>
                <span className="format-btn-name">Scalable Vector</span>
                {defaultFormat === 'svg' && <Check size={14} className="format-active-check" />}
              </button>
            </div>
          </div>

          {/* Auto-Save Toggle */}
          <div className="settings-toggle-row">
            <div className="settings-toggle-info">
              <div className="settings-toggle-title">Auto-Save to Recent History</div>
              <div className="settings-toggle-desc">Automatically store generated codes locally in browser</div>
            </div>
            <label className="settings-switch-label">
              <input
                type="checkbox"
                className="settings-switch-input"
                checked={autoSave}
                onChange={(e) => {
                  onToggleAutoSave(e.target.checked);
                  playTap();
                }}
              />
              <span className="settings-switch-slider" />
            </label>
          </div>

          {/* Actions & Defaults */}
          <div className="settings-actions-group">
            <button
              type="button"
              className="btn-settings-danger"
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all locally saved QR codes?')) {
                  onClearAllHistory();
                  playTap();
                }
              }}
            >
              <Trash2 size={16} />
              <span>Clear Recent History</span>
            </button>

            <button
              type="button"
              className="btn-settings-reset"
              onClick={() => {
                if (window.confirm('Reset all colors, dimensions, and inputs to defaults?')) {
                  onResetFactory();
                  playTap();
                  onClose();
                }
              }}
            >
              <RotateCcw size={16} />
              <span>Reset Designer to Defaults</span>
            </button>
          </div>
        </div>

        {/* Footer Done Button */}
        <div className="settings-modal-footer">
          <button
            type="button"
            className="btn-settings-save"
            onClick={() => {
              playSuccessChime();
              onClose();
            }}
          >
            <Check size={18} />
            <span>Save & Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
