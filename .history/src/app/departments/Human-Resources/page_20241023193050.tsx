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