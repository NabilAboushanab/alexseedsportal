// src/app/departments/Human-Resources/page.tsx
"use client"; // لجعل هذا المكون مكون عميل

import React, { useState } from 'react';
import Footer from '@/components/Footer/Footer';

interface HumanResourcesPageProps {
  setCopyrightText: (text: string) => void; // دالة لتحديث نص حقوق النشر
}

const HumanResourcesPage: React.FC<HumanResourcesPageProps> = ({ setCopyrightText }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCopyrightText(inputText); // تحديث نص حقوق النشر
    setInputText(''); // إعادة تعيين حقل الإدخال
  };

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
     
      
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
    </div>
  );
};

export default HumanResourcesPage;
