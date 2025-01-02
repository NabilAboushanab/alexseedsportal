// src/components/LanguageToggle.tsx
"use client"; // جعل هذا المكون مكون عميل

import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage(); // استخدام useLanguage هنا

  return (
    <button
      onClick={toggleLanguage}
      className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-sm h-12 px-4"
    >
      {language === 'arabic' ? 'Change to English' : 'تغيير إلى العربية'}
    </button>
  );
};

export default LanguageToggle;
