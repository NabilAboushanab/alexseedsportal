import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

async function createCtrNumM(formData:FormData){
"use server";
const title =formData.get("title")?.toString();
const description =formData.get("description")?.toString();

if(!title || !description)
  return console.log("required");

await prisma.task.create({
  data :{
    title,description
  }
});
redirect("/");
}

const FilledOil = () => {
  return (
    <section>
    <div className='w-2/3 mx-auto rounded-md p-5 bg-slate-800 border-2 border-gray-300'>
<h1 className="mb-7 font-bold text-3xl">Add Your Task</h1>
<form action={createCtrNumM} className="flex flex-col gap-6">
  <input
   type="text"
    name="CtrNumM"
    placeholder="Ctr NumM"
    className="p-2 text-xl rounded-md text-gray-950"
     />

     <input
      name="CustNameEn"
      placeholder="Custo Name En"
      className="p-2 text-xl rounded-md text-gray-950 resize-none"
      ></input>
      <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors">
       add Task
      </button>
</form>
    </div>
    </section>
  )
}

export default FilledOil