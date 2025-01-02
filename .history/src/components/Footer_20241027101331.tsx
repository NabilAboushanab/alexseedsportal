// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './footer.module.css';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className={styles.footer}>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
