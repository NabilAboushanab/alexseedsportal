import Link from "next/link";
import prisma from "@/utils/db";

const FilledOilPage = async () => {
  //ارسال كويرى لقواعد البيانات لجلب الجدول بالكامل
  const Contracts=await prisma.tblMSContractMain.findMany();
  return (
    <section>
      <h1 className="text-4xl font-semibold">Filled Oil</h1>
      <div className="flex items-center justify-end mb-20">
<Link
href="/departments"
className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-1 px-5 font-bold"
>
  Add Contract
</Link>
</div>
  <table className="table w-full text-left mt-5">
    <thead className="border-t-2 border-b-2 border-gray-300 text-xl">
     <tr>
      <th className="p-3">#</th>
      <th>Contract Title</th>
      <th>Contract Title</th>
      <th>Contract Title</th>
     </tr>
    </thead>
    <tbody>
      {Contracts.map((tblMSContractMain,index)=>(
        <tr key={tblMSContractMain.ComID}>
      <td className="p-3">{index+1}</td>
      <td>{tblMSContractMain.ComType}</td>
      <td>
        {tblMSContractMain.Sector}
      </td>
      <td>
        <Link
         href={`/departments/${tblMSContractMain.ComID}`}
         className="bg-blue-600 hover:bg-blue-800 transition"
         >
        Details
        </Link>
      </td>
        </tr>
      ))}
    </tbody>

      </table>
    </section>
  )
}

export default FilledOilPage