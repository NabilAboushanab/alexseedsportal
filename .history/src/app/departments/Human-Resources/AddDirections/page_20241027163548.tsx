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
    name="Directions"
    placeholder="Directions"
    className="p-2 text-lg rounded-md text-gray-950 placeholder-blue-500"
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

