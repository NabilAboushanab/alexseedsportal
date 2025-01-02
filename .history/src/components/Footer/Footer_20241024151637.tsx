// src/app/Footer/Footer.tsx
import React from 'react';

interface FooterProps {
  copyrightText: string; // إضافة هذا السطر لتحديد النوع
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer>
      <p>{copyrightText}</p> {/* عرض نص حقوق النشر */}
    </footer>
  );
};

export default Footer;
