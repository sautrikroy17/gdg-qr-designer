import React from 'react';
import { CheckCircle2, AlertCircle, Info, Sparkles, X } from 'lucide-react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="global-toast-container" role="region" aria-label="Notifications">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        const isScan = toast.type === 'scan';

        return (
          <div
            key={toast.id}
            className={`toast-item ${toast.type || 'info'} ${toast.isExiting ? 'toast-exit' : 'toast-enter'}`}
          >
            <div className="toast-icon-wrap">
              {isSuccess && <CheckCircle2 size={16} className="toast-icon-success" />}
              {isError && <AlertCircle size={16} className="toast-icon-error" />}
              {isScan && <Sparkles size={16} className="toast-icon-scan" />}
              {!isSuccess && !isError && !isScan && <Info size={16} className="toast-icon-info" />}
            </div>

            <div className="toast-body">
              <div className="toast-title">{toast.title}</div>
              {toast.message && <div className="toast-message">{toast.message}</div>}
            </div>

            <button
              type="button"
              className="toast-close-btn"
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss notification"
            >
              <X size={13} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
