import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteConfig";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kidsfoundation.edu.in"),
  title: SITE_CONFIG.fullTitle,
  description: SITE_CONFIG.metaDescription,
  keywords: [
    "Kids Foundation",
    "Kids Foundation Imphal",
    "School in Imphal",
    "Best school in Manipur",
    "CBSE school Imphal",
    "Kids Foundation Ghari",
  ],
  authors: [{ name: "Kids' Foundation" }],
  openGraph: {
    title: SITE_CONFIG.fullTitle,
    description: SITE_CONFIG.metaDescription,
    url: "https://kidsfoundation.edu.in",
    siteName: "Kids' Foundation",
    images: [
      {
        url: "/images/campus-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Kids' Foundation Campus, Imphal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased text-[#17345F]">
        {children}
      </body>
    </html>
  );
}
