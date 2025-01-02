// src/app/departments/Human-Resources/page.tsx
import React, { useState } from 'react';
import CopyrightInput from './CopyrightInput';

interface HumanResourcesPageProps {
  setCopyrightText: (text: string) => void; // التأكد من أن setCopyrightText متضمن هنا
}

const HumanResourcesPage: React.FC<HumanResourcesPageProps> = ({ setCopyrightText }) => {
  const [localCopyrightText, setLocalCopyrightText] = useState<string>('نص حقوق النشر الحالي');

  const handleCopyrightUpdate = (text: string) => {
    setLocalCopyrightText(text); // تحديث نص حقوق النشر محلياً
    setCopyrightText(text); // تحديث النص في RootLayout
    console.log("تم تحديث نص حقوق النشر: ", text);
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <CopyrightInput onUpdate={handleCopyrightUpdate} />
      <p>{localCopyrightText}</p> {/* عرض نص حقوق النشر المحلي */}
    </div>
  );
};

export default HumanResourcesPage;