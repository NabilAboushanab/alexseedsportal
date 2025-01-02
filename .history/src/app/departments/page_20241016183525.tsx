import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";


// Take Data From Form
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

// validation 
if(!CtrNumM || !CustNameEn  || !DDate || CustCode === null || !ComType
    ||!CurrShNameEn ||Premium === null  ||!TradeMonth)
  return console.log("required");

const formattedDDate = new Date(DDate + 'T00:00:00Z'); // Extract only the date part
const formattedTradeMonth = new Date(TradeMonth); // Properly handle datetime input

//Create on Database
await prisma.tblMSContractMain.create({
  data :{
    CtrNumM,CustNameEn, DDate: formattedDDate,CustCode,ComType,
    CurrShNameEn,Premium,TradeMonth:formattedTradeMonth
  }
});
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