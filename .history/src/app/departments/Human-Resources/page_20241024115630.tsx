// app/department/Human-Resources/page.tsx

'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // استيراد مكون الفوتر

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // لحفظ القيمة المدخلة

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث الحالة عند إدخال النص
  };

  return (
    <div>
      {/* عرض التعليمات في أعلى الصفحة */}
      <h2>تعليمات المصنع: {inputValue}</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="أدخل تعليمات المصنع"
      />

      {/* تمرير التعليمات المدخلة إلى الفوتر */}
      <Footer factoryInstructions={inputValue} />
    </div>
  );
};

export default FactoryInstructions;
