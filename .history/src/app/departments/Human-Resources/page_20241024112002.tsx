// app/department/Human-Resources/page.tsx
"use client"; // لجعل الصفحة تعمل كـ "Client Component"

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // استيراد الفوتر

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // المتغير لحفظ البيانات المدخلة
  const [submittedValue, setSubmittedValue] = useState(''); // المتغير لحفظ البيانات عند الإرسال

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث المتغير عند إدخال النص
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(inputValue); // تخزين القيمة المدخلة عند الإرسال
    console.log("القيمة المدخلة:", inputValue); // طباعة القيمة المدخلة
  };

  return (
    <div className="page">
      <div className="content">
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
      </div>
      <Footer factoryInstructions={submittedValue} /> {/* تمرير النص المُرسل إلى الفوتر */}
    </div>
  );
};

export default FactoryInstructions;
