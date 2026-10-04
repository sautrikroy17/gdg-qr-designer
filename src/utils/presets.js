/**
 * QRCraft Design Templates & Presets
 * Pre-configured styles categorized by design aesthetic.
 * Minimalist, elegant, and ultra-scannable design system.
 */

export const TEMPLATE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'modern', label: 'Modern' },
  { id: 'gradient', label: 'Gradient' },
  { id: 'tech', label: 'Tech' },
  { id: 'nature', label: 'Nature' },
  { id: 'premium', label: 'Premium' },
];

export const PRESETS = [
  {
    id: 'classic-mono',
    name: 'Classic Mono',
    category: 'minimal',
    description: 'Universal, ultra-scannable black on pure white',
    dotsColor: '#000000',
    backgroundColor: '#ffffff',
    dotsType: 'square',
    cornersSquareType: 'square',
    cornersDotType: 'square',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#000000'
  },
  {
    id: 'modern-slate',
    name: 'Modern Slate',
    category: 'modern',
    description: 'Refined deep slate with rounded geometric modules',
    dotsColor: '#1e293b',
    backgroundColor: '#ffffff',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#1e293b'
  },
  {
    id: 'dark-obsidian',
    name: 'Dark Obsidian',
    category: 'tech',
    description: 'Crisp silver modules on deep obsidian substrate',
    dotsColor: '#f8fafc',
    backgroundColor: '#090d16',
    dotsType: 'dots',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'linear',
    gradientColor2: '#cbd5e1'
  },
  {
    id: 'subtle-silver',
    name: 'Subtle Silver',
    category: 'minimal',
    description: 'Charcoal modules on sleek off-white canvas',
    dotsColor: '#334155',
    backgroundColor: '#f8fafc',
    dotsType: 'classy-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#334155'
  },
  {
    id: 'refined-cobalt',
    name: 'Refined Cobalt',
    category: 'modern',
    description: 'Professional understated cobalt on crisp white',
    dotsColor: '#1d4ed8',
    backgroundColor: '#ffffff',
    dotsType: 'classy',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#1d4ed8'
  },
  {
    id: 'matte-titanium',
    name: 'Matte Titanium',
    category: 'premium',
    description: 'Metallic slate linear gradient with architectural finish',
    dotsColor: '#475569',
    backgroundColor: '#ffffff',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'linear',
    gradientColor2: '#1e293b'
  },
  {
    id: 'glassmorphism',
    name: 'Frosted Glass',
    category: 'modern',
    description: 'Soft charcoal radial gradient on crystal white',
    dotsColor: '#334155',
    backgroundColor: '#ffffff',
    dotsType: 'dots',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'radial',
    gradientColor2: '#0f172a'
  },
  {
    id: 'pure-graphite',
    name: 'Pure Graphite',
    category: 'minimal',
    description: 'Sleek dark graphite with smooth rounded corners',
    dotsColor: '#18181b',
    backgroundColor: '#ffffff',
    dotsType: 'classy-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#18181b'
  },
  {
    id: 'nature-sage',
    name: 'Nature Sage',
    category: 'nature',
    description: 'Botanical muted forest green on clean off-white',
    dotsColor: '#166534',
    backgroundColor: '#f8fafc',
    dotsType: 'extra-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#14532d'
  }
];

export const GRADIENT_PRESETS = [
  { id: 'grad-slate', label: 'Slate Mist', color1: '#475569', color2: '#0f172a' },
  { id: 'grad-silver', label: 'Silver Sheen', color1: '#94a3b8', color2: '#334155' },
  { id: 'grad-obsidian', label: 'Dark Obsidian', color1: '#27272a', color2: '#09090b' },
  { id: 'grad-graphite', label: 'Matte Graphite', color1: '#52525b', color2: '#18181b' },
  { id: 'grad-titanium', label: 'Titanium Shadow', color1: '#64748b', color2: '#1e293b' },
];
