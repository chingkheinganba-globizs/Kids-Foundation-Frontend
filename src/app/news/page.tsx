"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { IMAGES } from "@/data/images";
import { NEWS_ITEMS } from "@/data/news";
import { Calendar, ArrowRight, Tag, Newspaper } from "lucide-react";
import { NewsReaderModal } from "@/components/news/NewsReaderModal";

// Types

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  isLatest?: boolean;
}

// Data

const homepageNews: NewsArticle[] = NEWS_ITEMS.filter(
  (n) => n.category === "news"
).map((n) => ({
  id: n.id,
  date: n.date,
  title: n.title,
  description: n.description,
  category: "Announcements",
  image: n.image,
  imageAlt: n.imageAlt,
}));

const dummyNews: NewsArticle[] = [
  {
    id: "news-d1",
    date: "November 10, 2026",
    title: "CBSE Mid-Term Results - Session 2026-27",
    description:
      "Students across Classes VI to XII have achieved commendable results in the mid-term assessments. Individual report cards will be distributed during the parent-teacher meeting scheduled for November 18.",
    category: "Academic",
    image: IMAGES.gallery.examHall,
    imageAlt: "Students appearing in mid-term examinations",
    isLatest: true,
  },
  {
    id: "news-d2",
    date: "November 3, 2026",
    title: "Admissions Open for Pre-Nursery to Class XI - 2027-28",
    description:
      "Registration for the upcoming academic year is now open. Parents are invited to visit the school office or apply online through our admissions portal. Limited seats available for each grade.",
    category: "Admissions",
    image: IMAGES.aboutCampus,
    imageAlt: "Kids Foundation school campus for admissions",
  },
  {
    id: "news-d3",
    date: "October 25, 2026",
    title: "Dance & Arts Club Achievements at State Level Competition",
    description:
      "Our Dance & Arts Club members won three gold medals at the State Level Cultural Competition held in Imphal. The team will represent Manipur at the national round in December.",
    category: "Achievements",
    image: IMAGES.gallery.dance,
    imageAlt: "Kids Foundation students performing dance",
  },
  {
    id: "news-d4",
    date: "October 18, 2026",
    title: "Important Notice: School Fee Submission - October 2026",
    description:
      "Parents are reminded that the quarterly fee submission deadline is October 31, 2026. Please submit fees at the school finance office during working hours (9:00 AM - 2:00 PM).",
    category: "Notice",
    image: IMAGES.academic.primary,
    imageAlt: "School notice board at Kids Foundation",
  },
  {
    id: "news-d5",
    date: "September 28, 2026",
    title: "New Smart Classroom Initiative Launched Across All Wings",
    description:
      "Kids' Foundation has completed the installation of smart boards and interactive displays in all classrooms from Class I to Class XII, enhancing the learning experience for every student.",
    category: "Infrastructure",
    image: IMAGES.academic.seniorSecondary,
    imageAlt: "Smart classroom technology at Kids Foundation",
  },
  {
    id: "news-d6",
    date: "September 12, 2026",
    title: "Taekwondo Team Wins Gold at District Championship",
    description:
      "Our Taekwondo team brought glory to Kids' Foundation by securing gold medals at the District Taekwondo Championship. The team will now proceed to represent the district at the state level.",
    category: "Achievements",
    image: IMAGES.gallery.taekwondo,
    imageAlt: "Kids Foundation Taekwondo champions",
  },
  {
    id: "news-d7",
    date: "September 1, 2026",
    title: "New Academic Year 2026-27: Welcome Back Message",
    description:
      "The Principal and the entire staff of Kids' Foundation warmly welcome all students and families for the new academic year 2026-27. We look forward to a year of growth, learning and excellence.",
    category: "Announcements",
    image: IMAGES.aboutCampus,
    imageAlt: "Kids Foundation school campus welcome",
  },
  {
    id: "news-d8",
    date: "August 22, 2026",
    title: "Library Expansion - Over 2,000 New Books Added",
    description:
      "The school library has been significantly expanded with more than 2,000 new titles covering science, literature, history, technology and world cultures. Students are encouraged to explore the new collection.",
    category: "Infrastructure",
    image: IMAGES.academic.earlyYears,
    imageAlt: "Expanded school library at Kids Foundation",
  },
];

const ALL_NEWS: NewsArticle[] = [...homepageNews, ...dummyNews].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const FILTER_OPTIONS = [
  "All",
  "Announcements",
  "Academic",
  "Admissions",
  "Achievements",
  "Notice",
  "Infrastructure",
];

const LATEST = ALL_NEWS.find((n) => n.isLatest) ?? ALL_NEWS[0];

