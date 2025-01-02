'use client'; // تأكد من إضافة هذا السطر في أعلى الملف

import React, { useState } from 'react';

// مكون FactoryInstructions
const FactoryInstructions = ({ setInstructions }) => {
  // هنا يمكنك إضافة أي منطق للحصول على التعليمات من مصدر البيانات
  // سأستخدم نصًا ثابتًا كأمثلة
  const instructions = "برجاء اعتماد الاجازات المعلقة";

  // استخدم الدالة setInstructions لتحديث التعليمات
  React.useEffect(() => {
    setInstructions(instructions);
  }, [setInstructions]);

  return <div>FactoryInstructions</div>;
};

// مكون Footer
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
          animation: 'marquee 20s linear infinite', // زيادة المدة إلى 20 ثانية
        }}
      >
        <strong>{instructions}</strong>
        <span className="ml-2"> </span>
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

// المكون الرئيسي
const App = () => {
  const [instructions, setInstructions] = useState("");

  return (
    <div>
      <FactoryInstructions setInstructions={setInstructions} />
      <Footer instructions={instructions} />
    </div>
  );
};

export default App;
