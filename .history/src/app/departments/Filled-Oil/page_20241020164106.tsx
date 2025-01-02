// src/components/FilledOil.tsx
"use client";



import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // يجب العودة إلى مجلد parent للوصول إلى context



interface ButtonProps {
  href: string;
  label: { arabic: string; english: string };
  language: "arabic" | "english"; // Pass the language to determine which label to display
}

const Button: React.FC<ButtonProps> = ({ href, label, language }) => (
  <Link
    href={href}
    className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-20 mb-2"
  >
    {language === "arabic" ? label.arabic : label.english} {/* Pass the appropriate label */}
  </Link>
);

interface Column {
  title: { arabic: string; english: string };
  buttons: Omit<ButtonProps, "language">[]; // Exclude language from buttons
}

const columns: Column[] = [
  {
    title: { arabic: "الميزان", english: "Balance" },
    buttons: [{ href: "/departments/Filled-Oil", label: { arabic: "صادر الميزان", english: "Export Balance" } } ],
  },
  {
    title: { arabic: "الحسابات", english: "Accounts" },
    buttons: [
      { href: "/departments/Filled-Oil", label: { arabic: "بيانات العملاء", english: "Client Data" } },
      { href: "/departments/Filled-Oil", label: { arabic: "المطالبات", english: "Claims" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "تصفية صادر الميزان", english: "Balance Export Filtering" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "المتحصلات من العملاء", english: "Collections from Clients" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "حسابات العملاء", english: "Client Accounts" } },
    ],
  },
  {
    title: { arabic: "ادارة المبيعات", english: "Sales Management" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: { arabic: "تسجيل ايداعات العملاء", english: "Client Deposits Registration" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "بيان المطالبات", english: "Claims Statement" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "الكوتة اليومية للعملاء", english: "Daily Customer Quota" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "تسعيرات مبدئية", english: "Preliminary Pricing" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "اجمالى حركة صادر الميزان", english: "Total Balance Export Movement" } },
    ],
  },
  {
    title: { arabic: "ادارة التعاقدات", english: "Contracts Management" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: { arabic: "التعاقدات", english: "Contracts" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "التسعير", english: "Pricing" } },
    ],
  },
];

const FilledOil: React.FC = () => {
  const { language, setLanguage } = useLanguage(); // استخدام السياق للحصول على اللغة وتحديثها

  const toggleLanguage = () => {
    setLanguage((prev: "arabic" | "english") => (prev === "arabic" ? "english" : "arabic"));
  };
  

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
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
                language={language} // Pass the language prop
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilledOil;