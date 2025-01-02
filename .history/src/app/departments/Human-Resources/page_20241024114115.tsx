// app/department/Human-Resources/page.tsx

'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // استيراد مكون الفوتر

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // لتخزين التعليمات التي يتم إدخالها
  const [submittedValue, setSubmittedValue] = useState(''); // لتخزين التعليمات التي تم إرسالها

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث القيمة عند إدخال المستخدم
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(inputValue); // تعيين التعليمات المُرسلة
    setInputValue(''); // إعادة تعيين الحقل إلى فارغ بعد الإرسال
    console.log("تم إرسال التعليمات:", submittedValue); // عرض البيانات المرسلة في الكونسول
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
