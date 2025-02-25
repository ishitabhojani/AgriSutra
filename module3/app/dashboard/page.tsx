// // "use client";

// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Link from 'next/link';
// // import {
// //   Menu,
// //   Bell,
// //   Bookmark,
// //   Settings,
// //   LifeBuoy,
// //   LogOut,
// //   ChevronLeft,
// //   Tractor,
// //   Home,
// //   Newspaper,
// //   Cloud,
// //   User
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { removeToken } from '@/lib/auth';

// // export default function Dashboard() {
// //   const router = useRouter();
// //   const [isSidebarOpen, setSidebarOpen] = useState(false);

// //   const handleLogout = () => {
// //     removeToken();
// //     router.push('/login');
// //   };

// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Top Navbar */}
// //       <nav className="bg-white shadow-sm border-b">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between h-16">
// //             <div className="flex items-center">
// //               <Button
// //                 variant="ghost"
// //                 size="icon"
// //                 onClick={() => setSidebarOpen(true)}
// //               >
// //                 <Menu className="h-6 w-6" />
// //               </Button>
// //               <span className="ml-2 text-xl font-semibold">AgriSutra</span>
// //             </div>
// //             <div className="flex items-center space-x-4">
// //               <Button variant="ghost" size="icon">
// //                 <Bookmark className="h-5 w-5" />
// //               </Button>
// //               <Button variant="ghost" size="icon">
// //                 <Bell className="h-5 w-5" />
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Sidebar */}
// //       {isSidebarOpen && (
// //         <>
// //           <div
// //             className="fixed inset-0 bg-black bg-opacity-50 z-40"
// //             onClick={() => setSidebarOpen(false)}
// //           />
// //           <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out">
// //             <div className="p-6">
// //               <div className="flex items-center justify-between mb-6">
// //                 <div className="flex items-center">
// //                   <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-semibold">
// //                     J
// //                   </div>
// //                   <div className="ml-3">
// //                     <div className="font-medium">John Doe</div>
// //                     <div className="text-sm text-gray-500">john@example.com</div>
// //                   </div>
// //                 </div>
// //                 <Button
// //                   variant="ghost"
// //                   size="icon"
// //                   onClick={() => setSidebarOpen(false)}
// //                 >
// //                   <ChevronLeft className="h-6 w-6" />
// //                 </Button>
// //               </div>
// //               <div className="space-y-1">
// //                 <Link href="/schemes" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-secondary">
// //                   Know Your Schemes
// //                 </Link>
// //                 <Link href="/settings" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-secondary">
// //                   <Settings className="h-5 w-5 mr-2" />
// //                   Settings
// //                 </Link>
// //                 <Link href="/support" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-secondary">
// //                   <LifeBuoy className="h-5 w-5 mr-2" />
// //                   Support
// //                 </Link>
// //                 <Button
// //                   variant="ghost"
// //                   className="w-full justify-start"
// //                   onClick={handleLogout}
// //                 >
// //                   <LogOut className="h-5 w-5 mr-2" />
// //                   Logout
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Banner Section */}
// //         <div className="relative rounded-lg overflow-hidden mb-8 h-64 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80')] bg-cover bg-center">
// //           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
// //             <div className="text-center text-white">
// //               <h1 className="text-3xl font-bold mb-2">Welcome to AgriSutra</h1>
// //               <p className="text-lg">"Cultivating Tomorrow's Agriculture Today"</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Government Schemes Section */}
// //         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
// //           <h2 className="text-2xl font-semibold mb-4">Government Schemes</h2>
// //           <p className="text-gray-600 mb-4">
// //             Explore various government initiatives and schemes designed to support farmers.
// //           </p>
// //           <Link href="/schemes">
// //             <Button>Explore Schemes</Button>
// //           </Link>
// //         </div>

