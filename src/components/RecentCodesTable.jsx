import React, { useState } from 'react';
import {
  Search,
  Download,
  Copy,
  RotateCcw,
  Trash2,
  Zap,
  Lock,
  Wifi,
  Check
} from 'lucide-react';

export default function RecentCodesTable({
  historyItems,
  onRestoreItem,
  onDeleteItem,
  onDownloadItem
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState('');

  const filteredItems = historyItems.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      (item.name || '').toLowerCase().includes(q) ||
      (item.type || '').toLowerCase().includes(q) ||
      (item.previewText || '').toLowerCase().includes(q)
    );
  });

  const handleCopyPayload = (item) => {
    navigator.clipboard.writeText(item.previewText || '');
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(''), 2000);
  };

  return (
    <section className="recent-table-section">
      <div className="table-header-row">
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
            Recent QR Codes
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Your recently generated QR codes are saved locally in your browser.
          </p>
        </div>

        {/* Search Bar */}
        <div className="table-search-bar">
          <Search size={15} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search recent codes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="table-wrapper">
        <table className="recent-table">
          <thead>
            <tr>
              <th>Preview</th>
              <th>Name</th>
              <th>Type</th>
              <th>Content</th>
              <th>Created</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                  {historyItems.length === 0
                    ? 'No QR codes generated yet. Customize and download one to see it saved here!'
                    : 'No matching codes found for your search.'}
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => (
                <tr key={item.id}>
                  {/* Preview Thumbnail */}
                  <td>
                    <div className="table-thumb">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="2" width="7" height="7" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
                        <rect x="15" y="2" width="7" height="7" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
                        <rect x="2" y="15" width="7" height="7" stroke="#1d4ed8" strokeWidth="2" fill="#eff6ff" />
                        <rect x="15" y="15" width="4" height="4" fill="#3b82f6" />
                      </svg>
                    </div>
                  </td>

                  {/* Name */}
                  <td style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                    {item.name || item.previewText?.slice(0, 20) || 'Custom QR'}
                  </td>

                  {/* Type */}
                  <td>
                    <span className="table-badge">{item.type}</span>
                  </td>

                  {/* Content */}
                  <td style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.previewText}
                  </td>

                  {/* Created Time */}
                  <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(item.timestamp).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <button
                        type="button"
                        className="icon-btn"
                        onClick={() => onRestoreItem(item)}
                        title="Restore into Editor"
                      >
                        <RotateCcw size={15} />
                      </button>
                      <button
                        type="button"
                        className="icon-btn"
                        onClick={() => handleCopyPayload(item)}
                        title="Copy text / link"
                      >
                        {copiedId === item.id ? <Check size={15} style={{ color: 'var(--accent-green)' }} /> : <Copy size={15} />}
                      </button>
                      <button
                        type="button"
                        className="icon-btn danger"
                        onClick={() => onDeleteItem(item.id)}
                        title="Delete from history"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom 3 Feature Highlights */}
      <div className="bottom-features-row">
        <div className="bottom-feature-card">
          <div className="feature-round-icon">
            <Zap size={20} />
          </div>
          <div>
            <h4>Instant Generation</h4>
            <p>Create QR codes in real-time with zero waiting time.</p>
          </div>
        </div>

        <div className="bottom-feature-card">
          <div className="feature-round-icon">
            <Lock size={20} />
          </div>
          <div>
            <h4>100% Client-Side</h4>
            <p>Your data never leaves your browser. Zero tracking.</p>
          </div>
        </div>

        <div className="bottom-feature-card">
          <div className="feature-round-icon">
            <Wifi size={20} />
          </div>
          <div>
            <h4>Works Offline</h4>
            <p>Generate and download QR codes without internet connectivity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
