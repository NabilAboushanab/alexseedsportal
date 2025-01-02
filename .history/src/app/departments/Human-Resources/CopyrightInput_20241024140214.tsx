// src/app/departments/Human-Resources/CopyrightInput.tsx
"use client"; // لجعل هذا المكون مكون عميل

import React, { useState } from 'react';

interface CopyrightInputProps {
  onUpdate: (text: string) => void; // دالة لتحديث النص
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
