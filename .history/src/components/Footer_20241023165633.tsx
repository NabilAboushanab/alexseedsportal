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
        justifyContent: 'space-between', // توزيع المساحة بين العناصر
        alignItems: 'center',
        backgroundColor: '#38a169', // اللون الأخضر
        padding: '0 10px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* شاشة ثابتة بنفس لون الفوتر */}
      <div
        style={{
          whiteSpace: 'nowrap',
          backgroundColor: '#38a169', // نفس اللون الأخضر
          padding: '0 10px',
        }}
      >
        <strong>حقوق النشر والطباعة 2025 | تم التصميم بواسطة نبيل ابوشنب</strong>
      </div>

      {/* التعليمات المتحركة */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marquee 15s linear infinite',
          overflow: 'hidden',
          flexGrow: 1,
          marginLeft: '20px', // إضافة هامش لضمان أن تبدأ التعليمات المتحركة بعد الـ div الثابت
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
