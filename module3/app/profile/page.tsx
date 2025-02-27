"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProfile, ProfileData } from "@/lib/profile";
import {
  User2,
  History,
  MapPin,
  Globe,
  HelpCircle,
  Star,
  Info,
  LogOut,
  ArrowLeft
} from "lucide-react";

// 1. Import the useTranslation hook
import { useTranslation } from "react-i18next";

export default function ProfileHomePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  // 2. Initialize the translation hook
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Example logout handler
  const handleLogout = () => {
    // Clear auth tokens or any stored user data
    router.push("/login");
  };

  if (loading) {
    // 3. Use translated string for "Loading..."
    return <div className="p-4">{t("profilePage.loading")}</div>;
  }
  if (!profile) {
    // 4. Use translated string for "Error loading profile."
    return <div className="p-4">{t("profilePage.errorLoadingProfile")}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white p-4 shadow-sm flex items-center">
        <button
          onClick={() => router.back()}
          className="text-black hover:text-gray-900 focus:outline-none mr-2"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        {/* 5. Use translated string for "Profile" */}
        <h1 className="text-xl font-bold text-black">
          {t("profilePage.profile")}
        </h1>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Top Section: User Info */}
      <div className="bg-white p-4 shadow-sm">
        <div className="mt-4">
          <h1 className="text-lg font-bold">{profile.name}</h1>
          <p className="text-gray-500">{profile.phone_number}</p>
        </div>
      </div>

      {/* Navigation List */}
      <ul className="mt-4 divide-y divide-gray-200 bg-white">
        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/profile/edit")}
        >
          <User2 className="h-5 w-5 mr-3 text-gray-600" />
          {/* 6. Use translated string for "Edit Profile" */}
          <span className="flex-grow">{t("profilePage.editProfile")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => console.log("Equipment History")}
        >
          <History className="h-5 w-5 mr-3 text-gray-600" />
          {/* 7. Use translated string for "Equipment History" */}
          <span className="flex-grow">{t("profilePage.equipmentHistory")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => console.log("Track Equipment")}
        >
          <MapPin className="h-5 w-5 mr-3 text-gray-600" />
          {/* 8. Use translated string for "Track Equipment" */}
          <span className="flex-grow">{t("profilePage.trackEquipment")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/profile/language")}
        >
          <Globe className="h-5 w-5 mr-3 text-gray-600" />
          {/* 9. Use translated string for "Language Selection" */}
          <span className="flex-grow">{t("profilePage.languageSelection")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/profile/support")}
        >
          <HelpCircle className="h-5 w-5 mr-3 text-gray-600" />
          {/* 10. Use translated string for "Help & Support" */}
          <span className="flex-grow">{t("profilePage.helpSupport")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("/profile/rate")}
        >
          <Star className="h-5 w-5 mr-3 text-gray-600" />
          {/* 11. Use translated string for "Rate Us" */}
          <span className="flex-grow">{t("profilePage.rateUs")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer hover:bg-gray-50"
          onClick={() => router.push("profile/about")}
        >
          <Info className="h-5 w-5 mr-3 text-gray-600" />
          {/* 12. Use translated string for "About Us" */}
          <span className="flex-grow">{t("profilePage.aboutUs")}</span>
        </li>

        <li
          className="flex items-center p-4 cursor-pointer text-red-600 hover:bg-gray-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          {/* 13. Use translated string for "Logout" */}
          <span className="flex-grow">{t("profilePage.logout")}</span>
        </li>
      </ul>
    </div>
  );
}
