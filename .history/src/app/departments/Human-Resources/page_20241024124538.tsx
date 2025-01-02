// app/department/Human-Resources/page.tsx
"use client";

import React, { useState } from 'react';
import { useInstructions } from '@/context/InstructionsContext'; // تأكد من المسار الصحيح

const InstructionsForm: React.FC = () => {
  const { setInstructions } = useInstructions(); // استخدام التعليمات من Context
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInstructions(inputValue); // تحديث التعليمات المدخلة في Context
    setInputValue(''); // إعادة تعيين الحقل
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="instructions">أدخل التعليمات:</label>
      <textarea
        id="instructions"
        value={inputValue}
        onChange={handleChange}
        rows={4}
        cols={50}
      />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default InstructionsForm;
