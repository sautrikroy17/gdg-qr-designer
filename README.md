# QRCraft — High-Precision QR Generator & Visual Studio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-qrcraft--studio.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://qrcraft-studio.vercel.app)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)](LICENSE)

An ultra-modern, zero-backend QR code generation and visual design workstation built with **React 19**, **HTML5 Canvas & SVG**, **Web Audio API**, and **Vanilla CSS**. Engineered for total user privacy, sub-millisecond real-time rendering, and mathematical scannability verification.

---

## 🚀 Live Production

- **Primary Application**: [https://qrcraft-studio.vercel.app](https://qrcraft-studio.vercel.app)
- **Deployment Mirror**: [https://qrcraft-app.vercel.app](https://qrcraft-app.vercel.app)

---

## ✨ Key Features

- **🔒 100% Client-Side Memory Execution (Zero Backend)**:
  - Generates all matrix payloads, vector paths, and raster blobs directly in-browser memory.
  - Zero telemetry, zero external API latency, and zero tracking—sensitive Wi-Fi passwords, private contact cards, and authentication tokens never leave the user's device.

- **🌐 Standardized Multi-Protocol Engine**:
  - **Website URLs**: Automatic protocol validation and sanitization.
  - **Wi-Fi Networks (ZXing)**: Automated regex escaping (`str.replace(/([\\;,:"'])/g, '\\$1')`) preventing premature field termination on complex passwords.
  - **Email (RFC 6068)**: Native `mailto:` URI with subject and body encoding.
  - **Phone (RFC 3966)**: International `tel:` formatting.
  - **Electronic Contact Cards (vCard 3.0)**: Direct address book integration for mobile devices.
  - **Geolocation**: Precise Google Maps API coordinates and landmark search.
  - **Plain Text**: Unrestricted alphanumeric strings and keys.

- **🎨 Precision Visual Studio**:
  - 6 selectable body module patterns: *Rounded*, *Dots*, *Classy*, *Smooth*, *Square*, and *Bubbles*.
  - Independent corner square and corner dot styling (Sharp, Rounded, Circle).
  - Rich color palettes with dual-stop linear gradients and angle adjustment.
  - Custom brand logo integration with in-memory Base64 data-URL ingestion.

- **🛡️ W3C WCAG 2.1 Contrast Auditor**:
  - Implements the W3C relative luminance formula ($L = 0.2126R + 0.7152G + 0.0722B$) over gamma-expanded sRGB channels to audit contrast ratios in real time.
  - Issues instant safety ratings (*Great*, *Warning*, *Danger*) and flags inverted color palettes before printing.

- **📐 Reed-Solomon Automated Fail-Safe**:
  - Full support for polynomial error correction levels: **L** (7%), **M** (15%), **Q** (25%), and **H** (30%).
  - Uploading a center logo automatically elevates the error correction level to **Level H (30%)**, mathematically restoring central modules obscured by the brand graphic.

- **🔊 Synthesized Procedural Acoustics (Web Audio API)**:
  - Procedural sound synthesizer creating tactile mechanical keypresses, selection pops, laser scan sweeps, and success chimes in memory.
  - **0 KB audio files**: Zero network requests and zero asset latency.

- **⚡ Modern Async Clipboard & Multi-Format Exporter**:
  - Direct image copy to system clipboard using `navigator.clipboard.write([new ClipboardItem({'image/png': blob})])` for instant `Ctrl+V` pasting into Figma, Slack, or Canva.
  - Infinite-resolution SVG vector exports for billboard printing and laser engraving.
  - High-resolution PNG raster exports with celebratory confetti animations.

- **⌨️ Power-User Command Palette (⌘K)**:
  - Quick-search modal accessible via `⌘K` or `Ctrl+K` for rapid keyboard navigation, template switching, and export triggering.

---

## 📁 Repository Structure

```
gdg-qr-designer/
├── public/                  # Static assets and favicons
├── src/
│   ├── components/          # Production React UI components
│   │   ├── AboutView.jsx    # Candidate profile & Technical Viva defense
│   │   ├── BrandLogo.jsx    # Custom SVG brandmark (3 QR finder eyes + craft spark)
│   │   ├── CommandPalette.jsx # Global ⌘K quick-action launcher
│   │   ├── FeaturesView.jsx # Technical feature showcase section
│   │   ├── Footer.jsx       # Site footer with quick links
│   │   ├── GeneratorView.jsx# Workstation editor (Type selector & styling accordions)
│   │   ├── HeroLanding.jsx  # Hero landing page with 3D pedestal & live HUD
│   │   ├── InteractiveDemoModal.jsx # Live walkthrough modal
│   │   ├── LivePreviewCard.jsx # Canvas preview, W3C auditor & export stage
│   │   ├── RecentCodesTable.jsx # LocalStorage session history manager
│   │   ├── SettingsModal.jsx# Global studio preferences modal
│   │   ├── Sidebar.jsx      # Left-hand studio tool navigation dock
│   │   ├── SignInModal.jsx  # Candidate session modal
│   │   ├── StudioHeader.jsx # Studio top toolbar (Back to Home, Reset, Theme)
│   │   ├── TemplatesView.jsx# Curated QR design gallery
│   │   ├── Toast.jsx        # Floating alert notifications
│   │   └── TopNavbar.jsx    # Sticky navigation header with scroll progress bar
│   ├── utils/               # Pure algorithmic utilities
│   │   ├── contrastValidator.js # W3C WCAG 2.1 relative luminance & contrast auditor
│   │   ├── presets.js       # Curated color palettes & design themes
│   │   ├── qrPayload.js     # Standardized URI formatters (RFC 6068, RFC 3966, ZXing)
│   │   └── soundEffects.js  # Synthesized Web Audio API sound engine
│   ├── App.jsx              # Top-level state coordinator & routing controller
│   ├── index.css            # Complete Vanilla CSS design token system
│   └── main.jsx             # React 19 entry point
├── .gitignore               # Clean exclusion rules
├── index.html               # HTML5 skeleton with Google Fonts preconnects
├── LICENSE                  # MIT License
├── package.json             # Manifest and dependencies
├── vercel.json              # Vercel SPA routing configuration
└── vite.config.js           # Vite build configuration
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
npm run build
```

The optimized production bundle will be built in the `dist/` directory in under 200ms.

---

## 🛡️ Mathematical & Architectural Foundations

### 1. W3C WCAG 2.1 Relative Luminance Algorithm
Color perception in human photopic vision is non-linear. To compute relative luminance, 8-bit sRGB channels are gamma-expanded:

$$c_{\text{linear}} = \begin{cases} \frac{c}{12.92} & \text{if } c \le 0.04045 \\ \left(\frac{c + 0.055}{1.055}\right)^{2.4} & \text{if } c > 0.04045 \end{cases}$$

Relative luminance ($L$) is calculated using photopic spectral sensitivity weights:

$$L = 0.2126 \cdot R_{\text{linear}} + 0.7152 \cdot G_{\text{linear}} + 0.0722 \cdot B_{\text{linear}}$$

The contrast ratio is calculated as:

$$\text{Ratio} = \frac{L_{\text{lighter}} + 0.05}{L_{\text{darker}} + 0.05}$$

### 2. Reed-Solomon Error Correction Over Galois Field $GF(2^8)$
QR codes encode binary data as coefficients of a polynomial over $GF(2^8)$. Parity codewords generated by polynomial long division allow decoders to solve a system of linear equations, detecting and correcting damaged modules. When an image logo is embedded over central modules, QRCraft's automated guard forces **Level H (30%)** to mathematically restore the obscured data without decode failure.

---

## 👨‍💻 Author

**Sautrik Roy**  
- **GitHub**: [@sautrikroy17](https://github.com/sautrikroy17)  
- **Education**: 2nd Year B.Tech CSE, SRM Institute of Science and Technology  
- **Honors**: SIH 2026 Top 100 Finalist • Microsoft Learn Student Ambassador (MLSA)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
