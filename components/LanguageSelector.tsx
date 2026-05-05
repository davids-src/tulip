'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useI18n, Locale, LOCALES } from '@/lib/i18n';

const LABELS: Record<Locale, string> = { hu: 'HU', en: 'EN', de: 'DE' };

export default function LanguageSelector() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 flex items-center space-x-1 text-foreground hover:text-brand-coral active:text-brand-coral transition-colors uppercase text-xs tracking-widest font-rubik font-light"
        aria-label={t('nav.language')}
        aria-expanded={isOpen}
      >
        <Globe size={18} className="text-brand-coral" />
        <span>{LABELS[locale]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-20 bg-background border border-border shadow-lg z-50">
          {LOCALES.map((code) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={`block w-full text-left px-4 py-2 text-xs uppercase tracking-widest font-rubik font-light transition-colors hover:bg-brand-coral hover:text-white ${
                locale === code ? 'text-brand-coral' : 'text-foreground'
              }`}
            >
              {LABELS[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
