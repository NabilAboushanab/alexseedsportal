// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون عميل

import React, { useState } from 'react';
import CopyrightInput from './CopyrightInput';
import Footer from '..'; // تأكد من المسار الصحيح

const HumanResourcesPage: React.FC = () => {
  const [copyrightText, setCopyrightText] = useState<string>('نص حقوق النشر الحالي');

  const handleCopyrightUpdate = (text: string) => {
    setCopyrightText(text); // تحديث نص حقوق النشر
    console.log("تم تحديث نص حقوق النشر: ", text);
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <CopyrightInput onUpdate={handleCopyrightUpdate} />
      <p>{copyrightText}</p> {/* عرض نص حقوق النشر الحالي */}
      <Footer copyrightText={copyrightText} /> {/* تمرير النص إلى الـ Footer */}
    </div>
  );
};

export default HumanResourcesPage;
