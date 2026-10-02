# QRCraft Studio — GDG Technical Interview Master Guide

This guide is your personal cheat sheet for the **GDG on Campus SRM Technical Recruitment Interview**. It explains every architectural decision, line of logic, and question the interview panel could possibly ask.

---

## 1. Quick Project Summary (Elevator Pitch)
> **If the interviewer asks:** *"Give us a brief overview of your project."*  
> **Your Answer:**  
> *"I built **QRCraft Studio**, a fully client-side QR Code Generator and Visual Designer built with React and modern Vanilla CSS. It allows users to encode five distinct payload types—URLs, Plain Text, Email (RFC 6068), Phone Numbers (RFC 3966), and Wi-Fi networks (ZXing format). It features real-time canvas rendering, customizable module patterns, linear and radial gradients, quiet zone adjustments, and center logo embedding. To ensure real-world scan reliability, I implemented a custom contrast auditor based on the W3C Relative Luminance formula that warns users if their color palette or error correction level could cause scanner failures. Finally, users can export high-res PNGs, vector SVGs, copy directly to the OS clipboard, and restore recent designs persisted in `localStorage`."*

---

## 2. Core Technical Questions & Bulletproof Answers

### Q1: Why React instead of Vanilla JS or Next.js?
* **Answer:**  
  * **Vs Vanilla JS:** In Vanilla JS, keeping five different input forms, customizable color states, gradients, and a live canvas preview synchronized requires manual DOM queries (`document.querySelector`) and imperative event listeners, which quickly becomes buggy ("spaghetti code"). React's declarative state management (`useState`, `useMemo`, `useEffect`) automatically re-computes the QR payload and updates the canvas whenever any setting changes.
  * **Vs Next.js:** Next.js is designed for Server-Side Rendering (SSR) and API backends. The GDG requirement explicitly called for a 100% browser-based application without a backend. A client-side Single Page Application (SPA) with Vite provides zero server overhead and starts instantaneously.

### Q2: Why Vite instead of Create-React-App?
* **Answer:**  
  * *Create-React-App* uses Webpack, which bundles the entire JavaScript AST upfront before serving, making cold starts and reloads slow.  
  * *Vite* leverages native ES Modules (ESM) supported by modern browsers and uses `esbuild` (written in Go) for pre-bundling. It provides sub-second startup times and Instant Hot Module Replacement (HMR).

### Q3: How do QR Codes work under the hood?
* **Answer:**  
  A QR (Quick Response) code is a two-dimensional matrix barcode:
  * **Finder Patterns:** The 3 distinct squares located in the top-left, top-right, and bottom-left corners. They allow the scanner camera to detect the code's orientation and skew angle in 360 degrees.
  * **Timing Patterns:** Alternating black/white modules connecting the finder patterns that define the grid's coordinate dimensions.
  * **Alignment Patterns:** Smaller concentric squares inside the grid that correct for lens curvature or distorted surfaces.
  * **Data & Error Correction modules:** The remaining dots containing the data bytes interlaced with **Reed-Solomon Error Correction** codewords.

### Q4: What is Error Correction Level (L, M, Q, H) and why does a logo require 'H'?
* **Answer:**  
  * QR codes use **Reed-Solomon Polynomial Error Correction** to restore data if a QR code is dirty, torn, or partially blocked.
  * **L (Low):** Restores up to **7%** of damaged data.
  * **M (Medium):** Restores up to **15%** of damaged data (Standard default).
  * **Q (Quartile):** Restores up to **25%** of damaged data.
  * **H (High):** Restores up to **30%** of damaged data.
  * **Why 'H' for Logos?** Placing a logo in the center physically covers up ~15–20% of the internal matrix modules. By setting Error Correction to **'H' (High)**, the mathematical redundancy allows scanners to reconstruct the blocked center modules from the remaining visible modules.

