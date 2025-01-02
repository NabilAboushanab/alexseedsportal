import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

async function createCtr(formData: FormData) {
  "use server";
  const CtrNumM = formData.get("CtrNumM")?.toString();
  const DDate = formData.get("DDate")?.toString();
  const ClientName = formData.get("ClientName")?.toString();
  const ClientCode = formData.get("ClientCode")?.toString();
  const CtrType = formData.get("CtrType")?.toString();
  const Currency = formData.get("Currency")?.toString();

  if (!CtrNumM || !DDate || !ClientName || !ClientCode || !CtrType || !Currency)
    return console.log("All fields are required");

  await prisma.tblMSContractMain.create({
    data: {
      CtrNumM,
      DDate,
      ClientName,
      ClientCode,
      CtrType,
      Currency,
    },
  });

  redirect("/");
}

const FilledOil = () => {
  return (
    <div className="w-auto mx-auto rounded-md p-5 bg-slate-300 border-2 border-gray-300">
      <h1 className="mb-7 font-bold text-3xl">Add Contract</h1>
      <form action={createCtr} method="POST">
        <input
          type="text"
          name="CtrNumM"
          placeholder="Ctr Number"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 font-bold mx-auto"
        />
        <input
          type="date"
          name="DDate"
          placeholder="Date"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold mx-auto"
        />
        <input
          type="text"
          name="ClientName"
          placeholder="Client Name"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold mx-auto"
        />
        <input
          type="number"
          name="ClientCode"
          placeholder="Client Code"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <input
          type="text"
          name="CtrType"
          placeholder="Ctr Type"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <input
          type="text"
          name="Currency"
          placeholder="Currency"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-cyan-400 text-white font-semibold text-xl rounded-md p-3 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FilledOil;
