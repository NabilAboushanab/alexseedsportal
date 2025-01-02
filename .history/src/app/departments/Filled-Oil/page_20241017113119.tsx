import Link from "next/link";

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

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {buttons.map((button, index) => (
        <Link
          key={index}
          href={button.href}
          className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-full h-16"
        >
          {button.label}
        </Link>
      ))}
    </div>
  );
}

export default page;
