'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React, { useState } from 'react';

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

const Footer = ({ instructions }) => {
  return (
    <div
      style={{
        height: '60px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#38a169', // اللون الأخضر
        padding: '0 10px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* التعليمات المتحركة */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marquee 15s linear infinite',
          overflow: 'hidden',
          flexGrow: 1,
        }}
      >
        <strong>{instructions}</strong>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default FactoryInstructionsForm;