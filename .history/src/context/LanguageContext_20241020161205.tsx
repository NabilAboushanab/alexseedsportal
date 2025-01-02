// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// نوع اللغة
type Language = "arabic" | "english";

// تعريف السياق
interface LanguageContextProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// هوك للحصول على السياق
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// مزود السياق
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("arabic");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
