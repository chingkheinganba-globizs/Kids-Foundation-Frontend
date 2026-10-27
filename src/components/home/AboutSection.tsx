import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import { IMAGES } from "@/data/images";

export function AboutSection() {
  const { about } = SITE_CONFIG;

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] overflow-hidden"
    >
      {/* Subtle organic wavy texture in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-0">
        <Image
          src={IMAGES.subtleWaveBg}
          alt="Decorative subtle wave texture"
          fill
          className="object-cover object-left-top"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* Left Column: Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left py-1 sm:py-2">
            <div>
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                {about.label}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-[#17345F] leading-[1.22] tracking-tight mb-4 sm:mb-5">
                {about.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85] max-w-2xl">
                <p>{about.paragraph1}</p>
                <p>{about.paragraph2}</p>
              </div>
            </div>

            <div className="pt-6 sm:pt-7">
              <Link
                href={about.linkHref}
                className="inline-flex items-center text-[#F47C61] hover:text-[#E0684E] font-semibold text-sm sm:text-base transition-colors group"
              >
                <span>{about.linkText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Campus Aerial Photo (5 cols on lg) matching text height */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-[460px] h-full min-h-[260px] sm:min-h-[340px] md:min-h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(23,52,95,0.08)] bg-slate-100">
              <Image
                src={IMAGES.aboutCampus}
                alt="Aerial view of Kids' Foundation circular modern school campus"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
