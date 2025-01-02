import React, { useEffect, useState } from 'react';

interface SalesOil {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  date: string;
}

const SalesOilTable = () => {
  const [salesData, setSalesData] = useState<SalesOil[]>([]);

  useEffect(() => {
    // Replace this with your API call to fetch sales data
    const fetchSalesData = async () => {
      // Example: fetch('/api/salesoil').then(res => res.json()).then(data => setSalesData(data));
      setSalesData([
        { id: 1, productName: 'Oil A', quantity: 100, price: 50, date: '2024-09-29' },
        { id: 2, productName: 'Oil B', quantity: 50, price: 30, date: '2024-09-28' }
      ]);
    };

    fetchSalesData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Sales Oil Table</h1>
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
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td className="border px-4 py-2">{sale.productName}</td>
              <td className="border px-4 py-2">{sale.quantity}</td>
              <td className="border px-4 py-2">${sale.price}</td>
              <td className="border px-4 py-2">{new Date(sale.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesOilTable;
