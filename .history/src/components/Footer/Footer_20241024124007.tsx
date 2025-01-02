// components/Footer/Footer.tsx

import React from 'react';
import styles from './footer.module.css';

interface FooterProps {
  instructions?: string; // اجعل هذه الخاصية اختيارية
}

const Footer: React.FC<FooterProps> = ({ instructions = '' }) => {
  return (
    <footer className={styles.footer}>
      
      {instructions && <p>التعليمات المدخلة: {instructions}</p>}
    </footer>
  );
};

export default Footer;
