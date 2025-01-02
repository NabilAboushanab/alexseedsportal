import Link from "next/link";

const page = () => {
  return (
    <div className="mt-6 flex flex-col items-center ">
      <Link
        href="/departments/Filled-Oil/add"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-60 h-16"
      >
        Add New Contract
      </Link>

      <Link
        href="/departments/Filled-Oil/contracts"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-60 h-16"
      >
        View Contracts
      </Link>

      {/* يمكنك إضافة أزرار أخرى هنا بنفس الحجم */}
      <Link
        href="/departments/Filled-Oil/edit"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-60 h-16"
      >
        Edit Contract
      </Link>

      <Link
        href="/departments/Filled-Oil/edit"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-60 h-16"
      >
        Edit Contract
      </Link>

      <Link
        href="/departments/Filled-Oil/edit"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-60 h-16"
      >
        Edit Contract
      </Link>
    </div>
  );
}

export default page;
