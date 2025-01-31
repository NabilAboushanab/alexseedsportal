// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'arabic' | 'english';
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'arabic' | 'english'>('arabic');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'arabic' ? 'english' : 'arabic'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
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
