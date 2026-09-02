import type { Metadata } from "next";
import { Outfit, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-noto-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nisab College | Great Minds To Learn With | نصاب کالج واں بھچراں",
  description:
    "Nisab College Wan Bhachran — offering professional medical and allied health programs including DPT, Medical Lab Technology, Radiology, and Surgical Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${notoNastaliq.variable}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFAB />
        </LanguageProvider>
      </body>
    </html>
  );
}
