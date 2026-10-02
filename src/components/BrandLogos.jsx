import React from 'react';

/**
 * BrandLogos Component
 * Sleek monochrome vector logos matching the reference landing page:
 * Google, Microsoft, GitHub, Notion, Figma, Vercel, Spotify, and Airbnb.
 */
export default function BrandLogos() {
  return (
    <div className="brand-logos-cluster">
      {/* Google */}
      <div className="brand-logo-item" title="Google">
        <svg height="22" viewBox="0 0 74 24" fill="currentColor">
          <path d="M9.24 8.19v2.46h5.88c-.18 1.34-.64 2.33-1.37 3.06-.88.88-2.25 1.85-4.51 1.85-3.6 0-6.43-2.92-6.43-6.55s2.83-6.55 6.43-6.55c1.95 0 3.38.77 4.43 1.76l1.74-1.74c-1.5-1.44-3.5-2.52-6.17-2.52C4.13 0 0 4.19 0 9.01s4.13 9.01 9.24 9.01c2.77 0 4.86-.91 6.5-2.6 1.7-1.7 2.23-4.08 2.23-6.02 0-.58-.05-1.15-.15-1.68H9.24zM24 6.2c-3.1 0-5.63 2.37-5.63 5.63s2.53 5.63 5.63 5.63 5.63-2.37 5.63-5.63S27.1 6.2 24 6.2zm0 9.05c-1.7 0-3.18-1.4-3.18-3.42 0-2.05 1.48-3.45 3.18-3.45 1.68 0 3.16 1.4 3.16 3.45 0 2.02-1.48 3.42-3.16 3.42zm12.5-9.05c-3.1 0-5.63 2.37-5.63 5.63s2.53 5.63 5.63 5.63 5.63-2.37 5.63-5.63S39.6 6.2 36.5 6.2zm0 9.05c-1.7 0-3.18-1.4-3.18-3.42 0-2.05 1.48-3.45 3.18-3.45 1.68 0 3.16 1.4 3.16 3.45 0 2.02-1.48 3.42-3.16 3.42zm11.75-8.68v.9h-.08c-.58-.7-1.7-1.32-3.1-1.32-2.95 0-5.48 2.58-5.48 5.65 0 3.05 2.53 5.63 5.48 5.63 1.4 0 2.52-.62 3.1-1.35h.08v.85c0 2.15-1.15 3.3-3 3.3-1.5 0-2.45-1.08-2.83-1.98l-2.15.9c.62 1.5 2.27 3.28 4.98 3.28 2.88 0 5.33-1.7 5.33-5.88V6.57h-2.33zm-2.87 8.68c-1.68 0-3.03-1.42-3.03-3.42 0-2.02 1.35-3.45 3.03-3.45 1.65 0 2.95 1.43 2.95 3.45 0 2-1.3 3.42-2.95 3.42zm7.77-12.75H55V17.1h2.45V2.45zm8.5 3.75c-2.8 0-4.73 1.25-5.95 3.6l2.18.9c.65-1.3 1.83-2.1 3.52-2.1 1.48 0 2.38.75 2.38 1.95v.35c-.52-.3-1.6-.72-2.95-.72-2.7 0-4.63 1.5-4.63 3.68 0 2 1.75 3.3 3.73 3.3 1.52 0 2.38-.68 2.9-1.48h.08v1.18h2.38V8.65c0-2.78-2.08-4.45-5.64-4.45zm-.4 9.05c-.9 0-2.15-.45-2.15-1.6 0-1.45 1.6-1.98 2.98-1.98 1.22 0 1.8.28 2.28.52-.25 1.8-1.68 3.06-3.11 3.06z" />
        </svg>
      </div>

      {/* Microsoft */}
      <div className="brand-logo-item" title="Microsoft">
        <svg height="20" viewBox="0 0 95 20" fill="currentColor">
          <g>
            <rect x="0" y="1" width="8.5" height="8.5" rx="0.5" fill="currentColor" />
            <rect x="10.5" y="1" width="8.5" height="8.5" rx="0.5" fill="currentColor" />
            <rect x="0" y="11.5" width="8.5" height="8.5" rx="0.5" fill="currentColor" />
            <rect x="10.5" y="11.5" width="8.5" height="8.5" rx="0.5" fill="currentColor" />
            <text x="26" y="15.5" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="-0.02em">Microsoft</text>
          </g>
        </svg>
      </div>

      {/* GitHub */}
      <div className="brand-logo-item" title="GitHub">
        <svg height="21" viewBox="0 0 85 22" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M11 0C4.92 0 0 4.92 0 11c0 4.87 3.15 8.98 7.52 10.44.55.1.76-.23.76-.52 0-.26-.01-1.13-.01-2.05-2.76.51-3.48-.67-3.7-1.29-.12-.32-.66-1.29-1.13-1.55-.38-.21-.93-.72-.01-.73.87-.01 1.48.8 1.69 1.13.99 1.66 2.57 1.2 3.2.91.1-.72.39-1.2.7-1.47-2.45-.28-5.01-1.23-5.01-5.43 0-1.2.43-2.19 1.13-2.96-.11-.28-.5-1.4.11-2.92 0 0 .92-.29 3.03 1.13.88-.25 1.82-.37 2.75-.37s1.87.12 2.75.37c2.11-1.43 3.03-1.13 3.03-1.13.61 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.96 0 4.22-2.57 5.15-5.02 5.43.4.34.74 1 .74 2.03 0 1.47-.01 2.65-.01 3.03 0 .29.21.63.76.52A11.02 11.02 0 0022 11c0-6.08-4.92-11-11-11z" />
          <text x="28" y="15.5" fontFamily="var(--font-sans)" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="-0.02em">GitHub</text>
        </svg>
      </div>

      {/* Notion */}
      <div className="brand-logo-item" title="Notion">
        <svg height="20" viewBox="0 0 78 20" fill="currentColor">
          <rect x="0" y="1" width="16" height="16" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.5 13.5V6l3.5 5 3.5-5v7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <text x="22" y="15" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="-0.02em">Notion</text>
        </svg>
      </div>

      {/* Figma */}
      <div className="brand-logo-item" title="Figma">
        <svg height="20" viewBox="0 0 72 20" fill="currentColor">
          <circle cx="3.5" cy="4.5" r="3" fill="currentColor" />
          <circle cx="9.5" cy="4.5" r="3" fill="currentColor" />
          <circle cx="3.5" cy="10" r="3" fill="currentColor" />
          <circle cx="9.5" cy="10" r="3" fill="currentColor" />
          <circle cx="3.5" cy="15.5" r="3" fill="currentColor" />
          <text x="18" y="15" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="-0.02em">Figma</text>
        </svg>
      </div>

      {/* Vercel */}
      <div className="brand-logo-item" title="Vercel">
        <svg height="18" viewBox="0 0 76 18" fill="currentColor">
          <path d="M8 1L16 15H0L8 1Z" fill="currentColor" />
          <text x="22" y="14" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="-0.02em">Vercel</text>
        </svg>
      </div>

      {/* Spotify */}
      <div className="brand-logo-item" title="Spotify">
        <svg height="20" viewBox="0 0 82 20" fill="currentColor">
          <circle cx="9" cy="10" r="8" fill="currentColor" />
          <path d="M5 7.5c2.4-.7 5.5-.5 7.7.9M5.5 10c2.1-.6 4.7-.4 6.6.8M6 12.6c1.7-.4 3.9-.3 5.5.6" stroke="#080c18" strokeWidth="1.4" strokeLinecap="round" />
          <text x="24" y="15" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="-0.02em">Spotify</text>
        </svg>
      </div>

      {/* Airbnb */}
      <div className="brand-logo-item" title="Airbnb">
        <svg height="20" viewBox="0 0 78 20" fill="currentColor">
          <path d="M9 1.5c-3 0-5.2 2.7-5.2 6.2 0 3.8 3.8 7.7 5.2 9.3 1.4-1.6 5.2-5.5 5.2-9.3 0-3.5-2.2-6.2-5.2-6.2zm0 8.2a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2z" fill="currentColor" />
          <text x="20" y="15" fontFamily="var(--font-sans)" fontWeight="800" fontSize="14" fill="currentColor" letterSpacing="-0.02em">airbnb</text>
        </svg>
      </div>
    </div>
  );
}