// //         {/* Market Trends Section */}
// //         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
// //           <h2 className="text-2xl font-semibold mb-4">Market Trends</h2>
// //           <p className="text-gray-600 mb-4">
// //             Stay updated with the latest market prices and trends.
// //           </p>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
// //             <div className="p-4 bg-secondary rounded-lg">
// //               <h3 className="font-medium">Wheat</h3>
// //               <p className="text-2xl font-bold">₹2,150/q</p>
// //               <span className="text-green-600">↑ 2.3%</span>
// //             </div>
// //             <div className="p-4 bg-secondary rounded-lg">
// //               <h3 className="font-medium">Rice</h3>
// //               <p className="text-2xl font-bold">₹1,950/q</p>
// //               <span className="text-red-600">↓ 1.1%</span>
// //             </div>
// //             <div className="p-4 bg-secondary rounded-lg">
// //               <h3 className="font-medium">Corn</h3>
// //               <p className="text-2xl font-bold">₹1,750/q</p>
// //               <span className="text-green-600">↑ 0.8%</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Equipment Services */}
// //         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
// //           <h2 className="text-2xl font-semibold mb-4">Farming Equipment</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             <div className="border rounded-lg p-4">
// //               <Tractor className="h-8 w-8 mb-2" />
// //               <h3 className="font-medium mb-2">Tractor Booking</h3>
// //               <p className="text-sm text-gray-600 mb-4">Book tractors for your farming needs</p>
// //               <Link href="/equipment">
// //                 <Button variant="outline" size="sm">Book Now</Button>
// //               </Link>
// //             </div>
// //             {/* Add more equipment cards here */}
// //           </div>
// //           <div className="mt-4">
// //             <Link href="/equipment">
// //               <Button variant="outline">View All Equipment</Button>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Soil Analysis Section */}
// //         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
// //           <h2 className="text-2xl font-semibold mb-4">Soil Analysis</h2>
// //           <p className="text-gray-600 mb-4">
// //             Get personalized crop recommendations based on soil analysis.
// //           </p>
// //           <Link href="/crop-recommendation">
// //             <Button>Start Soil Analysis</Button>
// //           </Link>
// //         </div>
// //       </main>

// //       {/* Footer Navigation */}
// //       <div className="fixed bottom-0 inset-x-0 bg-white border-t py-2">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-around">
// //             <Link href="/dashboard" className="flex flex-col items-center text-sm">
// //               <Home className="h-6 w-6" />
// //               <span>Home</span>
// //             </Link>
// //             <Link href="/news" className="flex flex-col items-center text-sm">
// //               <Newspaper className="h-6 w-6" />
// //               <span>News</span>
// //             </Link>
// //             <Link href="/weather" className="flex flex-col items-center text-sm">
// //               <Cloud className="h-6 w-6" />
// //               <span>Weather</span>
// //             </Link>
// //             <Link href="/profile" className="flex flex-col items-center text-sm">
// //               <User className="h-6 w-6" />
// //               <span>Profile</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import {
//   Menu,
//   Bell,
//   Bookmark,
//   Settings,
//   LifeBuoy,
//   LogOut,
//   ChevronLeft,
//   Tractor,
//   Home,
//   Newspaper,
//   Cloud,
//   User
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { removeToken, isAuthenticated } from '@/lib/auth';

// export default function Dashboard() {
//   const router = useRouter();
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   // Client-side authentication check
//   useEffect(() => {
//     if (!isAuthenticated()) {
//       router.push('/login');
//     }
//   }, [router]);

//   const handleLogout = () => {
//     removeToken();
//     router.push('/login');
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Top Navbar */}
//       <nav className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
//                 <Menu className="h-6 w-6" />
//               </Button>
//               <span className="ml-2 text-xl font-semibold">AgriSutra</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Button variant="ghost" size="icon">
//                 <Bookmark className="h-5 w-5" />
//               </Button>
//               <Button variant="ghost" size="icon">
//                 <Bell className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       {isSidebarOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//             onClick={() => setSidebarOpen(false)}
//           />
//           <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ease-in-out">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-semibold">
//                     J
//                   </div>
//                   <div className="ml-3">
//                     <div className="font-medium">John Doe</div>
//                     <div className="text-sm text-gray-500">john@example.com</div>
//                   </div>
//                 </div>
//                 <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
//                   <ChevronLeft className="h-6 w-6" />
//                 </Button>
//               </div>
//               <div className="space-y-1">
//                 <Link href="/schemes" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-secondary">
//                   Know Your Schemes
//                 </Link>
//                 <Link href="/settings" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-secondary">
//                   <Settings className="h-5 w-5 mr-2" />
//                   Settings
//                 </Link>
//                 <Link href="/support" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-secondary">
//                   <LifeBuoy className="h-5 w-5 mr-2" />
//                   Support
//                 </Link>
//                 <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
//                   <LogOut className="h-5 w-5 mr-2" />
//                   Logout
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Banner Section */}
//         <div className="relative rounded-lg overflow-hidden mb-8 h-64 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80')] bg-cover bg-center">
//           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//             <div className="text-center text-white">
//               <h1 className="text-3xl font-bold mb-2">Welcome to AgriSutra</h1>
//               <p className="text-lg">"Cultivating Tomorrow's Agriculture Today"</p>
//             </div>
//           </div>
//         </div>

