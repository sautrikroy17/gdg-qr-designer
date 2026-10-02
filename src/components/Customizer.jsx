import React, { useState } from 'react';
import { Palette, Shapes, Sliders, Shield, Image, ChevronDown, ChevronUp, X } from 'lucide-react';

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

export default function Customizer({
  config,
  onChangeConfig
}) {
  // Collapsible section states
  const [openSections, setOpenSections] = useState({
    colors: true,
    shapes: false,
    dimensions: false,
    advanced: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle Logo Upload (Client-side file reader)
  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, or SVG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      onChangeConfig('logo', event.target.result);
      // Auto-upgrade error correction to 'H' if it's currently low
      if (config.errorCorrectionLevel === 'L' || config.errorCorrectionLevel === 'M') {
        onChangeConfig('errorCorrectionLevel', 'H');
      }
    };
    reader.readAsDataURL(file);
  };

  const removeLogo = () => {
    onChangeConfig('logo', '');
  };

  return (
    <div className="customizer-container">
      {/* 1. Colors & Gradient Section */}
      <div className="accordion-section">
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('colors')}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Palette size={16} style={{ color: 'var(--accent-blue)' }} />
            Colors & Gradients
          </span>
          {openSections.colors ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {openSections.colors && (
          <div className="accordion-content">
            {/* Dots Color */}
            <div className="form-group">
              <label className="form-label" htmlFor="dots-color-input">Foreground Dots Color</label>
              <div className="color-picker-row">
                <input
                  id="dots-color-input"
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

            {/* Gradient Toggle */}
            <div className="form-group" style={{ margin: '1rem 0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}>
                <input
                  type="checkbox"
                  checked={config.isGradient}
                  onChange={(e) => onChangeConfig('isGradient', e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--accent-blue)' }}
                />
                Enable Color Gradient
              </label>
            </div>

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
                    <option value="linear">Linear Gradient</option>
                    <option value="radial">Radial Gradient</option>
                  </select>
                </div>
              </div>
            )}

            {/* Background Color */}
            <div className="form-group">
              <label className="form-label" htmlFor="bg-color-input">Background Color</label>
              <div className="color-picker-row">
                <input
                  id="bg-color-input"
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
        )}
      </div>

      {/* 2. Shape & Pattern Styling */}
      <div className="accordion-section">
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('shapes')}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shapes size={16} style={{ color: 'var(--accent-green)' }} />
            Shapes & Module Styles
          </span>
          {openSections.shapes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {openSections.shapes && (
          <div className="accordion-content">
            {/* Dots Style */}
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

            {/* Corner Square Style */}
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

            {/* Corner Dot Style */}
            <div className="form-group">
              <label className="form-label">Corner Center Dot</label>
              <div className="options-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {CORNER_DOT_TYPES.map((cd) => (
                  <button
                    key={cd.id}
                    type="button"
                    className={`option-btn ${config.cornersDotType === cd.id ? 'active' : ''}`}
                    onClick={() => onChangeConfig('cornersDotType', cd.id)}
                  >
                    {cd.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Dimensions & Margins */}
      <div className="accordion-section">
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('dimensions')}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sliders size={16} style={{ color: 'var(--accent-yellow)' }} />
            Dimensions & Margin
          </span>
          {openSections.dimensions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {openSections.dimensions && (
          <div className="accordion-content">
            <div className="slider-group">
              <div className="slider-header">
                <span>QR Code Output Size</span>
                <span className="slider-val">{config.size}px</span>
              </div>
              <input
                type="range"
                min="200"
                max="500"
                step="20"
                className="custom-range"
                value={config.size}
                onChange={(e) => onChangeConfig('size', Number(e.target.value))}
              />
            </div>

            <div className="slider-group">
              <div className="slider-header">
                <span>Quiet Zone (Margin)</span>
                <span className="slider-val">{config.margin}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="2"
                className="custom-range"
                value={config.margin}
                onChange={(e) => onChangeConfig('margin', Number(e.target.value))}
              />
            </div>
          </div>
        )}
      </div>

      {/* 4. Error Correction & Center Logo */}
      <div className="accordion-section">
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('advanced')}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={16} style={{ color: 'var(--accent-red)' }} />
            Error Correction & Logo
          </span>
          {openSections.advanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {openSections.advanced && (
          <div className="accordion-content">
            {/* Error Correction Selection */}
            <div className="form-group">
              <label className="form-label">
                Reed-Solomon Error Correction Level
                <span className="form-label-desc">(Data recovery redundancy)</span>
              </label>
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
            </div>

            {/* Logo Upload */}
            <div className="form-group" style={{ marginTop: '1.25rem' }}>
              <label className="form-label">
                Center Brand Logo
                <span className="form-label-desc">(Optional center watermark)</span>
              </label>
              
              {!config.logo ? (
                <div style={{ position: 'relative' }}>
                  <input
                    type="file"
                    id="logo-upload-input"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    style={{ display: 'none' }}
                  />
                  <label
                    htmlFor="logo-upload-input"
                    className="btn-secondary"
                    style={{ cursor: 'pointer', width: '100%', justifyContent: 'center' }}
                  >
                    <Image size={18} />
                    <span>Upload Logo Image</span>
                  </label>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={config.logo} alt="Logo Preview" style={{ width: '32px', height: '32px', objectFit: 'contain', borderRadius: '4px' }} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Active Logo</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="icon-btn danger"
                    title="Remove Logo"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
