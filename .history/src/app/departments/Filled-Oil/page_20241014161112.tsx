import { redirect } from 'next/navigation';
import prisma from '@/utils/db';

const FilledOil = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const CtrNumM = formData.get('CtrNumM')?.toString();
    const DDate = formData.get('DDate')?.toString();
    const CustNameEn = formData.get('CustNameEn')?.toString();
    const CustCode = parseInt(formData.get('CustCode') as string, 10);
    const CtrType = formData.get('CtrType')?.toString();
    const CurrShNameEn = formData.get('CurrShNameEn')?.toString();
    const Premium = parseFloat(formData.get('Premium') as string);

    if (!CtrNumM || !DDate || !CustNameEn || !CustCode || !CtrType || !CurrShNameEn || !Premium) {
      console.log('All fields are required');
      return;
    }

    try {
      await prisma.tblMSContractMain.create({
        data: {
          CtrNumM,
          DDate,
          CustNameEn,
          CustCode,
          CtrType,
          CurrShNameEn,
          Premium,
        },
      });

      redirect('/'); // Use redirect from next/navigation after form submission
    } catch (error) {
      console.error('Error creating contract:', error);
    }
  };

  return (
    <div className="w-auto mx-auto rounded-md p-5 bg-slate-300 border-2 border-gray-300">
      <h1 className="mb-7 font-bold text-3xl">Add Contract Number</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="CtrNumM"
          placeholder="Contract Number"
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
          type="number"
          name="CustCode"
          placeholder="Client Code"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <input
          type="text"
          name="CtrType"
          placeholder="Contract Type"
          className="mb-2 p-2 text-xl rounded-md text-gray-950 border-2 font-bold"
        />
        <input
          type="text"
          name="CurrShNameEn"
          placeholder="Currency Short Name"
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
