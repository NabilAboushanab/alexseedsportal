import React, { useEffect, useState } from 'react';

interface FilledOil {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  date: string;
}

const FilledOilTable = () => {
  const [filledOilData, setFilledOilData] = useState<FilledOil[]>([]);

  useEffect(() => {
    // Example API call to fetch filled oil data (replace with actual API call)
    const fetchFilledOilData = async () => {
      setFilledOilData([
        { id: 1, productName: 'Filled Oil A', quantity: 200, price: 80, date: '2024-09-29' },
        { id: 2, productName: 'Filled Oil B', quantity: 150, price: 60, date: '2024-09-28' },
      ]);
    };

    fetchFilledOilData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Filled Oil Table</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {filledOilData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.productName}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">${item.price}</td>
              <td className="border px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilledOilTable;
