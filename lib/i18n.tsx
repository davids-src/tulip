'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import huDict from '../locales/hu/common.json';
import enDict from '../locales/en/common.json';
import deDict from '../locales/de/common.json';

export type Locale = 'hu' | 'en' | 'de';
export const LOCALES: Locale[] = ['hu', 'en', 'de'];
export const DEFAULT_LOCALE: Locale = 'hu';

const dictionaries: Record<Locale, Record<string, unknown>> = {
  hu: huDict as Record<string, unknown>,
  en: enDict as Record<string, unknown>,
  de: deDict as Record<string, unknown>,
};

function get(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let cur: unknown = obj;
  for (const k of keys) {
    if (cur == null || typeof cur !== 'object') return path;
    cur = (cur as Record<string, unknown>)[k];
  }
  return typeof cur === 'string' ? cur : path;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  tArray: <T>(key: string) => T[];
}

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (k) => k,
  tArray: () => [],
});

function detectLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const stored = localStorage.getItem('tulip_locale') as Locale | null;
  if (stored && LOCALES.includes(stored)) return stored;
  const browser = navigator.language.split('-')[0] as Locale;
  if (LOCALES.includes(browser)) return browser;
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    document.documentElement.lang = detected;
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('tulip_locale', l);
    document.documentElement.lang = l;
  };

  const dict = dictionaries[mounted ? locale : DEFAULT_LOCALE] as Record<string, unknown>;
  const t = (key: string) => get(dict, key);
  const tArray = <T,>(key: string): T[] => {
    const keys = key.split('.');
    let cur: unknown = dict;
    for (const k of keys) {
      if (cur == null || typeof cur !== 'object') return [];
      cur = (cur as Record<string, unknown>)[k];
    }
    return Array.isArray(cur) ? (cur as T[]) : [];
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tArray }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
