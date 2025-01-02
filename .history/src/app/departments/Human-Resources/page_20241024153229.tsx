// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون عميل

import React, { useState } from 'react';
import CopyrightInput from './CopyrightInput';

const HumanResourcesPage: React.FC<{ setCopyrightText: (text: string) => void }> = ({ setCopyrightText }) => {
  const [copyrightText, setLocalCopyrightText] = useState<string>('نص حقوق النشر الحالي');

  const handleCopyrightUpdate = (text: string) => {
    setLocalCopyrightText(text); // تحديث نص حقوق النشر محلياً
    setCopyrightText(text); // تحديث النص في RootLayout
    console.log("تم تحديث نص حقوق النشر: ", text);
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <CopyrightInput onUpdate={handleCopyrightUpdate} />
      <p>{copyrightText}</p> {/* عرض نص حقوق النشر الحالي */}
    </div>
  );
};

export default HumanResourcesPage;
