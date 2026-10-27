"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ACADEMIC_STAGES, ACADEMIC_STAGES_HEADER } from "@/data/academicStages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function AcademicStages() {
  const [activeTabId, setActiveTabId] = useState<string>("early-years");

  const currentStage =
    ACADEMIC_STAGES.find((s) => s.id === activeTabId) || ACADEMIC_STAGES[0];

  return (
    <section id="academics" className="py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {/* Section Heading */}
        <SectionHeading
          label={ACADEMIC_STAGES_HEADER.label}
          heading={ACADEMIC_STAGES_HEADER.heading}
          description={ACADEMIC_STAGES_HEADER.description}
          align="center"
          className="mb-7 sm:mb-9"
        />

        {/* Interactive Tabs Header Container */}
        <div className="flex justify-center mb-8 sm:mb-11">
          <div
            role="tablist"
            aria-label="Academic stages tabs"
            className="inline-flex items-center gap-1 sm:gap-4 md:gap-7 bg-[#E8EFF8] px-3.5 sm:px-5 py-2 rounded-full border border-[#D5E2F3] overflow-x-auto max-w-full scrollbar-none"
          >
            {ACADEMIC_STAGES.map((stage) => {
              const isActive = stage.id === activeTabId;
              return (
                <button
                  key={stage.id}
                  role="tab"
                  id={`tab-${stage.id}`}
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${stage.id}`}
                  onClick={() => setActiveTabId(stage.id)}
                  className={cn(
                    "relative py-1 px-2 sm:px-2.5 text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer select-none flex items-center gap-1.5",
                    isActive
                      ? "text-[#17345F]"
                      : "text-[#64748B] hover:text-[#17345F]"
                  )}
                >
                  <span className="text-[#F47C61] font-bold">
                    {stage.tabNumber}
                  </span>
                  <span>{stage.tabLabel}</span>

                  {/* Underline indicator for active tab */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1 right-1 h-[2px] bg-[#F47C61] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel - items-stretch guarantees equal height for text and image across all categories */}
        <div
          role="tabpanel"
          id={`tabpanel-${currentStage.id}`}
          aria-labelledby={`tab-${currentStage.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch"
        >
          {/* Left Column: Details (7 cols on lg matching AboutSection) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left py-1 sm:py-2">
            <div>
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                {currentStage.subLabel}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.22] tracking-tight mb-4 sm:mb-5">
                {currentStage.heading}
              </h3>

              <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85] mb-5 sm:mb-6 max-w-2xl">
                {currentStage.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 sm:mb-7">
                {currentStage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E8EFF8] text-[#17345F] text-xs sm:text-[13px] font-medium px-3.5 py-1.5 rounded-full border border-[#D5E2F3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <Link
                href={currentStage.linkHref}
                className="inline-flex items-center text-[#F47C61] hover:text-[#E0684E] font-semibold text-sm sm:text-base transition-colors group"
              >
                <span>{currentStage.linkText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Stage Image matching text height exactly */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-[480px] h-full min-h-[260px] sm:min-h-[340px] md:min-h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(23,52,95,0.08)] bg-slate-100">
              <Image
                key={currentStage.id}
                src={currentStage.image}
                alt={currentStage.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-all duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
