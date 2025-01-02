import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";


// Take Data From Form
async function createdirections(formData:FormData){
"use server";

const Directions =formData.get("Directions")?.toString();
// validation 
if(!Directions )
  return console.log("required");

const formattedDirections = new Date(DDate + 'T00:00:00Z'); // Extract only the date part


//Create on Database
await prisma.TblDirectionsAdd.create({
  data :{
    Directions
  }
});
redirect("/departments/Filled-Oil/contracts");
}

const HumanResourcesPage = () => {
  return (
    <section>
    <div className='w-auto mx-auto rounded-md p-5 bg-slate-400 border-2 border-gray-300'>
<h1 className="mb-7 font-bold text-3xl">Add Contract</h1>

<form action={createdirections} className="grid grid-cols-2 gap-6">

<input
   type="text"
    name="CtrNumM"
    placeholder="Ctr Number"
    className="p-2 text-lg rounded-md text-gray-950 placeholder-blue-500"
     />

<input
    type="date" // Correct input type for date-only
    name="DDate"
    placeholder="Date"
    className="p-2 text-lg text- rounded-md text-gray-950  placeholder-blue-500"
     />

     <input
      type="text"
      name="CustNameEn"
      placeholder="Customer Name "
      className="p-2 text-lg rounded-md text-gray-950  placeholder-blue-500 "
     />

<input
      type="number"
      name="CustCode"
      placeholder="Customer Code "
      className="p-2 text-lg rounded-md text-gray-950  placeholder-blue-500"
     />

<input
      type="text"
      name="ComType"
      placeholder="CTR Type"
      className="p-2 text-lg rounded-md text-gray-950  placeholder-blue-500 "
     />

<input
      type="text"
      name="CurrShNameEn"
      placeholder="Currency"
      className="p-2 text-lg rounded-md text-gray-950  placeholder-blue-500"
     />

<input
      type="number"
      name="Premium"
      step="0.001" // Allow decimal numbers for float values
      placeholder="Premium "
      className="p-2 text-lg rounded-md text-gray-950  placeholder-blue-500 "
     />

<input
    type="datetime-local" // Allows selecting both date and time
    name="TradeMonth"
    placeholder="Trade Month"
    className="p-2 text-lg rounded-md text-gray-950  placeholder-blue-500"
     />
<div className="col-span-2 flex justify-center">
<button  type="submit"  className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors">
      Submit
      </button>
</div>

</form>
    </div>
    </section>
  )
}

export default HumanResourcesPage;


