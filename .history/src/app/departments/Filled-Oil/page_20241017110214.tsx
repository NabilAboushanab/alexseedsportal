import Link from "next/link";

const page = () => {
  return (
    <div className="mt-6">
      <Link
        href="/departments/Filled-Oil/add"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white py-4 px-8 font-bold rounded-lg text-lg m-4 flex justify-center items-center"
      >
        Add New Contract
      </Link>

      <Link
        href="/departments/Filled-Oil/contracts"
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white py-4 px-8 font-bold rounded-lg text-lg m-4 flex justify-center items-center"
      >
        View Contracts
      </Link>
    </div>
  );
}

export default page;
