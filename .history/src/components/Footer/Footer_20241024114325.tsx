// components/Footer/Footer.tsx

'use client';

import React from 'react';
import styles from './footer.module.css'; // استيراد الأنماط من CSS

interface FooterProps {
  factoryInstructions: string; // التعليمات كمُدخل
}

const Footer: React.FC<FooterProps> = ({ factoryInstructions }) => {
  console.log("تعليمات المصنع في الفوتر:", factoryInstructions); // تحقق من القيمة في الكونسول

  return (
    <div className={styles.footer}>
      <div className={styles.instructions}>
        {/* عرض التعليمات فقط إذا كانت موجودة */}
        {factoryInstructions && <strong>{factoryInstructions}</strong>}
      </div>
    </div>
  );
};

export default Footer;
