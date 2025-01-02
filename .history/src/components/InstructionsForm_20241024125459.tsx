// src/components/InstructionsForm.tsx
"use client"; // تأكد من إضافة هذا السطر

import React, { useState } from 'react';
import { useInstructions } from '@/context/InstructionsContext'; // تأكد من أن المسار صحيح

const InstructionsForm: React.FC = () => {
  const [input, setInput] = useState('');
  const { setInstructions } = useInstructions(); // الحصول على setInstructions من Context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInstructions(input); // تعيين التعليمات المدخلة
    setInput(''); // مسح حقل الإدخال بعد الإرسال
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="أدخل التعليمات هنا"
      />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default InstructionsForm;
