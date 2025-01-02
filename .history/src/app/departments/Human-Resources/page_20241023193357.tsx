// components/FactoryInstructions.tsx
import React, { useEffect } from 'react';

interface FactoryInstructionsProps {
  setInstructions: (instructions: string) => void;
}

const FactoryInstructions: React.FC<FactoryInstructionsProps> = ({ setInstructions }) => {
  const instructions = "برجاء اعتماد الاجازات المعلقة";

  useEffect(() => {
    setInstructions(instructions);
  }, [setInstructions]);

  return <div>FactoryInstructions</div>;
};

export default FactoryInstructions;
