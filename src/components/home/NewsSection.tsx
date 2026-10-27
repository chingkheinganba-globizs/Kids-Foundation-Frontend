"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_ITEMS, NEWS_HEADER } from "@/data/news";
import { IMAGES } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { cn } from "@/lib/utils";

function CustomScrollbar({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement | null> }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(50);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartScrollTop = useRef(0);

  const updateThumb = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight) {
      setThumbHeight(0);
      return;
    }
    const trackHeight = (trackRef.current?.clientHeight || clientHeight) - 0;
    const ratio = clientHeight / scrollHeight;
    const newThumbHeight = Math.max(40, ratio * trackHeight);
    const maxThumbTop = trackHeight - newThumbHeight;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    setThumbHeight(newThumbHeight);
    setThumbTop(scrollRatio * maxThumbTop);
  }, [scrollContainerRef]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateThumb();
    el.addEventListener("scroll", updateThumb, { passive: true });
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateThumb);
      observer.disconnect();
    };
  }, [scrollContainerRef, updateThumb]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollTop.current = scrollContainerRef.current?.scrollTop || 0;
  }, [scrollContainerRef]);

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e: MouseEvent) => {
      const el = scrollContainerRef.current;
      const track = trackRef.current;
      if (!el || !track) return;
      const deltaY = e.clientY - dragStartY.current;
      const trackHeight = track.clientHeight;
      const scrollableHeight = el.scrollHeight - el.clientHeight;
      const maxThumbTop = trackHeight - thumbHeight;
      const scrollDelta = (deltaY / maxThumbTop) * scrollableHeight;
      el.scrollTop = dragStartScrollTop.current + scrollDelta;
    };
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, scrollContainerRef, thumbHeight]);

  const scrollStep = useCallback((direction: "up" | "down") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ top: direction === "up" ? -80 : 80, behavior: "smooth" });
  }, [scrollContainerRef]);

  if (thumbHeight === 0) return null;

  return (
    <div className="absolute right-2 sm:right-3 top-4 bottom-4 flex flex-col items-center w-[18px] z-10 select-none">
      {/* Up arrow button */}
      <button
        onClick={() => scrollStep("up")}
        aria-label="Scroll up"
        className="w-[18px] h-[18px] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M4 0.5L7 4.5H1L4 0.5Z" fill="#3B4F6B" />
        </svg>
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex-1 w-[10px] my-1.5 rounded-full relative"
        style={{ backgroundColor: "#CDD8EA" }}
        onClick={(e) => {
          const track = trackRef.current;
          const el = scrollContainerRef.current;
          if (!track || !el) return;
          const rect = track.getBoundingClientRect();
          const clickY = e.clientY - rect.top;
          const trackHeight = rect.height;
          const scrollableHeight = el.scrollHeight - el.clientHeight;
          const ratio = clickY / trackHeight;
          el.scrollTo({ top: ratio * scrollableHeight, behavior: "smooth" });
        }}
      >
        {/* Thumb */}
        <div
          onMouseDown={handleMouseDown}
          className="absolute left-1/2 -translate-x-1/2 rounded-full cursor-grab active:cursor-grabbing transition-shadow"
          style={{
            width: 8,
            height: thumbHeight,
            top: thumbTop,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
          }}
        />
      </div>

      {/* Down arrow button */}
      <button
        onClick={() => scrollStep("down")}
        aria-label="Scroll down"
        className="w-[18px] h-[18px] rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path d="M4 4.5L1 0.5H7L4 4.5Z" fill="#3B4F6B" />
        </svg>
      </button>
    </div>
  );
}

export function NewsSection() {
  const [activeTab, setActiveTab] = useState<"events" | "news">("events");
  const newsScrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = NEWS_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="news" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle organic wave texture in background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 -z-0">
        <Image
          src={IMAGES.subtleWaveBg}
          alt="Decorative subtle wave texture"
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {/* Header */}
        <SectionHeading
          label={NEWS_HEADER.label}
          heading={NEWS_HEADER.heading}
          description={NEWS_HEADER.description}
          align="center"
          className="mb-6 sm:mb-8"
        />

        {/* Tabs: 01. Events | 02. News & Updates */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div
            role="tablist"
            aria-label="News and Events Tabs"
            className="inline-flex items-center gap-2 sm:gap-5 bg-[#E8EFF8] px-3.5 sm:px-6 py-2 rounded-full border border-[#D5E2F3]"
          >
            {NEWS_HEADER.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id as "events" | "news")}
                  className={cn(
                    "relative py-1 px-2.5 text-xs sm:text-[13px] font-semibold transition-all cursor-pointer select-none flex items-center gap-1.5",
                    isActive
                      ? "text-[#17345F]"
                      : "text-[#64748B] hover:text-[#17345F]"
                  )}
                >
                  <span className="text-[#F47C61] font-bold">{tab.number}</span>
                  <span>{tab.label}</span>

                  {isActive && (
                    <span className="absolute -bottom-1 left-1 right-1 h-[2px] bg-[#F47C61] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content: Cards for Events, List for News & Updates */}
        {activeTab === "events" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="relative max-w-[900px] mx-auto">
            {/* Outer container with flat blue background and clipping */}
            <div className="bg-[#E8EEF6] rounded-3xl p-3 sm:p-5 overflow-hidden relative">
              {/* Custom scrollbar */}
              <CustomScrollbar scrollContainerRef={newsScrollRef} />

              {/* Scrollable news list — native scrollbar hidden */}
              <div
                ref={newsScrollRef}
                className="news-scroll-container flex flex-col gap-2.5 sm:gap-3.5 max-h-[340px] overflow-y-auto pr-6 sm:pr-9"
              >
                {filteredItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.linkHref}
                    className="group flex flex-col sm:flex-row sm:items-center rounded-2xl px-4 sm:px-7 py-3 sm:py-5 shadow-[0_2px_12px_rgba(23,52,95,0.04)] hover:shadow-[0_6px_20px_rgba(23,52,95,0.08)] transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0 bg-white gap-1.5 sm:gap-0"
                  >
                    {/* Date */}
                    <span className="text-[11px] sm:text-xs font-semibold text-[#D97706] tracking-wide whitespace-nowrap sm:min-w-[130px]">
                      {item.date}
                    </span>

                    {/* Title */}
                    <h3 className="flex-1 text-sm sm:text-base font-bold text-[#17345F] leading-snug group-hover:text-[#F47C61] transition-colors pl-0 sm:pl-6">
                      {item.title}
                    </h3>

                    {/* Arrow */}
                    <span className="hidden sm:inline-block ml-4 sm:ml-6 text-[#F47C61] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Link */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href={activeTab === "events" ? "/events" : "/news"}
            className="inline-flex items-center text-[#F47C61] hover:text-[#E0684E] font-semibold text-sm transition-colors group"
          >
            <span>
              {activeTab === "events"
                ? "View all events →"
                : "View all news →"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

