import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import StudioHeader from './components/StudioHeader';
import HeroLanding from './components/HeroLanding';
import GeneratorView from './components/GeneratorView';
import LivePreviewCard from './components/LivePreviewCard';
import TemplatesView from './components/TemplatesView';
import PricingView from './components/PricingView';
import AboutView from './components/AboutView';
import FeaturesView from './components/FeaturesView';
import Footer from './components/Footer';
import RecentCodesTable from './components/RecentCodesTable';
import SettingsModal from './components/SettingsModal';
import InteractiveDemoModal from './components/InteractiveDemoModal';
import SignInModal from './components/SignInModal';

import {
  formatURL,
  formatPlainText,
  formatEmail,
  formatPhone,
  formatWifi,
  formatLocation,
  formatVCard
} from './utils/qrPayload';

const INITIAL_DEMO_HISTORY = [
  {
    id: 'demo-1',
    name: 'GitHub Profile',
    type: 'URL',
    previewText: 'https://github.com/sautrikroy17',
    timestamp: Date.now() - 120000,
    savedType: 'url',
    savedFormData: { url: 'https://github.com/sautrikroy17' },
    savedConfig: { dotsColor: '#2563eb', backgroundColor: '#ffffff', dotsType: 'rounded' }
  },
  {
    id: 'demo-2',
    name: 'Portfolio',
    type: 'URL',
    previewText: 'https://sautrikroy.me',
    timestamp: Date.now() - 3600000,
    savedType: 'url',
    savedFormData: { url: 'https://sautrikroy.me' },
    savedConfig: { dotsColor: '#00f2fe', backgroundColor: '#070a14', dotsType: 'dots' }
  },
  {
    id: 'demo-3',
    name: 'My Email',
    type: 'EMAIL',
    previewText: 'sautrikroy@example.com',
    timestamp: Date.now() - 10800000,
    savedType: 'email',
    savedFormData: { emailTo: 'sautrikroy@example.com', emailSubject: 'Inquiry', emailBody: 'Hello!' },
    savedConfig: { dotsColor: '#ff416c', backgroundColor: '#ffffff', dotsType: 'classy-rounded' }
  },
  {
    id: 'demo-4',
    name: 'Hostel Wi-Fi',
    type: 'WI-FI',
    previewText: 'SSID: SRM_Hostel_5G',
    timestamp: Date.now() - 86400000,
    savedType: 'wifi',
    savedFormData: { wifiSsid: 'SRM_Hostel_5G', wifiPassword: 'DeveloperCommunity2026', wifiEncryption: 'WPA' },
    savedConfig: { dotsColor: '#10b981', backgroundColor: '#041e17', dotsType: 'classy' }
  },
  {
    id: 'demo-5',
    name: 'LinkedIn',
    type: 'URL',
    previewText: 'https://linkedin.com/in/sautrikroy',
    timestamp: Date.now() - 172800000,
    savedType: 'url',
    savedFormData: { url: 'https://linkedin.com/in/sautrikroy' },
    savedConfig: { dotsColor: '#8b5cf6', backgroundColor: '#0e091b', dotsType: 'rounded' }
  }
];

