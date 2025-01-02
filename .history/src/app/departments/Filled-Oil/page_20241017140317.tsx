// src/app/departments/Filled-Oil/page.tsx
"use client"; // جعل هذا المكون مكون عميل

import Button from '../../../components/Button'; // تأكد من المسار الصحيح
import LanguageToggle from '../../../components/LanguageToggle'; // تأكد من المسار الصحيح
import { useLanguage } from '../../../context/LanguageContext'; // تأكد من المسار الصحيح

const Page: React.FC = () => {
  const { language } = useLanguage(); // استخدم useLanguage هنا

  // ... (تابع تعريف الأعمدة والزرائر كما في السابق)

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        <LanguageToggle />
      </div>
      {/* بقية الكود... */}
    </div>
  );
};

export default Page;
