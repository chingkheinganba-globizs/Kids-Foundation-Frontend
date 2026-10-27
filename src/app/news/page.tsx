"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { NEWS_UPDATES_DATA, NewsUpdateItem } from "@/data/newsUpdatesData";
import { downloadNoticeDocument } from "@/lib/noticeDownload";
import {
  Calendar,
  Download,
  ChevronDown,
  Search,
  FileText,
  Bell,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Circulars & Notices",
  "Academic & Exams",
  "Admissions",
  "Achievements",
  "Events & Culture",
] as const;

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  "Circulars & Notices": {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  "Academic & Exams": {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  Admissions: {
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-200",
  },
  Achievements: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
  },
  "Events & Culture": {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
  },
  Governance: {
    bg: "bg-slate-100",
    text: "text-slate-700",
    border: "border-slate-300",
  },
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  // Set of expanded article IDs for in-place accordion expansion
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Sort latest on top (descending timestamp)
  const sortedArticles = useMemo(() => {
    return [...NEWS_UPDATES_DATA].sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  // Filtered by category and search
  const filteredArticles = useMemo(() => {
    return sortedArticles.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        cleanSearch === "" ||
        item.title.toLowerCase().includes(cleanSearch) ||
        (item.subtitle ? item.subtitle.toLowerCase().includes(cleanSearch) : false) ||
        (item.documentName ? item.documentName.toLowerCase().includes(cleanSearch) : false) ||
        (item.fullContent ? item.fullContent.some((p) => p.toLowerCase().includes(cleanSearch)) : false);

      return matchesCategory && matchesSearch;
    });
  }, [sortedArticles, selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDownload = (e: React.MouseEvent, item: NewsUpdateItem) => {
    e.stopPropagation();
    downloadNoticeDocument(item);
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredArticles.map((a) => a.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-[#F47C61] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Page Banner */}
        <PageBanner
          title="News & Updates"
          breadcrumb={["News & Events", "News & Updates"]}
          image="/images/pages_hero_background_image/news_hero.jpg"
        />

        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-10 sm:py-16 space-y-8">
          
          {/* Header Introduction Bar */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                <Bell className="w-4 h-4 text-[#F47C61]" />
                Official Announcements & Institutional Circulars
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#17345F] tracking-tight">
                School Notices, Academic Bulletins & News
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Stay updated with verified circulars, board examination schedules, admission
                announcements, and student accolades. Download attached documents directly below.
              </p>
            </div>

            <div className="flex items-center gap-2 self-stretch md:self-auto shrink-0">
              <button
                onClick={expandAll}
                className="flex-1 md:flex-initial px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="flex-1 md:flex-initial px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-[#17345F] text-white shadow-md shadow-[#17345F]/20"
                        : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search notices, circulars, files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17345F] focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Results count indicator */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
              <span>
                Showing <strong>{filteredArticles.length}</strong> update
                {filteredArticles.length === 1 ? "" : "s"}
                {selectedCategory !== "All" && ` in "${selectedCategory}"`} (Latest on top)
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#F47C61] hover:underline font-medium"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>

          {/* Full Rectangular News & Updates List */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No Circulars Found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                No announcements match your search or filter. Try switching categories or clearing search keywords.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17345F] text-white text-sm font-semibold hover:bg-[#122847] transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredArticles.map((item) => {
                const isExpanded = expandedIds.has(item.id);
                const catStyle =
                  CATEGORY_STYLES[item.category] || {
                    bg: "bg-slate-100",
                    text: "text-slate-700",
                    border: "border-slate-200",
                  };

                return (
                  <div
                    key={item.id}
                    className={`w-full bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${
                      isExpanded
                        ? "border-[#F47C61]/50 shadow-md ring-1 ring-[#F47C61]/20"
                        : "border-slate-200 hover:border-slate-300 shadow-sm hover:shadow"
                    }`}
                  >
                    {/* ── Main Rectangular Strip: 2-Line Structured Layout ── */}
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="p-4 sm:p-5 lg:p-6 cursor-pointer space-y-3 select-none group"
                    >
                      {/* Line 1: Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        {/* Left: Date + Category + Latest */}
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs sm:text-[13px] font-semibold text-[#D97706] flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            {item.date}
                          </span>

                          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                            {item.category}
                          </span>

                          {item.isLatest && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                              • Latest
                            </span>
                          )}
                        </div>

                        {/* Right: Download link + Read Full Article link */}
                        <div className="flex items-center gap-4 shrink-0 ml-auto sm:ml-0">
                          {item.hasDocument && item.documentName && (
                            <button
                              type="button"
                              onClick={(e) => handleDownload(e, item)}
                              title={`Download ${item.documentName}`}
                              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors max-w-[200px] sm:max-w-[260px] truncate"
                            >
                              <Download className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{item.documentName}</span>
                            </button>
                          )}

                          {/* Only show Read Full Article button if it's not an image notice */}
                          {!item.noticeImage && (
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 text-xs font-medium text-[#17345F] hover:text-[#F47C61] transition-colors"
                              aria-expanded={isExpanded}
                            >
                              <span>{isExpanded ? "Show Less" : "Read Full Article"}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Line 2: Heading (acts as link to show/hide uploaded notice image or full details) */}
                      <div className="pt-0.5">
                        <h3 className={`text-base sm:text-lg lg:text-[18px] font-bold leading-snug transition-colors ${
                          item.noticeImage
                            ? "text-[#17345F] group-hover:text-blue-600 underline-offset-4 group-hover:underline"
                            : "text-[#17345F] group-hover:text-blue-600"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* ── Expanded Detail Area ── */}
                    {isExpanded && (
                      <div className="border-t border-slate-100 bg-slate-50/70 px-5 sm:px-7 pt-5 pb-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.noticeImage ? (
                          /* Image notice displayed directly in the section itself */
                          <div className="space-y-4">
                            <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2 sm:p-4">
                              <Image
                                src={item.noticeImage}
                                alt={item.title}
                                width={1000}
                                height={1400}
                                className="w-full h-auto object-contain rounded-lg"
                                priority
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            {/* Paragraphs: subtitle flows into body as regular text */}
                            <div className="space-y-3 text-sm text-slate-600 leading-[1.8]">
                              {item.subtitle && <p>{item.subtitle}</p>}

                              {item.fullContent?.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                              ))}
                            </div>

                            {/* Bottom Show Less */}
                            <div className="pt-3 flex items-center justify-end border-t border-slate-200/50">
                              <button
                                type="button"
                                onClick={() => toggleExpand(item.id)}
                                className="inline-flex items-center gap-1 text-xs font-medium text-[#17345F] hover:text-[#F47C61] transition-colors"
                              >
                                <span>Show Less</span>
                                <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

         
           

        </div>
      </main>

      <Footer />
    </div>
  );
}