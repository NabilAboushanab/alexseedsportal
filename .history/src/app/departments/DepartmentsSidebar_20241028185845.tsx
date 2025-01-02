import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

const DepartmentsSidebar = () => {
  return (
    <>
      {/* رابط للـ Dashboard */}
      <Link href="/departments/Filled-Oil" className="flex items-center text-lg lg:text-2xl font-semibold mb-6 w-1/4"
"
      >
        <CgMenuGridR className="text-3xl me-1" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>

      {/* الروابط للقوائم الأخرى */}
      <ul className="me-10 flex items-center justify-center flex-col lg:items-start">
        {/* رابط Filled Oil */}
        <Link
          className="flex items-center text-1 mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition"
          href="/departments/Filled-Oil"
        >
          <MdOutlineArticle className="me-1" />
          <span className="hidden lg:block">Filled Oil</span>
        </Link>

        {/* رابط Sales Oil */}
        <Link
          className="flex items-center text-1 mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition"
          href="/departments/sales-oil"
        >
          <MdOutlineArticle className="me-1" />
          <span className="hidden lg:block">Sales Oil</span>
        </Link>

        {/* رابط Human Resources */}
        <Link
          className="flex items-center text-l mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition"
          href="/departments/Human-Resources"
        >
          <MdOutlineArticle className="me-1" />
          <span className="hidden lg:block">Human Resources</span>
          
        </Link>
      </ul>
    </>
  );
};

export default DepartmentsSidebar;
