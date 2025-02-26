// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function MarketPage() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const router = useRouter();
//  useEffect(() => {
//     // Example call to your Node backend:
//     // Adjust commodity, state, market as needed
//     fetch('http://localhost:3001/api/market-trends?commodity=Tomato&state=Maharashtra&market=Mumbai')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Request failed with status ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   // Example function to navigate to a "Vegetables" sub-page if you want:
//   // const handleNavigateToVegetables = () => {
//   //   router.push('/market/vegetables'); // You'd create app/market/vegetables/page.tsx
//   // };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Market Trends</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">Error: {error}</p>
//       ) : (
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr>
//               <th className="border p-2">S.No</th>
//               <th className="border p-2">City</th>
//               <th className="border p-2">Commodity</th>
//               <th className="border p-2">Min Price</th>
//               <th className="border p-2">Max Price</th>
//               <th className="border p-2">Model Price</th>
//               <th className="border p-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, idx) => (
//               <tr key={idx}>
//                 <td className="border p-2">{item['S.No']}</td>
//                 <td className="border p-2">{item['City']}</td>
//                 <td className="border p-2">{item['Commodity']}</td>
//                 <td className="border p-2">{item['Min Price']}</td>
//                 <td className="border p-2">{item['Max Price']}</td>
//                 <td className="border p-2">{item['Model Price']}</td>
//                 <td className="border p-2">{item['Date']}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function MarketPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const MAX_RETRIES = 3;
  const router = useRouter();

  const fetchMarketData = async (attempt = 1) => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'http://localhost:3001/api/market-trends?commodity=Tomato&state=Maharashtra&market=Mumbai'
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (err: any) {
      if (attempt < MAX_RETRIES) {
        console.log(`Retrying... Attempt ${attempt + 1}`);
        setTimeout(() => fetchMarketData(attempt + 1), 2000);
      } else {
        setError('Failed to fetch market data. Please try again later.');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      {/* Unique Agri-Tech Header */}
      <header className="flex items-center justify-center bg-green-600 text-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold tracking-wide uppercase">
          Agri Market Trends 🌿
        </h1>
      </header>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              🌱
            </div>
          </div>
          <p className="mt-3 text-green-700 font-medium">Fetching Market Data...</p>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center font-semibold">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-green-300 bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="border p-3">S.No</th>
                <th className="border p-3">City</th>
                <th className="border p-3">Commodity</th>
                <th className="border p-3">Min Price</th>
                <th className="border p-3">Max Price</th>
                <th className="border p-3">Model Price</th>
                <th className="border p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className="transition-colors duration-200 hover:bg-green-100 hover:scale-105"
                >
                  <td className="border p-3 text-green-700">{item['S.No']}</td>
                  <td className="border p-3 text-green-700">{item['City']}</td>
                  <td className="border p-3 text-green-700">{item['Commodity']}</td>
                  <td className="border p-3 text-green-700">{item['Min Price']}</td>
                  <td className="border p-3 text-green-700">{item['Max Price']}</td>
                  <td className="border p-3 text-green-700">{item['Model Price']}</td>
                  <td className="border p-3 text-green-700">{item['Date']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
