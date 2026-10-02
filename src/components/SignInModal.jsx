import React, { useState } from 'react';
import { X, Check, Lock, Sparkles, UserCheck } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [loggedIn, setLoggedIn] = useState(false);

  const handleSimulateLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          border: '1px solid var(--border-color)',
          padding: '2rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Welcome to QRCraft</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>No account required — 100% Free Client-Side</p>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {loggedIn ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--status-good-bg)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <Check size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>Signed in as Sautrik Roy</h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>GDG Candidate Session Active</p>
          </div>
        ) : (
          <form onSubmit={handleSimulateLogin}>
            <div className="form-group">
              <label className="form-label">Email or GitHub Username</label>
              <input
                type="text"
                className="form-input"
                defaultValue="sautrikroy17"
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Password / Passkey</label>
              <input
                type="password"
                className="form-input"
                defaultValue="••••••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-create-qr"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <UserCheck size={18} />
              <span>Continue Session</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
