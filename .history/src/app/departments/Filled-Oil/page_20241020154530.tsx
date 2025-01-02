"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext"; // استيراد الـ context

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string };
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  const { language } = useLanguage(); // الحصول على اللغة من الـ context

  return (
    <Link
      href={href}
      className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-20 mb-2"
    >
      {language === "arabic" ? label.arabic : label.english}
    </Link>
  );
};

const columns = [
  {
    title: { arabic: "الميزان", english: "Balance" },
    buttons: [{ href: "/departments/Filled-Oil/add", label: { arabic: "صادر الميزان", english: "Export Balance" } }],
  },
  // أضف بقية الأعمدة كما في المثال السابق
];

const FilledOil: React.FC = () => {
  const { language, toggleLanguage } = useLanguage(); // الحصول على اللغة و دالة التبديل

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage} // استخدام دالة التبديل من الـ context
          className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-lg"
        >
          {language === "arabic" ? "Change to English" : "تغيير إلى العربية"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-2">
              {language === "arabic" ? column.title.arabic : column.title.english}
            </h2>
            {column.buttons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                label={button.label}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilledOil;
