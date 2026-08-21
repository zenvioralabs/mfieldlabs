import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import Loader from "@/components/motion/Loader";
import CustomCursor from "@/components/motion/CustomCursor";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MField Labs — Where ideas gain momentum",
  description:
    "MField Labs helps growing businesses modernize reporting, automate operations, build modern software, and adopt AI responsibly, so they can run more efficiently, make confident decisions and augment their impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Loader />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
