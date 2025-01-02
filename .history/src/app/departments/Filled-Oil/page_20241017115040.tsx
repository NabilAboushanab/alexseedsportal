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
  const buttons = [
    { href: "/departments/Filled-Oil/add", label: "Add New Contract" },
    { href: "/departments/Filled-Oil/contracts", label: "View Contracts" },
    { href: "/departments/Filled-Oil/edit", label: "Edit Contract" },
    { href: "/departments/Filled-Oil/edit", label: "Edit Contract" },
    { href: "/departments/Filled-Oil/edit", label: "Edit Contract" },
    { href: "/departments/Filled-Oil/edit", label: "Edit Contract" },
    { href: "/departments/Filled-Oil/edit", label: "Edit Contract" },
    { href: "/departments/Filled-Oil/edit", label: "Edit Contract" },
  ];

  const columnTitles = [
    "Contracts Management",
    "Contracts Overview",
    "Contracts Actions",
    "Additional Options"
  ];

  return (
    <div className="mt-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {columnTitles.map((title, colIndex) => (
        <div key={colIndex} className="flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          {buttons
            .slice(colIndex * 2, colIndex * 2 + 2) // Adjust the slicing based on number of buttons
            .map((button, index) => (
              <Button key={index} href={button.href} label={button.label} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default page;
