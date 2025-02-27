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
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect if not logged in
      return;
    }

    // Fetch user details
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
        console.error("Error fetching user profile:", error);
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
