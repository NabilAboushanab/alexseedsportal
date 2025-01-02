'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React, { useState } from 'react';

const FactoryInstructionsForm = () => {
  const [instructions, setInstructions] = useState('تعليمات المصنع : برجاء اعتماد الاجازات المعلقة حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب');

  const handleInputChange = (e) => {
    setInstructions(e.target.value);
  };

  return (
    <div>
      <h2>إدخال تعليمات المصنع</h2>
      <form>
        <textarea
          value={instructions}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          style={{ marginBottom: '10px', padding: '10px' }}
        />
      </form>

      {/* عرض التذييل المتحرك */}
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
        overflow: 'hidden',
      }}
      className="bg-green-400 px-1"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marquee 15s linear infinite', // المدة 15 ثانية
        }}
      >
        <strong>{instructions}</strong>
        <span className="ml-2"> </span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(-100%); } /* البدء من اليسار */
          100% { transform: translateX(100%); } /* التحرك نحو اليمين */
        }
      `}</style>
    </div>
  );
};

export default FactoryInstructionsForm;
