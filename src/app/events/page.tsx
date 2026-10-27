"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { IMAGES } from "@/data/images";
import { NEWS_ITEMS } from "@/data/news";
import { Calendar, ArrowRight, Clock, MapPin, Tag } from "lucide-react";
import { EventReaderModal } from "@/components/events/EventReaderModal";

// Types

interface EventItem {
  id: string;
  date: string;
  month: string;
  day: string;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  time?: string;
  venue?: string;
  tag: "upcoming" | "past";
}

// Helpers

function parseDateParts(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    const parts = dateStr.split(" ");
    return {
      month: parts[0]?.slice(0, 3) ?? "Jan",
      day: parts[1]?.replace(",", "") ?? "01",
      year: parts[2] ?? "2026",
    };
  }
  return {
    month: d.toLocaleString("en-US", { month: "short" }),
    day: String(d.getDate()).padStart(2, "0"),
    year: String(d.getFullYear()),
  };
}

// Build full event list (homepage data + dummy extras)

const homepageEvents: EventItem[] = NEWS_ITEMS.filter(
  (n) => n.category === "events"
).map((n) => {
  const { month, day, year } = parseDateParts(n.date);
  return {
    id: n.id,
    date: n.date,
    month,
    day,
    year,
    title: n.title,
    description: n.description,
    category: "School Events",
    image: n.image,
    imageAlt: n.imageAlt,
    time: "10:00 AM - 1:00 PM",
    venue: "School Auditorium, Kids' Foundation",
    tag: "past" as const,
  };
});

const dummyEvents: EventItem[] = [
  {
    id: "event-d1",
    date: "November 15, 2026",
    month: "Nov",
    day: "15",
    year: "2026",
    title: "Annual Sports Day 2026",
    description:
      "Students from all grades compete in track & field, team sports and relay races on our sprawling school grounds. Parents and guardians are warmly invited to cheer on our young athletes.",
    category: "Sports",
    image: IMAGES.academic.earlyYears,
    imageAlt: "Students competing in sports day activities",
    time: "8:00 AM - 4:00 PM",
    venue: "School Grounds, Kids' Foundation",
    tag: "upcoming",
  },
  {
    id: "event-d2",
    date: "November 22, 2026",
    month: "Nov",
    day: "22",
    year: "2026",
    title: "Science & Innovation Fair",
    description:
      "An exciting showcase of student-led science projects, experiments and innovations spanning robotics, environment science, chemistry and mathematics. Open to all parents and community members.",
    category: "Academic",
    image: IMAGES.gallery.scienceLab,
    imageAlt: "Students presenting science fair projects",
    time: "9:00 AM - 3:00 PM",
    venue: "Science Block & Main Hall",
    tag: "upcoming",
  },
  {
    id: "event-d3",
    date: "December 5, 2026",
    month: "Dec",
    day: "05",
    year: "2026",
    title: "Christmas & Winter Concert",
    description:
      "Join us for an evening of music, drama and cultural performances as our students celebrate the spirit of Christmas with carols, dances and theatrical presentations.",
    category: "Cultural",
    image: IMAGES.news.culturalMeet,
    imageAlt: "Students performing cultural concert",
    time: "5:00 PM - 8:00 PM",
    venue: "School Auditorium",
    tag: "upcoming",
  },
  {
    id: "event-d4",
    date: "December 18, 2026",
    month: "Dec",
    day: "18",
    year: "2026",
    title: "Annual Prize Distribution Ceremony",
    description:
      "A prestigious ceremony recognising academic excellence, co-curricular achievements and outstanding contributions by students across all grades. Parents and dignitaries are invited to grace the event.",
    category: "Ceremony",
    image: IMAGES.news.scholarship,
    imageAlt: "Prize distribution ceremony at Kids Foundation",
    time: "10:00 AM - 1:00 PM",
    venue: "Main Auditorium",
    tag: "upcoming",
  },
  {
    id: "event-d5",
    date: "September 5, 2026",
    month: "Sep",
    day: "05",
    year: "2026",
    title: "Teachers' Day Celebration",
    description:
      "Students honoured their teachers with heartfelt performances, speeches and personal tributes as part of a touching celebration marking National Teachers' Day.",
    category: "School Events",
    image: IMAGES.academic.primary,
    imageAlt: "Teachers Day celebration at Kids Foundation",
    time: "9:00 AM - 12:00 PM",
    venue: "School Auditorium",
    tag: "past",
  },
  {
    id: "event-d6",
    date: "October 2, 2026",
    month: "Oct",
    day: "02",
    year: "2026",
    title: "Gandhi Jayanti - Cleanliness Drive",
    description:
      "Students and staff came together for a special cleanliness drive around the campus and neighbouring areas to commemorate Gandhi Jayanti and promote community responsibility.",
    category: "Community",
    image: IMAGES.academic.secondary,
    imageAlt: "Students participating in cleanliness drive",
    time: "8:00 AM - 10:00 AM",
    venue: "Campus & Surrounding Areas",
    tag: "past",
  },
  {
    id: "event-d7",
    date: "October 15, 2026",
    month: "Oct",
    day: "15",
    year: "2026",
    title: "Inter-School Debate Competition",
    description:
      "Kids' Foundation hosted an inter-school debate competition bringing together students from 12 schools across Imphal to debate on contemporary social and environmental issues.",
    category: "Academic",
    image: IMAGES.academic.seniorSecondary,
    imageAlt: "Students debating at inter-school competition",
    time: "10:00 AM - 3:00 PM",
    venue: "Conference Hall",
    tag: "past",
  },
  {
    id: "event-d8",
    date: "October 28, 2026",
    month: "Oct",
    day: "28",
    year: "2026",
    title: "Taekwondo Belt Grading Ceremony",
    description:
      "Students from our martial arts programme underwent formal belt grading assessment, demonstrating discipline, skill and perseverance in front of certified examiners and proud parents.",
    category: "Sports",
    image: IMAGES.gallery.taekwondo,
    imageAlt: "Taekwondo belt grading at Kids Foundation",
    time: "9:00 AM - 12:00 PM",
    venue: "Multi-Purpose Hall",
    tag: "past",
  },
];

