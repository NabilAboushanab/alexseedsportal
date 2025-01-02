import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => (
  <Link href={href}>
    <a className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-16 mb-2">
      {label}
    </a>
  </Link>
);

interface Column {
  title: { arabic: string; english: string };
  buttons: ButtonProps[];
}

const columns: Column[] = [
  {
    title: { arabic: "الميزان", english: "Balance" },
    buttons: [{ href: "/departments/Filled-Oil/add", label: "Export Balance" }],
  },
  {
    title: { arabic: "الحسابات", english: "Accounts" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: "Client Data" },
      { href: "/departments/Filled-Oil/edit", label: "Claims" },
      { href: "/departments/Filled-Oil/edit", label: "Balance Export Filtering" },
      { href: "/departments/Filled-Oil/edit", label: "Collections from Clients" },
      { href: "/departments/Filled-Oil/edit", label: "Bank and Treasury Accounts" },
      { href: "/departments/Filled-Oil/edit", label: "Settlements Account" },
      { href: "/departments/Filled-Oil/edit", label: "Client Accounts" },
    ],
  },
  {
    title: { arabic: "ادارة المبيعات", english: "Sales Management" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: "Client Deposits Registration" },
      { href: "/departments/Filled-Oil/edit", label: "Claims Statement" },
      { href: "/departments/Filled-Oil/edit", label: "Daily Customer Quota" },
      { href: "/departments/Filled-Oil/edit", label: "Preliminary Pricing" },
      { href: "/departments/Filled-Oil/edit", label: "Settlements Account" },
      { href: "/departments/Filled-Oil/edit", label: "Total Balance Export Movement" },
    ],
  },
  {
    title: { arabic: "ادارة التعاقدات", english: "Contracts Management" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: "Contracts" },
      { href: "/departments/Filled-Oil/edit", label: "Pricing" },
    ],
  },
];

const Page: React.FC = () => {
  const [language, setLanguage] = useState("arabic");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "arabic" ? "english" : "arabic"));
  };

  return (
    <div className="mt-6 mb-16">
      <button
        onClick={toggleLanguage}
        className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-lg mb-4"
      >
        {language === "arabic" ? "Change to English" : "تغيير إلى العربية"}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-2">
              {language === "arabic" ? column.title.arabic : column.title.english}
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
