import React from 'react';

/**
 * Modern High-Tech Brandmark for QRCraft
 * Features concentric QR finder modules with an artisanal "Craft" spark
 */
export default function BrandLogo({ size = 28, showText = false, textClass = 'brand-logo-text' }) {
  return (
    <div className="brand-logo-container" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="qrcraftLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="45%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="qrcraftSparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2563eb" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Dynamic Gradient Squircle Base */}
        <rect width="28" height="28" rx="7.5" fill="url(#qrcraftLogoGrad)" filter="url(#logoGlow)" />

        {/* Outer rim highlight */}
        <rect
          x="0.75"
          y="0.75"
          width="26.5"
          height="26.5"
          rx="6.75"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Top-Left QR Finder Eye */}
        <rect x="4.5" y="4.5" width="8" height="8" rx="2.2" stroke="white" strokeWidth="1.6" />
        <rect x="7" y="7" width="3" height="3" rx="0.9" fill="white" />

        {/* Top-Right QR Finder Eye */}
        <rect x="15.5" y="4.5" width="8" height="8" rx="2.2" stroke="white" strokeWidth="1.6" />
        <rect x="18" y="7" width="3" height="3" rx="0.9" fill="white" />

        {/* Bottom-Left QR Finder Eye */}
        <rect x="4.5" y="15.5" width="8" height="8" rx="2.2" stroke="white" strokeWidth="1.6" />
        <rect x="7" y="18" width="3" height="3" rx="0.9" fill="white" />

        {/* Center Optical Sync Node */}
        <rect x="13.25" y="13.25" width="2" height="2" rx="0.6" fill="white" opacity="0.9" />

        {/* Bottom-Right "Craft" Star / Facet Spark */}
        <path
          d="M 19.5 14.5 Q 19.5 19.5 24.5 19.5 Q 19.5 19.5 19.5 24.5 Q 19.5 19.5 14.5 19.5 Q 19.5 19.5 19.5 14.5 Z"
          fill="url(#qrcraftSparkGrad)"
        />
        <circle cx="19.5" cy="19.5" r="1.1" fill="#0284c7" />
      </svg>

      {showText && <span className={textClass}>QRCraft</span>}
    </div>
  );
}
