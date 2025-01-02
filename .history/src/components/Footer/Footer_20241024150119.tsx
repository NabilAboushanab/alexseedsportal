// src/app/Footer/Footer.tsx
"use client"; // لجعل هذا المكون عميل

import React from 'react';

interface FooterProps {
  copyrightText: string; // إضافة props لنص حقوق النشر
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer>
      <p>{copyrightText}</p> {/* عرض نص حقوق النشر هنا */}
      <p>حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب</p>
    </footer>
  );
};

export default Footer;
