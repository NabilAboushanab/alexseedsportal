"use client";

import Link from 'next/link'; // Use Link for navigation between pages
import { useLanguage } from '../../../context/LanguageContext'; // Make sure the path is correct

interface ButtonProps {
  href: string;
  label: {
    arabic: string;
    english: string;
  };
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  const { language } = useLanguage(); // Access language context inside Button

  return (
    <a href={href} className="btn">
      {language === "arabic" ? label.arabic : label.english} {/* Display the correct label based on language */}
    </a>
  );
};

const Page: React.FC = () => {
  const { language } = useLanguage(); // Use useLanguage hook to determine current language

  const columns = [
    {
      title: { arabic: "التعاقدات", english: "Balance" },
      href: "/departments/Filled-Oil/contracts", // The title is a link
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
    // You can add more columns here...
  ];

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        {/* You can place a LanguageToggle component here */}
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
                label={button.label} // Pass the entire label object
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
