import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nisab College | Great Minds To Learn With",
  description: "Nisab College Wan Bhachran — offering professional medical and allied health programs including DPT, Medical Lab Technology, Radiology, and Surgical Technology.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
