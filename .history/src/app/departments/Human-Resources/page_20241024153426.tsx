// src/app/departments/Human-Resources/page.tsx
import React, { useState } from 'react';
import CopyrightInput from './CopyrightInput';

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
    </div>
  );
};

export default HumanResourcesPage;

// src/app/departments/Human-Resources/CopyrightInput.tsx
"use client"; // لجعل هذا المكون عميل

import React, { useState } from 'react';

interface CopyrightInputProps {
  onUpdate: (text: string) => void;
}

const CopyrightInput: React.FC<CopyrightInputProps> = ({ onUpdate }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(inputText); // تمرير النص المدخل إلى والد المكون
    setInputText(''); // إعادة تعيين حقل الإدخال
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="أدخل نص حقوق النشر"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        required
      />
      <button type="submit">تحديث</button>
    </form>
  );
};

export default CopyrightInput;