// Category colour map

const CATEGORY_COLORS: Record<string, string> = {
  Announcements: "bg-blue-50 text-blue-700",
  Academic: "bg-emerald-50 text-emerald-700",
  Admissions: "bg-amber-50 text-amber-700",
  Achievements: "bg-purple-50 text-purple-700",
  Notice: "bg-red-50 text-red-700",
  Infrastructure: "bg-cyan-50 text-cyan-700",
};

// News Card

function NewsCard({
  article,
  onReadArticle,
}: {
  article: NewsArticle;
  onReadArticle: (article: NewsArticle) => void;
}) {
  const catStyle =
    CATEGORY_COLORS[article.category] ?? "bg-[#E7EEF8] text-[#17345F]";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(23,52,95,0.06)] border border-slate-100 hover:shadow-[0_12px_32px_rgba(23,52,95,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div
        onClick={() => onReadArticle(article)}
        className="relative h-[200px] overflow-hidden flex-shrink-0 cursor-pointer"
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${catStyle}`}
          >
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
            <Calendar className="w-3 h-3" />
            <span>{article.date}</span>
          </div>
        </div>

        <h3
          onClick={() => onReadArticle(article)}
          className="text-base sm:text-[17px] font-bold text-[#17345F] leading-[1.4] mb-3 group-hover:text-[#F47C61] transition-colors duration-200 cursor-pointer"
        >
          {article.title}
        </h3>

        <p className="text-sm text-[#475569] leading-[1.75] mb-5 flex-1 line-clamp-3">
          {article.description}
        </p>

        <button
          type="button"
          onClick={() => onReadArticle(article)}
          className="inline-flex items-center gap-1.5 text-[#17345F] font-semibold text-sm group-hover:text-[#F47C61] transition-colors duration-200 cursor-pointer self-start"
          aria-label={`Read full article: ${article.title}`}
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

// Page

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const filtered = ALL_NEWS.filter((a) => {
    if (activeFilter === "All") return true;
    return a.category === activeFilter;
  });

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col">
        <PageBanner title="News &amp; Updates" breadcrumb={["News & Updates"]} />

        {/* Latest Article Hero */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="mb-8">
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase inline-block leading-normal">
                LATEST NEWS &bull; UPDATES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Image */}
              <div
                onClick={() => setSelectedArticle(LATEST)}
                className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px] shadow-[0_16px_40px_rgba(23,52,95,0.12)] cursor-pointer group"
              >
                <Image
                  src={LATEST.image}
                  alt={LATEST.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#17345F] text-white text-xs font-bold tracking-wide px-3 py-1.5 rounded-full uppercase shadow-sm">
                    <Newspaper className="w-3 h-3 text-[#FBBF24]" />
                    Latest Update
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-6 flex flex-col justify-center py-2">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      CATEGORY_COLORS[LATEST.category] ??
                      "bg-[#E7EEF8] text-[#17345F]"
                    }`}
                  >
                    {LATEST.category}
                  </span>
                </div>

                <h2
                  onClick={() => setSelectedArticle(LATEST)}
                  className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-5 hover:text-[#F47C61] transition-colors cursor-pointer"
                >
                  {LATEST.title}
                </h2>

                <p className="text-sm sm:text-base text-[#475569] leading-[1.8] mb-6">
                  {LATEST.description}
                </p>

                <div className="flex items-center gap-3 mb-8 text-sm text-[#475569]">
                  <div className="w-8 h-8 rounded-lg bg-[#E7EEF8] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-[#17345F]" />
                  </div>
                  <span>{LATEST.date}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(LATEST)}
                  className="inline-flex items-center gap-2 bg-[#17345F] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#F47C61] transition-colors duration-300 self-start cursor-pointer shadow-xs active:scale-98"
                  aria-label={`Read full article: ${LATEST.title}`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All News Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase inline-block leading-normal mb-2.5">
                  ALL ARTICLES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight">
                  Stay informed &amp; up to date
                </h2>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setActiveFilter(opt)}
                  className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                    activeFilter === opt
                      ? "bg-[#17345F] text-white border-[#17345F]"
                      : "bg-white text-[#475569] border-slate-200 hover:border-[#17345F] hover:text-[#17345F]"
                  }`}
                >
                  {opt === "All" && <Tag className="w-3 h-3" />}
                  {opt}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-[#475569] text-sm">
                No articles found for this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filtered.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    onReadArticle={(art) => setSelectedArticle(art)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>

      {/* In-page Full Article Reader Modal (Never redirects away) */}
      <NewsReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}