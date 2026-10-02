import React from 'react';
import { X, Code, ExternalLink, Award, User } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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
          maxWidth: '520px',
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
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>About QRCraft Studio</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>GDG on Campus SRM Recruitment 2026–27</p>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          <p>
            <strong>QRCraft Studio</strong> is an enterprise-grade, client-side QR Code Generator & Visual Designer built to demonstrate high-performance frontend engineering with zero backend dependencies.
          </p>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              <User size={16} style={{ color: 'var(--accent-blue)' }} />
              <span>Candidate: Sautrik Roy</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              SRM Institute of Science and Technology • 2nd Year B.Tech CSE
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem' }}>
            <div>⚡ <strong>Tech Stack:</strong> React 19, Vite 8, Plain Vanilla CSS Design System, HTML5 Canvas/SVG API</div>
            <div>🛡️ <strong>Algorithms:</strong> W3C WCAG 2.1 Luminance Formula, Reed-Solomon Error Correction (L/M/Q/H)</div>
            <div>📦 <strong>Repository:</strong> <a href="https://github.com/sautrikroy17/gdg-qr-designer" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>github.com/sautrikroy17/gdg-qr-designer</a></div>
          </div>
        </div>

        <button
          type="button"
          className="btn-create-qr"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          <span>Close</span>
        </button>
      </div>
    </div>
  );
}
