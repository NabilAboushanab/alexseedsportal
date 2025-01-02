// app/department/Human-Resources/page.tsx
"use client"; // لجعل الصفحة تعمل كـ "Client Component"

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // استيراد الفوتر

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // المتغير لحفظ البيانات المدخلة

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث المتغير عند إدخال النص
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكن وضع التعليمات في حالة أخرى إذا كنت تريد عرضها بطريقة مختلفة
    console.log(inputValue); // معالجة البيانات المدخلة هنا
  };

  return (
    <div className="page"> {/* إضافة فئة الصفحة */}
      <div className="content"> {/* إضافة فئة المحتوى */}
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
      <Footer factoryInstructions={inputValue} /> {/* تمرير النص المدخل إلى الفوتر */}
    </div>
  );
};

export default FactoryInstructions;
