import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriSutra",
  icons: {
    icon: "/logo2.jpg",
  },
  description:
    "Farmers buy at retail, sell at wholesale, and bear all costs—highlighting their economic challenges.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
