// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون مكون عميل

import React, { useState } from 'react';
import CopyrightInput from './CopyrightInput'; // تأكد من المسار الصحيح
import FooterDisplay from './FooterDisplay'; // استيراد مكون عرض الفوتر

const HumanResourcesPage: React.FC = () => {
  const [copyrightText, setCopyrightText] = useState("حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب"); // نص حقوق النشر

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <p>أهلاً بكم في صفحة إدارة الموارد البشرية. هنا يمكنك إدارة جميع بيانات الموارد البشرية.</p>
      
      <CopyrightInput onUpdate={setCopyrightText} /> {/* استخدام المكون لإدخال نص حقوق النشر */}

      <FooterDisplay copyrightText={copyrightText} /> {/* استخدام مكون عرض الفوتر لعرض النص */}
    </div>
  );
};

export default HumanResourcesPage;
