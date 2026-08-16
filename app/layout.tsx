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
  title: "Mfield — Trusted Intelligence and Digital Evolution Partner",
  description:
    "Mfield is a Business Intelligence and Transformation partner. We combine data, automation, and AI to help organizations operate intelligently, adapt quickly, and grow sustainably.",
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
