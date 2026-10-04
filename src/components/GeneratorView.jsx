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
  Upload,
  Eye,
  EyeOff,
  Navigation,
  Check
} from 'lucide-react';
import { playTap, playPop, playSuccessChime } from '../utils/soundEffects';

const CONTENT_TYPES = [
  { id: 'url', label: 'URL', icon: Globe },
  { id: 'text', label: 'Text', icon: FileText },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'phone', label: 'Phone', icon: Phone },
  { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
  { id: 'location', label: 'Location', icon: MapPin },
  { id: 'vcard', label: 'vCard', icon: Contact },
];

const QUICK_URLS = [
  { label: 'GitHub', value: 'https://github.com/sautrikroy17' },
  { label: 'Portfolio', value: 'https://sautrikroy.me' },
  { label: 'LinkedIn', value: 'https://linkedin.com/in/sautrikroy' },
  { label: 'SRM Portal', value: 'https://sp.srmist.edu.in' }
];

const QUICK_WIFI = [
  { label: 'SRM Campus 5G', ssid: 'SRM_Campus_5G', pass: 'SRM@Student2026', enc: 'WPA' },
  { label: 'Hostel Mesh', ssid: 'SRM_Hostel_HighSpeed', pass: 'CampusNet#2026', enc: 'WPA' },
  { label: 'Free Guest', ssid: 'SRM_Guest_Free', pass: '', enc: 'none' }
];

const QUICK_LOCATIONS = [
  { label: 'SRM KTR Campus', lat: '12.8231', lng: '80.0442', query: 'SRM Institute of Science and Technology Chennai' },
  { label: 'Chennai Central', lat: '13.0827', lng: '80.2707', query: 'Puratchi Thalaivar Dr. M.G.R. Central Railway Station' },
  { label: 'Bengaluru Tech Hub', lat: '12.9716', lng: '77.5946', query: 'Bengaluru Tech Park India' }
];

const CANDIDATE_VCARD = {
  vFirst: 'Sautrik',
  vLast: 'Roy',
  vOrg: 'SRM Institute of Science and Technology',
  vPhone: '+919876543210',
  vEmail: 'sautrik@srmist.edu.in',
  vUrl: 'https://sautrikroy.me'
};

const CURATED_PALETTES = [
  { name: 'Pure Minimal', dots: '#000000', bg: '#ffffff', grad: '#000000', isGrad: false },
  { name: 'Modern Slate', dots: '#1e293b', bg: '#ffffff', grad: '#1e293b', isGrad: false },
  { name: 'Dark Obsidian', dots: '#f8fafc', bg: '#090d16', grad: '#cbd5e1', isGrad: true },
  { name: 'Subtle Silver', dots: '#334155', bg: '#f8fafc', grad: '#334155', isGrad: false },
  { name: 'Charcoal Minimal', dots: '#27272a', bg: '#ffffff', grad: '#09090b', isGrad: false },
  { name: 'Matte Titanium', dots: '#475569', bg: '#ffffff', grad: '#1e293b', isGrad: true },
  { name: 'Pure Monolith', dots: '#0f172a', bg: '#f8fafc', grad: '#1e293b', isGrad: false },
  { name: 'Pure Graphite', dots: '#18181b', bg: '#ffffff', grad: '#18181b', isGrad: false },
];

const DOT_PATTERNS = [
  { id: 'rounded', label: 'Rounded', preview: 'M3 3h4v4H3zm10 0h4v4h-4zM3 13h4v4H3zm10 10h4v4h-4z', rx: '2' },
  { id: 'dots', label: 'Dots', preview: 'M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0', rx: '50%' },
  { id: 'classy', label: 'Classy', preview: 'M3 3h4v4H3z', rx: '1' },
  { id: 'classy-rounded', label: 'Smooth', preview: 'M3 3h4v4H3z', rx: '3' },
  { id: 'square', label: 'Square', preview: 'M3 3h4v4H3z', rx: '0' },
  { id: 'extra-rounded', label: 'Bubbles', preview: 'M3 3h4v4H3z', rx: '4' },
];

const CORNER_SQUARES = [
  { id: 'extra-rounded', label: 'Rounded' },
  { id: 'square', label: 'Sharp' },
  { id: 'dot', label: 'Circle' },
];

const CORNER_DOTS = [
  { id: 'dot', label: 'Circle' },
  { id: 'square', label: 'Square' },
];

