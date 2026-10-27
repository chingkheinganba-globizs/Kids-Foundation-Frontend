import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { ABOUT_PAGE_DATA } from "@/data/aboutPage";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Kids' Foundation",
  description:
    "Learn about Kids' Foundation — a CBSE-affiliated co-educational school in Imphal providing holistic education from Pre-Nursery to tenth standard.",
};

export default function AboutPage() {
  const { banner, story, founderMessage, pillars } = ABOUT_PAGE_DATA;

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

            {/* Bottom Row: Remaining Paragraphs */}
            <div className="space-y-5 sm:space-y-6 text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
              {story.bottomParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section: Mission, Philosophy & Vision ── */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pillars.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F47C61] rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-white shadow-lg shadow-[#F47C61]/15 flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F47C61]/25"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Founder's Message (Linked from Home Page) ── */}
        <section
          id="founder-message"
          className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/80 scroll-mt-20 sm:scroll-mt-24"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
              
              {/* Left Column: Portrait Card & Identity */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-[0_16px_40px_rgba(23,52,95,0.1)] border border-slate-200/80 bg-gradient-to-b from-[#EEF4FB] via-[#E4EEF8] to-[#D5E3F2]">
                  <Image
                    src={founderMessage.image}
                    alt={`${founderMessage.founderName} - ${founderMessage.founderRole}`}
                    fill
                    sizes="(max-width: 640px) 320px, 360px"
                    className="object-contain object-bottom pt-3 px-2 drop-shadow-md"
                    priority
                  />
                </div>

                <div className="mt-5 sm:mt-6">
                  <p className="text-sm sm:text-[15px] font-medium text-[#1E293B] tracking-wide">
                    {founderMessage.founderName}
                  </p>
                  <h3 className="mt-0.5 text-xl sm:text-2xl font-bold text-[#17345F]">
                    {founderMessage.founderRole}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed whitespace-pre-line">
                    {founderMessage.institution}
                  </p>
                </div>
              </div>

              {/* Right Column: Founder's Message Text */}
              <div className="lg:col-span-7 flex flex-col justify-start">
                {/* Gold uppercase tag matching other sections */}
                <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                  {founderMessage.tag}
                </span>

                {/* Matching section heading font size */}
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-5 sm:mb-6">
                  {founderMessage.heading}
                </h2>

                {/* Ornamental gold divider with center emblem */}
                <div className="flex items-center gap-3 mb-6 max-w-sm">
                  <div className="h-[1.5px] flex-1 bg-[#D97706]" />
                  <GraduationCap className="w-5 h-5 text-[#D97706] shrink-0" />
                  <div className="h-[1.5px] flex-1 bg-[#D97706]" />
                </div>

                {/* Welcome line */}
                <p className="text-[15px] sm:text-base font-medium text-[#1E293B] mb-4 leading-relaxed">
                  {founderMessage.welcome}
                </p>

                {/* Paragraphs continuing from the Home Page */}
                <div className="space-y-4 text-sm sm:text-[15px] lg:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                  {founderMessage.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Italic highlighted quote */}
                <p className="my-5 text-sm sm:text-[15px] lg:text-base text-[#334155] italic leading-[1.8] border-l-2 border-[#D97706] pl-4">
                  {founderMessage.quote}
                </p>

                {/* Closing invitation */}
                <p className="text-sm sm:text-[15px] lg:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                  {founderMessage.closing}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 3: Admissions CTA & Footer ── */}
        <Footer showAdmissions={true} />
      </main>
    </div>
  );
}
