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
        alignItems: 'center',
        backgroundColor: '#38a169', // اللون الأخضر
        padding: '0 10px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        justifyContent: 'space-between' // توزيع العناصر بشكل متساوي
      }}
    >
      {/* حقوق النشر ثابتة في اليمين */}
      <div style={{ whiteSpace: 'nowrap' }}>
        <strong>حقوق النشر والطباعة 2025 | تم التصميم بواسطة نبيل ابوشنب</strong>
      </div>

      {/* التعليمات المتحركة تبدأ بعد النص الثابت */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          marginLeft: '20px', // هامش بين النص الثابت والتعليمات
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '100%', // بدء الحركة من نهاية العنصر
            animation: 'marquee 1s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          <strong>{instructions}</strong>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); } /* البداية من النهاية */
          100% { transform: translateX(-100%); } /* التحرك نحو اليسار حتى تتجاوز كلمة حقوق */
        }
      `}</style>
    </div>
  );
};

export default FactoryInstructionsForm;
