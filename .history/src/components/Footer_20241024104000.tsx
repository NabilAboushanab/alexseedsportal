'use client'; // تأكد من إضافة هذا السطر في أعلى الملف

import React from 'react';
import styles from './Footer.module.css'; // استيراد الأنماط من مجلد footer

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.marquee}>
        <strong>تعليمات المصنع: برجاء اعتماد الاجازات المعلقة حقوق النشر والطباعة</strong>
        <span className="ml-2"></span>
      </div>
    </div>
  );
};

export default Footer;
