"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProfile, ProfileData } from "@/lib/profile";

export default function ProfileHomePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="p-4">Loading...</div>;
  if (!profile) return <div className="p-4">Error loading profile.</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        {/* <h2 className="text-2xl font-bold">Profile</h2> */}
        <div className="mt-4">
          <h1 className="text-lg font-bold">{profile.name}</h1>
          <p className="text-gray-500">{profile.phone_number}</p>
        </div>
      </div>

      {/* Navigation List */}
      <ul className="mt-4 divide-y divide-gray-200 bg-white">
        <li className="p-4 hover:bg-gray-50">
          <Link href="/profile/edit" className="flex items-center">
            Edit Profile
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-50">
          <Link href="/profile/language" className="flex items-center">
            Language Selection
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-50">
          <Link href="/settings" className="flex items-center">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
