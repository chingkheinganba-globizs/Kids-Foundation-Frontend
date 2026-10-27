import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { ABOUT_PAGE_DATA } from "@/data/aboutPage";
import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kids' Foundation",
  description:
    "Learn about Kids' Foundation — a CBSE-affiliated co-educational school in Imphal providing holistic education from Pre-Nursery to tenth standard.",
};

const iconMap = {
  "graduation-cap": GraduationCap,
  heart: Heart,
  lightbulb: Lightbulb,
  users: Users,
};

export default function AboutPage() {
  const { banner, story, values, quote } = ABOUT_PAGE_DATA;

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Page Banner */}
        <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />

        {/* ── Section 1: Our Story ── */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            {/* Top Row: Heading + First 2 Paragraphs + Campus Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start mb-6 sm:mb-8">
              {/* Text Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                    {story.label}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-5 sm:mb-6">
                    {story.heading}
                  </h2>

                  <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                    {story.topParagraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Campus Image Right Column */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[300px] xl:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(23,52,95,0.08)] bg-slate-100">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="hover:scale-103 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Remaining Paragraphs (No 2nd image as requested) */}
            <div className="space-y-5 sm:space-y-6 text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
              {story.bottomParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Our Values ── */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="bg-[#F4F8FC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Left Column: Heading & Description */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                    {values.label}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-4">
                    {values.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                    {values.description}
                  </p>
                  {/* Gold accent line */}
                  <div className="mt-5 sm:mt-6 w-12 h-1 bg-[#FBBF24] rounded-full" />
                </div>

                {/* Right Column: 2x2 Values Cards */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {values.items.map((item) => {
                      const IconComponent =
                        iconMap[item.icon as keyof typeof iconMap];
                      return (
                        <div
                          key={item.id}
                          className={`${item.bgColor} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                        >
                          <div
                            className={`w-11 h-11 rounded-full ${item.badgeBg} flex items-center justify-center mb-4`}
                          >
                            {IconComponent && (
                              <IconComponent
                                className={`w-5 h-5 ${item.iconColor}`}
                              />
                            )}
                          </div>
                          <h3 className="text-base sm:text-[17px] font-bold text-[#17345F] mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Quote Section ── */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <span className="h-[2px] w-12 sm:w-16 lg:w-20 bg-[#FBBF24] shrink-0 rounded-full" />
              <blockquote className="font-serif italic text-base sm:text-2xl lg:text-[26px] font-semibold text-[#17345F] tracking-tight leading-snug">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <span className="h-[2px] w-12 sm:w-16 lg:w-20 bg-[#FBBF24] shrink-0 rounded-full" />
            </div>
            {/* Center underline below quote */}
            <div className="mt-3.5 sm:mt-4 w-12 sm:w-14 h-[2px] bg-[#FBBF24] mx-auto rounded-full" />
          </div>
        </section>

        {/* ── Section 4: Admissions CTA & Footer ── */}
        <Footer showAdmissions={true} />
      </main>
    </div>
  );
}
