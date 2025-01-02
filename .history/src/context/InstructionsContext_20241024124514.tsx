// context/InstructionsContext.tsx
import React, { createContext, useContext, useState } from 'react';

// تعريف واجهة التعليمات
interface InstructionsContextType {
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
}

const InstructionsContext = createContext<InstructionsContextType | undefined>(undefined);

// مزود التعليمات
export const InstructionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [instructions, setInstructions] = useState<string>('');

  return (
    <InstructionsContext.Provider value={{ instructions, setInstructions }}>
      {children}
    </InstructionsContext.Provider>
  );
};

// دالة لاسترجاع التعليمات
export const useInstructions = () => {
  const context = useContext(InstructionsContext);
  if (!context) {
    throw new Error('useInstructions must be used within an InstructionsProvider');
  }
  return context;
};
