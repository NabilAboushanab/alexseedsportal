//src/app/departments/Filled-Oil/clients/page.tsx
import Link from "next/link";
import prisma from "@/utils/db";

const customers = async () => {
  // إرسال كويري لجلب الجدول بالكامل
  const Contracts = await prisma.tblMSContractMain.findMany();
  
  return (
    <section>
      <h1 className="text-4xl font-semibold">Filled Oil</h1>
      <div className="flex items-center justify-end mb-20">

      </div>
      <table className="table w-full text-left mt-5">
        <thead className="border-t-2 border-b-2 border-gray-300 text-xl">
          <tr>
          <th className="p-0 text-sm">Serial</th>
            <th className="p-0 text-sm">Ctr Number</th>
            <th className="p-0 text-sm">Customer Name</th>
            <th className="p-0 text-sm">Customer Code</th>
            <th className="p-0 text-sm">Ctr Type</th>
            <th className="p-0 text-sm">Trade Month</th>
            <th className="p-0 text-sm">Total Committed</th>
            <th className="p-0 text-sm">Priced</th>
            <th className="p-0 text-sm">Shipment</th>
          </tr>
        </thead>
        <tbody>
          {Contracts.map((tblMSContractMain, index) => (
            <tr key={tblMSContractMain.ComID} className="border-b border-gray-500">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{tblMSContractMain.CtrNumM}</td>
              <td className="p-3">
                {tblMSContractMain.DDate ? new Date(tblMSContractMain.DDate).toLocaleDateString('en-GB') : 'N/A'}
              </td>
              <td className="p-3">{tblMSContractMain.CustNameEn}</td>
              <td className="p-3">{tblMSContractMain.CustCode}</td>
              <td className="p-3">{tblMSContractMain.ComType}</td>
              <td className="p-3">{tblMSContractMain.CurrShNameEn}</td>
              {tblMSContractMain.TradeMonth ? new Date(tblMSContractMain.TradeMonth).toLocaleDateString('en-GB') : 'N/A'}
              <td className="p-3">{tblMSContractMain.Premium}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default customers;

