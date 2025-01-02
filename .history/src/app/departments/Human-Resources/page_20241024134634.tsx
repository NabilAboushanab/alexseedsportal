// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون عميل

import React, { useState } from 'react';
import FooterDisplay from './FooterDisplay';
import CopyrightInput from './CopyrightInput';

const HumanResourcesPage: React.FC = () => {
  const [copyrightText, setCopyrightText] = useState("حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب");

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <p>أهلاً بكم في صفحة إدارة الموارد البشرية. هنا يمكنك إدارة جميع بيانات الموارد البشرية.</p>
      
      <CopyrightInput onUpdate={setCopyrightText} />
      <FooterDisplay copyrightText={copyrightText} />
    </div>
  );
};

export default HumanResourcesPage;
