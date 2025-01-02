'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React, { useState } from 'react';

const FactoryInstructionsForm = () => {
  const [instructions, setInstructions] = useState('برجاء اعتماد الاجازات المعلقة');

  // دالة لتحديث التعليمات عند تغييرها
  const handleInputChange = (e) => {
    setInstructions(e.target.value);
  };

  return (
    <div>
      <h2>إدخال تعليمات المصنع</h2>

      {/* عرض التعليمات المدخلة مباشرة */}
      <div>
        <textarea
          value={instructions}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          style={{ marginBottom: '10px', padding: '10px', display: 'block' }}
        />
      </div>

      {/* عرض التذييل */}
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
        justifyContent: 'flex-start', // تغيير إلى "flex-start" لتجنب المساحة الفارغة
        alignItems: 'center',
        backgroundColor: '#38a169', // اللون الأخضر
        padding: '0 10px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* التعليمات المتحركة فقط */}
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
          0% { transform: translateX(100%); } /* البداية من اليمين */
          100% { transform: translateX(-100%); } /* التحرك نحو اليسار */
        }
      `}</style>
    </div>
  );
};

export default FactoryInstructionsForm;
