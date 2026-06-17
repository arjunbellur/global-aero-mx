import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageAnimations from "@/components/animations/PageAnimations";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Aero Maintenance — FAA Certificated Aircraft Maintenance | Tampa KVDF",
  description:
    "FAA-certificated aircraft maintenance for single and multi-engine piston aircraft at Tampa Executive Airport (KVDF). Annual inspections, airframe repair, avionics, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <PageAnimations />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
