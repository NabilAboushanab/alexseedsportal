import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";


async function createCtrNumM(formData:FormData){
"use server";
const CtrNumM =formData.get("CtrNumM")?.toString();
const CustNameEn =formData.get("CustNameEn")?.toString();
const DDate = formData.get("DDate")?.toString();

if(!CtrNumM || !CustNameEn )
  return console.log("required");

const formattedDate = new Date(DDate).toISOString().split("T")[0]; // Extract only the date part

await prisma.tblMSContractMain.create({
  data :{
    CtrNumM,CustNameEn, DDate: formattedDate
  }
});
redirect("/");
}

const FilledOil = () => {
  return (
    <section>
    <div className='w-2/3 mx-auto rounded-md p-5 bg-slate-400 border-2 border-gray-300'>
<h1 className="mb-7 font-bold text-3xl">Add Contract</h1>
<form action={createCtrNumM} className="flex flex-col gap-6">

<input
   type="datetime-local" // Correct type for datetime input
    name="DDate"
    placeholder="Date"
    className="p-2 text-xl rounded-md text-gray-950"
     />

  <input
   type="text"
    name="CtrNumM"
    placeholder="Ctr Number"
    className="p-2 text-xl rounded-md text-gray-950"
     />
     <input
      name="CustNameEn"
      placeholder="Customer Name "
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
      ></input>

      <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors">
      Submit
      </button>
</form>
    </div>
    </section>
  )
}

export default FilledOil