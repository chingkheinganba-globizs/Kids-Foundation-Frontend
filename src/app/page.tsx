import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { AcademicStages } from "@/components/home/AcademicStages";
import { FounderMessage } from "@/components/home/FounderMessage";
import { NewsSection } from "@/components/home/NewsSection";
import { GallerySection } from "@/components/home/GallerySection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      {/* 1. Header / Navigation Bar */}
      <Header />

      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Kids' Foundation */}
        <AboutSection />

        {/* 4. Academic Stages */}
        <AcademicStages />

        {/* 5. Message from the Founder */}
        <FounderMessage />

        {/* 6. News and Updates */}
        <NewsSection />

        {/* 7. Photo Gallery */}
        <GallerySection />

        {/* 8. Admissions + Footer (one continuous section sharing the grass-hill background) */}
        <Footer />
      </main>
    </div>
  );
}