//         {/* Government Schemes Section */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Government Schemes</h2>
//           <p className="text-gray-600 mb-4">
//             Explore various government initiatives and schemes designed to support farmers.
//           </p>
//           <Link href="/schemes">
//             <Button>Explore Schemes</Button>
//           </Link>
//         </div>

//         {/* Market Trends Section */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Market Trends</h2>
//           <p className="text-gray-600 mb-4">
//             Stay updated with the latest market prices and trends.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <div className="p-4 bg-secondary rounded-lg">
//               <h3 className="font-medium">Wheat</h3>
//               <p className="text-2xl font-bold">₹2,150/q</p>
//               <span className="text-green-600">↑ 2.3%</span>
//             </div>
//             <div className="p-4 bg-secondary rounded-lg">
//               <h3 className="font-medium">Rice</h3>
//               <p className="text-2xl font-bold">₹1,950/q</p>
//               <span className="text-red-600">↓ 1.1%</span>
//             </div>
//             <div className="p-4 bg-secondary rounded-lg">
//               <h3 className="font-medium">Corn</h3>
//               <p className="text-2xl font-bold">₹1,750/q</p>
//               <span className="text-green-600">↑ 0.8%</span>
//             </div>
//           </div>
//         </div>

//         {/* Equipment Services */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Farming Equipment</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="border rounded-lg p-4">
//               <Tractor className="h-8 w-8 mb-2" />
//               <h3 className="font-medium mb-2">Tractor Booking</h3>
//               <p className="text-sm text-gray-600 mb-4">Book tractors for your farming needs</p>
//               <Link href="/equipment">
//                 <Button variant="outline" size="sm">Book Now</Button>
//               </Link>
//             </div>
//             {/* Add more equipment cards here */}
//           </div>
//           <div className="mt-4">
//             <Link href="/equipment">
//               <Button variant="outline">View All Equipment</Button>
//             </Link>
//           </div>
//         </div>

//         {/* Soil Analysis Section */}
//         <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Soil Analysis</h2>
//           <p className="text-gray-600 mb-4">
//             Get personalized crop recommendations based on soil analysis.
//           </p>
//           <Link href="/crop-recommendation">
//             <Button>Start Soil Analysis</Button>
//           </Link>
//         </div>
//       </main>

//       {/* Footer Navigation */}
//       <div className="fixed bottom-0 inset-x-0 bg-white border-t py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-around">
//             <Link href="/dashboard" className="flex flex-col items-center text-sm">
//               <Home className="h-6 w-6" />
//               <span>Home</span>
//             </Link>
//             <Link href="/news" className="flex flex-col items-center text-sm">
//               <Newspaper className="h-6 w-6" />
//               <span>News</span>
//             </Link>
//             <Link href="/weather" className="flex flex-col items-center text-sm">
//               <Cloud className="h-6 w-6" />
//               <span>Weather</span>
//             </Link>
//             <Link href="/profile" className="flex flex-col items-center text-sm">
//               <User className="h-6 w-6" />
//               <span>Profile</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string;
    username: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    // ✅ Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect if not logged in
      return;
    }

    // ✅ Fetch user details
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/auth/userProfile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("❌ Error fetching user profile:", error);
        router.push("/login");
      }
    };

    fetchUserProfile();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to AgriSutra</h1>
      {user ? (
        <p className="mt-4 text-lg">
          Hello, {user.name} ({user.username})
        </p>
      ) : (
        <p className="mt-4 text-lg">Loading...</p>
      )}
    </div>
  );
}
