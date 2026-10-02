/**
 * QRCraft Design Templates & Presets
 * Pre-configured styles categorized by design aesthetic.
 */

export const TEMPLATE_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'modern', label: 'Modern' },
  { id: 'gradient', label: 'Gradient' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'tech', label: 'Tech' },
  { id: 'nature', label: 'Nature' },
  { id: 'premium', label: 'Premium' },
];

export const PRESETS = [
  {
    id: 'classic-mono',
    name: 'Classic',
    category: 'minimal',
    description: 'Universal, ultra-scannable black on white',
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
    id: 'modern-blue',
    name: 'Modern',
    category: 'modern',
    description: 'Clean Google Tech Blue with rounded modules',
    dotsColor: '#3882f6',
    backgroundColor: '#ffffff',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#3882f6'
  },
  {
    id: 'midnight-neon',
    name: 'Midnight Neon',
    category: 'tech',
    description: 'Electric cyan gradient on dark obsidian',
    dotsColor: '#00f2fe',
    backgroundColor: '#070a14',
    dotsType: 'dots',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'linear',
    gradientColor2: '#4facfe'
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    category: 'gradient',
    description: 'Warm coral to golden gradient',
    dotsColor: '#ff416c',
    backgroundColor: '#ffffff',
    dotsType: 'classy-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'linear',
    gradientColor2: '#ff4b2b'
  },
  {
    id: 'emerald-tech',
    name: 'Emerald Tech',
    category: 'tech',
    description: 'Lush cyber emerald on deep matrix card',
    dotsColor: '#10b981',
    backgroundColor: '#041e17',
    dotsType: 'classy',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#10b981'
  },
  {
    id: 'royal-violet',
    name: 'Royal Violet',
    category: 'premium',
    description: 'Deep royal amethyst purple with sleek styling',
    dotsColor: '#8b5cf6',
    backgroundColor: '#0e091b',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'linear',
    gradientColor2: '#c084fc'
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    category: 'modern',
    description: 'Frosted crystal aesthetic with electric indigo',
    dotsColor: '#6366f1',
    backgroundColor: '#ffffff',
    dotsType: 'dots',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'radial',
    gradientColor2: '#8b5cf6'
  },
  {
    id: 'gradient-wave',
    name: 'Gradient Wave',
    category: 'gradient',
    description: 'Fluid magenta into cosmic cyan',
    dotsColor: '#ec4899',
    backgroundColor: '#ffffff',
    dotsType: 'classy-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: true,
    gradientType: 'linear',
    gradientColor2: '#06b6d4'
  },
  {
    id: 'nature-leaf',
    name: 'Nature Leaf',
    category: 'nature',
    description: 'Botanical leaf green with organic rounded dots',
    dotsColor: '#22c55e',
    backgroundColor: '#f0fdf4',
    dotsType: 'extra-rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#15803d'
  }
];

export const GRADIENT_PRESETS = [
  { id: 'grad-blue', label: 'Ocean Blue', color1: '#3882f6', color2: '#1d4ed8' },
  { id: 'grad-sunset', label: 'Sunset Fire', color1: '#ff416c', color2: '#ff4b2b' },
  { id: 'grad-amber', label: 'Amber Glow', color1: '#f59e0b', color2: '#ef4444' },
  { id: 'grad-cyan', label: 'Cyber Cyan', color1: '#00f2fe', color2: '#4facfe' },
  { id: 'grad-purple', label: 'Neon Purple', color1: '#8b5cf6', color2: '#ec4899' },
];
