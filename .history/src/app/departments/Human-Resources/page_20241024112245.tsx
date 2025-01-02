// app/department/Human-Resources/page.tsx
'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // استيراد مكون الفوتر

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // تخزين البيانات المدخلة
  const [submittedValue, setSubmittedValue] = useState(''); // تخزين البيانات عند الإرسال

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث القيمة عند تغيير المدخل
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(inputValue); // تخزين القيمة المدخلة عند الإرسال
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
      <Footer factoryInstructions={submittedValue} /> {/* تمرير القيمة المرسلة للفوتر */}
    </div>
  );
};

export default FactoryInstructions;