const ALL_EVENTS: EventItem[] = [...homepageEvents, ...dummyEvents].sort(
  (a, b) => {
    if (a.tag === "upcoming" && b.tag !== "upcoming") return -1;
    if (a.tag !== "upcoming" && b.tag === "upcoming") return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
);

const FILTER_OPTIONS = [
  "All",
  "Upcoming",
  "Past",
  "School Events",
  "Academic",
  "Sports",
  "Cultural",
  "Community",
  "Ceremony",
];

const FEATURED = ALL_EVENTS.find((e) => e.tag === "upcoming") ?? ALL_EVENTS[0];

// Event Card

function EventCard({
  event,
  onReadEvent,
}: {
  event: EventItem;
  onReadEvent: (event: EventItem) => void;
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(23,52,95,0.06)] border border-slate-100 hover:shadow-[0_12px_32px_rgba(23,52,95,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div
        onClick={() => onReadEvent(event)}
        className="relative h-[220px] overflow-hidden flex-shrink-0 cursor-pointer"
      >
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-sm min-w-[52px]">
          <div className="text-[#F47C61] text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">
            {event.month}
          </div>
          <div className="text-[#17345F] text-xl font-extrabold leading-none">
            {event.day}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
              event.tag === "upcoming"
                ? "bg-[#F47C61] text-white"
                : "bg-slate-700/80 text-white"
            }`}
          >
            {event.tag === "upcoming" ? "Upcoming" : "Past"}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-3">
          <Tag className="w-3 h-3 text-[#D97706]" />
          <span className="text-[#D97706] text-xs font-semibold uppercase tracking-wide">
            {event.category}
          </span>
        </div>

        <h3
          onClick={() => onReadEvent(event)}
          className="text-base sm:text-lg font-bold text-[#17345F] leading-[1.4] mb-3 group-hover:text-[#F47C61] transition-colors duration-200 cursor-pointer"
        >
          {event.title}
        </h3>

        <p className="text-sm text-[#475569] leading-[1.75] mb-4 flex-1 line-clamp-3">
          {event.description}
        </p>

        <div className="space-y-1.5 mb-5">
          {event.time && (
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <Clock className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{event.time}</span>
            </div>
          )}
          {event.venue && (
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{event.venue}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onReadEvent(event)}
          className="inline-flex items-center gap-1.5 text-[#17345F] font-semibold text-sm group-hover:text-[#F47C61] transition-colors duration-200 cursor-pointer self-start"
          aria-label={`Read more about: ${event.title}`}
        >
          <span>Read Full Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

// Page

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filtered = ALL_EVENTS.filter((e) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Upcoming") return e.tag === "upcoming";
    if (activeFilter === "Past") return e.tag === "past";
    return e.category === activeFilter;
  });

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col">
        <PageBanner title="Events" breadcrumb={["Events"]} />

        {/* Featured Upcoming Event */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="mb-8">
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase inline-block leading-normal">
                FEATURED EVENT
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Image */}
              <div
                onClick={() => setSelectedEvent(FEATURED)}
                className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px] shadow-[0_16px_40px_rgba(23,52,95,0.12)] cursor-pointer group"
              >
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#F47C61] text-white text-xs font-bold tracking-wide px-3 py-1.5 rounded-full uppercase">
                    <Calendar className="w-3 h-3" />
                    Upcoming
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-6 flex flex-col justify-center py-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#E7EEF8] text-[#17345F] text-xs font-semibold px-3 py-1 rounded-full">
                    {FEATURED.category}
                  </span>
                </div>

                <h2
                  onClick={() => setSelectedEvent(FEATURED)}
                  className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight mb-5 hover:text-[#F47C61] transition-colors cursor-pointer"
                >
                  {FEATURED.title}
                </h2>

                <p className="text-sm sm:text-base text-[#475569] leading-[1.8] mb-6">
                  {FEATURED.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-[#475569]">
                    <div className="w-8 h-8 rounded-lg bg-[#E7EEF8] flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-[#17345F]" />
                    </div>
                    <span>{FEATURED.date}</span>
                  </div>
                  {FEATURED.time && (
                    <div className="flex items-center gap-3 text-sm text-[#475569]">
                      <div className="w-8 h-8 rounded-lg bg-[#E7EEF8] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-[#17345F]" />
                      </div>
                      <span>{FEATURED.time}</span>
                    </div>
                  )}
                  {FEATURED.venue && (
                    <div className="flex items-center gap-3 text-sm text-[#475569]">
                      <div className="w-8 h-8 rounded-lg bg-[#E7EEF8] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#17345F]" />
                      </div>
                      <span>{FEATURED.venue}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(FEATURED)}
                  className="inline-flex items-center gap-2 bg-[#17345F] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#F47C61] transition-colors duration-300 self-start cursor-pointer shadow-xs active:scale-98"
                  aria-label={`Learn more about: ${FEATURED.title}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Events Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase inline-block leading-normal mb-2.5">
                  ALL EVENTS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight">
                  What&apos;s happening at Kids&apos; Foundation
                </h2>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {FILTER_OPTIONS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-[#17345F] text-white border-[#17345F]"
                      : "bg-white text-[#475569] border-slate-200 hover:border-[#17345F] hover:text-[#17345F]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-[#475569] text-sm">
                No events found for this filter.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filtered.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onReadEvent={(ev) => setSelectedEvent(ev)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>

      {/* In-page Full Event Reader Modal (Never redirects away) */}
      <EventReaderModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}