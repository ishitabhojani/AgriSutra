// // "use client";

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Link from 'next/link';
// // import { ChevronLeft, Search, Bookmark, BookmarkCheck } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';

// // // Dummy data for schemes
// // const trendingSchemes = [
// //   {
// //     id: 1,
// //     name: "Crop Insurance Subsidy",
// //     description: "Provides insurance coverage for farmers against crop failure due to adverse weather, pests, or diseases."
// //   },
// //   {
// //     id: 2,
// //     name: "Organic Farming Support",
// //     description: "Offers financial support and technical assistance to encourage a shift to organic farming practices."
// //   },
// //   {
// //     id: 3,
// //     name: "Rural Irrigation Initiative",
// //     description: "Invests in rural irrigation facilities to enhance water supply and sustainability."
// //   }
// // ];

// // const exploreSchemes = [
// //   {
// //     id: 4,
// //     name: "Soil Health Card Scheme",
// //     description: "Provides a detailed analysis of soil health to help farmers optimize fertilizer use."
// //   },
// //   {
// //     id: 5,
// //     name: "PM Kisan Samman Nidhi",
// //     description: "Delivers financial support to small and marginal farmers to boost their income stability."
// //   },
// //   {
// //     id: 6,
// //     name: "Agri Infrastructure Fund",
// //     description: "Facilitates investments in agriculture-related infrastructure to improve farming efficiency."
// //   }
// // ];

// // export default function Schemes() {
// //   const router = useRouter();
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [savedSchemes, setSavedSchemes] = useState<number[]>([]);

// //   const handleBack = () => {
// //     router.back();
// //   };

// //   const toggleSaveScheme = (schemeId: number) => {
// //     setSavedSchemes(prev => 
// //       prev.includes(schemeId) 
// //         ? prev.filter(id => id !== schemeId)
// //         : [...prev, schemeId]
// //     );
// //   };

// //   const filteredTrendingSchemes = trendingSchemes.filter(scheme =>
// //     scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //     scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const filteredExploreSchemes = exploreSchemes.filter(scheme =>
// //     scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //     scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const SchemeCard = ({ scheme, isTrending = false }) => (
// //     <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
// //       <div className="flex justify-between items-start">
// //         <div>
// //           <h3 className="text-lg font-semibold mb-2">{scheme.name}</h3>
// //           <p className="text-gray-600">{scheme.description}</p>
// //         </div>
// //         <Button
// //           variant="ghost"
// //           size="icon"
// //           onClick={() => toggleSaveScheme(scheme.id)}
// //         >
// //           {savedSchemes.includes(scheme.id) ? (
// //             <BookmarkCheck className="h-5 w-5 text-primary" />
// //           ) : (
// //             <Bookmark className="h-5 w-5" />
// //           )}
// //         </Button>
// //       </div>
// //       <div className="mt-4">
// //         <Link href={`/schemes/${scheme.id}`}>
// //           <Button variant="outline" size="sm">Learn More</Button>
// //         </Link>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-background pb-20">
// //       {/* Top Navigation */}
// //       <nav className="sticky top-0 bg-white shadow-sm border-b z-10">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex items-center justify-between h-16">
// //             <div className="flex items-center">
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 onClick={handleBack}
// //               >
// //                 <ChevronLeft className="h-6 w-6" />
// //               </Button>
// //               <span className="ml-2 text-xl font-semibold">Government Schemes</span>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Search Bar */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //         <div className="relative">
// //           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
// //           <Input
// //             type="text"
// //             placeholder="Search schemes..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="pl-10"
// //           />
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// //         {/* Trending Schemes */}
// //         <div className="mb-8">
// //           <div className="flex justify-between items-center mb-4">
// //             <h2 className="text-2xl font-semibold">Trending Schemes</h2>
// //             <Button variant="ghost" size="sm">View All</Button>
// //           </div>
// //           <div className="space-y-4">
// //             {filteredTrendingSchemes.map(scheme => (
// //               <SchemeCard key={scheme.id} scheme={scheme} isTrending={true} />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Explore Schemes */}
// //         <div>
// //           <div className="flex justify-between items-center mb-4">
// //             <h2 className="text-2xl font-semibold">Explore Schemes</h2>
// //             <Button variant="ghost" size="sm">View All</Button>
// //           </div>
// //           <div className="space-y-4">
// //             {filteredExploreSchemes.map(scheme => (
// //               <SchemeCard key={scheme.id} scheme={scheme} />
// //             ))}
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// //app/schemes/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { fetchSchemes } from "@/lib/api";

