import React from 'react';
import { PRESETS } from '../utils/presets';
import { Sparkles } from 'lucide-react';

/**
 * PresetSelector Component
 * Allows users to quickly apply predefined visual presets (Midnight Neon, Classic, Google Blue, etc.)
 */
export default function PresetSelector({ activePresetId, onApplyPreset }) {
  return (
    <div className="presets-wrapper">
      <div className="card-header" style={{ marginBottom: '0.75rem' }}>
        <h3 className="card-title" style={{ fontSize: '0.92rem' }}>
          <Sparkles size={16} style={{ color: 'var(--accent-yellow)' }} />
          Design Presets
        </h3>
      </div>
      
      <div className="presets-grid">
        {PRESETS.map((preset) => {
          const isActive = activePresetId === preset.id;
          
          return (
            <button
              key={preset.id}
              type="button"
              className={`preset-chip ${isActive ? 'active' : ''}`}
              onClick={() => onApplyPreset(preset)}
              title={preset.description}
            >
              <div
                className="preset-swatch"
                style={{
                  background: preset.isGradient
                    ? `linear-gradient(135deg, ${preset.dotsColor}, ${preset.gradientColor2})`
                    : preset.dotsColor,
                  border: `2px solid ${preset.backgroundColor === '#ffffff' ? '#e2e8f0' : preset.backgroundColor}`
                }}
              />
              <div className="preset-info">
                <div className="preset-name">{preset.name}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
