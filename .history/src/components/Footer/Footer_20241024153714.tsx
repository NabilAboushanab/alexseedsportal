// src/app/Footer/Footer.tsx
import React from 'react';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer>
      <p>{copyrightText}</p> {/* عرض نص حقوق النشر هنا */}
    </footer>
  );
};

export default Footer;