// // Reusable Scheme Card Component
// const SchemeCard = ({ scheme }: { scheme: any }) => (
//   <div className="border rounded p-4">
//     <h3 className="font-bold">{scheme.name}</h3>
//     <p className="text-sm">{scheme.description}</p>
//     <Link href={`/schemes/${scheme.id}`}>
//       <Button variant="outline" size="sm" className="mt-2">
//         View Details
//       </Button>
//     </Link>
//     <Button variant="ghost" size="sm" onClick={() => alert("Save scheme functionality")}>
//       Save
//     </Button>
//   </div>
// );

// export default function SchemesPage() {
//   const [schemes, setSchemes] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchSchemes()
//       .then((data) => setSchemes(data))
//       .catch((err) => console.error("Error fetching schemes:", err));
//   }, []);

//   // Filter schemes based on the search query
//   const filteredSchemes = schemes.filter((scheme) =>
//     scheme.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // For demonstration, assume the first 3 are trending and the next 3 are for explore.
//   const trendingSchemes = filteredSchemes.slice(0, 3);
//   const exploreSchemes = filteredSchemes.slice(0, 3);

//   return (
//     <div className="container mx-auto p-4">
//       {/* Search Bar */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search Schemes..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border p-2 w-full"
//         />
//       </div>

//       {/* Trending Schemes Section */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-2xl font-semibold">Trending Schemes</h2>
//           <Link href="/schemes?view=all&section=trending">
//             <Button variant="outline" size="sm">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {trendingSchemes.map((scheme) => (
//             <SchemeCard key={scheme.id} scheme={scheme} />
//           ))}
//         </div>
//       </div>

//       {/* Explore Schemes Section */}
//       <div>
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-2xl font-semibold">Explore Schemes</h2>
//           <Link href="/schemes?view=all&section=explore">
//             <Button variant="outline" size="sm">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {exploreSchemes.map((scheme) => (
//             <SchemeCard key={scheme.id} scheme={scheme} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetchSchemes } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";

const SchemeCard = ({ scheme }: { scheme: any }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <h3 className="text-xl font-bold text-green-800 mb-2">{scheme.name}</h3>
    <p className="text-gray-600 mb-4">{scheme.description}</p>
    <Link href={`/schemes/${scheme.id}`}>
      <Button 
        className="bg-green-500 hover:bg-green-600 text-white"
        size="lg"
      >
        Learn More
      </Button>
    </Link>
  </div>
);

export default function SchemesPage() {
  const router = useRouter();
  const [schemes, setSchemes] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchSchemes()
      .then((data) => setSchemes(data))
      .catch((err) => console.error("Error fetching schemes:", err));
  }, []);

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-green-800 hover:text-green-600 mb-4"
          >
            <ArrowLeft className="h-6 w-6 mr-3" />
            <span className="text-2xl font-bold text-green-800 pb-0">
            
            Government Schemes
            </span>
            
          </button>
          
          <div className="relative mb-6">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Trending Schemes Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-green-800">
              Trending Schemes
            </h2>
            <Link href="/schemes?view=all&section=trending">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSchemes.slice(0, 2).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>

        {/* Explore More Schemes Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-green-800">
              Explore More Schemes
            </h2>
            <Link href="/schemes?view=all&section=explore">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSchemes.slice(2, 4).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
