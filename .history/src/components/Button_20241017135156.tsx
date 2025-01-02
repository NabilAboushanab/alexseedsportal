// src/components/Button.tsx
"use client"; // جعل هذا المكون مكون عميل

import Link from "next/link";
import { useLanguage } from '../context/LanguageContext';

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string }; // تعريف التسميات باللغتين
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  const { language } = useLanguage(); // استخرج اللغة من السياق

  return (
    <Link
      href={href}
      className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-16 mb-2"
    >
      {language === 'ar' ? label.arabic : label.english} {/* استخدم اللغة المختارة هنا */}
    </Link>
  );
};

export default Button;
