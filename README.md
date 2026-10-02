# QRCraft Studio ⚡ | GDG on Campus SRM

> **Client-Side High-Precision QR Code Generator & Visual Designer**  
> *Developed for the Google Developer Groups (GDG) on Campus SRM Technical Recruitment 2026–27 (Frontend Track).*

---

## 🌟 Overview
**QRCraft Studio** is a 100% browser-based web application that allows users to encode various data formats, customize visual styling in real-time, audit scan reliability using W3C contrast formulas, and export production-ready vector and raster QR codes.

Built with **pure React, Vanilla CSS design tokens, and HTML5 Canvas/SVG rendering**, the application requires **zero backend servers**, ensuring maximum privacy and zero latency.

---

## ✨ Features

### 1. Multi-Format Payload Generation
* 🌐 **Website URL:** Formats protocols with auto-prepending `https://`.
* 📝 **Plain Text:** Unrestricted text blocks, notes, and raw keys.
* ✉️ **Email (RFC 6068):** Native `mailto:` URI with recipient, subject, and body parameters.
* 📞 **Phone Number (RFC 3966):** Sanitized international `tel:` format.
* 📶 **Wi-Fi Credentials (ZXing standard):** Automatic `WIFI:S:...;T:...;P:...;H:...;;` payload generation with character escaping and hidden network support.

### 2. Advanced Visual Customization
* 🎨 **Color & Gradients:** Solid colors, Linear Gradients, and Radial Gradients.
* 💠 **Module & Corner Shapes:** 6 dot patterns (Square, Rounded, Dots, Classy, Smooth, Bubbles) and 3 corner styles.
* 📐 **Dimensions & Quiet Zone:** Real-time size (200px–500px) and margin/padding sliders.
* 🛡️ **Reed-Solomon Error Correction:** Selectable redundancy levels: **L** (7%), **M** (15%), **Q** (25%), and **H** (30%).
* 🖼️ **Center Brand Logo:** Client-side image upload with automatic error correction upgrade to prevent scanning obstruction.

### 3. Scan Reliability & WCAG Contrast Guard
* Real-time calculation of **W3C WCAG 2.1 Relative Luminance**:
  $$L = 0.2126 \cdot R + 0.7152 \cdot G + 0.0722 \cdot B$$
* Real-time contrast ratio auditing against scanner threshold criteria:
  * **Ratio > 4.5:1:** Optimal scannability under any lighting.
  * **Ratio 3.0:1 – 4.5:1:** Moderate warning for low-light scanning.
  * **Ratio < 3.0:1:** Critical danger warning (scanners will fail).
* Inverted color warnings (light dots on dark background).
* Redundancy checks when logos are embedded.

### 4. Export Studio & Persistence
* 📥 **PNG Export:** High-res raster download with celebratory confetti animation.
* 📐 **SVG Export:** Lossless vector XML format for high-res printing and billboards.
* 📋 **Copy to Clipboard:** Direct image copy to system clipboard using `navigator.clipboard.write([new ClipboardItem(...)])`.
* 💾 **Recent QR History:** Persisted in browser `localStorage`, allowing users to restore past configurations and form inputs across page refreshes.

---

## 🛠️ Technology Stack

* **Framework:** React 19 (JavaScript)
* **Build Tool:** Vite 8 (Native ESM & esbuild)
* **Styling:** Modern Vanilla CSS (CSS Custom Properties, Glassmorphism, CSS Grid & Flexbox)
* **QR Engine:** `qr-code-styling` (HTML5 Canvas & SVG Vector rendering)
* **Icons:** `lucide-react`
* **Micro-Interactions:** `canvas-confetti`

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher)
* npm (v9 or higher)

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/sautrikroy17/gdg-qr-designer.git

# Navigate to project folder
cd gdg-qr-designer

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The optimized bundle will be generated inside the `dist/` folder.

---

## 📂 Project Structure

```
gdg-qr-designer/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with GDG branding & Dark/Light mode toggle
│   │   ├── TypeSelector.jsx    # QR Data Type selector tabs
│   │   ├── TypeInputs.jsx      # Dynamic form inputs with validation
│   │   ├── PresetSelector.jsx  # One-click styling presets
│   │   ├── Customizer.jsx      # Accordion for Colors, Shapes, Sizes, & Logo
│   │   ├── QRPreview.jsx       # Real-time Canvas preview, Contrast Guard, Export
│   │   └── RecentHistory.jsx   # LocalStorage history cards
│   ├── utils/
│   │   ├── qrPayload.js        # Standard URI formatting (URL, Email, Phone, Wi-Fi)
│   │   ├── contrastValidator.js# WCAG Relative Luminance & Contrast calculations
│   │   └── presets.js          # Predefined visual theme definitions
│   ├── App.jsx                 # Top-level state coordinator
│   ├── index.css               # Design system, CSS variables & responsive layout
│   └── main.jsx                # React DOM entry point
├── INTERVIEW_PREP.md           # Technical interview guide with viva questions & answers
├── package.json
└── vite.config.js
```

---

## 📄 License
MIT License. Built for GDG on Campus SRM Recruitment 2026.
