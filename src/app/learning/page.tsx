import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { LEARNING_PAGE_DATA } from "@/data/learningPage";

export const metadata: Metadata = {
  title: "Learning | Kids' Foundation",
  description:
    "Explore the learning approach at Kids' Foundation — from Pre-Primary discovery to Secondary academic excellence with holistic development.",
};

export default function LearningPage() {
  const { banner, intro, stages } = LEARNING_PAGE_DATA;

  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col">
        <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />

        {/* Intro Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="max-w-3xl">
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-5">
                Building the right foundation through learning
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                {intro}
              </p>
            </div>
          </div>
        </section>

        {/* Learning Stages - items-stretch matches image & text height */}
        {stages.map((stage, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              key={stage.id}
              id={stage.id}
              className={`py-12 sm:py-16 lg:py-20 ${
                isEven ? "bg-[#FAF7F2]" : "bg-white"
              }`}
            >
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between py-1 ${
                      isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#17345F] mb-3 tracking-tight leading-[1.25]">
                        {stage.title}
                      </h3>

                      {/* Gold accent line */}
                      <div className="w-14 h-1 bg-[#D97706] rounded-full mb-6" />

                      {stage.boldIntro && (
                        <p className="text-base sm:text-lg font-semibold text-[#17345F] leading-[1.6] mb-4 italic">
                          {stage.boldIntro}
                        </p>
                      )}

                      {stage.description.map((para, i) => (
                        <p
                          key={i}
                          className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85] mb-4"
                        >
                          {para}
                        </p>
                      ))}

                      {stage.activities && (
                        <div className="mt-4 mb-4">
                          <ul className="space-y-2">
                            {stage.activities.map((activity) => (
                              <li
                                key={activity}
                                className="flex items-center gap-2.5 text-sm sm:text-[15px] text-[#475569] leading-[1.75]"
                              >
                                <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {stage.bottomText && (
                        <p className="mt-4 text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                          {stage.bottomText}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Image matching text height exactly */}
                  <div
                    className={`lg:col-span-5 flex justify-center h-full ${
                      isEven ? "lg:order-1 lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <div className="relative w-full max-w-[480px] h-full min-h-[260px] sm:min-h-[360px] md:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(23,52,95,0.08)] bg-slate-100">
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 480px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="hover:scale-103 transition-transform duration-700"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

                <Footer />
      </main>
    </div>
  );
}
