import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link
        href="/departments/Filled-Oil/add"
        className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-1 px-5 font-bold"
      >
        Add NContract
      </Link>

      <Link
        href="/departments/Filled-Oil/view"
        className="bg-blue-300 hover:bg-blue-400 transition-colors text-black py-1 px-5 font-bold ml-4"
      >
        View Contracts
      </Link>
    </div>
  );
}

export default page;
