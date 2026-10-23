'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { LANGUAGES, LanguageInfo, getLanguage, DEFAULT_LANGUAGE } from './languages';
import { Translations, en } from './translations/en';
import { getTranslations } from './translations';

interface LanguageContextType {
  language: string;
  languageInfo: LanguageInfo;
  t: Translations;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
  setLanguage: (code: string) => void;
  formatNum: (n: number) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  languageInfo: getLanguage(DEFAULT_LANGUAGE),
  t: en,
  dir: 'ltr',
  isRtl: false,
  setLanguage: () => {},
  formatNum: (n) => n.toString(),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<string>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('islamic_portal_lang');
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      setLanguageState(saved);
    }
  }, []);

  const languageInfo = getLanguage(language);
  const t = getTranslations(language);
  const dir = languageInfo.dir;
  const isRtl = dir === 'rtl';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
    }
  }, [language, dir]);

  const setLanguage = (code: string) => {
    startTransition(() => {
      setLanguageState(code);
      if (typeof window !== 'undefined') {
        localStorage.setItem('islamic_portal_lang', code);
      }
    });
  };

  const formatNum = (num: number): string => {
    try {
      return new Intl.NumberFormat(language).format(num);
    } catch {
      return num.toString();
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageInfo,
        t,
        dir,
        isRtl,
        setLanguage,
        formatNum,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
