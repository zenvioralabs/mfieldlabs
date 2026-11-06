import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://mfieldlabs.com"),
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav hrefBase="/" />
      {children}
      <Footer hrefBase="/" />
    </>
  );
}
