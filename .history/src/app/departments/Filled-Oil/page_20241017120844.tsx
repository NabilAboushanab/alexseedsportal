import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-16 mb-2"
    >
      {label}
    </Link>
  );
};

const page = () => {
  const editHref = "/departments/Filled-Oil/edit"; // متغير واحد لعنوان تحرير الأزرار

  const columns = [
    {
      title: "ادارة التعاقدات",
      buttons: [
        { href: editHref, label: "التعاقدات" },
        { href: editHref, label: "التسعير" },
      ],
      order: 1,
    },
    {
      title: "ادارة المبيعات",
      buttons: [
        { href: editHref, label: " تسجيل ايداعات العملاء" },
        { href: editHref, label: "بيان المطالبات" },
        { href: editHref, label: "الكوتة اليومية للعملاء" },
        { href: editHref, label: "تسعيرات مبدئية" },
        { href: editHref, label: "حساب تسويات" },
        { href: editHref, label: "اجمالى حركة صادر الميزان" },
      ],
      order: 2,
    },
    {
      title: "الحسابات",
      buttons: [
        { href: editHref, label: "بيانات العملاء" },
        { href: editHref, label: "المطالبات" },
        { href: editHref, label: "تصفية صادر الميزان" },
        { href: editHref, label: "المتحصلات من العملاء" },
        { href: editHref, label: "حسابات البنوك والخزينة" },
        { href: editHref, label: "حساب تسويات" },
        { href: editHref, label: "حسابات العملاء" },
      ],
      order: 3,
    },
    {
      title: "الميزان",
      buttons: [
        { href: "/departments/Filled-Oil/add", label: "صادر الميزان" },
      ],
      order: 4,
    },
  ];

  return (
    <div className="mt-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className={`flex flex-col items-center order-${column.order}`}>
          <h2 className="font-bold text-xl mb-2">{column.title}</h2>
          {column.buttons.map((button, index) => (
            <Button key={index} href={button.href} label={button.label} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default page;
