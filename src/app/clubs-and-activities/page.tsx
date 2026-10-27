"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { CLUBS_DATA } from "@/data/clubsData";
import { Search } from "lucide-react";

const CLUB_CATEGORIES = [
  "All",
  "STEM & Innovation",
  "Arts & Culture",
  "Sports & Wellness",
  "Literary & Debate",
  "Social & Eco",
] as const;

export default function ClubsAndActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClubs = useMemo(() => {
    return CLUBS_DATA.filter((club) => {
      const matchesCategory =
        selectedCategory === "All" || club.category === selectedCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        cleanSearch === "" ||
        club.name.toLowerCase().includes(cleanSearch) ||
        club.tagline.toLowerCase().includes(cleanSearch) ||
        club.description.toLowerCase().includes(cleanSearch) ||
        club.keyActivities.some((act) => act.toLowerCase().includes(cleanSearch));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Page Banner */}
        <PageBanner
          title="Clubs & Activities"
          breadcrumb={["Home", "Clubs & Activities"]}
          image="/images/pages_hero_background_image/sports_and_arts_hero.jpg"
        />

        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-10 sm:py-16 space-y-12">
          {/* Philosophy / Overview Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl space-y-4 relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17345F] tracking-tight leading-tight">
                Beyond the Textbook: Cultivating Curiosity, Leadership & Passion
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Kids&apos; Foundation School, learning extends far beyond academic syllabi. Our
                vibrant clubs and student societies provide every learner the space to discover
                hidden talents, collaborate with peers across grades, compete in state and national
                arenas, and build lifelong self-confidence.
              </p>
            </div>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {CLUB_CATEGORIES.map((cat) => (
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
                  placeholder="Search clubs & activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17345F] focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Results count indicator */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
              <span>
                Showing <strong>{filteredClubs.length}</strong> active club
                {filteredClubs.length === 1 ? "" : "s"}
                {selectedCategory !== "All" && ` in "${selectedCategory}"`}
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

          {/* Clubs Grid */}
          {filteredClubs.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-800">No Clubs Found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                No clubs match your current category filter or search query.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredClubs.map((club) => (
                <div
                  key={club.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group"
                >
                  {/* Club Card Image - clean, no caption, no member count icon */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2.5">
                      {/* Category - like publication: clean text without button design */}
                      <span className="text-[#17345F] font-semibold text-xs tracking-wide block">
                        {club.category}
                      </span>

                      {/* Club Name */}
                      <h3 className="text-lg font-bold text-[#17345F] group-hover:text-[#F47C61] transition-colors leading-snug">
                        {club.name}
                      </h3>

                      {/* Club Description */}
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                        {club.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
