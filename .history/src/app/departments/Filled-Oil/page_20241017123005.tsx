import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => (
  <Link
    href={href}
    className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-16 mb-2"
  >
    {label}
  </Link>
);

interface Column {
  title: string;
  buttons: ButtonProps[];
}

const columns: Column[] = [
  {
    title: "ادارة التعاقدات", // رقم 1
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: "التعاقدات" },
      { href: "/departments/Filled-Oil/edit", label: "التسعير" },
    ],
  },
  {
    title: "ادارة المبيعات", // رقم 2
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: "تسجيل ايداعات العملاء" },
      { href: "/departments/Filled-Oil/edit", label: "بيان المطالبات" },
      { href: "/departments/Filled-Oil/edit", label: "الكوتة اليومية للعملاء" },
      { href: "/departments/Filled-Oil/edit", label: "تسعيرات مبدئية" },
      { href: "/departments/Filled-Oil/edit", label: "حساب تسويات" },
      { href: "/departments/Filled-Oil/edit", label: "اجمالى حركة صادر الميزان" },
    ],
  },
  {
    title: "الحسابات", // رقم 3
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: "بيانات العملاء" },
      { href: "/departments/Filled-Oil/edit", label: "المطالبات" },
      { href: "/departments/Filled-Oil/edit", label: "تصفية صادر الميزان" },
      { href: "/departments/Filled-Oil/edit", label: "المتحصلات من العملاء" },
      { href: "/departments/Filled-Oil/edit", label: "حسابات البنوك والخزينة" },
      { href: "/departments/Filled-Oil/edit", label: "حساب تسويات" },
      { href: "/departments/Filled-Oil/edit", label: "حسابات العملاء" },
    ],
  },
  {
    title: "الميزان", // رقم 4
    buttons: [{ href: "/departments/Filled-Oil/add", label: "صادر الميزان" }],
  },
];

const Page: React.FC = () => {
  return (
    <div className="mt-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">{column.title}</h2>
          {column.buttons.map((button, index) => (
            <Button key={index} href={button.href} label={button.label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
