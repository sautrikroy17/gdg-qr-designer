import React, { useState } from 'react';
import { PRESETS, TEMPLATE_CATEGORIES } from '../utils/presets';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function TemplatesGallery({ activePresetId, onSelectPresetAndEdit }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPresets = PRESETS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="templates-view-wrapper">
      <div className="templates-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Sparkles size={20} style={{ color: 'var(--accent-blue)' }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Beautiful Templates</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>
          Choose a professionally curated template and customize it to match your style.
        </p>

        {/* Category Filter Chips */}
        <div className="filter-chips-row">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="templates-grid">
        {filteredPresets.map((preset) => {
          const isActive = activePresetId === preset.id;

          return (
            <div
              key={preset.id}
              className={`template-card ${isActive ? 'active' : ''}`}
              onClick={() => onSelectPresetAndEdit(preset)}
              role="button"
              tabIndex={0}
            >
              {/* Visual Mini QR Preview Box */}
              <div
                className="template-thumb-preview"
                style={{
                  background: preset.backgroundColor === '#ffffff' ? '#ffffff' : preset.backgroundColor,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
                  {/* Corners */}
                  <rect
                    x="2"
                    y="2"
                    width="6"
                    height="6"
                    rx={preset.cornersSquareType === 'extra-rounded' ? 2 : 0}
                    stroke={preset.dotsColor}
                    strokeWidth="1.8"
                  />
                  <rect
                    x="3.8"
                    y="3.8"
                    width="2.4"
                    height="2.4"
                    rx={preset.cornersDotType === 'dot' ? 1.2 : 0}
                    fill={preset.dotsColor}
                  />

                  <rect
                    x="16"
                    y="2"
                    width="6"
                    height="6"
                    rx={preset.cornersSquareType === 'extra-rounded' ? 2 : 0}
                    stroke={preset.dotsColor}
                    strokeWidth="1.8"
                  />
                  <rect
                    x="17.8"
                    y="3.8"
                    width="2.4"
                    height="2.4"
                    rx={preset.cornersDotType === 'dot' ? 1.2 : 0}
                    fill={preset.dotsColor}
                  />

                  <rect
                    x="2"
                    y="16"
                    width="6"
                    height="6"
                    rx={preset.cornersSquareType === 'extra-rounded' ? 2 : 0}
                    stroke={preset.dotsColor}
                    strokeWidth="1.8"
                  />
                  <rect
                    x="3.8"
                    y="17.8"
                    width="2.4"
                    height="2.4"
                    rx={preset.cornersDotType === 'dot' ? 1.2 : 0}
                    fill={preset.dotsColor}
                  />

                  {/* Modules */}
                  <circle cx="11" cy="4" r="1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="11" cy="7" r="1" fill={preset.dotsColor} />
                  <circle cx="11" cy="11" r="1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="4" cy="11" r="1" fill={preset.dotsColor} />
                  <circle cx="7" cy="11" r="1" fill={preset.dotsColor} />
                  <circle cx="16" cy="11" r="1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="19" cy="11" r="1" fill={preset.dotsColor} />
                  <circle cx="11" cy="16" r="1" fill={preset.dotsColor} />
                  <circle cx="11" cy="19" r="1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="16" cy="16" r="1" fill={preset.dotsColor} />
                  <circle cx="19" cy="19" r="1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                </svg>
              </div>

              {/* Template Meta */}
              <div className="template-info">
                <h4>{preset.name}</h4>
                <p>{preset.description}</p>
              </div>

              <div style={{ marginTop: '0.85rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--accent-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  {isActive ? (
                    <>
                      <Check size={14} /> Active In Studio
                    </>
                  ) : (
                    <>
                      Use Template <ArrowRight size={14} />
                    </>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
