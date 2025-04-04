"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Tractor, CloudRain, Sprout } from "lucide-react";
import { isAuthenticated } from "../lib/auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 1. Import the useTranslation hook
import { useTranslation } from "react-i18next";

export default function Home() {
  const router = useRouter();

  // 2. Initialize the translation hook
  const { t } = useTranslation();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* Hero Banner */}
        <section className="relative h-64 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Farming landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-2">
                {/* 3. Use the bannerTitle key */}
                {t("homepage.bannerTitle")}
              </h1>
              <p className="text-lg">
                {/* 4. Use the bannerQuote key */}
                {t("homepage.bannerQuote")}
              </p>
            </div>
          </div>
        </section>

        {/* Government Schemes */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("homepage.governmentSchemesTitle")}
          </h2>
          <p className="text-gray-600 mb-4">
            {t("homepage.governmentSchemesDescription")}
          </p>
          <button
            onClick={() => router.push("/schemes")}
            className="flex items-center text-green-600 hover:text-green-700"
          >
            {t("homepage.exploreSchemes")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>

        {/* Market Trends */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("homepage.marketTrendsTitle")}
          </h2>
          <p className="text-gray-600 mb-4">
            {/* 5. Use the new marketTrendsDescription key */}
            {t("homepage.marketTrendsDescription")}
          </p>
          <button
            onClick={() => router.push("/market")}
            className="flex items-center text-green-600 hover:text-green-700"
          >
            {t("homepage.viewAllTrends")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>

        {/* Equipment Services */}
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("homepage.equipmentServicesTitle")}
          </h2>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <Tractor className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold mb-1">{t("homepage.tractorBooking")}</h3>
              <p className="text-sm text-gray-600">
                {t("homepage.tractorBookingDescription")}
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <CloudRain className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold mb-1">{t("homepage.irrigationEquipment")}</h3>
              <p className="text-sm text-gray-600">
                {t("homepage.irrigationEquipmentDescription")}
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push("/equipment")}
            className="flex items-center text-green-600 hover:text-green-700"
          >
            {t("homepage.viewAllEquipment")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>

        {/* Soil Analysis */}
        <section className="bg-white rounded-xl p-6 shadow-sm text-center">
          <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t("homepage.soilAnalysisTitle")}
          </h2>
          <p className="text-gray-600 mb-4">
            {t("homepage.soilAnalysisDescription")}
          </p>
          <button
            onClick={() => router.push("/quiz")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {t("homepage.startAnalysis")}
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
