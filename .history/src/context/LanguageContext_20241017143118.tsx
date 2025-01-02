// src/context/LanguageContext.tsx
"use client"; // إضافة هذه السطر

import React, { createContext, useContext, useState, ReactNode } from 'react';

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