export default function App() {
  // Navigation Mode: false = Landing Page, true = Studio Workspace
  const [isStudioMode, setIsStudioMode] = useState(false);

  // Active Tab:
  // When in Landing: 'home' | 'features' | 'templates' | 'pricing' | 'about'
  // When in Studio: 'generate' | 'templates' | 'recent'
  const [activeTab, setActiveTab] = useState('home');

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Theme State: 'dark' | 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('qrcraft_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qrcraft_theme', theme);
  }, [theme]);

  // Scrollspy to dynamically update active navbar link on Landing Page
  useEffect(() => {
    if (isStudioMode) return;

    const sections = ['home', 'features', 'templates', 'pricing', 'about'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStudioMode]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Settings state
  const [defaultFormat, setDefaultFormat] = useState('png');
  const [autoSave, setAutoSave] = useState(true);

  // Content Type State
  const [currentType, setCurrentType] = useState('url');

  // Generator Subtab State: 'colors' | 'shapes' | 'logo' | 'style'
  const [activeSubTab, setActiveSubTab] = useState('colors');

  // Form Data State
  const [formData, setFormData] = useState({
    url: 'https://github.com/sautrikroy17',
    text: 'Hello GDG on Campus SRM!',
    emailTo: 'sautrikroy@example.com',
    emailSubject: 'Project Collaboration',
    emailBody: 'Excited to build tech with GDG.',
    phone: '+919876543210',
    wifiSsid: 'SRM_Hostel_5G',
    wifiPassword: 'DeveloperCommunity2026',
    wifiEncryption: 'WPA',
    wifiHidden: false,
    lat: '12.8230',
    lng: '80.0444',
    vName: 'Sautrik Roy',
    vPhone: '+919876543210'
  });

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // QR Visual Styling Configuration (Default dotsColor #2563eb has 5.2:1 AAA Contrast on #ffffff)
  const [config, setConfig] = useState({
    size: 280,
    margin: 8,
    errorCorrectionLevel: 'M',
    dotsColor: '#2563eb',
    backgroundColor: '#ffffff',
    dotsType: 'rounded',
    cornersSquareType: 'extra-rounded',
    cornersDotType: 'dot',
    isGradient: false,
    gradientType: 'linear',
    gradientColor2: '#1d4ed8',
    logo: ''
  });

  const [activePresetId, setActivePresetId] = useState('modern-blue');

  const handleConfigChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setActivePresetId('');
  };

  const handleApplyPreset = (preset) => {
    setActivePresetId(preset.id);
    setConfig((prev) => ({
      ...prev,
      dotsColor: preset.dotsColor,
      backgroundColor: preset.backgroundColor,
      dotsType: preset.dotsType,
      cornersSquareType: preset.cornersSquareType,
      cornersDotType: preset.cornersDotType,
      isGradient: preset.isGradient,
      gradientType: preset.gradientType,
      gradientColor2: preset.gradientColor2,
    }));
  };

  // Input Validation Feedback
  const validationError = useMemo(() => {
    if (currentType === 'url') {
      if (!formData.url.trim()) return 'Please enter a destination URL.';
    } else if (currentType === 'text') {
      if (!formData.text.trim()) return 'Text content cannot be empty.';
    } else if (currentType === 'email') {
      if (!formData.emailTo.trim()) return 'Recipient email address is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailTo.trim())) return 'Please enter a valid email format.';
    } else if (currentType === 'phone') {
      if (!formData.phone.trim()) return 'Phone number is required.';
    } else if (currentType === 'wifi') {
      if (!formData.wifiSsid.trim()) return 'Network Name (SSID) is required.';
      if (formData.wifiEncryption !== 'none' && !formData.wifiPassword) {
        return 'Password is required for encrypted Wi-Fi networks.';
      }
    }
    return '';
  }, [currentType, formData]);

  // Compute Encoded Payload
  const payload = useMemo(() => {
    switch (currentType) {
      case 'url':
        return formatURL(formData.url);
      case 'text':
        return formatPlainText(formData.text);
      case 'email':
        return formatEmail(formData.emailTo, formData.emailSubject, formData.emailBody);
      case 'phone':
        return formatPhone(formData.phone);
      case 'wifi':
        return formatWifi(
          formData.wifiSsid,
          formData.wifiPassword,
          formData.wifiEncryption,
          formData.wifiHidden
        );
      case 'location':
        return formatLocation(formData.lat, formData.lng);
      case 'vcard':
        return formatVCard(formData.vName, '', formData.vPhone);
      default:
        return 'https://github.com/sautrikroy17';
    }
  }, [currentType, formData]);

  // LocalStorage Recent History
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('qrcraft_history');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_HISTORY;
    } catch {
      return INITIAL_DEMO_HISTORY;
    }
  });

  const saveToHistory = () => {
    if (!autoSave) return;

    let previewText = '';
    let name = '';
    if (currentType === 'url') {
      previewText = formData.url;
      name = 'Website Link';
    } else if (currentType === 'text') {
      previewText = formData.text;
      name = 'Plain Text';
    } else if (currentType === 'email') {
      previewText = formData.emailTo;
      name = 'Email Contact';
    } else if (currentType === 'phone') {
      previewText = formData.phone;
      name = 'Phone Number';
    } else if (currentType === 'wifi') {
      previewText = `SSID: ${formData.wifiSsid}`;
      name = 'Wi-Fi Network';
    } else if (currentType === 'location') {
      previewText = `Geo: ${formData.lat}, ${formData.lng}`;
      name = 'Location';
    } else if (currentType === 'vcard') {
      previewText = formData.vName;
      name = 'vCard Contact';
    }

    const newItem = {
      id: Date.now().toString(),
      name,
      type: currentType.toUpperCase(),
      previewText: previewText.slice(0, 48) || 'Custom QR',
      timestamp: Date.now(),
      savedType: currentType,
      savedFormData: { ...formData },
      savedConfig: { ...config }
    };

    setHistory((prev) => {
      const filtered = prev.filter((item) => item.previewText !== newItem.previewText);
      const updated = [newItem, ...filtered].slice(0, 10);
      localStorage.setItem('qrcraft_history', JSON.stringify(updated));
      return updated;
    });
  };

  const handleRestoreItem = (item) => {
    if (item.savedType) setCurrentType(item.savedType);
    if (item.savedFormData) setFormData((prev) => ({ ...prev, ...item.savedFormData }));
    if (item.savedConfig) setConfig((prev) => ({ ...prev, ...item.savedConfig }));
    setIsStudioMode(true);
    setActiveTab('generate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteItem = (id) => {
    setHistory((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem('qrcraft_history', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearAllHistory = () => {
    setHistory([]);
    localStorage.removeItem('qrcraft_history');
  };

  const handleResetFactory = () => {
    setConfig({
      size: 280,
      margin: 8,
      errorCorrectionLevel: 'M',
      dotsColor: '#2563eb',
      backgroundColor: '#ffffff',
      dotsType: 'rounded',
      cornersSquareType: 'extra-rounded',
      cornersDotType: 'dot',
      isGradient: false,
      gradientType: 'linear',
      gradientColor2: '#1d4ed8',
      logo: ''
    });
    setFormData({
      url: 'https://github.com/sautrikroy17',
      text: 'Hello GDG on Campus SRM!',
      emailTo: 'sautrikroy@example.com',
      emailSubject: 'Project Collaboration',
      emailBody: 'Excited to build tech with GDG.',
      phone: '+919876543210',
      wifiSsid: 'SRM_Hostel_5G',
      wifiPassword: 'DeveloperCommunity2026',
      wifiEncryption: 'WPA',
      wifiHidden: false,
      lat: '12.8230',
      lng: '80.0444',
      vName: 'Sautrik Roy',
      vPhone: '+919876543210'
    });
    setCurrentType('url');
    setActiveSubTab('colors');
  };

  // Smooth Scroll navigation on Landing Page
  const handleLandingNav = (sectionId) => {
    setActiveTab(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Launch Studio Workspace
  const handleEnterStudio = (targetType = null, targetSubTab = null) => {
    if (targetType) setCurrentType(targetType);
    if (targetSubTab) setActiveSubTab(targetSubTab);
    setIsStudioMode(true);
    setActiveTab('generate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Exit Studio to Landing Page
  const handleExitStudio = () => {
    setIsStudioMode(false);
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-root-wrapper ${!isStudioMode ? 'mode-landing' : 'mode-studio'}`}>
      {/* ====================================================================
          MODE A: PUBLIC LANDING PAGE (Flowing, Fully Connected, Edge-to-Edge)
          ==================================================================== */}
      {!isStudioMode ? (
        <div className="main-content-flow">
          {/* Top Navbar ONLY on Landing Page */}
          <TopNavbar
            activeTab={activeTab}
            onSelectTab={handleLandingNav}
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenSignIn={() => setIsSignInOpen(true)}
            onGetStarted={() => handleEnterStudio()}
          />

          {/* 1. Hero Section */}
          <section id="home">
            <HeroLanding
              onOpenStudio={() => handleEnterStudio()}
              onOpenStudioWithTab={(subTab) => handleEnterStudio(null, subTab)}
              onSelectTypeAndOpen={(type) => handleEnterStudio(type)}
              onOpenDemo={() => setIsDemoOpen(true)}
              onOpenTemplates={() => handleLandingNav('templates')}
            />
          </section>

          {/* 2. Features Showcase Section */}
          <section id="features">
            <FeaturesView
              onOpenStudio={() => handleEnterStudio()}
              onOpenStudioWithTab={(subTab) => handleEnterStudio(null, subTab)}
              onSelectTypeAndOpen={(type) => handleEnterStudio(type)}
            />
          </section>

          {/* 3. Templates Showcase Section */}
          <section id="templates">
            <TemplatesView
              activePresetId={activePresetId}
              onSelectPresetAndEdit={(preset) => {
                handleApplyPreset(preset);
                handleEnterStudio();
              }}
            />
          </section>

          {/* 4. Pricing & Plans Section */}
          <section id="pricing">
            <PricingView
              onOpenStudio={() => handleEnterStudio()}
            />
          </section>

          {/* 5. About Sautrik Roy & Viva Defense Section */}
          <section id="about">
            <AboutView
              onOpenStudio={() => handleEnterStudio()}
            />
          </section>

          {/* 6. Landing Page Footer */}
          <Footer
            onSelectTab={handleLandingNav}
            onOpenStudio={() => handleEnterStudio()}
          />
        </div>
      ) : (
        /* ====================================================================
           MODE B: STUDIO WORKSPACE (Focused, Professional, Zero Marketing Noise)
           ==================================================================== */
        <>
          {/* Left Sidebar for Studio Workspace */}
          <Sidebar
            activeTab={activeTab}
            onSelectTab={(tab) => {
              if (tab === 'settings') {
                setIsSettingsOpen(true);
              } else {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            onBackToHome={handleExitStudio}
          />

          <div className="main-content-flow">
            {/* Dedicated Studio Top Bar */}
            <StudioHeader
              currentType={currentType}
              theme={theme}
              onToggleTheme={toggleTheme}
              onBackToHome={handleExitStudio}
              onResetFactory={handleResetFactory}
              onOpenSignIn={() => setIsSignInOpen(true)}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />

            {/* Studio Page Content */}
            <div className="page-container">
              {activeTab === 'generate' && (
                <div className="studio-workspace-grid">
                  {/* Left Column: Form Controls */}
                  <GeneratorView
                    currentType={currentType}
                    onSelectType={setCurrentType}
                    formData={formData}
                    onChangeField={handleFieldChange}
                    validationError={validationError}
                    config={config}
                    onChangeConfig={handleConfigChange}
                    activeSubTab={activeSubTab}
                    onChangeSubTab={setActiveSubTab}
                  />

                  {/* Right Column: Live Sticky Preview */}
                  <LivePreviewCard
                    payload={payload}
                    config={config}
                    onSaveToHistory={saveToHistory}
                  />
                </div>
              )}

              {/* Templates View Inside Studio */}
              {activeTab === 'templates' && (
                <div style={{ marginBottom: '2rem' }}>
                  <TemplatesView
                    activePresetId={activePresetId}
                    onSelectPresetAndEdit={(preset) => {
                      handleApplyPreset(preset);
                      setActiveTab('generate');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </div>
              )}

              {/* Bottom: Recent QR Codes Table */}
              <RecentCodesTable
                historyItems={history}
                onRestoreItem={handleRestoreItem}
                onDeleteItem={handleDeleteItem}
              />
            </div>
          </div>
        </>
      )}

      {/* Global Interactive Modals */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        defaultFormat={defaultFormat}
        onChangeDefaultFormat={setDefaultFormat}
        autoSave={autoSave}
        onToggleAutoSave={setAutoSave}
        onClearAllHistory={handleClearAllHistory}
        onResetFactory={handleResetFactory}
      />

      <InteractiveDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onOpenStudio={() => handleEnterStudio()}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </div>
  );
}
