import Link from "next/link";
import prisma from "@/utils/db";

const page = () => {
  return (
  
    <Link
    href="/departments/Filled-Oil/add"
    className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-1 px-5 font-bold"
  >
    Add Contract
  </Link>   
    
    <Link
    href="/departments/Filled-Oil/add"
    className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-1 px-5 font-bold"
  >
    Add Contract
  </Link>


  )
}

export default page