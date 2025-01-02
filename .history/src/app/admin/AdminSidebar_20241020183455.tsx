import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DepartmentsSidebar = () => {
  const [isFilledOilOpen, setFilledOilOpen] = useState(false);
  const [isSalesOilOpen, setSalesOilOpen] = useState(false);

  const toggleFilledOilMenu = () => setFilledOilOpen(!isFilledOilOpen);
  const toggleSalesOilMenu = () => setSalesOilOpen(!isSalesOilOpen);

  return (
    <>
      {/* رابط للـ Dashboard */}
      <Link href="/departments/Filled-Oil">
        <a className="flex items-center text-lg lg:text-2xl font-semibold mb-6">
          <CgMenuGridR className="text-3xl me-1" aria-hidden="true" />
          <span className="hidden lg:block">Dashboard</span>
        </a>
      </Link>

      {/* الروابط للقوائم الأخرى */}
      <ul className="me-10 flex items-center justify-center flex-col lg:items-start">
        {/* رابط Filled Oil */}
        <li className="mb-5">
          <button
            onClick={toggleFilledOilMenu}
            className="flex items-center text-xl lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition"
          >
            <MdOutlineArticle className="me-1" aria-hidden="true" />
            <span className="hidden lg:block">Filled Oil</span>
            <FaChevronDown className="ml-2" />
          </button>

          {isFilledOilOpen && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link href="/departments/Filled-Oil/subsection1">
                  <a className="text-lg hover:text-yellow-200">Subsection 1</a>
                </Link>
              </li>
              <li>
                <Link href="/departments/Filled-Oil/subsection2">
                  <a className="text-lg hover:text-yellow-200">Subsection 2</a>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* رابط Sales Oil */}
        <li className="mb-5">
          <button
            onClick={toggleSalesOilMenu}
            className="flex items-center text-xl lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition"
          >
            <MdOutlineArticle className="me-1" aria-hidden="true" />
            <span className="hidden lg:block">Sales Oil</span>
            <FaChevronDown className="ml-2" />
          </button>

          {isSalesOilOpen && (
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <Link href="/departments/sales-oil/subsection1">
                  <a className="text-lg hover:text-yellow-200">Subsection 1</a>
                </Link>
              </li>
              <li>
                <Link href="/departments/sales-oil/subsection2">
                  <a className="text-lg hover:text-yellow-200">Subsection 2</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default DepartmentsSidebar;
