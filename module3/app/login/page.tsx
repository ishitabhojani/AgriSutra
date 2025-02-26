// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { setToken } from '@/lib/auth';
// import { Loader2 } from 'lucide-react';

// export default function Login() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const formData = new FormData(e.currentTarget);
//     const username = formData.get('username') as string;
//     const password = formData.get('password') as string;

//     try {
//       // For demo purposes, simulating API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Simulated successful login
//       setToken('demo-token');
//       router.push('/dashboard');
//     } catch (err) {
//       setError('Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       <Card className="w-full max-w-md bg-[#F0FFF1]">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl text-center">Welcome to AgriSutra</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 required
//                 disabled={loading}
//               />
//             </div>
//             <div className="space-y-2">
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 disabled={loading}
//               />
//             </div>
//             {error && (
//               <div className="text-sm text-red-500 text-center">{error}</div>
//             )}
//             <Button
//               type="submit"
//               className="w-full"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 'Sign In'
//               )}
//             </Button>
//             <div className="text-center space-y-2">
//               <Link
//                 href="/forgot-password"
//                 className="text-sm text-primary hover:underline"
//               >
//                 Forgot Password?
//               </Link>
//               <div className="text-sm">
//                 Don't have an account?{' '}
//                 <Link href="/signup" className="text-primary hover:underline">
//                   Sign Up
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }






// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { setToken } from '@/lib/auth';
// import { Loader2 } from 'lucide-react';

// export default function Login() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Login failed");

//       // Store token and redirect to dashboard
//       setToken(data.token);
//       router.push("/dashboard");
//     } catch (err: any) {
//       setError(err.message || "Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       <Card className="w-full max-w-md bg-[#F0FFF1]">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl text-center">Welcome to AgriSutra</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 disabled={loading}
//               />
//             </div>
//             <div className="space-y-2">
//               <Input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 disabled={loading}
//               />
//             </div>
//             {error && (
//               <div className="text-sm text-red-500 text-center">{error}</div>
//             )}
//             <Button type="submit" className="w-full" disabled={loading}>
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Please wait
//                 </>
//               ) : (
//                 'Sign In'
//               )}
//             </Button>
//             <div className="text-center space-y-2">
//               <Link href="/forgot-password" className="text-sm text-primary hover:underline">
//                 Forgot Password?
//               </Link>
//               <div className="text-sm">
//                 Don't have an account?{' '}
//                 <Link href="/signup" className="text-primary hover:underline">
//                   Sign Up
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// frontend/app/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString().trim();
    const password = formData.get("password")?.toString();

    if (!username || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("🔹 API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err) {
      setError((err as any).message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-[#F0FFF1] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username or Email
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-600 hover:text-green-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}