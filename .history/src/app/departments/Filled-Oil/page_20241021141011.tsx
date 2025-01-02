"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // استخدام السياق للحصول على اللغة

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string };
  language: "arabic" | "english"; // تحديد اللغة لعرض التسمية الصحيحة
}

const Button: React.FC<ButtonProps> = ({ href, label, language }) => (
  <Link
    href={href}
    className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-20 mb-2"
  >
    {language === "arabic" ? label.arabic : label.english} {/* التسمية بناءً على اللغة */}
  </Link>
);

interface Column {
  title: { arabic: string; english: string };
  buttons: Omit<ButtonProps, "language">[]; // إزالة خاصية language من الأزرار
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
      { href: "/departments/Filled-Oil", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil", label: { arabic: "حسابات العملاء", english: "Client Accounts" } },
    ],
  },
  {
    title: { arabic: "إدارة المبيعات", english: "Sales Management" },
    buttons: [
      { href: "/departments/Filled-Oil", label: { arabic: "تسجيل إيداعات العملاء", english: "Client Deposits Registration" } },
      { href: "/departments/Filled-Oil", label: { arabic: "بيان المطالبات", english: "Claims Statement" } },
      { href: "/departments/Filled-Oil", label: { arabic: "الكوتة اليومية للعملاء", english: "Daily Customer Quota" } },
      { href: "/departments/Filled-Oil", label: { arabic: "تسعيرات مبدئية", english: "Preliminary Pricing" } },
      { href: "/departments/Filled-Oil", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil", label: { arabic: "إجمالي حركة صادر الميزان", english: "Total Balance Export Movement" } },
    ],
  },
  {
    title: { arabic: "إدارة التعاقدات", english: "Contracts Management" },
    buttons: [
      { href: "/departments/Filled-Oil/contracts", label: { arabic: "التعاقدات", english: "Contracts" } },
      { href: "/departments/Filled-Oil", label: { arabic: "التسعير", english: "Pricing" } },
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
      {/* زر لتبديل اللغة */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-lg p-1"
        >
          {language === "arabic" ? "English" : "عربى"}
        </button>
      </div>

      {/* عرض الأقسام مع الأزرار */}
      <div className="space-y-8 p-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-4">
              {language === "arabic" ? column.title.arabic : column.title.english}
            </h2>
            {column.buttons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                label={button.label}
                language={language} // تمرير اللغة لاختيار التسمية الصحيحة
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilledOil;
