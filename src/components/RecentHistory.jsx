import React from 'react';
import { History, RotateCcw, Trash2, ArrowRight } from 'lucide-react';

/**
 * RecentHistory Component
 * Displays QR codes saved locally in browser localStorage, allowing users
 * to restore previous designs and inputs after refreshing or reopening the browser.
 */
export default function RecentHistory({
  historyItems,
  onRestoreItem,
  onDeleteItem,
  onClearHistory
}) {
  return (
    <section className="history-section card">
      <div className="card-header">
        <h3 className="card-title">
          <History size={18} style={{ color: 'var(--accent-blue)' }} />
          Recent QR Codes
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}>
            (Persisted in browser localStorage)
          </span>
        </h3>

        {historyItems.length > 0 && (
          <button
            type="button"
            className="icon-btn danger"
            onClick={onClearHistory}
            title="Clear All History"
            style={{ fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <Trash2 size={14} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {historyItems.length === 0 ? (
        <div className="empty-state">
          <p>No recent QR codes saved yet. Generate and download a QR code to see it appear here!</p>
        </div>
      ) : (
        <div className="history-grid">
          {historyItems.map((item) => (
            <div key={item.id} className="history-card">
              <div className="history-content">
                <div className="history-type-badge">{item.type}</div>
                <div className="history-text" title={item.previewText}>
                  {item.previewText}
                </div>
                <div className="history-date">
                  {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {new Date(item.timestamp).toLocaleDateString()}
                </div>
              </div>

              <div className="history-actions">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => onRestoreItem(item)}
                  title="Restore this QR configuration"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  type="button"
                  className="icon-btn danger"
                  onClick={() => onDeleteItem(item.id)}
                  title="Delete from history"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
