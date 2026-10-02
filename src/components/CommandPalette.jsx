import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Wand2,
  LayoutGrid,
  Zap,
  Download,
  Copy,
  Sun,
  Moon,
  RotateCcw,
  ExternalLink,
  Sliders,
  Sparkles,
  X,
  CornerDownLeft,
  Volume2,
  VolumeX
} from 'lucide-react';

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenStudio,
  onOpenTemplates,
  onOpenFeatures,
  onToggleTheme,
  theme,
  onExportPNG,
  onExportSVG,
  onCopyImage,
  onResetFactory,
  onOpenSettings,
  soundEnabled,
  onToggleSound
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'open-studio',
      title: 'Open Studio Workspace',
      subtitle: 'Configure payload, custom styling, and geometry in real-time',
      icon: Wand2,
      category: 'Navigation',
      action: onOpenStudio,
      shortcut: 'S'
    },
    {
      id: 'open-templates',
      title: 'Browse Design Templates',
      subtitle: 'Explore 12+ curated presets with one-click styling',
      icon: LayoutGrid,
      category: 'Navigation',
      action: onOpenTemplates,
      shortcut: 'T'
    },
    {
      id: 'open-features',
      title: 'Engineering Architecture',
      subtitle: 'Review Reed-Solomon redundancy & W3C compliance algorithms',
      icon: Zap,
      category: 'Navigation',
      action: onOpenFeatures,
      shortcut: 'F'
    },
    {
      id: 'export-png',
      title: 'Export High-Res PNG',
      subtitle: 'Render and download 2000px crisp PNG raster file',
      icon: Download,
      category: 'Actions',
      action: onExportPNG,
      shortcut: '⌘E'
    },
    {
      id: 'export-svg',
      title: 'Export Infinite SVG',
      subtitle: 'Download vector file scalable to infinite billboard dimensions',
      icon: Download,
      category: 'Actions',
      action: onExportSVG,
      shortcut: '⇧⌘E'
    },
    {
      id: 'copy-image',
      title: 'Copy QR to Clipboard',
      subtitle: 'Write PNG binary directly into system clipboard',
      icon: Copy,
      category: 'Actions',
      action: onCopyImage,
      shortcut: '⌘C'
    },
    {
      id: 'toggle-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle theme appearance with W3C contrast preservation',
      icon: theme === 'dark' ? Sun : Moon,
      category: 'Preferences',
      action: onToggleTheme,
      shortcut: '⌘D'
    },
    {
      id: 'reset-defaults',
      title: 'Reset to Factory Defaults',
      subtitle: 'Restore default Tech Blue colors and rounded dot modules',
      icon: RotateCcw,
      category: 'Preferences',
      action: onResetFactory,
      shortcut: '⌘R'
    },
    ...(onToggleSound
      ? [
          {
            id: 'toggle-sound',
            title: soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects',
            subtitle: soundEnabled ? 'Disable synthesized audio haptics' : 'Enable rich tactile audio clicks & chimes',
            icon: soundEnabled ? VolumeX : Volume2,
            category: 'Preferences',
            action: onToggleSound,
            shortcut: 'M'
          }
        ]
      : []),
    {
      id: 'open-settings',
      title: 'Open Studio Settings',
      subtitle: 'Manage local storage, default formats, and cache memory',
      icon: Sliders,
      category: 'Preferences',
      action: onOpenSettings,
      shortcut: '⌘,'
    },
    {
      id: 'open-github',
      title: 'View GitHub Repository',
      subtitle: 'github.com/sautrikroy17/gdg-qr-designer',
      icon: ExternalLink,
      category: 'Links',
      action: () => window.open('https://github.com/sautrikroy17/gdg-qr-designer', '_blank')
    }
  ];

  const filteredActions = actions.filter((act) => {
    const q = query.toLowerCase();
    return (
      act.title.toLowerCase().includes(q) ||
      act.subtitle.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation inside palette
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div
        className="command-palette-card"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="palette-input-wrap">
          <Search size={18} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-search-input"
            placeholder="Type a command or search action... (Press ↵ to run, Esc to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className="palette-clear-btn"
              onClick={() => setQuery('')}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="palette-results-list" role="listbox">
          {filteredActions.length === 0 ? (
            <div className="palette-empty-state">
              <Sparkles size={20} style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }} />
              <p>No matching commands found for "{query}"</p>
            </div>
          ) : (
            filteredActions.map((act, idx) => {
              const Icon = act.icon;
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={act.id}
                  className={`palette-action-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => {
                    act.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="palette-action-icon-box">
                    <Icon size={16} />
                  </div>

                  <div className="palette-action-text-box">
                    <div className="palette-action-title">
                      <span>{act.title}</span>
                      <span className="palette-category-badge">{act.category}</span>
                    </div>
                    <div className="palette-action-subtitle">{act.subtitle}</div>
                  </div>

                  <div className="palette-action-shortcut">
                    {act.shortcut ? (
                      <kbd className="palette-kbd">{act.shortcut}</kbd>
                    ) : (
                      isSelected && <CornerDownLeft size={13} className="palette-enter-icon" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint Strip */}
        <div className="palette-footer-strip">
          <div className="palette-hints-left">
            <span><kbd className="palette-micro-kbd">↑</kbd><kbd className="palette-micro-kbd">↓</kbd> Navigate</span>
            <span><kbd className="palette-micro-kbd">↵</kbd> Select</span>
            <span><kbd className="palette-micro-kbd">Esc</kbd> Close</span>
          </div>
          <span className="palette-brand-tag">QRCraft Studio Command Engine</span>
        </div>
      </div>
    </div>
  );
}
