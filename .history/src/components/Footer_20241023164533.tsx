'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React, { useState } from 'react';

const FactoryInstructionsForm = () => {
  const [instructions, setInstructions] = useState('برجاء اعتماد الاجازات المعلقة');

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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#38a169', // اللون الأخضر
        padding: '0 10px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* حقوق النشر ثابتة في اليمين */}
      <div style={{ whiteSpace: 'nowrap' }}>
        <strong>حقوق النشر والطباعة 2025 | تم التصميم بواسطة نبيل ابوشنب</strong>
      </div>

      {/* التعليمات المتحركة تبدأ من نهاية الشاشة الثابتة */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marquee 20s linear infinite',
          overflow: 'hidden',
          flexGrow: 1,
          marginLeft: '20px', // هامش بين النص الثابت والتعليمات
          flexBasis: '100%', // اجعل العنصر المتحرك يأخذ المساحة المتبقية
        }}
      >
        <div style={{ position: 'absolute', left: '100%' }}>
          <strong>{instructions}</strong>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(-100%); } /* البداية من نهاية الشاشة */
          100% { transform: translateX(-200%); } /* التحرك نحو اليسار */
        }
      `}</style>
    </div>
  );
};

export default FactoryInstructionsForm;
