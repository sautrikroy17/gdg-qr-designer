import React, { useState } from 'react';
import {
  Globe,
  FileText,
  Mail,
  Phone,
  Wifi,
  MapPin,
  Contact,
  X,
  Palette,
  Shapes,
  Image as ImageIcon,
  Sliders,
  AlertCircle,
  Upload
} from 'lucide-react';
import { GRADIENT_PRESETS } from '../utils/presets';

const CONTENT_TYPES = [
  { id: 'url', label: 'URL', icon: Globe },
  { id: 'text', label: 'Text', icon: FileText },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'phone', label: 'Phone', icon: Phone },
  { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
  { id: 'location', label: 'Location', icon: MapPin },
  { id: 'vcard', label: 'More', icon: Contact },
];

const DOT_TYPES = [
  { id: 'square', label: 'Square' },
  { id: 'rounded', label: 'Rounded' },
  { id: 'dots', label: 'Dots' },
  { id: 'classy', label: 'Classy' },
  { id: 'classy-rounded', label: 'Smooth' },
  { id: 'extra-rounded', label: 'Bubbles' },
];

const CORNER_SQUARE_TYPES = [
  { id: 'square', label: 'Sharp' },
  { id: 'dot', label: 'Dot' },
  { id: 'extra-rounded', label: 'Rounded' },
];

const CORNER_DOT_TYPES = [
  { id: 'square', label: 'Square' },
  { id: 'dot', label: 'Dot' },
];

const ERROR_LEVELS = [
  { id: 'L', label: 'L (7%)', desc: 'Low density' },
  { id: 'M', label: 'M (15%)', desc: 'Standard' },
  { id: 'Q', label: 'Q (25%)', desc: 'High resilience' },
  { id: 'H', label: 'H (30%)', desc: 'Best for logos' },
];

