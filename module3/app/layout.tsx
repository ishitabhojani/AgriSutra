// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { Toaster } from '@/components/ui/toaster';
// import { ThemeProvider } from '@/components/theme-provider';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'AgriSutra - Your Agricultural Partner',
//   description: 'Empowering farmers with technology and resources',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body className={inter.className} suppressHydrationWarning>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           {children}
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriSutra",
  icons:{
    icon: "/favicon.png",
  },
  description: "Farmers buy at retail, sell at wholesale, and bear all costs—highlighting their economic challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
