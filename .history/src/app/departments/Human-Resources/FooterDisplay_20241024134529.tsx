// src/app/departments/Human-Resources/FooterDisplay.tsx
import React from 'react';

interface FooterDisplayProps {
  copyrightText: string;
}

const FooterDisplay: React.FC<FooterDisplayProps> = ({ copyrightText }) => {
  return (
    <footer>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default FooterDisplay;
