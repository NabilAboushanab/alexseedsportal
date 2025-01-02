// src/app/departments/Filled-Oil/page.tsx
"use client";

import Button from '../../../components/Button'; // تأكد من المسار الصحيح
import LanguageToggle from '../../../components/LanguageToggle'; // تأكد من المسار الصحيح
import { useLanguage } from '../../../context/LanguageContext'; // تأكد من المسار الصحيح
import Link from 'next/link'; // استخدم Link للتنقل بين الصفحات

const Page: React.FC = () => {
  const { language } = useLanguage(); // استخدم useLanguage هنا

  const columns = [
    {
      title: { arabic: "الميزان", english: "Balance" }, // تأكد من الترجمة الصحيحة
      href: "/departments/Filled-Oil/balance", // تعديل الرابط ليطابق العنوان
      buttons: [
        {
          href: "/departments/Filled-Oil/balance/export",
          label: {
            arabic: "تصدير الميزان",
            english: "Export Balance",
          },
        },
      ],
    },
    // يمكنك إضافة أعمدة أخرى هنا...
  ];

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        <LanguageToggle />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center">
            <Link href={column.href}>
              <span className="font-bold text-xl mb-2 cursor-pointer">
                {language === "arabic" ? column.title.arabic : column.title.english}
              </span>
            </Link>
            {column.buttons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                label={language === "arabic" ? button.label.arabic : button.label.english}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;