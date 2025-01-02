// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون مكون عميل

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';

const HumanResourcesPage: React.FC = () => {
  const [copyrightText, setCopyrightText] = useState("حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب");
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCopyrightText(inputText); // تحديث نص حقوق النشر
    setInputText(''); // إعادة تعيين حقل الإدخال
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <p>أهلاً بكم في صفحة إدارة الموارد البشرية. هنا يمكنك إدارة جميع بيانات الموارد البشرية.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="أدخل نص حقوق النشر"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          required
        />
        <button type="submit">تحديث</button>
      </form>

      <Footer copyrightText={copyrightText} /> {/* تمرير النص المدخل إلى Footer */}
    </div>
  );
};

export default HumanResourcesPage;
