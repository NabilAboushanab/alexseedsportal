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
      title: { arabic: "التعاقدات", english: "Balance" },
      href: "/departments/Filled-Oil/contracts", // العنوان سيكون لينك
      buttons: [
        {
          href: "/departments/Filled-Oil/contracts",
          label: {
            arabic: "التعاقدات",
            english: "Export Balance", 
          },
        },
      ],
    },
    // يمكنك إضافة أعمدة أخرى هنا...
  ];

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">{language === "arabic" ? "صفحة التعاقدات" : "Contracts Page"}</h1>
        <LanguageToggle /> {/* زر تغيير اللغة */}
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
                label={button.label} // This is correctly passing the label object with arabic and english
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
