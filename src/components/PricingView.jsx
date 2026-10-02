import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PricingView({ onOpenStudio }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Is QRCraft really 100% free with no hidden fees?',
      a: 'Yes! QRCraft was engineered for the GDG on Campus SRM Technical Recruitment 2026–27. All features, high-resolution PNG exports, vector SVGs, and gradient styling are 100% free forever.'
    },
    {
      q: 'Does my QR code data ever get sent to an external server?',
      a: 'Never. The application runs entirely within your browser memory. All Reed-Solomon polynomial encoding, matrix rendering, and exports happen locally on your device via HTML5 Canvas.'
    },
    {
      q: 'Do the generated QR codes expire?',
      a: 'No. These are direct standard QR codes (static payloads). As long as your destination URL or Wi-Fi password does not change, your QR code will work for decades without expiration.'
    },
    {
      q: 'What is the advantage of SVG vector export over PNG?',
      a: 'PNG is a raster image with fixed pixels. SVG is an XML-based vector path that scales infinitely without blurriness, making it ideal for t-shirts, billboards, banners, and print publications.'
    }
  ];

  return (
    <div className="view-page-container">
      {/* Header */}
      <div className="view-header-centered">
        <div className="purpose-badge-pill">
          <Sparkles size={13} style={{ color: 'var(--accent-blue-vibrant)' }} />
          <span>Transparent & Open Source</span>
        </div>
        <h1 className="view-main-heading">
          Simple, <span className="headline-gradient-word">Transparent</span> Pricing
        </h1>
        <p className="view-sub-heading">
          Built for students, developers, and creators. No subscriptions, no telemetry, no paywalls.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards-grid">
        {/* Card 1: Community Free */}
        <div className="pricing-card featured-glow">
          <div className="pricing-badge-top">CURRENT ACTIVE PLAN</div>
          <h3 className="plan-name">Community Plan</h3>
          <p className="plan-desc">Full access to the entire QRCraft suite for everyone.</p>
          <div className="plan-price-row">
            <span className="price-big">$0</span>
            <span className="price-period">/ forever</span>
          </div>

          <button
            type="button"
            className="btn-create-qr-hero"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '1.75rem' }}
            onClick={onOpenStudio}
          >
            <span>Start Creating Now</span>
            <ArrowRight size={17} />
          </button>

          <div className="plan-features-list">
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>Unlimited QR Code Generations</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>All 7 Payload Types (URL, Wi-Fi, vCard, etc.)</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>High-Res PNG & Lossless Vector SVG Export</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>W3C Contrast Scannability Auditor</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>Custom Center Logo & Linear/Radial Gradients</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>100% Client-Side Privacy (0 Server Storage)</span>
            </div>
          </div>
        </div>

        {/* Card 2: Campus Clubs / Hackathons */}
        <div className="pricing-card">
          <h3 className="plan-name">Campus Teams & Clubs</h3>
          <p className="plan-desc">For student organizations, hackathons, and symposiums.</p>
          <div className="plan-price-row">
            <span className="price-big">Free</span>
            <span className="price-period">for SRM IST</span>
          </div>

          <button
            type="button"
            className="btn-watch-demo-hero"
            style={{ width: '100%', justifyContent: 'center', marginBottom: '1.75rem' }}
            onClick={onOpenStudio}
          >
            <span>Deploy with QRCraft</span>
          </button>

          <div className="plan-features-list">
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>Free open-source MIT license</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>Batch Wi-Fi onboarding for SRM events</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>Direct vector export for lanyards & ID badges</span>
            </div>
            <div className="plan-feature-line">
              <Check size={16} className="feature-check-icon" />
              <span>Zero cloud infrastructure maintenance required</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section-wrapper">
        <h3 className="faq-heading">Frequently Asked Questions</h3>
        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item-card ${openFaq === idx ? 'expanded' : ''}`}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div className="faq-q-row">
                <span>{faq.q}</span>
                <span className="faq-toggle-sign">{openFaq === idx ? '−' : '+'}</span>
              </div>
              {openFaq === idx && (
                <p className="faq-a-text">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
