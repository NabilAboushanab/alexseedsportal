import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation"

async function createCtr(formData:FormData) {
"use server";
const CtrNumM= formData.get("CtrNumM")?.toString();
const DDate =formData.get("DDate")?.toString();

if(!CtrNumM || !DDate)
return console.log("required");

await prisma.tblMSContractMain.create({
  data:{
    CtrNumM,DDate
  }
});
redirect("/");
}
const FilledOil = () => {
  return (
    //for add title
    <div className="w-auto mx-auto rounded-md p-5 bg-slate-300 border-2 border-gray-300" >
<h1 className="mb-7 font-bold text-3xl">Add Ctr Number</h1>

<form action={createCtr} >
  <input
   type="text"
   name="CtrNumM"
   placeholder="Ctr Number" 
    className="mb-2 p-2 text-xl rounded-md text-gray-950 font-bold mx-auto "
    /> 


</form>

<button type="submit" className="bg-green-600 hover:bg-cyan-400 text-white font-semibold text-xl rounded-md p-3 transition-colors">
  Submit
  </button>
    </div>
  )
}

export default FilledOil