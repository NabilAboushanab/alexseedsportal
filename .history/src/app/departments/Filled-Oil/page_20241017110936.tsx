import Link from "next/link";

const page = () => {
  return (
    <div className="mt-6 flex flex-col items-center">
      <Link
        href="/departments/Filled-Oil/add"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-5 max-w-md h-16"
      >
        Add New Contract
      </Link>

      <Link
        href="/departments/Filled-Oil/contracts"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg m-4 flex justify-center items-center w-full max-w-md h-16"
      >
        View Contracts
      </Link>
    </div>
  );
}

export default page;