const ERROR_LEVELS = [
  { id: 'L', label: 'L (7%)', desc: 'Minimal' },
  { id: 'M', label: 'M (15%)', desc: 'Standard' },
  { id: 'Q', label: 'Q (25%)', desc: 'High' },
  { id: 'H', label: 'H (30%)', desc: 'Best for Logos' },
];

// Lightweight SVG Data URIs for Instant 1-Click Brand Logos
const PRESET_LOGOS = [
  {
    id: 'github',
    name: 'GitHub',
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><circle cx="12" cy="12" r="12" fill="%23181717"/><path fill="%23ffffff" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  },
  {
    id: 'google',
    name: 'Google',
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><circle cx="12" cy="12" r="12" fill="%23ffffff"/><path fill="%234285F4" d="M20.64 12.2c0-.64-.06-1.25-.16-1.84H12v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z"/><path fill="%2334A853" d="M12 21c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H3.87v2.33A9 9 0 0012 21z"/><path fill="%23FBBC05" d="M6.96 13.71A5.41 5.41 0 016.68 12c0-.59.1-1.17.28-1.71V7.96H3.87A8.997 8.997 0 003 12c0 1.45.35 2.82.97 4.04l3.09-2.33h-.1z"/><path fill="%23EA4335" d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C16.46 3.9 14.43 3 12 3A8.997 8.997 0 003.87 7.96l3.09 2.33C7.67 8.16 9.66 6.58 12 6.58z"/></svg>`
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><rect width="24" height="24" rx="4" fill="%230A66C2"/><path fill="%23ffffff" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>`
  },
  {
    id: 'wifi-badge',
    name: 'Wi-Fi',
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><rect width="24" height="24" rx="12" fill="%230f172a"/><path fill="%23ffffff" d="M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-4.95-4.95a7 7 0 0 1 9.9 0l-1.41 1.41a5 5 0 0 0-7.07 0l-1.42-1.41zm-2.83-2.83a11 11 0 0 1 15.56 0l-1.42 1.41a9 9 0 0 0-12.72 0l-1.42-1.41z"/></svg>`
  }
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
  const [internalSubTab, setInternalSubTab] = useState('colors'); // 'colors' | 'shapes' | 'logo' | 'precision'
  const activeSubTab = controlledSubTab !== undefined ? controlledSubTab : internalSubTab;
  const setActiveSubTab = onChangeSubTab || setInternalSubTab;
  const [showWifiPassword, setShowWifiPassword] = useState(false);

  // Handle Logo Upload
  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      onChangeConfig('logo', event.target.result);
      playSuccessChime();
      if (config.errorCorrectionLevel === 'L' || config.errorCorrectionLevel === 'M') {
        onChangeConfig('errorCorrectionLevel', 'H');
      }
    };
    reader.readAsDataURL(file);
  };

  // HTML5 Geolocation API Handler
  const handleGetLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          onChangeField('latitude', pos.coords.latitude.toFixed(6));
          onChangeField('longitude', pos.coords.longitude.toFixed(6));
          playSuccessChime();
        },
        () => {
          alert('Could not access current location. Please check browser permissions.');
        }
      );
    }
  };

  return (
    <div className="studio-unified-inspector">
      {/* 1. Header Toolbar */}
      <div className="inspector-head-bar">
        <div>
          <h2 className="inspector-title">Configure QR Code</h2>
          <p className="inspector-subtitle">Choose format, enter content, and craft visual aesthetics in real-time.</p>
        </div>
        <div className="inspector-status-badge">
          <span className="status-live-dot" />
          <span>Real-time Sync</span>
        </div>
      </div>

      {/* 2. Sleek Segmented Type Selector */}
      <div className="type-segmented-bar" role="tablist" aria-label="QR Code Content Type">
        {CONTENT_TYPES.map((t) => {
          const Icon = t.icon;
          const isActive = currentType === t.id;
          return (
            <button
              key={t.id}
              type="button"
              className={`type-segment-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                playTap();
                onSelectType(t.id);
              }}
            >
              <Icon size={15} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Payload Input Section */}
      <div className="inspector-payload-card">
        {/* URL Input */}
        {currentType === 'url' && (
          <div>
            <div className="payload-field-header">
              <label className="payload-label" htmlFor="input-url">Destination Website URL</label>
              <span className="payload-hint">HTTPS automatically formatted</span>
            </div>
            <div className="sleek-input-wrap">
              <Globe size={16} className="input-leading-icon" />
              <input
                id="input-url"
                type="url"
                className={`sleek-text-input ${validationError ? 'has-error' : ''}`}
                placeholder="https://github.com/sautrikroy17"
                value={formData.url || ''}
                onChange={(e) => onChangeField('url', e.target.value)}
              />
              {formData.url && (
                <button
                  type="button"
                  className="input-clear-btn"
                  onClick={() => onChangeField('url', '')}
                  title="Clear input"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Quick URL Presets */}
            <div className="quick-presets-row">
              <span className="quick-preset-tag">Quick fill:</span>
              {QUICK_URLS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="quick-chip-btn"
                  onClick={() => {
                    playPop();
                    onChangeField('url', item.value);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Plain Text Input */}
        {currentType === 'text' && (
          <div>
            <div className="payload-field-header">
              <label className="payload-label" htmlFor="input-text">Text Payload</label>
              <span className="payload-hint">{(formData.text || '').length} characters</span>
            </div>
            <textarea
              id="input-text"
              rows={3}
              className={`sleek-textarea ${validationError ? 'has-error' : ''}`}
              placeholder="Enter message, instructions, or raw code..."
              value={formData.text || ''}
              onChange={(e) => onChangeField('text', e.target.value)}
            />
          </div>
        )}

        {/* Email Input */}
        {currentType === 'email' && (
          <div>
            <div className="form-group" style={{ marginBottom: '0.85rem' }}>
              <label className="payload-label">Recipient Email</label>
              <div className="sleek-input-wrap">
                <Mail size={16} className="input-leading-icon" />
                <input
                  type="email"
                  className="sleek-text-input"
                  placeholder="sautrikroy@example.com"
                  value={formData.emailTo || ''}
                  onChange={(e) => onChangeField('emailTo', e.target.value)}
                />
              </div>
            </div>
            <div className="inspector-grid-2">
              <div className="form-group" style={{ margin: 0 }}>
                <label className="payload-label">Subject Line</label>
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="Inquiry / GDG SRM"
                  value={formData.emailSubject || ''}
                  onChange={(e) => onChangeField('emailSubject', e.target.value)}
                />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="payload-label">Message Body</label>
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="Hi Sautrik, I'd like to connect..."
                  value={formData.emailBody || ''}
                  onChange={(e) => onChangeField('emailBody', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Phone Input */}
        {currentType === 'phone' && (
          <div>
            <div className="payload-field-header">
              <label className="payload-label">Direct Telephone Number</label>
              <span className="payload-hint">International format recommended</span>
            </div>
            <div className="sleek-input-wrap">
              <Phone size={16} className="input-leading-icon" />
              <input
                type="tel"
                className="sleek-text-input"
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
            <div className="inspector-grid-2" style={{ marginBottom: '0.85rem' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="payload-label">Network Name (SSID)</label>
                <div className="sleek-input-wrap">
                  <Wifi size={16} className="input-leading-icon" />
                  <input
                    type="text"
                    className="sleek-text-input"
                    placeholder="SRM_Hostel_5G"
                    value={formData.wifiSsid || ''}
                    onChange={(e) => onChangeField('wifiSsid', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="payload-label">Encryption Type</label>
                <select
                  className="sleek-select"
                  value={formData.wifiEncryption || 'WPA'}
                  onChange={(e) => onChangeField('wifiEncryption', e.target.value)}
                >
                  <option value="WPA">WPA / WPA2 / WPA3 (Standard)</option>
                  <option value="WEP">WEP (Legacy)</option>
                  <option value="none">Open (No Password)</option>
                </select>
              </div>
            </div>

            {formData.wifiEncryption !== 'none' && (
              <div className="form-group" style={{ margin: 0 }}>
                <label className="payload-label">Network Password</label>
                <div className="sleek-input-wrap">
                  <input
                    type={showWifiPassword ? 'text' : 'password'}
                    className="sleek-text-input"
                    placeholder="Enter Wi-Fi security key"
                    value={formData.wifiPassword || ''}
                    onChange={(e) => onChangeField('wifiPassword', e.target.value)}
                  />
                  <button
                    type="button"
                    className="input-clear-btn"
                    onClick={() => setShowWifiPassword(!showWifiPassword)}
                    title={showWifiPassword ? 'Hide password' : 'Show password'}
                  >
                    {showWifiPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
            )}

            {/* Hidden Network Toggle */}
            <div style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <input
                  type="checkbox"
                  checked={!!formData.wifiHidden}
                  onChange={(e) => onChangeField('wifiHidden', e.target.checked)}
                  style={{ width: '15px', height: '15px', accentColor: 'var(--accent-blue)', cursor: 'pointer' }}
                />
                <span>Hidden Network (SSID is not broadcasted)</span>
              </label>
            </div>

            {/* Quick Wi-Fi Presets */}
            <div className="quick-presets-row">
              <span className="quick-preset-tag">Quick fill:</span>
              {QUICK_WIFI.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="quick-chip-btn"
                  onClick={() => {
                    playPop();
                    onChangeField('wifiSsid', item.ssid);
                    onChangeField('wifiPassword', item.pass);
                    onChangeField('wifiEncryption', item.enc);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Location Input */}
        {currentType === 'location' && (
          <div>
            <div className="payload-field-header">
              <label className="payload-label">Geographic Coordinates</label>
              <button
                type="button"
                className="btn-location-gps"
                onClick={handleGetLocation}
                title="Detect current device coordinates"
              >
                <Navigation size={12} />
                <span>Use Current GPS</span>
              </button>
            </div>
            <div className="inspector-grid-2" style={{ marginBottom: '0.85rem' }}>
              <div className="sleek-input-wrap">
                <MapPin size={16} className="input-leading-icon" />
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="Latitude (e.g. 12.8231)"
                  value={formData.latitude || ''}
                  onChange={(e) => onChangeField('latitude', e.target.value)}
                />
              </div>
              <div className="sleek-input-wrap">
                <MapPin size={16} className="input-leading-icon" />
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="Longitude (e.g. 80.0442)"
                  value={formData.longitude || ''}
                  onChange={(e) => onChangeField('longitude', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="payload-label">Or Landmark / Place Name</label>
              <div className="sleek-input-wrap">
                <Globe size={16} className="input-leading-icon" />
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="e.g. SRM Institute of Science and Technology Chennai"
                  value={formData.locationQuery || ''}
                  onChange={(e) => onChangeField('locationQuery', e.target.value)}
                />
              </div>
            </div>

            {/* Quick Location Presets */}
            <div className="quick-presets-row" style={{ marginTop: '0.85rem' }}>
              <span className="quick-preset-tag">Quick fill:</span>
              {QUICK_LOCATIONS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="quick-chip-btn"
                  onClick={() => {
                    playPop();
                    onChangeField('latitude', item.lat);
                    onChangeField('longitude', item.lng);
                    onChangeField('locationQuery', item.query);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* vCard Input */}
        {currentType === 'vcard' && (
          <div>
            <div className="inspector-grid-2" style={{ marginBottom: '0.85rem' }}>
              <div>
                <label className="payload-label">First Name</label>
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="Sautrik"
                  value={formData.vFirst || ''}
                  onChange={(e) => onChangeField('vFirst', e.target.value)}
                />
              </div>
              <div>
                <label className="payload-label">Last Name</label>
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="Roy"
                  value={formData.vLast || ''}
                  onChange={(e) => onChangeField('vLast', e.target.value)}
                />
              </div>
            </div>
            <div className="inspector-grid-3" style={{ marginBottom: '0.85rem' }}>
              <div>
                <label className="payload-label">Organization</label>
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="SRM Institute / GDG"
                  value={formData.vOrg || ''}
                  onChange={(e) => onChangeField('vOrg', e.target.value)}
                />
              </div>
              <div>
                <label className="payload-label">Phone</label>
                <input
                  type="text"
                  className="sleek-text-input"
                  placeholder="+91 98765 43210"
                  value={formData.vPhone || ''}
                  onChange={(e) => onChangeField('vPhone', e.target.value)}
                />
              </div>
              <div>
                <label className="payload-label">Email</label>
                <input
                  type="email"
                  className="sleek-text-input"
                  placeholder="sautrik@srmist.edu.in"
                  value={formData.vEmail || ''}
                  onChange={(e) => onChangeField('vEmail', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="payload-label">Portfolio / Profile URL</label>
              <div className="sleek-input-wrap">
                <Globe size={16} className="input-leading-icon" />
                <input
                  type="url"
                  className="sleek-text-input"
                  placeholder="https://sautrikroy.me"
                  value={formData.vUrl || ''}
                  onChange={(e) => onChangeField('vUrl', e.target.value)}
                />
              </div>
            </div>

            {/* Candidate Quick Fill */}
            <div className="quick-presets-row" style={{ marginTop: '0.85rem' }}>
              <span className="quick-preset-tag">Quick fill:</span>
              <button
                type="button"
                className="quick-chip-btn"
                style={{ borderColor: 'rgba(56, 130, 246, 0.4)', background: 'rgba(56, 130, 246, 0.1)' }}
                onClick={() => {
                  playPop();
                  onChangeField('vFirst', CANDIDATE_VCARD.vFirst);
                  onChangeField('vLast', CANDIDATE_VCARD.vLast);
                  onChangeField('vOrg', CANDIDATE_VCARD.vOrg);
                  onChangeField('vPhone', CANDIDATE_VCARD.vPhone);
                  onChangeField('vEmail', CANDIDATE_VCARD.vEmail);
                  onChangeField('vUrl', CANDIDATE_VCARD.vUrl);
                }}
              >
                Fill Candidate Profile (Sautrik Roy)
              </button>
            </div>
          </div>
        )}

        {/* Inline Validation Alert */}
        {validationError && (
          <div className="payload-error-chip">
            <AlertCircle size={14} />
            <span>{validationError}</span>
          </div>
        )}
      </div>

      {/* 4. Sleek Customizer Section */}
      <div className="inspector-customizer-card">
        {/* Subtabs Bar */}
        <div className="customizer-subtabs-bar" role="tablist">
          <button
            type="button"
            className={`subtab-pill ${activeSubTab === 'colors' ? 'active' : ''}`}
            onClick={() => {
              playTap();
              setActiveSubTab('colors');
            }}
          >
            <Palette size={14} />
            <span>Colors</span>
          </button>
          <button
            type="button"
            className={`subtab-pill ${activeSubTab === 'shapes' ? 'active' : ''}`}
            onClick={() => {
              playTap();
              setActiveSubTab('shapes');
            }}
          >
            <Shapes size={14} />
            <span>Shapes</span>
          </button>
          <button
            type="button"
            className={`subtab-pill ${activeSubTab === 'logo' ? 'active' : ''}`}
            onClick={() => {
              playTap();
              setActiveSubTab('logo');
            }}
          >
            <ImageIcon size={14} />
            <span>Brand Logo</span>
          </button>
          <button
            type="button"
            className={`subtab-pill ${activeSubTab === 'precision' || activeSubTab === 'style' ? 'active' : ''}`}
            onClick={() => {
              playTap();
              setActiveSubTab('precision');
            }}
          >
            <Sliders size={14} />
            <span>Precision</span>
          </button>
        </div>

        {/* TAB 1: COLORS */}
        {activeSubTab === 'colors' && (
          <div className="subtab-content-panel">
            {/* Curated Aesthetic Color Presets */}
            <div className="customizer-block">
              <label className="section-micro-label">CURATED PALETTES</label>
              <div className="palettes-swatch-grid">
                {CURATED_PALETTES.map((p) => {
                  const isCurrent = config.dotsColor === p.dots && config.backgroundColor === p.bg;
                  return (
                    <button
                      key={p.name}
                      type="button"
                      className={`palette-chip ${isCurrent ? 'selected' : ''}`}
                      onClick={() => {
                        playPop();
                        onChangeConfig('dotsColor', p.dots);
                        onChangeConfig('backgroundColor', p.bg);
                        onChangeConfig('isGradient', p.isGrad);
                        if (p.isGrad) {
                          onChangeConfig('gradientColor2', p.grad);
                        }
                      }}
                      title={`${p.name} (${p.dots} on ${p.bg})`}
                    >
                      <div
                        className="palette-swatch-circle"
                        style={{
                          background: p.isGrad
                            ? `linear-gradient(135deg, ${p.dots}, ${p.grad})`
                            : p.dots,
                          border: `2px solid ${p.bg === '#ffffff' ? '#e2e8f0' : p.bg}`
                        }}
                      />
                      <span className="palette-chip-name">{p.name}</span>
                      {isCurrent && <Check size={11} className="palette-check" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Solid vs Gradient Switch */}
            <div className="customizer-block">
              <div className="inspector-grid-2">
                <div>
                  <label className="section-micro-label">FOREGROUND COLOR</label>
                  <div className="color-field-row">
                    <input
                      type="color"
                      className="swatch-native-picker"
                      value={config.dotsColor}
                      onChange={(e) => onChangeConfig('dotsColor', e.target.value)}
                    />
                    <input
                      type="text"
                      className="sleek-hex-input"
                      value={config.dotsColor}
                      onChange={(e) => onChangeConfig('dotsColor', e.target.value)}
                      maxLength={7}
                    />
                  </div>
                </div>

                <div>
                  <label className="section-micro-label">BACKGROUND COLOR</label>
                  <div className="color-field-row">
                    <input
                      type="color"
                      className="swatch-native-picker"
                      value={config.backgroundColor}
                      onChange={(e) => onChangeConfig('backgroundColor', e.target.value)}
                    />
                    <input
                      type="text"
                      className="sleek-hex-input"
                      value={config.backgroundColor}
                      onChange={(e) => onChangeConfig('backgroundColor', e.target.value)}
                      maxLength={7}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Mode Toggle */}
            <div className="customizer-block" style={{ marginBottom: 0 }}>
              <div className="gradient-toggle-row">
                <span className="section-micro-label" style={{ margin: 0 }}>LINEAR GRADIENT ACCENT</span>
                <button
                  type="button"
                  className={`gradient-switch-pill ${config.isGradient ? 'active' : ''}`}
                  onClick={() => onChangeConfig('isGradient', !config.isGradient)}
                >
                  <span className="switch-knob" />
                </button>
              </div>

              {config.isGradient && (
                <div style={{ marginTop: '0.85rem' }}>
                  <div className="inspector-grid-2" style={{ marginBottom: '0.65rem' }}>
                    <div>
                      <label className="section-micro-label">GRADIENT STYLE</label>
                      <div className="segmented-sub-control">
                        <button
                          type="button"
                          className={`seg-sub-btn ${(config.gradientType || 'linear') === 'linear' ? 'active' : ''}`}
                          onClick={() => {
                            playTap();
                            onChangeConfig('gradientType', 'linear');
                          }}
                        >
                          Linear
                        </button>
                        <button
                          type="button"
                          className={`seg-sub-btn ${config.gradientType === 'radial' ? 'active' : ''}`}
                          onClick={() => {
                            playTap();
                            onChangeConfig('gradientType', 'radial');
                          }}
                        >
                          Radial
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="section-micro-label">SECONDARY COLOR</label>
                      <div className="color-field-row">
                        <input
                          type="color"
                          className="swatch-native-picker"
                          value={config.gradientColor2 || '#1d4ed8'}
                          onChange={(e) => onChangeConfig('gradientColor2', e.target.value)}
                        />
                        <input
                          type="text"
                          className="sleek-hex-input"
                          value={config.gradientColor2 || '#1d4ed8'}
                          onChange={(e) => onChangeConfig('gradientColor2', e.target.value)}
                          maxLength={7}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: SHAPES & GEOMETRY */}
        {activeSubTab === 'shapes' && (
          <div className="subtab-content-panel">
            {/* Body Module Pattern */}
            <div className="customizer-block">
              <label className="section-micro-label">BODY MODULE PATTERN</label>
              <div className="pattern-cards-grid">
                {DOT_PATTERNS.map((d) => {
                  const isCurrent = (config.dotsType || 'rounded') === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      className={`pattern-tile ${isCurrent ? 'selected' : ''}`}
                      onClick={() => {
                        playPop();
                        onChangeConfig('dotsType', d.id);
                      }}
                    >
                      <div className="pattern-visual-preview">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="3" width="7" height="7" rx={d.rx} />
                          <rect x="14" y="3" width="7" height="7" rx={d.rx} />
                          <rect x="3" y="14" width="7" height="7" rx={d.rx} />
                          <rect x="14" y="14" width="7" height="7" rx={d.rx} />
                        </svg>
                      </div>
                      <span className="pattern-name">{d.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Corner Squares & Dots */}
            <div className="customizer-block" style={{ marginBottom: 0 }}>
              <div className="inspector-grid-2">
                <div>
                  <label className="section-micro-label">CORNER EYE FRAME</label>
                  <div className="segmented-sub-control">
                    {CORNER_SQUARES.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`seg-sub-btn ${(config.cornersSquareType || 'extra-rounded') === c.id ? 'active' : ''}`}
                        onClick={() => {
                          playPop();
                          onChangeConfig('cornersSquareType', c.id);
                        }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="section-micro-label">CORNER EYE DOT</label>
                  <div className="segmented-sub-control">
                    {CORNER_DOTS.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`seg-sub-btn ${(config.cornersDotType || 'dot') === c.id ? 'active' : ''}`}
                        onClick={() => {
                          playPop();
                          onChangeConfig('cornersDotType', c.id);
                        }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BRAND LOGO */}
        {activeSubTab === 'logo' && (
          <div className="subtab-content-panel">
            {/* Upload Zone */}
            <div className="customizer-block">
              <label className="section-micro-label">CUSTOM LOGO EMBED (PNG / SVG)</label>
              <label className="dropzone-label-card">
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/svg+xml"
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                />
                <Upload size={20} style={{ color: 'var(--accent-blue-vibrant)', marginBottom: '0.4rem' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Click to browse or drop brand image
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Autotunes error correction to 30% High Resilience
                </span>
              </label>
            </div>

            {/* 1-Click Instant Brand Logos */}
            <div className="customizer-block">
              <label className="section-micro-label">ONE-CLICK POPULAR BRAND LOGOS</label>
              <div className="brand-badges-row">
                {PRESET_LOGOS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className="brand-preset-chip"
                    onClick={() => {
                      playPop();
                      onChangeConfig('logo', b.svg);
                      onChangeConfig('errorCorrectionLevel', 'H');
                    }}
                    title={`Embed official ${b.name} logo`}
                  >
                    <img src={b.svg} alt={b.name} width="18" height="18" style={{ borderRadius: '4px' }} />
                    <span>{b.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Logo Indicator */}
            {config.logo && (
              <div className="active-logo-banner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={config.logo} alt="Active Logo" width="32" height="32" style={{ objectFit: 'contain', borderRadius: '4px', background: 'white', padding: '2px' }} />
                  <div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)' }}>Logo Center Loaded</span>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0 }}>Rendered with automated alpha background masking</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-remove-logo"
                  onClick={() => {
                    playTap();
                    onChangeConfig('logo', null);
                  }}
                  title="Remove logo from QR code"
                >
                  <X size={14} />
                  <span>Remove</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: PRECISION & REDUNDANCY */}
        {(activeSubTab === 'precision' || activeSubTab === 'style') && (
          <div className="subtab-content-panel">
            {/* Error Correction Segmented */}
            <div className="customizer-block">
              <div className="payload-field-header">
                <label className="section-micro-label">ERROR CORRECTION REDUNDANCY</label>
                <span className="payload-hint">Reed-Solomon recovery level</span>
              </div>
              <div className="segmented-sub-control">
                {ERROR_LEVELS.map((err) => (
                  <button
                    key={err.id}
                    type="button"
                    className={`seg-sub-btn ${(config.errorCorrectionLevel || 'M') === err.id ? 'active' : ''}`}
                    onClick={() => {
                      playTap();
                      onChangeConfig('errorCorrectionLevel', err.id);
                    }}
                    title={err.desc}
                  >
                    <span style={{ fontWeight: 800 }}>{err.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Margin Slider */}
            <div className="customizer-block">
              <div className="payload-field-header">
                <label className="section-micro-label">QUIET ZONE MARGIN</label>
                <span className="payload-hint">{config.margin ?? 8} px</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="2"
                value={config.margin ?? 8}
                onChange={(e) => onChangeConfig('margin', Number(e.target.value))}
                className="sleek-range-slider"
              />
            </div>

            {/* Size Resolution Slider */}
            <div className="customizer-block" style={{ marginBottom: 0 }}>
              <div className="payload-field-header">
                <label className="section-micro-label">RENDER RESOLUTION</label>
                <span className="payload-hint">{config.size ?? 280} × {config.size ?? 280} px</span>
              </div>
              <input
                type="range"
                min="200"
                max="400"
                step="20"
                value={config.size ?? 280}
                onChange={(e) => onChangeConfig('size', Number(e.target.value))}
                className="sleek-range-slider"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
