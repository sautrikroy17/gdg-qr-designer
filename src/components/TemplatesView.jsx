import React, { useState } from 'react';
import { PRESETS, TEMPLATE_CATEGORIES } from '../utils/presets';
import { Sparkles, ArrowRight, Check, Palette } from 'lucide-react';
import { playTap, playSuccessChime } from '../utils/soundEffects';

export default function TemplatesView({ activePresetId, onSelectPresetAndEdit }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPresets = PRESETS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleSpotlightMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="view-page-container">
      {/* Background Ambient Cosmic Glows & Atmospheric Backdrop */}
      <div className="landing-ambient-canvas" style={{ height: '650px' }}>
        <img src="/projects-workspace.webp" alt="" className="section-ambient-img" />
        <div className="section-ambient-vignette" />
        <div className="light-streak-blue" />
        <div className="light-streak-purple" />
      </div>

      {/* Page Header */}
      <div className="view-header-centered">
        <div className="purpose-badge-pill">
          <Palette size={13} style={{ color: '#ffffff' }} />
          <span>Curated Design Collection</span>
        </div>
        <h1 className="view-main-heading">
          Beautiful <span className="headline-gradient-word">Templates</span>
        </h1>
        <p className="view-sub-heading">
          Choose a professionally designed preset and customize it to match your exact brand or project.
        </p>

        {/* Filter Pills */}
        <div className="filter-chips-cluster">
          {TEMPLATE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                playTap();
                setSelectedCategory(cat.id);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 9 Templates Matching Reference Design */}
      <div className="templates-showcase-grid">
        {filteredPresets.map((preset) => {
          const isActive = activePresetId === preset.id;

          return (
            <div
              key={preset.id}
              className={`template-showcase-card spotlight-card ${isActive ? 'active-ring' : ''}`}
              onMouseMove={handleSpotlightMouseMove}
              onClick={() => {
                playSuccessChime();
                onSelectPresetAndEdit(preset);
              }}
              role="button"
              tabIndex={0}
            >
              {/* Thumbnail Container */}
              <div
                className="template-card-preview-box"
                style={{
                  background: preset.backgroundColor === '#ffffff' ? '#ffffff' : preset.backgroundColor,
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                  {/* Finder Square 1 */}
                  <rect
                    x="2"
                    y="2"
                    width="6.5"
                    height="6.5"
                    rx={preset.cornersSquareType === 'extra-rounded' ? 2 : 0}
                    stroke={preset.dotsColor}
                    strokeWidth="1.8"
                  />
                  <rect
                    x="4"
                    y="4"
                    width="2.5"
                    height="2.5"
                    rx={preset.cornersDotType === 'dot' ? 1.25 : 0}
                    fill={preset.dotsColor}
                  />

                  {/* Finder Square 2 */}
                  <rect
                    x="15.5"
                    y="2"
                    width="6.5"
                    height="6.5"
                    rx={preset.cornersSquareType === 'extra-rounded' ? 2 : 0}
                    stroke={preset.dotsColor}
                    strokeWidth="1.8"
                  />
                  <rect
                    x="17.5"
                    y="4"
                    width="2.5"
                    height="2.5"
                    rx={preset.cornersDotType === 'dot' ? 1.25 : 0}
                    fill={preset.dotsColor}
                  />

                  {/* Finder Square 3 */}
                  <rect
                    x="2"
                    y="15.5"
                    width="6.5"
                    height="6.5"
                    rx={preset.cornersSquareType === 'extra-rounded' ? 2 : 0}
                    stroke={preset.dotsColor}
                    strokeWidth="1.8"
                  />
                  <rect
                    x="4"
                    y="17.5"
                    width="2.5"
                    height="2.5"
                    rx={preset.cornersDotType === 'dot' ? 1.25 : 0}
                    fill={preset.dotsColor}
                  />

                  {/* Dynamic Modules */}
                  <circle cx="11" cy="4" r="1.1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="11" cy="7.5" r="1.1" fill={preset.dotsColor} />
                  <circle cx="11" cy="11" r="1.1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="4" cy="11" r="1.1" fill={preset.dotsColor} />
                  <circle cx="7.5" cy="11" r="1.1" fill={preset.dotsColor} />
                  <circle cx="16.5" cy="11" r="1.1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="20" cy="11" r="1.1" fill={preset.dotsColor} />
                  <circle cx="11" cy="16.5" r="1.1" fill={preset.dotsColor} />
                  <circle cx="11" cy="20" r="1.1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                  <circle cx="16.5" cy="16.5" r="1.1" fill={preset.dotsColor} />
                  <circle cx="20" cy="20" r="1.1" fill={preset.isGradient ? preset.gradientColor2 : preset.dotsColor} />
                </svg>
              </div>

              {/* Title & Desc */}
              <div className="template-card-meta">
                <h4 className="template-card-name">{preset.name}</h4>
                <p className="template-card-desc">{preset.description}</p>
              </div>

              {/* Action */}
              <div className="template-card-cta">
                <span>{isActive ? 'Active in Studio' : 'Customize Template'}</span>
                {isActive ? <Check size={14} /> : <ArrowRight size={14} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
