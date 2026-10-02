/**
 * Scan Reliability & WCAG Contrast Validator
 * 
 * Barcode & QR scanners work by binarizing camera frames into light and dark pixels.
 * If contrast between foreground (dots) and background is too low, scanners cannot decode the matrix.
 * 
 * Formula: W3C WCAG 2.1 Relative Luminance & Contrast Ratio calculation.
 */

// Helper: Convert HEX color to [r, g, b] normalized to 0..1
function hexToRgb(hex) {
  let cleanHex = hex.replace('#', '').trim();
  
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  
  if (cleanHex.length !== 6) {
    return [0, 0, 0];
  }
  
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;
  
  return [r, g, b];
}

// Helper: Calculate W3C Relative Luminance
// Formula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B
function getLuminance([r, g, b]) {
  const [lr, lg, lb] = [r, g, b].map(val => {
    return val <= 0.04045
      ? val / 12.92
      : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
}

// Calculate Contrast Ratio between two HEX colors (1:1 to 21:1)
export function calculateContrastRatio(colorA, colorB) {
  const rgbA = hexToRgb(colorA);
  const rgbB = hexToRgb(colorB);
  
  const lumA = getLuminance(rgbA);
  const lumB = getLuminance(rgbB);
  
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  
  const ratio = (lighter + 0.05) / (darker + 0.05);
  return Number(ratio.toFixed(2));
}

/**
 * Audit QR Code Scannability
 * Returns status, contrast score, and readable feedback warnings for the user
 */
export function auditScanReliability(fgColor, bgColor, errorCorrectionLevel, hasLogo) {
  const ratio = calculateContrastRatio(fgColor, bgColor);
  const warnings = [];
  
  // 1. Check Contrast Ratio
  let status = 'great'; // 'great' | 'warning' | 'danger'
  
  if (ratio < 3.0) {
    status = 'danger';
    warnings.push(
      `Critical: Contrast ratio is only ${ratio}:1. Scanners will likely fail to read this QR code. Increase contrast between dots and background.`
    );
  } else if (ratio < 4.5) {
    status = 'warning';
    warnings.push(
      `Moderate: Contrast ratio is ${ratio}:1. Scanners might struggle in dim lighting. A ratio of 4.5:1+ is recommended.`
    );
  }
  
  // 2. Check Inverted Colors (Light dots on Dark background)
  const fgLum = getLuminance(hexToRgb(fgColor));
  const bgLum = getLuminance(hexToRgb(bgColor));
  if (fgLum > bgLum) {
    warnings.push(
      'Notice: Inverted colors (light dots on dark background) detected. While supported by modern smartphones, some physical barcode scanners may fail to decode inverted codes.'
    );
  }
  
  // 3. Check Error Correction vs Logo obstruction
  if (hasLogo && (errorCorrectionLevel === 'L' || errorCorrectionLevel === 'M')) {
    if (status !== 'danger') status = 'warning';
    warnings.push(
      `Important: A center logo is attached, but Error Correction is set to '${errorCorrectionLevel}'. We strongly recommend 'Q' (25%) or 'H' (30%) so the code remains readable even with the center blocked.`
    );
  }
  
  return {
    ratio,
    status,
    warnings
  };
}
