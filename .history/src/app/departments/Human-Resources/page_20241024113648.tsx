// app/department/Human-Resources/page.tsx

'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // استيراد مكون الفوتر

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // لتخزين التعليمات المدخلة
  const [submittedValue, setSubmittedValue] = useState(''); // لتخزين التعليمات التي تم إرسالها

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث التعليمات عند الكتابة
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(inputValue); // تخزين التعليمات بعد الإرسال
    console.log("القيمة المدخلة:", inputValue); // عرض القيمة في الكونسول
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="factoryInput">إدخال تعليمات المصنع:</label>
        <input
          type="text"
          id="factoryInput"
          value={inputValue}
          onChange={handleChange}
          placeholder="أدخل تعليمات المصنع"
        />
        <button type="submit">إرسال</button>
      </form>

      {/* تمرير التعليمات المرسلة إلى الفوتر */}
      <Footer factoryInstructions={submittedValue} />
    </div>
  );
};

export default FactoryInstructions;
