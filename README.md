# QRCraft — High-Precision QR Generator & Visual Studio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-qrcraft--studio.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://qrcraft-studio.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Privacy](https://img.shields.io/badge/Zero--Backend-100%25%20Client--Side-10B981?style=for-the-badge)](https://qrcraft-studio.vercel.app)
[![Audit](https://img.shields.io/badge/W3C%20WCAG%202.1-Relative%20Luminance-F59E0B?style=for-the-badge)](https://www.w3.org/TR/WCAG21/)
[![License](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)](LICENSE)

An ultra-modern, zero-backend QR code generation and visual design workstation built with **React 19**, **HTML5 Canvas & SVG**, **Web Audio API**, and **Vanilla CSS**. Engineered for total user privacy, sub-millisecond real-time rendering, Reed-Solomon polynomial error correction safeguard, and mathematical scannability verification.

---

## 🚀 Live Deployments

- **Production Primary**: [https://qrcraft-studio.vercel.app](https://qrcraft-studio.vercel.app)
- **Production Mirror**: [https://qrcraft-app.vercel.app](https://qrcraft-app.vercel.app)

---

## ✨ Key Features & Architecture

### 🔒 1. 100% Client-Side Privacy (Zero Backend)
- **Pure In-Memory Processing**: All matrix calculations, vector paths, and raster blobs are computed directly in the browser's JavaScript execution thread.
- **Zero Telemetry**: Sensitive Wi-Fi credentials, private contact vCards, and internal company links never cross a network wire or hit external servers.
- **Offline Capable**: Functions seamlessly without active internet connectivity once cached.

### 🌐 2. Standardized Multi-Protocol Engine
Strictly adheres to international RFC standards for seamless scanning across iOS Camera, Google Lens, and Android ZXing decoders:
- **Website URLs**: Automatic protocol sanitization (`https://`) and URI encoding.
- **Wi-Fi Networks (ZXing standard)**: Automated regex escaping (`str.replace(/([\\;,:"'])/g, '\\$1')`) to prevent delimiter collision on complex WPA/WPA2/WPA3 passwords.
- **vCard 3.0**: Electronic business cards directly importable into Apple Contacts and Google Contacts.
- **Email (RFC 6068)**: Standardized `mailto:` URIs with URL-encoded subject and pre-filled body text.
- **Phone (RFC 3966)**: International `tel:` syntax for one-tap dialing.
- **Geolocation**: Coordinates formatted as `geo:lat,lng` and Google Maps query strings.
- **Plain Text**: Unformatted raw strings, cryptographic keys, and notes.

### 🎨 3. Precision Visual Design Studio
- **6 Module Patterns**: *Rounded*, *Dots*, *Classy*, *Smooth*, *Square*, and *Bubbles*.
- **Corner Eye Customization**: Independent inner dot and outer square styling (*Sharp*, *Rounded*, *Circle*).
- **12 Curated Color Palettes**: Dual-stop linear gradients with customizable rotation angles (0° to 360°), plus custom foreground/background pickers with human-readable color labels (e.g., `Pure White` for `#ffffff`, `Electric Blue` for `#2563eb`).
- **Brand Logo Integration**: Embed custom brand graphics into the central matrix with instant Base64 ingestion and margin padding controls.

### 🛡️ 4. W3C WCAG 2.1 Contrast & Scannability Auditor
- **Real-Time Mathematical Audit**: Computes relative luminance over gamma-expanded sRGB color channels using the official W3C formula ($L = 0.2126R + 0.7152G + 0.0722B$).
- **Instant Safety Badges**: Warns users against low-contrast or inverted color combinations (*Warning: Light foreground on dark background may fail on budget optical sensors*).

### 📐 5. Automated Reed-Solomon Fail-Safe
- Full support for all 4 error correction levels: **L** (7%), **M** (15%), **Q** (25%), and **H** (30%).
- **Automated Level H Guard**: Embedding a central logo automatically elevates error correction to **Level H (30%)**, ensuring redundant parity codewords recover modules obscured by the logo graphic.

### 🔊 6. Synthesized Procedural Acoustics (Web Audio API)
- **0 KB Asset Overhead**: All sound effects (haptic clicks, pop selections, laser scan sweeps, success chimes) are generated mathematically using Web Audio oscillators, biquad filters, and gain ramps.
- **Zero Network Latency**: Zero audio file requests, instant trigger response, and a global mute toggle.

### ⚡ 7. Modern Clipboard & Multi-Format Exporter
- **Direct Async Image Copy**: Uses `navigator.clipboard.write([new ClipboardItem({'image/png': blob})])` to copy rendered PNG images directly to the system clipboard for immediate pasting into Figma, Slack, Notion, or Canva.
- **Infinite-Resolution Vector SVG**: Outputs crisp, resolution-independent vector graphics for billboard printing, laser engraving, and packaging.
- **High-DPI PNG**: Crisp raster exports accompanied by celebratory confetti animations.

### 📱 8. Real-World Mockup Previews & Laser Simulator
- **Interactive Destination Banner**: The live mobile preview displays a real-time banner that can be tapped to launch the destination URL in a new tab.
- **Perspective Environmental Scenes**: Preview the generated code in realistic context (*Cafe Table Stand* and *Minimal Desk Setup*).
- **Interactive Laser Scan Simulator**: Tap the QR canvas to trigger a laser beam sweep verifying visual optical alignment.

### 🎛️ 9. Full Studio Workspace & Navigation
- **Studio Generator**: The primary design and payload workstation.
- **Design Presets**: 9 curated ready-to-use themes organized by category.
- **Recent History**: Persistent LocalStorage session log with live search, one-click config restoration, and copy actions.
- **Studio Preferences**: Integrated workspace control for sound toggles, theme switching, default export formats, and storage maintenance.
- **Global Command Palette (`⌘K` / `Ctrl+K`)**: Keyboard-first navigation to switch modes, apply presets, and export without lifting hands from the keyboard.

### 📱 10. Responsive Multi-Device Architecture (Desktop, Tablet & Mobile)
- **Native-Style Mobile Bottom App Dock**: On screen widths $\le 900px$, the studio sidebar transforms into a fixed, native-style bottom app navigation dock with haptic feedback, granting 100% of the screen width to the generator and live preview.
- **Mobile-First Workspace Layout**: Prioritizes the live QR canvas stage at the top of the mobile screen (`order: -1`), allowing users to observe design mutations in real-time and export instantly without scrolling past all form controls.
- **Momentum Touch Scrolling**: Horizontal momentum scrolling (`-webkit-overflow-scrolling: touch`) across content-type selectors, styling subtabs, and session history tables.
- **Viewport-Safe 3D Pedestal Scaling**: Dynamically scaled perspective geometry eliminating horizontal overflow on iOS Safari and Android Chrome.

---

## 📁 Repository Structure

```
qrcraft/
├── public/                     # Static production assets & mockups
│   ├── about-workspace.webp    # Candidate bio & viva defense ambient art
│   ├── experience-workspace.webp# Interactive studio preview backdrop
│   ├── favicon.svg             # Custom SVG brandmark
│   ├── hero-workspace.webp     # Landing hero ambient backdrop
│   ├── mockup-cafe.jpg         # Photorealistic cafe table scene
│   ├── mockup-desk.jpg         # Photorealistic desk scene
│   ├── projects-workspace.webp # Templates ambient backdrop
│   ├── sidebar-qr-art.jpg      # Studio sidebar blended art
│   └── skills-workspace.webp   # Features view ambient backdrop
├── src/
│   ├── components/             # Modular React UI components
│   │   ├── AboutView.jsx       # Candidate profile & Technical Viva defense
│   │   ├── BrandLogo.jsx       # Custom SVG vector logo (3 QR finder eyes + spark)
│   │   ├── CommandPalette.jsx  # Global ⌘K quick-action launcher
│   │   ├── FeaturesView.jsx    # Feature matrix & protocol breakdown
│   │   ├── Footer.jsx          # Site footer with quick links
│   │   ├── GeneratorView.jsx   # Studio editor (Type selector & styling accordions)
│   │   ├── HeroLanding.jsx     # Landing hero section with live 3D preview
│   │   ├── InteractiveDemoModal.jsx # Guided product walkthrough modal
│   │   ├── LivePreviewCard.jsx # Canvas preview, W3C auditor, mockups & export
│   │   ├── RecentCodesTable.jsx# Tabular history viewer
│   │   ├── SettingsModal.jsx   # Quick preferences modal
│   │   ├── Sidebar.jsx         # Left-hand studio tool navigation dock
│   │   ├── SignInModal.jsx     # Candidate sign-in modal
│   │   ├── StudioHeader.jsx    # Studio top toolbar (Exit, Reset, Theme, Sound)
│   │   ├── StudioPreferencesView.jsx # Dedicated preferences workstation
│   │   ├── StudioRecentView.jsx# Dedicated recent history workstation
│   │   ├── TemplatesView.jsx   # Curated preset gallery
│   │   ├── Toast.jsx           # Floating alert notifications
│   │   └── TopNavbar.jsx       # Sticky header with scroll progress & theme toggle
│   ├── utils/                  # Pure algorithmic utilities
│   │   ├── contrastValidator.js# W3C WCAG 2.1 relative luminance & contrast engine
│   │   ├── presets.js          # Curated color palettes & preset themes
│   │   ├── qrPayload.js        # RFC 6068, RFC 3966 & ZXing payload formatters
│   │   └── soundEffects.js     # Synthesized Web Audio API sound engine
│   ├── App.jsx                 # Top-level state coordinator & routing controller
│   ├── index.css               # Complete Vanilla CSS design system
│   ├── mobile.css              # Dedicated mobile & tablet responsive stylesheet
│   └── main.jsx                # React 19 entry point
├── .gitignore                  # Clean exclusion rules
├── index.html                  # HTML5 skeleton with preconnected Google Fonts
├── LICENSE                     # MIT License
├── package.json                # Project manifest and scripts
├── vercel.json                 # Vercel SPA routing configuration
└── vite.config.js              # Vite build configuration
```

---

## 🛠️ Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- `npm` (v9 or higher)

### Installation & Local Run

```bash
# 1. Clone the repository
git clone https://github.com/sautrikroy17/gdg-qr-designer.git
cd gdg-qr-designer

# 2. Install dependencies
npm install

# 3. Launch development server
npm run dev
```

The application will be live at `http://localhost:5173`.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The optimized production bundle is compiled into `dist/` in under 200ms.

---

## 🛡️ Mathematical & Algorithmic Foundations

### 1. W3C WCAG 2.1 Relative Luminance Algorithm
Human perception of lightness is non-linear. To compute relative luminance, 8-bit sRGB channels ($c \in [0, 1]$) are gamma-expanded:

$$c_{\text{linear}} = \begin{cases} \frac{c}{12.92} & \text{if } c \le 0.04045 \\ \left(\frac{c + 0.055}{1.055}\right)^{2.4} & \text{if } c > 0.04045 \end{cases}$$

Relative luminance ($L$) is then calculated using photopic spectral sensitivity coefficients:

$$L = 0.2126 \cdot R_{\text{linear}} + 0.7152 \cdot G_{\text{linear}} + 0.0722 \cdot B_{\text{linear}}$$

The contrast ratio between lighter luminance ($L_1$) and darker luminance ($L_2$) is:

$$\text{Contrast Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05}$$

### 2. Reed-Solomon Error Correction Over $GF(2^8)$
QR codes encode binary payloads into generator polynomial coefficients over the Galois Field $GF(2^8)$. Parity codewords generated by polynomial long division allow decoders using the Berlekamp-Massey algorithm to locate and correct damaged or occluded modules. When a central brand graphic is embedded, QRCraft's automated guard forces **Level H (30%)** recovery capacity to guarantee scan reliability.

---

## 👨‍💻 Candidate Profile

**Sautrik Roy**  
- **Portfolio**: [https://sautrikroy.me](https://sautrikroy.me)  
- **GitHub**: [@sautrikroy17](https://github.com/sautrikroy17)  
- **Institution**: 2nd Year B.Tech CSE, SRM Institute of Science and Technology (Batch of 2027)  
- **Honors**: Smart India Hackathon (SIH) 2026 Top 100 Finalist • Microsoft Learn Student Ambassador (MLSA)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
