// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون عميل

import React, { useState } from 'react';
import CopyrightInput from './CopyrightInput';


const HumanResourcesPage: React.FC = () => {
  const [copyrightText, setCopyrightText] = useState<string>('نص حقوق النشر الحالي');

  const handleCopyrightUpdate = (text: string) => {
    setCopyrightText(text); // تحديث النص في الصفحة
    console.log("تم تحديث نص حقوق النشر: ", text);
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <CopyrightInput onUpdate={handleCopyrightUpdate} />
      <p>{copyrightText}</p> {/* عرض نص حقوق النشر الحالي */}
      <Foote copyrightText={copyrightText} /> {/* تمرير نص حقوق النشر إلى الفوتر */}
    </div>
  );
};

export default HumanResourcesPage;
