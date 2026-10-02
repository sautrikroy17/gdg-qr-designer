import React from 'react';
import { X, Check, Zap, Sparkles } from 'lucide-react';

export default function PricingModal({ isOpen, onClose }) {
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
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Simple, Transparent Pricing</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Built 100% free and open-source for GDG SRM</p>
          </div>
          <button type="button" className="icon-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Free Plan Card */}
        <div style={{ background: 'var(--bg-subtle)', border: '2px solid var(--accent-blue)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800 }}>Community Plan</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, background: 'var(--accent-blue)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
              CURRENT PLAN
            </span>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, margin: '0.5rem 0' }}>
            $0 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>/ forever</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Free for all developers, students, and businesses. Zero backend tracking.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: 'var(--accent-green)' }} />
              <span>Unlimited QR Code Generations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: 'var(--accent-green)' }} />
              <span>High-Res PNG & Vector SVG Export</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: 'var(--accent-green)' }} />
              <span>Custom Logos & Linear/Radial Gradients</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: 'var(--accent-green)' }} />
              <span>W3C Contrast Scannability Auditor</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn-create-qr"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={onClose}
        >
          <span>Continue Using Free Plan</span>
        </button>
      </div>
    </div>
  );
}
