// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'arabic' | 'english'; // تأكد من أن هذه هي القيم الصحيحة
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'arabic' | 'english'>('arabic'); // استخدام الأنواع الصحيحة

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'arabic' ? 'english' : 'arabic')); // لا تستخدم 'ar' هنا
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
