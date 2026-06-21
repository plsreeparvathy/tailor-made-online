import { Cormorant_Garamond, Playfair_Display, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TailorMade Online | Curate & Create Your Own Label",
  description:
    "Low-MOQ manufacturing for Indian ethnic wear labels — block prints, handlooms, and artisanal fashion. Start with just 100 pieces.",
  keywords: [
    "ethnic wear manufacturing",
    "block print garments",
    "low MOQ",
    "Indian fashion",
    "Bengaluru",
    "kurtis",
    "handloom",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
