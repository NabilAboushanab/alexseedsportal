// components/Footer.tsx
import React from 'react';
import styles from './footer.module.css'; // استيراد ملف CSS Module

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب</p>
    </footer>
  );
};

export default Footer;
