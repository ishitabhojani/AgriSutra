'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function MarketPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
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

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header with Back Arrow */}
      <div className="flex items-center mb-4">
        <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold ml-2">Market Trends</h1>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
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
                <tr key={idx} className="text-center">
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
        </div>
      )}
    </div>
  );
}
