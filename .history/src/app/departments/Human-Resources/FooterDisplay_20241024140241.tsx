// src/app/departments/Human-Resources/FooterDisplay.tsx
import React from 'react';

interface FooterDisplayProps {
  copyrightText: string; // خاصية لنص حقوق النشر
}

const FooterDisplay: React.FC<FooterDisplayProps> = ({ copyrightText }) => {
  return (
    <footer>
      <p>{copyrightText}</p> {/* عرض النص هنا */}
    </footer>
  );
};

export default FooterDisplay;
