// src/app/Footer/Footer.tsx
import React from 'react';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
