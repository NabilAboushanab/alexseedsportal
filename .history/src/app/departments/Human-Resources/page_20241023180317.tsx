'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React, { useState } from 'react';
import Footer from './components/Footer';


const FactoryInstructionsForm = () => {
  const [instructions, setInstructions] = useState('برجاء اعتماد الاجازات المعلقة'); // التعليمات الافتراضية

  // دالة لتحديث التعليمات عند تغييرها
  const handleInputChange = (e) => {
    setInstructions(e.target.value);
  };

  return (
    <div>
      <h2>إدخال تعليمات المصنع</h2>
      <textarea
        value={instructions}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        style={{ marginBottom: '10px', padding: '10px', display: 'block' }}
        placeholder="أدخل تعليمات المصنع هنا..."
      />

      {/* عرض التذييل مع التعليمات المدخلة */} 
      <Footer instructions={instructions} />
    </div>
  );
};

export default FactoryInstructionsForm;
