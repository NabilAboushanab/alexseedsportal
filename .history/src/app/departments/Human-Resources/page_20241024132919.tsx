// src/app/department/Human-Resources/page.tsx
import React from 'react';
import Footer from '@/components/Footer/Footer';

const HumanResourcesPage: React.FC = () => {
  const copyrightText = "حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب";

  return (
    <div>
      {/* المحتوى الخاص بك هنا */}
      <Footer copyrightText={copyrightText} />
    </div>
  );
};

export default HumanResourcesPage;
