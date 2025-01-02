// components/Footer/Footer.tsx

'use client'; // تأكد من إضافة هذا السطر في أعلى الملف

import React from 'react';
import styles from './footer.module.css'; // استيراد الأنماط من footer.module.css

interface FooterProps {
  factoryInstructions: string; // إضافة prop لتخزين تعليمات المصنع
}

const Footer: React.FC<FooterProps> = ({ factoryInstructions }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.marquee}>
        <strong>{factoryInstructions || "لا توجد تعليمات."}</strong> {/* نص افتراضي إذا لم يكن هناك تعليمات */}
        <span className="ml-2"></span>
      </div>
    </div>
  );
};

export default Footer;
