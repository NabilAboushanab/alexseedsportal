// src/context/LanguageContext.tsx
"use client"; // إضافة هذه السطر

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: 'arabic' | 'english';
  setLanguage: (lang: 'arabic' | 'english') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<'arabic' | 'english'>('english'); // القيمة الافتراضية

  useEffect(() => {
    // محاولة الحصول على اللغة من localStorage
    const savedLanguage = localStorage.getItem('language') as 'arabic' | 'english' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // تخزين اللغة في localStorage عندما تتغير
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
