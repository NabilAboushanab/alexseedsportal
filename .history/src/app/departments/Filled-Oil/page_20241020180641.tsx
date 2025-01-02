"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string };
  language: "arabic" | "english";
  submenu?: { href: string; label: { arabic: string; english: string } }[]; // Optionally pass a submenu
}

const Button: React.FC<ButtonProps> = ({ href, label, language, submenu }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  return (
    <div className="relative">
      <Link
        href={href}
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-20 mb-2"
        onClick={submenu ? toggleSubmenu : undefined}
      >
        {language === "arabic" ? label.arabic : label.english}
      </Link>

      {submenu && isSubmenuVisible && (
        <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-lg w-full">
          {submenu.map((sub, index) => (
            <Link
              key={index}
              href={sub.href}
              className="block bg-gray-100 hover:bg-gray-200 transition-colors text-black font-semibold text-lg px-4 py-2"
            >
              {language === "arabic" ? sub.label.arabic : sub.label.english}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface Column {
  title: { arabic: string; english: string };
  buttons: Omit<ButtonProps, "language">[]; // Exclude language from buttons
}

const columns: Column[] = [
  {
    title: { arabic: "الميزان", english: "Balance" },
    buttons: [
      {
        href: "/departments/Filled-Oil",
        label: { arabic: "صادر الميزان", english: "Export Balance" },
        submenu: [
          { href: "/departments/Filled-Oil/advanced", label: { arabic: "الإعدادات المتقدمة", english: "Advanced Settings" } },
        ],
      },
    ],
  },
  {
    title: { arabic: "الحسابات", english: "Accounts" },
    buttons: [
      { href: "/departments/Filled-Oil", label: { arabic: "بيانات العملاء", english: "Client Data" } },
      { href: "/departments/Filled-Oil", label: { arabic: "المطالبات", english: "Claims" } },
      { href: "/departments/Filled-Oil", label: { arabic: "تصفية صادر الميزان", english: "Balance Export Filtering" } },
      { href: "/departments/Filled-Oil", label: { arabic: "المتحصلات من العملاء", english: "Collections from Clients" } },
      { href: "/departments/Filled-Oil", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil", label: { arabic: "حسابات العملاء", english: "Client Accounts" } },
    ],
  },
  {
    title: { arabic: "ادارة المبيعات", english: "Sales Management" },
    buttons: [
      { href: "/departments/Filled-Oil", label: { arabic: "تسجيل ايداعات العملاء", english: "Client Deposits Registration" } },
      { href: "/departments/Filled-Oil", label: { arabic: "بيان المطالبات", english: "Claims Statement" } },
      { href: "/departments/Filled-Oil", label: { arabic: "الكوتة اليومية للعملاء", english: "Daily Customer Quota" } },
      { href: "/departments/Filled-Oil", label: { arabic: "تسعيرات مبدئية", english: "Preliminary Pricing" } },
      { href: "/departments/Filled-Oil", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil", label: { arabic: "اجمالى حركة صادر الميزان", english: "Total Balance Export Movement" } },
    ],
  },
  {
    title: { arabic: "ادارة التعاقدات", english: "Contracts Management" },
    buttons: [
      {
        href: "/departments/Filled-Oil/contracts",
        label: { arabic: "التعاقدات", english: "Contracts" },
        submenu: [
          { href: "/departments/Filled-Oil/contracts/active", label: { arabic: "التعاقدات النشطة", english: "Active Contracts" } },
          { href: "/departments/Filled-Oil/contracts/archived", label: { arabic: "التعاقدات المؤرشفة", english: "Archived Contracts" } },
        ],
      },
      { href: "/departments/Filled-Oil", label: { arabic: "التسعير", english: "Pricing" } },
    ],
  },
];

const FilledOil: React.FC = () => {
  const { language, setLanguage } = useLanguage();

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
                language={language}
                submenu={button.submenu} // Pass the submenu if exists
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilledOil;
