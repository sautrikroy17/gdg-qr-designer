import React from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * TypeInputs Component
 * Renders context-specific form fields based on the selected QR type,
 * along with real-time validation error warnings.
 */
export default function TypeInputs({
  type,
  formData,
  onChangeField,
  validationError
}) {
  return (
    <div className="type-inputs-container">
      {/* 1. URL Input */}
      {type === 'url' && (
        <div className="form-group">
          <label className="form-label" htmlFor="qr-url">
            Destination Website URL
            <span className="form-label-desc">(e.g., https://github.com/sautrikroy17)</span>
          </label>
          <input
            id="qr-url"
            type="url"
            className={`form-input ${validationError ? 'error' : ''}`}
            placeholder="https://example.com"
            value={formData.url || ''}
            onChange={(e) => onChangeField('url', e.target.value)}
            autoComplete="off"
          />
          {validationError && (
            <div className="form-error-msg">
              <AlertCircle size={14} />
              <span>{validationError}</span>
            </div>
          )}
        </div>
      )}

      {/* 2. Plain Text Input */}
      {type === 'text' && (
        <div className="form-group">
          <label className="form-label" htmlFor="qr-text">
            Plain Text Content
            <span className="form-label-desc">(Notes, raw data, or serial keys)</span>
          </label>
          <textarea
            id="qr-text"
            rows={4}
            className={`form-textarea ${validationError ? 'error' : ''}`}
            placeholder="Enter any text you want to encode..."
            value={formData.text || ''}
            onChange={(e) => onChangeField('text', e.target.value)}
          />
          {validationError && (
            <div className="form-error-msg">
              <AlertCircle size={14} />
              <span>{validationError}</span>
            </div>
          )}
        </div>
      )}

      {/* 3. Email Input */}
      {type === 'email' && (
        <>
          <div className="form-group">
            <label className="form-label" htmlFor="qr-email-to">
              Recipient Email Address <span style={{ color: 'var(--accent-red)' }}>*</span>
            </label>
            <input
              id="qr-email-to"
              type="email"
              className={`form-input ${validationError ? 'error' : ''}`}
              placeholder="recipient@example.com"
              value={formData.emailTo || ''}
              onChange={(e) => onChangeField('emailTo', e.target.value)}
            />
            {validationError && (
              <div className="form-error-msg">
                <AlertCircle size={14} />
                <span>{validationError}</span>
              </div>
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="qr-email-subject">
                Subject <span className="form-label-desc">(Optional)</span>
              </label>
              <input
                id="qr-email-subject"
                type="text"
                className="form-input"
                placeholder="Inquiry / Meeting"
                value={formData.emailSubject || ''}
                onChange={(e) => onChangeField('emailSubject', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="qr-email-body">
                Message Body <span className="form-label-desc">(Optional)</span>
              </label>
              <input
                id="qr-email-body"
                type="text"
                className="form-input"
                placeholder="Hello there..."
                value={formData.emailBody || ''}
                onChange={(e) => onChangeField('emailBody', e.target.value)}
              />
            </div>
          </div>
        </>
      )}

      {/* 4. Phone Input */}
      {type === 'phone' && (
        <div className="form-group">
          <label className="form-label" htmlFor="qr-phone">
            Phone Number <span className="form-label-desc">(With country code)</span>
          </label>
          <input
            id="qr-phone"
            type="tel"
            className={`form-input ${validationError ? 'error' : ''}`}
            placeholder="+91 98765 43210"
            value={formData.phone || ''}
            onChange={(e) => onChangeField('phone', e.target.value)}
          />
          {validationError && (
            <div className="form-error-msg">
              <AlertCircle size={14} />
              <span>{validationError}</span>
            </div>
          )}
        </div>
      )}

      {/* 5. Wi-Fi Input */}
      {type === 'wifi' && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="qr-wifi-ssid">
                Network Name (SSID) <span style={{ color: 'var(--accent-red)' }}>*</span>
              </label>
              <input
                id="qr-wifi-ssid"
                type="text"
                className={`form-input ${validationError ? 'error' : ''}`}
                placeholder="Home_WiFi_5G"
                value={formData.wifiSsid || ''}
                onChange={(e) => onChangeField('wifiSsid', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="qr-wifi-enc">
                Security Encryption
              </label>
              <select
                id="qr-wifi-enc"
                className="form-select"
                value={formData.wifiEncryption || 'WPA'}
                onChange={(e) => onChangeField('wifiEncryption', e.target.value)}
              >
                <option value="WPA">WPA / WPA2 / WPA3 (Standard)</option>
                <option value="WEP">WEP (Legacy)</option>
                <option value="none">No Password (Open Network)</option>
              </select>
            </div>
          </div>

          {formData.wifiEncryption !== 'none' && (
            <div className="form-group">
              <label className="form-label" htmlFor="qr-wifi-pass">
                Wi-Fi Password
              </label>
              <input
                id="qr-wifi-pass"
                type="text"
                className="form-input"
                placeholder="Enter network password"
                value={formData.wifiPassword || ''}
                onChange={(e) => onChangeField('wifiPassword', e.target.value)}
              />
            </div>
          )}

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
            <input
              id="qr-wifi-hidden"
              type="checkbox"
              checked={formData.wifiHidden || false}
              onChange={(e) => onChangeField('wifiHidden', e.target.checked)}
              style={{ width: '16px', height: '16px', accentColor: 'var(--accent-blue)' }}
            />
            <label htmlFor="qr-wifi-hidden" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              Hidden Network (SSID is not publicly broadcasted)
            </label>
          </div>

          {validationError && (
            <div className="form-error-msg">
              <AlertCircle size={14} />
              <span>{validationError}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
