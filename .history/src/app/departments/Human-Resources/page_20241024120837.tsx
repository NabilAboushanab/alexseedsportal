// app/department/Human-Resources/page.tsx
"use client"; // إضافة هذه السطر لجعل المكون عميلًا

import React, { useState } from 'react';

const InstructionsForm: React.FC = () => {
  const [instructions, setInstructions] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('التعليمات المدخلة:', instructions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="instructions">أدخل التعليمات:</label>
      <textarea
        id="instructions"
        value={instructions}
        onChange={handleChange}
        rows={4}
        cols={50}
      />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default InstructionsForm;
