import Link from "next/link";
import prisma from "@/utils/db";

const FilledOilPage = async () => {
  //ارسال كويرى لقواعد البيانات لجلب الجدول بالكامل
  const tblMSContractMain=await prisma.tblMSContractMain.findMany();
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
    </section>
  )
}

export default FilledOilPage