export default function GeneratorView({
  currentType,
  onSelectType,
  formData,
  onChangeField,
  validationError,
  config,
  onChangeConfig,
  activeSubTab: controlledSubTab,
  onChangeSubTab
}) {
  const [internalSubTab, setInternalSubTab] = useState('colors'); // 'colors' | 'shapes' | 'logo' | 'style'
  const activeSubTab = controlledSubTab !== undefined ? controlledSubTab : internalSubTab;
  const setActiveSubTab = onChangeSubTab || setInternalSubTab;


  // Handle Logo Upload
  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      onChangeConfig('logo', event.target.result);
      if (config.errorCorrectionLevel === 'L' || config.errorCorrectionLevel === 'M') {
        onChangeConfig('errorCorrectionLevel', 'H');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="generator-view-container">
      {/* 1. Header */}
      <div className="workspace-title-box">
        <h2>Create Your QR Code</h2>
        <p>Choose a content type and customize it in real-time</p>
      </div>

      {/* 2. Content Types Switcher */}
      <div className="content-types-row" role="tablist">
        {CONTENT_TYPES.map((t) => {
          const Icon = t.icon;
          const isActive = currentType === t.id;
          return (
            <button
              key={t.id}
              type="button"
              className={`type-pill-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectType(t.id)}
            >
              <Icon size={18} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Form Input based on selected type */}
      <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
        {/* URL Input */}
        {currentType === 'url' && (
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label" htmlFor="input-url">Website URL</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Globe size={18} style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)' }} />
              <input
                id="input-url"
                type="url"
                className={`form-input ${validationError ? 'error' : ''}`}
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                placeholder="https://github.com/sautrikroy17"
                value={formData.url || ''}
                onChange={(e) => onChangeField('url', e.target.value)}
              />
              {formData.url && (
                <button
                  type="button"
                  onClick={() => onChangeField('url', '')}
                  style={{ position: 'absolute', right: '12px', color: 'var(--text-muted)' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Plain Text Input */}
        {currentType === 'text' && (
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label" htmlFor="input-text">Text Content</label>
            <textarea
              id="input-text"
              rows={3}
              className={`form-textarea ${validationError ? 'error' : ''}`}
              placeholder="Enter text or notes..."
              value={formData.text || ''}
              onChange={(e) => onChangeField('text', e.target.value)}
            />
          </div>
        )}

        {/* Email Input */}
        {currentType === 'email' && (
          <div>
            <div className="form-group">
              <label className="form-label">Recipient Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="sautrikroy@example.com"
                value={formData.emailTo || ''}
                onChange={(e) => onChangeField('emailTo', e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Collaboration"
                  value={formData.emailSubject || ''}
                  onChange={(e) => onChangeField('emailSubject', e.target.value)}
                />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Body</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Hi there..."
                  value={formData.emailBody || ''}
                  onChange={(e) => onChangeField('emailBody', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Phone Input */}
        {currentType === 'phone' && (
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Phone Number</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Phone size={18} style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)' }} />
              <input
                type="tel"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="+91 98765 43210"
                value={formData.phone || ''}
                onChange={(e) => onChangeField('phone', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Wi-Fi Input */}
        {currentType === 'wifi' && (
          <div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Network Name (SSID)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="SRM_Hostel_5G"
                  value={formData.wifiSsid || ''}
                  onChange={(e) => onChangeField('wifiSsid', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Encryption</label>
                <select
                  className="form-select"
                  value={formData.wifiEncryption || 'WPA'}
                  onChange={(e) => onChangeField('wifiEncryption', e.target.value)}
                >
                  <option value="WPA">WPA / WPA2 (Default)</option>
                  <option value="WEP">WEP (Legacy)</option>
                  <option value="none">No Password</option>
                </select>
              </div>
            </div>
            {formData.wifiEncryption !== 'none' && (
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Wi-Fi Password</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter password"
                  value={formData.wifiPassword || ''}
                  onChange={(e) => onChangeField('wifiPassword', e.target.value)}
                />
              </div>
            )}
          </div>
        )}

        {/* Location Input */}
        {currentType === 'location' && (
          <div className="form-row">
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Latitude</label>
              <input
                type="text"
                className="form-input"
                placeholder="12.8230"
                value={formData.lat || ''}
                onChange={(e) => onChangeField('lat', e.target.value)}
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Longitude</label>
              <input
                type="text"
                className="form-input"
                placeholder="80.0444 (SRM IST)"
                value={formData.lng || ''}
                onChange={(e) => onChangeField('lng', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* vCard Input */}
        {currentType === 'vcard' && (
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Sautrik Roy"
                value={formData.vName || ''}
                onChange={(e) => onChangeField('vName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-input"
                placeholder="+91 98765 43210"
                value={formData.vPhone || ''}
                onChange={(e) => onChangeField('vPhone', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Validation Error Feedback */}
        {validationError && (
          <div className="form-error-msg" style={{ marginTop: '0.65rem' }}>
            <AlertCircle size={14} />
            <span>{validationError}</span>
          </div>
        )}
      </div>

      {/* 4. Customize Design Subtabs */}
      <div className="glass-card">
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '1rem' }}>
          Customize Design
        </h3>

        {/* Subtabs Header */}
        <div className="subtabs-header">
          <button
            type="button"
            className={`subtab-btn ${activeSubTab === 'colors' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('colors')}
          >
            Colors
          </button>
          <button
            type="button"
            className={`subtab-btn ${activeSubTab === 'shapes' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('shapes')}
          >
            Shapes
          </button>
          <button
            type="button"
            className={`subtab-btn ${activeSubTab === 'logo' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('logo')}
          >
            Logo
          </button>
          <button
            type="button"
            className={`subtab-btn ${activeSubTab === 'style' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('style')}
          >
            Style
          </button>
        </div>

        {/* Subtab 1: Colors */}
        {activeSubTab === 'colors' && (
          <div>
            {/* Color Style Pills: Solid vs Gradient */}
            <div className="style-modes-row">
              <button
                type="button"
                className={`style-mode-chip ${!config.isGradient ? 'active' : ''}`}
                onClick={() => onChangeConfig('isGradient', false)}
              >
                Solid
              </button>
              <button
                type="button"
                className={`style-mode-chip ${config.isGradient ? 'active' : ''}`}
                onClick={() => onChangeConfig('isGradient', true)}
              >
                Gradient
              </button>
            </div>

            {/* Color Pickers */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Foreground Color</label>
                <div className="color-picker-row">
                  <input
                    type="color"
                    className="color-input-bubble"
                    value={config.dotsColor}
                    onChange={(e) => onChangeConfig('dotsColor', e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-input hex-input"
                    value={config.dotsColor}
                    onChange={(e) => onChangeConfig('dotsColor', e.target.value)}
                    maxLength={7}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Background Color</label>
                <div className="color-picker-row">
                  <input
                    type="color"
                    className="color-input-bubble"
                    value={config.backgroundColor}
                    onChange={(e) => onChangeConfig('backgroundColor', e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-input hex-input"
                    value={config.backgroundColor}
                    onChange={(e) => onChangeConfig('backgroundColor', e.target.value)}
                    maxLength={7}
                  />
                </div>
              </div>
            </div>

            {/* Gradient Options if enabled */}
            {config.isGradient && (
              <div className="form-row" style={{ marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Gradient End Color</label>
                  <div className="color-picker-row">
                    <input
                      type="color"
                      className="color-input-bubble"
                      value={config.gradientColor2}
                      onChange={(e) => onChangeConfig('gradientColor2', e.target.value)}
                    />
                    <input
                      type="text"
                      className="form-input hex-input"
                      value={config.gradientColor2}
                      onChange={(e) => onChangeConfig('gradientColor2', e.target.value)}
                      maxLength={7}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Gradient Type</label>
                  <select
                    className="form-select"
                    value={config.gradientType}
                    onChange={(e) => onChangeConfig('gradientType', e.target.value)}
                  >
                    <option value="linear">Linear</option>
                    <option value="radial">Radial</option>
                  </select>
                </div>
              </div>
            )}

            {/* Gradient Presets Row */}
            <div style={{ marginTop: '0.75rem' }}>
              <label className="form-label" style={{ fontSize: '0.8rem' }}>Gradient Presets</label>
              <div className="gradient-swatches-row">
                {GRADIENT_PRESETS.map((g) => (
                  <div
                    key={g.id}
                    className="grad-swatch-box"
                    style={{ background: `linear-gradient(135deg, ${g.color1}, ${g.color2})` }}
                    onClick={() => {
                      onChangeConfig('isGradient', true);
                      onChangeConfig('dotsColor', g.color1);
                      onChangeConfig('gradientColor2', g.color2);
                    }}
                    title={g.label}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Subtab 2: Shapes */}
        {activeSubTab === 'shapes' && (
          <div>
            <div className="form-group">
              <label className="form-label">Pattern Modules Style</label>
              <div className="options-grid">
                {DOT_TYPES.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={`option-btn ${config.dotsType === d.id ? 'active' : ''}`}
                    onClick={() => onChangeConfig('dotsType', d.id)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Corner Frame Style</label>
              <div className="options-grid">
                {CORNER_SQUARE_TYPES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`option-btn ${config.cornersSquareType === c.id ? 'active' : ''}`}
                    onClick={() => onChangeConfig('cornersSquareType', c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">QR Output Size: {config.size}px</label>
                <input
                  type="range"
                  min="220"
                  max="460"
                  step="20"
                  className="custom-range"
                  value={config.size}
                  onChange={(e) => onChangeConfig('size', Number(e.target.value))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Quiet Zone Margin: {config.margin}px</label>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="2"
                  className="custom-range"
                  value={config.margin}
                  onChange={(e) => onChangeConfig('margin', Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        )}

        {/* Subtab 3: Logo */}
        {activeSubTab === 'logo' && (
          <div>
            <label className="form-label">Upload Brand Logo</label>
            {!config.logo ? (
              <div>
                <input
                  type="file"
                  id="logo-upload-gen"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="logo-upload-gen"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', padding: '1rem' }}
                >
                  <Upload size={18} />
                  <span>Choose Image File (PNG, SVG, JPG)</span>
                </label>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={config.logo} alt="Logo" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Center Logo Attached</span>
                </div>
                <button
                  type="button"
                  className="icon-btn danger"
                  onClick={() => onChangeConfig('logo', '')}
                >
                  <X size={18} />
                </button>
              </div>
            )}
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.65rem' }}>
              ℹ️ Attaching a logo automatically upgrades Reed-Solomon Error Correction to 'H' (30%) so the code remains 100% scannable.
            </p>
          </div>
        )}

        {/* Subtab 4: Style & Error Correction */}
        {activeSubTab === 'style' && (
          <div>
            <label className="form-label">Error Correction Level (Redundancy)</label>
            <div className="options-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {ERROR_LEVELS.map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  className={`option-btn ${config.errorCorrectionLevel === lvl.id ? 'active' : ''}`}
                  onClick={() => onChangeConfig('errorCorrectionLevel', lvl.id)}
                  title={lvl.desc}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              Higher error correction allows codes to be scanned even if dirty, torn, or obstructed by a center logo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
