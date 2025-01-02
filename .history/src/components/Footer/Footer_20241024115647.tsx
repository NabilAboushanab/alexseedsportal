// components/Footer/Footer.tsx

'use client';

import React from 'react';
import styles from './footer.module.css'; // استيراد الأنماط من CSS

interface FooterProps {
  factoryInstructions: string; // التعليمات كمُدخل
}

const Footer: React.FC<FooterProps> = ({ factoryInstructions }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.instructions}>
        {/* عرض التعليمات المدخلة */}
        {factoryInstructions && <strong>تعليمات المصنع: {factoryInstructions}</strong>}
      </div>
    </div>
  );
};

export default Footer;
