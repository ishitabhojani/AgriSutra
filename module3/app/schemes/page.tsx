"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetchSchemes } from "@/lib/api";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";

const SchemeCard = ({ scheme }: { scheme: any }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    whileTap={{ scale: 0.95 }}
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
  >
    <h3 className="text-xl font-bold text-green-800 mb-2">{scheme.name}</h3>
    <p className="text-gray-600 mb-4">{scheme.description}</p>
    <Link href={`/schemes/${scheme.id}`}>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-large transition-all"
      >
        Learn More
      </motion.button>
    </Link>
  </motion.div>
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
        <div className="mb-8 flex flex-col gap-4 items-start">
          <motion.button 
            onClick={() => router.back()} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-green-800 hover:text-green-600 mb-4"
          >
            <ArrowLeft className="h-6 w-6 mr-3" />
            <span className="text-2xl font-bold text-green-800">Government Schemes</span>
          </motion.button>
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Trending Schemes */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-green-800">Trending Schemes</h2>
            <Link href="/schemes/trending">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 border border-green-600 text-green-600 font-medium rounded-large hover:bg-green-600 hover:text-white transition-all"
              >
                View All
              </motion.button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSchemes.slice(0, 2).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>

        {/* Explore More Schemes */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-green-800">Explore More Schemes</h2>
            <Link href="/schemes/all">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 border border-green-600 text-green-600 font-medium rounded-large hover:bg-green-600 hover:text-white transition-all"
              >
                View All
              </motion.button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSchemes.slice(0, 2).map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}