### Q5: How does Phone Scanning recognize Wi-Fi, Phone, or Email?
* **Answer:**  
  Modern mobile OS cameras (iOS & Android) parse standard URI schemes:
  * **Wi-Fi:** `WIFI:S:<SSID>;T:<WPA|WEP|nopass>;P:<password>;H:<true|false>;;` (ZXing standard format). We escape special characters like `;`, `:`, and `\` with backslashes so the parser doesn't break.
  * **Email:** `mailto:user@example.com?subject=...&body=...` (RFC 6068 standard).
  * **Phone:** `tel:+919876543210` (RFC 3966 standard).
  * **URL:** Standard HTTP/HTTPS protocol strings.

### Q6: How does the "Scan Reliability & Contrast Warning" work?
* **Answer:**  
  * Optical barcode readers binarize camera frames into black and white pixels based on contrast thresholds. If foreground dots and background colors are too similar, edge detection fails.
  * We calculate the **W3C WCAG 2.1 Relative Luminance**:
    $$L = 0.2126 \cdot R + 0.7152 \cdot G + 0.0722 \cdot B$$
    *(after gamma-expansion normalization of sRGB color channels)*.
  * The contrast ratio is:
    $$\text{Ratio} = \frac{L_{\text{lighter}} + 0.05}{L_{\text{darker}} + 0.05}$$
  * If the ratio is **< 3.0:1**, we trigger a **Critical Unscannable Warning**.
  * If the ratio is **3.0:1 to 4.5:1**, we trigger a **Moderate Warning**.
  * We also check if the colors are inverted (light dots on dark background), which some older hardware scanners struggle with.

### Q7: How does Client-Side Export (PNG, SVG, Clipboard) work without a Backend?
* **Answer:**  
  * **PNG Download:** The QR library draws directly onto an HTML5 `<canvas>`. We invoke `canvas.toBlob()`, generate an in-memory pointer using `URL.createObjectURL(blob)`, assign it to an anchor `<a download="...">` element, simulate a `.click()`, and revoke the object URL to prevent memory leaks.
  * **SVG Download:** Generates a vector XML DOM tree (`<svg><path d="..." /></svg>`) which allows lossless infinite scaling for printing on posters or t-shirts.
  * **Copy to Clipboard:** Uses the asynchronous `navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])` browser API, writing raw image bytes directly to the system clipboard.

### Q8: How does Local Persistence work?
* **Answer:**  
  We serialize the last 8 generated QR configurations into JSON and store them in the browser's `localStorage` under the key `'qrcraft_history'`. When the user returns or refreshes the page, our `useState(() => JSON.parse(localStorage.getItem(...)))` lazy initializer restores the history. Clicking "Restore" repopulates both the input form and the visual styling state.

---

## 3. Project Architecture Breakdown

```
src/
├── utils/
│   ├── qrPayload.js         # Formats URL, Text, Email, Phone, and Wi-Fi strings
│   ├── contrastValidator.js # W3C WCAG Relative Luminance & Contrast Auditor
│   └── presets.js           # 6 Pre-configured visual themes (Midnight, Google Blue, etc.)
├── components/
│   ├── Header.jsx           # Brand header + Light/Dark theme toggle
│   ├── TypeSelector.jsx     # 5 Tabs with Lucide icons (URL, Text, Email, Phone, Wi-Fi)
│   ├── TypeInputs.jsx       # Contextual form fields with live validation
│   ├── PresetSelector.jsx   # One-click theme chips
│   ├── Customizer.jsx       # Accordion controls (Colors, Dots, Margins, Error Correction, Logo)
│   ├── QRPreview.jsx        # HTML5 Canvas renderer, Contrast Alert badge, Download & Copy
│   └── RecentHistory.jsx    # LocalStorage history cards with restore/delete
├── App.jsx                  # Root state coordinator
└── index.css                # Pure Vanilla CSS design tokens & dark mode variables
```

---

## 4. Live Interview Demo Steps (How to Impress the Panel)

1. **Step 1:** Open the deployed app on your laptop. Show them the clean Dark/Light mode toggle in the top right.
2. **Step 2:** Select the **Wi-Fi** tab. Enter SRM Campus Wi-Fi details.
3. **Step 3 (The "Phone Test"):** Say: *"Sir/Ma'am, please pull out your phone camera and scan my screen."* Watch their phone immediately pop up the Wi-Fi connection prompt!
4. **Step 4:** Switch to **Midnight Neon** or **Sunset Glow** preset to showcase custom rounded dots and gradients.
5. **Step 5 (Demonstrating Reliability Guard):** Change the dot color to a faint gray or white on white. Point to the **Reliability Banner**: *"Notice how the app immediately flags this with a Critical Contrast Warning (1.2:1) to stop the user from generating an unreadable code."*
6. **Step 6:** Click **Download PNG** (confetti burst fires!) and show the entry instantly added to the **Recent QR Codes** section below. Refresh the page to prove persistence.
