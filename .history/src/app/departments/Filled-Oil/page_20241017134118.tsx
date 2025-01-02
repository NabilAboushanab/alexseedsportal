// src/pages/index.tsx
"use client"; // جعل هذا المكون مكون عميل

import Button from '../components/Button';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string }; // تعريف التسميات باللغتين
}

interface Column {
  title: { arabic: string; english: string };
  buttons: ButtonProps[];
}

const columns: Column[] = [
  {
    title: { arabic: "الميزان", english: "Balance" },
    buttons: [{ href: "/departments/Filled-Oil", label: { arabic: "صادر الميزان", english: "Export Balance" } }],
  },
  {
    title: { arabic: "الحسابات", english: "Accounts" },
    buttons: [
      { href: "/departments/Filled-Oil", label: { arabic: "بيانات العملاء", english: "Client Data" } },
      { href: "/departments/Filled-Oil", label: { arabic: "المطالبات", english: "Claims" } },
      { href: "/departments/Filled-Oil", label: { arabic: "تصفية صادر الميزان", english: "Balance Export Filtering" } },
      { href: "/departments/Filled-Oil", label: { arabic: "المتحصلات من العملاء", english: "Collections from Clients" } },
      { href: "/departments/Filled-Oil", label: { arabic: "حسابات البنوك والخزينة", english: "Bank and Treasury Accounts" } },
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
      { href: "/departments/Filled-Oil/contracts", label: { arabic: "التعاقدات", english: "Contracts" } },
      { href: "/departments/Filled-Oil", label: { arabic: "التسعير", english: "Pricing" } },
    ],
  },
];

const Page: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        <LanguageToggle /> {/* استخدم مكون LanguageToggle هنا */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-2">
              {language === 'ar' ? column.title.arabic : column.title.english}
            </h2>
            {column.buttons.map((button, index) => (
              <Button key={index} href={button.href} label={button.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
