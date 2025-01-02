// src/context/InstructionsContext.tsx
"use client"; // تأكد من إضافة هذا السطر

import React, { createContext, useContext, useState, ReactNode } from 'react';

// تعريف واجهة التعليمات
interface InstructionsContextType {
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

const InstructionsContext = createContext<InstructionsContextType | undefined>(undefined);

interface InstructionsProviderProps {
  children: ReactNode;
}

export const InstructionsProvider: React.FC<InstructionsProviderProps> = ({ children }) => {
  const [instructions, setInstructions] = useState<string>('');

  return (
    <InstructionsContext.Provider value={{ instructions, setInstructions }}>
      {children}
    </InstructionsContext.Provider>
  );
};

export const useInstructions = () => {
  const context = useContext(InstructionsContext);
  if (!context) {
    throw new Error('useInstructions must be used within an InstructionsProvider');
  }
  return context;
};
