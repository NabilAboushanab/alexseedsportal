// components/Footer/Footer.tsx

import React from 'react';
import styles from './footer.module.css';

interface FooterProps {
  instructions?: string; // اجعل هذه الخاصية اختيارية
}

const Footer: React.FC<FooterProps> = ({ instructions = '' }) => {
  return (
    <footer className={styles.footer}>
      <p>حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب</p>
      {instructions && <p>التعليمات المدخلة: {instructions}</p>}
    </footer>
  );
};

export default Footer;
