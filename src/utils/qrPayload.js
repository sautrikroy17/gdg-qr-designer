/**
 * QR Payload Formatter Utility
 * 
 * Generates standard URI schemes and protocols recognized natively by iOS, Android,
 * and physical barcode scanners:
 * - URL: https://...
 * - Plain Text: raw string
 * - Email: RFC 6068 mailto: URI
 * - Phone: RFC 3966 tel: URI
 * - Wi-Fi: ZXing standard WIFI: URI
 * - Location: Google Maps geo link
 * - vCard: Electronic Business Card (vCard 3.0 standard)
 */

// 1. URL Formatter
export function formatURL(url) {
  if (!url) return '';
  const trimmed = url.trim();
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

// 2. Plain Text Formatter
export function formatPlainText(text) {
  return text || '';
}

// 3. Email Formatter (RFC 6068 mailto URI)
export function formatEmail(to, subject = '', body = '') {
  if (!to) return '';
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  
  const queryString = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${to.trim()}${queryString}`;
}

// 4. Phone Formatter (RFC 3966 tel URI)
export function formatPhone(phoneNumber) {
  if (!phoneNumber) return '';
  const cleaned = phoneNumber.replace(/[\s\-()]/g, '');
  return `tel:${cleaned}`;
}

// 5. Wi-Fi Formatter (ZXing standard Wi-Fi format)
export function formatWifi(ssid, password = '', encryption = 'WPA', isHidden = false) {
  if (!ssid) return '';
  const escapeWifi = (str) => str.replace(/([\\;,:"'])/g, '\\$1');
  const escapedSsid = escapeWifi(ssid.trim());
  const escapedPass = password ? escapeWifi(password) : '';
  const encType = encryption === 'none' ? 'nopass' : encryption;
  
  return `WIFI:S:${escapedSsid};T:${encType};P:${escapedPass};H:${isHidden ? 'true' : 'false'};;`;
}

// 6. Location Formatter (Google Maps & Geo standard)
export function formatLocation(latitude, longitude, query = '') {
  if (latitude && longitude) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;
  }
  if (query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query.trim())}`;
  }
  return '';
}

// 7. vCard (Contact Card 3.0 standard)
export function formatVCard(firstName, lastName = '', phone = '', email = '', org = '', url = '') {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName || ''};${firstName || ''};;;`,
    `FN:${[firstName, lastName].filter(Boolean).join(' ')}`
  ];
  if (phone) lines.push(`TEL;TYPE=CELL:${phone.trim()}`);
  if (email) lines.push(`EMAIL;TYPE=INTERNET:${email.trim()}`);
  if (org) lines.push(`ORG:${org.trim()}`);
  if (url) lines.push(`URL:${url.trim()}`);
  lines.push('END:VCARD');
  return lines.join('\n');
}
