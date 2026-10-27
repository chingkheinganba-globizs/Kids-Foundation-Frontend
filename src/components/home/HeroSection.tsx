"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const SLIDES = [
  { src: "/images/banner_images/slider1.gif", alt: "Kids' Foundation School - Welcome" },
  { src: "/images/banner_images/slide1.jpg", alt: "Kids' Foundation School - Campus Life" },
  { src: "/images/banner_images/banner.jpg", alt: "Kids' Foundation School - Architecture" },
  { src: "/images/banner_images/banner-1.jpg", alt: "Kids' Foundation School - Students" },
];

export function HeroSection() {
  const { hero } = SITE_CONFIG;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-[580px] sm:min-h-[680px] lg:min-h-[780px] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-44 pb-10 sm:pb-12 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === current ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
              unoptimized={slide.src.endsWith(".gif")} // Important for animated GIF
            />
          </div>
        ))}

        {/* Navy gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17345F] via-[#17345F]/85 to-transparent w-full lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17345F]/75 via-transparent to-[#17345F]/35" />
      </div>

      {/* Spacer for vertical balance */}
      <div className="h-2 sm:h-4" />

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] w-full">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[#FBBF24] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase">
              {hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-xs">
            {hero.headingLine1}
            <br />
            {hero.headingLine2}
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/85 max-w-xl font-normal leading-relaxed">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href={hero.primaryBtn.href}
              className="inline-flex items-center justify-center bg-[#F47C61] hover:bg-[#E0684E] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
            >
              {hero.primaryBtn.label}
            </Link>

            <Link
              href={hero.secondaryBtn.href}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full border border-white/35 backdrop-blur-xs transition-all duration-200 active:scale-98"
            >
              {hero.secondaryBtn.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Navigation + Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-6 pb-2 gap-6">
        {/* Modern Dots + Arrows */}
        <div className="flex items-center gap-5">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2.5">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === current
                    ? "w-7 bg-[#FBBF24]"
                    : "w-2 bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll to Discover Indicator */}
        <Link
          href="#about"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-1.5">
            {hero.scrollIndicator}
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-white/40 group-hover:border-white/80 flex items-start justify-center p-1.5 transition-colors">
            <div className="w-1.5 h-2 bg-white/80 rounded-full animate-scroll-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
