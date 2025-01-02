// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون مكون عميل

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer'; // تأكد من المسار الصحيح
import CopyrightInput from './CopyrightInput'; // تأكد من المسار الصحيح

interface HumanResourcesPageProps {
  setCopyrightText: (text: string) => void; // دالة لتحديث نص حقوق النشر
}

const HumanResourcesPage: React.FC<HumanResourcesPageProps> = ({ setCopyrightText }) => {
  const handleUpdate = (text: string) => {
    setCopyrightText(text); // تحديث نص حقوق النشر
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <p>أهلاً بكم في صفحة إدارة الموارد البشرية. هنا يمكنك إدارة جميع بيانات الموارد البشرية.</p>
      
      <CopyrightInput onUpdate={handleUpdate} /> {/* استخدام المكون لإدخال نص حقوق النشر */}
    </div>
  );
};

export default HumanResourcesPage;
