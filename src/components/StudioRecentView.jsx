import React, { useState } from 'react';
import {
  Clock,
  ArrowLeft,
  Plus,
  Download,
  Search,
  RotateCcw,
  Copy,
  Trash2,
  Check,
  Sparkles,
  Zap,
  Lock,
  Wifi,
  ExternalLink
} from 'lucide-react';
import { playTap, playPop } from '../utils/soundEffects';

export default function StudioRecentView({
  historyItems,
  onRestoreItem,
  onDeleteItem,
  onClearAllHistory,
  onNewCode,
  onNotify
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
    playPop();
    onNotify?.({
      type: 'info',
      title: 'Copied to Clipboard',
      message: item.previewText
    });
    setTimeout(() => setCopiedId(''), 2000);
  };

  const handleExportHistoryJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(historyItems, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `qrcraft-history-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    onNotify?.({
      type: 'success',
      title: 'History Backup Exported',
      message: 'Downloaded session history as JSON file.'
    });
  };

  return (
    <div className="studio-subview-wrapper">
      {/* Top Banner & Breadcrumb */}
      <div className="subview-header-bar">
        <div>
          <div className="subview-breadcrumb">
            <span>Studio</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Recent History</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.35rem' }}>
            <h2 className="subview-main-title" style={{ margin: 0 }}>Recent QR Vault & History</h2>
            <span className="subview-count-badge">{historyItems.length} Saved</span>
          </div>
          <p className="subview-sub-title">
            Browse, restore, search, and export all customized QR codes crafted during your session.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn-create-qr"
            onClick={onNewCode}
            title="Create a new QR code in Studio Generator"
          >
            <Plus size={15} />
            <span>Create New QR</span>
          </button>

          {historyItems.length > 0 && (
            <button
              type="button"
              className="quick-chip-btn"
              onClick={handleExportHistoryJSON}
              title="Download all saved QR history as JSON"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.82rem' }}
            >
              <Download size={13} />
              <span>Export JSON</span>
            </button>
          )}

          {historyItems.length > 0 && (
            <button
              type="button"
              className="btn-clear-subtle"
              onClick={() => {
                if (window.confirm('Clear all saved QR history items?')) {
                  onClearAllHistory();
                  playTap();
                  onNotify?.({
                    type: 'info',
                    title: 'Vault Cleared',
                    message: 'All saved codes have been removed.'
                  });
                }
              }}
              title="Clear all history"
            >
              <Trash2 size={13} />
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Table Card */}
      <div className="recent-vault-card">
        <div className="table-search-header-row">
          <div className="table-search-bar" style={{ minWidth: '280px', flex: 1, maxWidth: '450px' }}>
            <Search size={15} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by name, type, or URL content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <span className="table-filter-count">
            Showing {filteredItems.length} of {historyItems.length} records
          </span>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table className="recent-table">
            <thead>
              <tr>
                <th>Preview</th>
                <th>Name</th>
                <th>Type</th>
                <th>Target Payload</th>
                <th>Timestamp</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--text-muted)' }}>
                    {historyItems.length === 0 ? (
                      <div className="empty-vault-state">
                        <Clock size={36} style={{ color: 'var(--accent-blue)', opacity: 0.7, marginBottom: '0.75rem' }} />
                        <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.35rem' }}>No QR Codes in Vault Yet</h4>
                        <p style={{ maxWidth: '380px', margin: '0 auto 1.25rem', fontSize: '0.85rem' }}>
                          Create custom QR codes in the Studio Generator and they will be archived here automatically.
                        </p>
                        <button
                          type="button"
                          className="btn-create-qr"
                          onClick={onNewCode}
                          style={{ margin: '0 auto' }}
                        >
                          <Plus size={14} />
                          <span>Generate Your First Code</span>
                        </button>
                      </div>
                    ) : (
                      'No matching QR codes found for your search query.'
                    )}
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="vault-table-row">
                    {/* Thumbnail */}
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
                      {item.name || 'Custom QR'}
                    </td>

                    {/* Type */}
                    <td>
                      <span className="table-badge">{item.type}</span>
                    </td>

                    {/* Content */}
                    <td style={{ maxWidth: '320px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      <span className="table-code-snippet">{item.previewText}</span>
                    </td>

                    {/* Created Time */}
                    <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(item.timestamp).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                        <button
                          type="button"
                          className="action-icon-btn restore"
                          onClick={() => onRestoreItem(item)}
                          title="Restore into Studio Generator"
                        >
                          <RotateCcw size={14} />
                          <span>Restore</span>
                        </button>

                        <button
                          type="button"
                          className="action-icon-btn copy"
                          onClick={() => handleCopyPayload(item)}
                          title="Copy payload"
                        >
                          {copiedId === item.id ? <Check size={14} style={{ color: 'var(--accent-green)' }} /> : <Copy size={14} />}
                        </button>

                        <button
                          type="button"
                          className="action-icon-btn delete"
                          onClick={() => {
                            onDeleteItem(item.id);
                            playTap();
                          }}
                          title="Delete from history"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Architectural Pillars */}
      <div className="bottom-features-row" style={{ marginTop: '2rem' }}>
        <div className="bottom-feature-card">
          <div className="feature-round-icon">
            <Zap size={20} />
          </div>
          <div>
            <h4>Instant Restoration</h4>
            <p>1-Click restores the exact payload, colors, shapes, and logo into the generator.</p>
          </div>
        </div>

        <div className="bottom-feature-card">
          <div className="feature-round-icon">
            <Lock size={20} />
          </div>
          <div>
            <h4>100% Client Encrypted</h4>
            <p>History is kept purely in your browser storage. Zero tracking or telemetry.</p>
          </div>
        </div>

        <div className="bottom-feature-card">
          <div className="feature-round-icon">
            <Wifi size={20} />
          </div>
          <div>
            <h4>Offline Availability</h4>
            <p>Access and export your previously crafted QR codes even when completely offline.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
