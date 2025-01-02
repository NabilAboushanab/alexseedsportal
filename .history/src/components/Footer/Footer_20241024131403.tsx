// src/components/Footer/Footer.tsx
"use client"; // تأكد من إضافة هذا السطر

import React from 'react';
import { useInstructions } from '@/context/InstructionsContext'; // تأكد من أن المسار صحيح
import styles from './footer.module.css';

const Footer: React.FC = () => {
  const { instructions } = useInstructions(); // الحصول على التعليمات من Context

  return (
    <footer className={styles.footer}>
      <p>حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب</p>
      {instructions && <p>التعليمات المدخلة: {instructions}</p>}
    </footer>
  );
};

export default Footer;
