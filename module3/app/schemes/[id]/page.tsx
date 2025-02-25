// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { ChevronLeft, Bookmark, BookmarkCheck, Youtube, ExternalLink } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// export async function generateStaticParams() {
//   const response = await fetch('/api/schemes');
//   const schemes = await response.json();

//   return schemes.map((scheme) => ({
//     id: scheme.id.toString(),
//   }));
// }


// // Dummy data for scheme details
// const schemes = {
//   1: {
//     id: 1,
//     name: "Crop Insurance Subsidy",
//     description: "Provides insurance coverage for farmers against crop failure due to adverse weather, pests, or diseases.",
//     details: "The Crop Insurance Subsidy scheme is designed to protect farmers from financial losses due to crop failure. It covers multiple risks including natural calamities, pest attacks, and diseases. The premium is subsidized by the government to make it affordable for all farmers.",
//     benefits: [
//       "Financial protection against crop failure",
//       "Subsidized premium rates",
//       "Quick claim settlement",
//       "Coverage for multiple crops",
//       "Protection against natural calamities"
//     ],
//     eligibility: [
//       "Must be a registered farmer",
//       "Land should be used for agricultural purposes",
//       "Crop should be notified under the scheme",
//       "Premium should be paid within due date"
//     ],
//     links: {
//       youtube: "https://youtube.com/watch?v=example",
//       registration: "https://example.com/register"
//     }
//   },
//   2: {
//     id: 2,
//     name: "Organic Farming Support",
//     description: "Offers financial support and technical assistance to encourage a shift to organic farming practices.",
//     details: "The Organic Farming Support program aims to promote sustainable agriculture through organic farming methods. It provides both financial assistance and technical knowledge to help farmers transition from conventional to organic farming.",
//     benefits: [
//       "Financial aid for organic certification",
//       "Technical training and support",
//       "Marketing assistance for organic produce",
//       "Higher market value for produce",
//       "Environmental sustainability"
//     ],
//     eligibility: [
//       "Willing to adopt organic farming practices",
//       "Minimum land holding of 0.5 acres",
//       "Commitment to complete certification process",
//       "Participation in training programs"
//     ],
//     links: {
//       youtube: "https://youtube.com/watch?v=example",
//       registration: "https://example.com/register"
//     }
//   },
//   3: {
//     id: 3,
//     name: "Rural Irrigation Initiative",
//     description: "Invests in rural irrigation facilities to enhance water supply and sustainability.",
//     details: "The Rural Irrigation Initiative focuses on developing and improving irrigation infrastructure in rural areas. It aims to ensure reliable water supply for agricultural purposes and promote water conservation practices.",
//     benefits: [
//       "Improved water availability",
//       "Modern irrigation infrastructure",
//       "Reduced water wastage",
//       "Higher crop yields",
//       "Sustainable water management"
//     ],
//     eligibility: [
//       "Located in rural area",
//       "Part of local water user association",
//       "Willing to adopt water conservation practices",
//       "Valid land ownership documents"
//     ],
//     links: {
//       youtube: "https://youtube.com/watch?v=example",
//       registration: "https://example.com/register"
//     }
//   }
// };

// export default function SchemeDetails({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const [isSaved, setIsSaved] = useState(false);
  
//   const scheme = schemes[params.id];
  
//   if (!scheme) {
//     router.push('/schemes');
//     return null;
//   }

//   const handleBack = () => {
//     router.back();
//   };

//   const toggleSave = () => {
//     setIsSaved(!isSaved);
//   };

//   return (
//     <div className="min-h-screen bg-background pb-20">
//       {/* Top Navigation */}
//       <nav className="sticky top-0 bg-white shadow-sm border-b z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={handleBack}
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </Button>
//               <span className="ml-2 text-xl font-semibold">Scheme Details</span>
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleSave}
//             >
//               {isSaved ? (
//                 <BookmarkCheck className="h-5 w-5 text-primary" />
//               ) : (
//                 <Bookmark className="h-5 w-5" />
//               )}
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h1 className="text-2xl font-bold mb-4">{scheme.name}</h1>
//           <p className="text-gray-600 mb-6">{scheme.description}</p>

//           <Tabs defaultValue="details" className="w-full">
//             <TabsList className="grid w-full grid-cols-4">
//               <TabsTrigger value="details">Details</TabsTrigger>
//               <TabsTrigger value="benefits">Benefits</TabsTrigger>
//               <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
//               <TabsTrigger value="links">Links</TabsTrigger>
//             </TabsList>

//             <TabsContent value="details" className="mt-6">
//               <div className="prose max-w-none">
//                 <p className="text-gray-700">{scheme.details}</p>
//               </div>
//             </TabsContent>

//             <TabsContent value="benefits" className="mt-6">
//               <ul className="space-y-3">
//                 {scheme.benefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="h-6 w-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm mr-3">
//                       {index + 1}
//                     </span>
//                     <span className="text-gray-700">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </TabsContent>

//             <TabsContent value="eligibility" className="mt-6">
//               <ul className="space-y-3">
//                 {scheme.eligibility.map((criteria, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm mr-3">
//                       {index + 1}
//                     </span>
//                     <span className="text-gray-700">{criteria}</span>
//                   </li>
//                 ))}
//               </ul>
//             </TabsContent>

//             <TabsContent value="links" className="mt-6">
//               <div className="space-y-4">
//                 <a
//                   href={scheme.links.youtube}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
//                 >
//                   <Youtube className="h-6 w-6 text-red-600 mr-3" />
//                   <span className="text-gray-700">Watch Guidance Video</span>
//                   <ExternalLink className="h-4 w-4 ml-2" />
//                 </a>
//                 <a
//                   href={scheme.links.registration}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
//                 >
//                   <ExternalLink className="h-6 w-6 text-green-600 mr-3" />
//                   <span className="text-gray-700">Register for Scheme</span>
//                 </a>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </main>
//     </div>
//   );
// }

// app/schemes/[id]/page.tsx (Server Component)

// import { fetchSchemes, fetchSchemeById } from "@/lib/api";
// import SchemeDetailClient from "././SchemeDetailClient";

// // 1. Pre-generate all scheme IDs (Static Site Generation)
// export async function generateStaticParams() {
//   const schemes = await fetchSchemes();
//   return schemes.map((scheme) => ({
//     id: scheme.id.toString(),
//   }));
// }

// // 2. Server Component for the scheme detail page
// export default async function SchemeDetailPage({ params }: { params: { id: string } }) {
//   const { id } = params;
//   // Fetch data on the server
//   const scheme = await fetchSchemeById(id);

//   // If scheme is not found, you can throw an error or return a 404
//   if (!scheme) {
//     // throw new Error("Scheme not found");
//     return <div>Scheme not found</div>;
//   }

//   // Pass scheme data to a client component for interactive logic
//   return (
//     <div className="container mx-auto p-4">
//       <SchemeDetailClient scheme={scheme} />
//     </div>
//   );
// }

import { fetchSchemes, fetchSchemeById } from "@/lib/api";
import SchemeDetailClient from "././SchemeDetailClient";

export async function generateStaticParams() {
  const schemes = await fetchSchemes();
  return schemes.map((scheme) => ({
    id: scheme.id.toString(),
  }));
}

export default async function SchemeDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const scheme = await fetchSchemeById(id);

  if (!scheme) {
    return <div>Scheme not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <SchemeDetailClient scheme={scheme} />
    </div>
  );
}