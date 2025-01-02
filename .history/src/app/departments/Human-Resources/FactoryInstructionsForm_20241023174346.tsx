'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React from 'react';

const FactoryInstructionsForm = () => {
  return (
    <div>
      <h2>Factory Instructions</h2>
      {/* عرض التذييل مع تعليمات ثابتة باللغة الإنجليزية */}
      <Footer instructions="Please approve the pending leaves." />
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