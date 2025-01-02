// src/app/department/Human-Resources/page.tsx
import React from 'react';
import Footer from '@/components/Footer/Footer';

const HumanResourcesPage: React.FC = () => {
  const copyrightText = "حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب";

  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <p>أهلاً بكم في صفحة إدارة الموارد البشرية. هنا يمكنك إدارة جميع بيانات الموارد البشرية.</p>
      
      {/* يمكنك إضافة محتوى إضافي هنا */}
      
      <Footer copyrightText={copyrightText} />
    </div>
  );
};

export default HumanResourcesPage;
