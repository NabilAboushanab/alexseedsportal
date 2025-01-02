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

  const columnTitles = [
    "Contracts Management",
    "Contracts Overview",
    "Contracts Actions",
    "Additional Options"
  ];

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {columnTitles.map((title, colIndex) => (
        <div key={colIndex} className="flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          {buttons
            .slice(colIndex * 2, colIndex * 2 + 2) // Adjust the slicing based on number of buttons
            .map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-md text-md flex justify-center items-center w-full h-12 px-4 mb-2"
              >
                {button.label}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default page;
