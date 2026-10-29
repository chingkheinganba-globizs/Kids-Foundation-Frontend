import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ui/PageBanner";
import { LEARNING_PAGE_DATA } from "@/data/learningPage";
import { getLearningPageData, getStrapiMediaUrl } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Learning | Kids' Foundation",
  description:
    "Explore the learning approach at Kids' Foundation — from Pre-Primary discovery to Secondary academic excellence with holistic development.",
};

export default async function LearningPage() {
  const strapiData = await getLearningPageData();

  const banner = {
    title: strapiData?.pageTitle || LEARNING_PAGE_DATA.banner.title,
    breadcrumb: strapiData?.breadcrumb || LEARNING_PAGE_DATA.banner.breadcrumb,
  };

  const introLabel = strapiData?.introLabel || "OUR APPROACH";
  const introHeading =
    strapiData?.introHeading || "Building the right foundation through learning";
  const intro = strapiData?.introText || LEARNING_PAGE_DATA.intro;

  const stages =
    strapiData?.stages && strapiData.stages.length > 0
      ? strapiData.stages.map((st, idx) => {
          const fallbackStage = LEARNING_PAGE_DATA.stages[idx] || LEARNING_PAGE_DATA.stages[0];
          return {
            id: st.stageId || fallbackStage.id,
            title: st.title || fallbackStage.title,
            boldIntro: st.boldIntro || fallbackStage.boldIntro,
            description:
              st.description && st.description.length > 0
                ? st.description
                : fallbackStage.description,
            activities: st.activities || fallbackStage.activities,
            bottomText: st.bottomText || fallbackStage.bottomText,
            image: getStrapiMediaUrl(st.image) || fallbackStage.image,
            imageAlt: st.imageAlt || fallbackStage.imageAlt,
          };
        })
      : LEARNING_PAGE_DATA.stages;

  return (
    <div className="relative flex-1 flex flex-col bg-white overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <main className="flex-1 flex flex-col">
        <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />

        {/* Intro Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="w-full">
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                {introLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-5">
                {introHeading}
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
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-center py-1 ${
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

                  {/* Normal-sized stage image */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isEven ? "lg:order-1 lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(23,52,95,0.08)] bg-slate-100">
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 440px"
                        className="object-cover object-center hover:scale-103 transition-transform duration-700"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

      </main>
    </div>
  );
}
