import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";


async function createCtrNumM(formData:FormData){
"use server";
const CtrNumM =formData.get("CtrNumM")?.toString();
const CustNameEn =formData.get("CustNameEn")?.toString();
const DDate = formData.get("DDate")?.toString();
const CustCode = formData.get("CustCode") ? parseInt(formData.get("CustCode") as string) : null;
const ComType =formData.get("ComType")?.toString();
const CurrShNameEn =formData.get("CurrShNameEn")?.toString();
const Premium = formData.get("Premium") ? parseFloat(formData.get("Premium") as string) : null;
const TradeMonth = formData.get("TradeMonth")?.toString();

if(!CtrNumM || !CustNameEn  || !DDate || CustCode === null || !ComType
    ||!CurrShNameEn ||Premium === null  ||!)
  return console.log("required");

const formattedDate = new Date(DDate + 'T00:00:00Z'); // Extract only the date part

await prisma.tblMSContractMain.create({
  data :{
    CtrNumM,CustNameEn, DDate: formattedDate,CustCode,ComType,CurrShNameEn,Premium,
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
   type="text"
    name="CtrNumM"
    placeholder="Ctr Number"
    className="p-2 text-xl rounded-md text-gray-950"
     />

<input
    type="date" // Correct input type for date-only
    name="DDate"
    placeholder="Date"
    className="p-2 text-xl rounded-md text-gray-950"
     />

     <input
      type="text"
      name="CustNameEn"
      placeholder="Customer Name "
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
     />

<input
      type="number"
      name="CustCode"
      placeholder="Customer Code "
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
     />

<input
      type="text"
      name="ComType"
      placeholder="CTR Type"
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
     />

<input
      type="text"
      name="CurrShNameEn"
      placeholder="Currency"
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
     />

<input
      type="number"
      name="Premium"
      step="0.001" // Allow decimal numbers for float values
      placeholder="Premium "
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
     />

<input
    type="date" // Correct input type for date-only
    name="TradeMonth"
    placeholder="Trade Month"
    className="p-2 text-xl rounded-md text-gray-950"
     />

      <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors">
      Submit
      </button>
</form>
    </div>
    </section>
  )
}

export default FilledOil