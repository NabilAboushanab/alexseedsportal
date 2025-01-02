import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle} from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

const DepartmentsSidebar = () => {
  return (
    <>
    <Link href="/departments/Filled-Oil" className="flex items-center text-lg lg:text-2xl  font-semibold">
    <CgMenuGridR  className="text-3xl me-1"/>
   <span className="hidden lg:block">ashboard</span>
    </Link >
    <ul className="me-10 flex items-center justify-center flex-col lg:items-start">
<Link className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition" href="/departments/Filled-Oil">
<MdOutlineArticle className="me-1" />
<span className="hidden lg:block">Filled Oil</span>
</Link>

<Link className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition" href="/departments/sales-oil">
<MdOutlineArticle className="me-1" />
<span className="hidden lg:block">Sales Oil</span>
</Link>
    </ul>

    
    </>
  )
}

export default DepartmentsSidebar