import React, { createContext, useContext, useState } from "react";

// Create a Context for the language
const LanguageContext = createContext<any>(null);

// Create a provider component
export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<"arabic" | "english">("arabic");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);
