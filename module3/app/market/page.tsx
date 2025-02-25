'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarketPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
 useEffect(() => {
    // Example call to your Node backend:
    // Adjust commodity, state, market as needed
    fetch('http://localhost:3001/api/market-trends?commodity=Tomato&state=Maharashtra&market=Mumbai')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Example function to navigate to a "Vegetables" sub-page if you want:
  // const handleNavigateToVegetables = () => {
  //   router.push('/market/vegetables'); // You'd create app/market/vegetables/page.tsx
  // };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Market Trends</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">S.No</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Commodity</th>
              <th className="border p-2">Min Price</th>
              <th className="border p-2">Max Price</th>
              <th className="border p-2">Model Price</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td className="border p-2">{item['S.No']}</td>
                <td className="border p-2">{item['City']}</td>
                <td className="border p-2">{item['Commodity']}</td>
                <td className="border p-2">{item['Min Price']}</td>
                <td className="border p-2">{item['Max Price']}</td>
                <td className="border p-2">{item['Model Price']}</td>
                <td className="border p-2">{item['Date']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
