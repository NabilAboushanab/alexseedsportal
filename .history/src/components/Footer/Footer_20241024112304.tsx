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
      <div className={styles.marquee}>
        <strong>{factoryInstructions || "لا توجد تعليمات."}</strong> {/* عرض التعليمات أو النص الافتراضي */}
      </div>
    </div>
  );
};

export default Footer;
