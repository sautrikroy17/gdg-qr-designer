import React from 'react';
import { Globe, FileText, Mail, Phone, Wifi } from 'lucide-react';

/**
 * TypeSelector Component
 * Allows user to switch between URL, Plain Text, Email, Phone, and Wi-Fi modes.
 */
const TYPES = [
  { id: 'url', label: 'Website URL', icon: Globe },
  { id: 'text', label: 'Plain Text', icon: FileText },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'phone', label: 'Phone', icon: Phone },
  { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
];

export default function TypeSelector({ currentType, onSelectType }) {
  return (
    <div className="type-tabs" role="tablist" aria-label="QR Code Data Type Selector">
      {TYPES.map((item) => {
        const Icon = item.icon;
        const isActive = currentType === item.id;
        
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`type-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectType(item.id)}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
