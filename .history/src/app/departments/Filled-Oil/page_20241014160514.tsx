import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

async function createCtr(formData: FormData) {
  "use server";
  const CtrNumM = formData.get("CtrNumM")?.toString();
  const DDate = formData.get("DDate")?.date();
  const CustNameEn = formData.get("CustNameEn")?.toString();
  const CustCode = formData.get("CustCode")?.int();
  const CtrType = formData.get("CtrType")?.toString();
  const CurrShNameEn = formData.get("CurrShNameEn")?.toString();
  const Premium = formData.get("Premium")?.flout();

  if (!CtrNumM || !DDate || !CustNameEn || !CustCode || !CtrType || !CurrShNameEn) {
    return console.log("All fields are required");
  }

  await prisma.tblMSContractMain.create({
    data: {
      CtrNumM,
      DDate,
      CustNameEn,
      CustCode,
      CtrType,
      CurrShNameEn,
    },
  });

  redirect("/");
}

const FilledOil = () => {
  return (
    <div className="w-auto mx-auto rounded-md p-5 bg-slate-300 border-2 border-gray-300">
      <h1 className="mb-7 font-bold text-3xl">Add Ctr Number</h1>

      <form action={createCtr}>
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
          name="CustNameEn"
          placeholder="Client Name"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold mx-auto"
        />
        <input
          type="int"
          name="CustCode"
          placeholder="Client Code"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <input
          type="text"
          name="ComType"
          placeholder="Ctr Type"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <input
          type="text"
          name="CurrShNameEn"
          placeholder="CurrShNameEn"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />

<input
          type="number"
          name="Premium"
          placeholder="Premium"
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
