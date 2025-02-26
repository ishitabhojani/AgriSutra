// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Loader2 } from 'lucide-react';

// export default function SignUp() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const formData = new FormData(e.currentTarget);
    
//     try {
//       // For demo purposes, simulating API call
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       router.push('/login');
//     } catch (err) {
//       setError('Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       <Card className="w-full max-w-md bg-[#F0FFF1]">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 disabled={loading}
//               />
//             </div>
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
//                 'Sign Up'
//               )}
//             </Button>
//             <div className="text-center text-sm">
//               Already have an account?{' '}
//               <Link href="/login" className="text-primary hover:underline">
//                 Sign In
//               </Link>
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

// export default function Signup() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const formData = new FormData(e.currentTarget);
//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Registration failed");

//       // Redirect to login page after successful registration
//       router.push("/login");
//     } catch (err: any) {
//       setError(err.message || "Registration error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-4">
//       <Card className="w-full max-w-md bg-[#F0FFF1]">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl text-center">Sign Up for AgriSutra</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 disabled={loading}
//               />
//             </div>
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
//               {loading ? "Processing..." : "Sign Up"}
//             </Button>
//             <div className="text-center text-sm">
//               Already have an account?{' '}
//               <Link href="/login" className="text-primary hover:underline">
//                 Login
//               </Link>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


// actual
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Loader2 } from "lucide-react";

// export default function SignUp() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const formData = new FormData(e.currentTarget);
//     const userData = {
//       email: formData.get("email"),
//       username: formData.get("username"),
//       name: formData.get("name"),
//       password: formData.get("password"),
//     };

//     try {
//       const response = await fetch("http://localhost:3001/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error("Registration failed");
//       }

//       router.push("/login");
//     } catch (err) {
//       setError("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center">
//       <div className="bg-[#F0FFF1] p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
//           Create Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
//             />
//           </div>
//           {error && <p className="text-red-600 text-sm">{error}</p>}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign up"}
//           </button>
//         </form>
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-green-600 hover:text-green-500">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const userData = {
      email: formData.get("email"),
      username: formData.get("username"),
      name: formData.get("name"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      router.push("/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-[#F0FFF1] p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="w-full border rounded-large px-4 py-3 text-lg shadow-sm focus:ring-4 focus:ring-green-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Username"
              className="w-full border rounded-large px-4 py-3 text-lg shadow-sm focus:ring-4 focus:ring-green-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Full Name"
              className="w-full border rounded-large px-4 py-3 text-lg shadow-sm focus:ring-4 focus:ring-green-400"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="Password"
              className="w-full border rounded-large px-4 py-3 text-lg shadow-sm focus:ring-4 focus:ring-green-400"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                        </span>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 text-white bg-green-600 rounded-large shadow-md hover:bg-green-700 transition"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign up"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 hover:text-green-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
