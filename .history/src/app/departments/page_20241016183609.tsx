import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";



redirect("/departments/Filled-Oil");
}

const FilledOil = () => {
  return (
    <section>
    <div className='w-auto mx-auto rounded-md p-5 bg-slate-400 border-2 border-gray-300'>
<h1 className="mb-7 font-bold text-3xl">Add Contract</h1>


    </div>
    </section>
  )
}

export default FilledOil