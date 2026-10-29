import React from "react";
import type { Metadata } from "next";
import { IMAGES } from "@/data/images";
import { NEWS_ITEMS } from "@/data/news";
import { getEventsPageData, getStrapiMediaUrl } from "@/lib/strapi";
import { formatDisplayDate } from "@/lib/newsHelper";
import { EventsClient, EventItem } from "@/components/events/EventsClient";

export const metadata: Metadata = {
  title: "School Events & Activities | Kids' Foundation",
  description:
    "Stay informed about upcoming and past school events, sports meets, cultural celebrations, academic exhibitions, and parent forums at Kids' Foundation, Imphal.",
};

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

const DEFAULT_EVENTS: EventItem[] = [...homepageEvents, ...dummyEvents].sort(
  (a, b) => {
    if (a.tag === "upcoming" && b.tag !== "upcoming") return -1;
    if (a.tag !== "upcoming" && b.tag === "upcoming") return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
);

export default async function EventsPage() {
  const strapiData = await getEventsPageData();

  const bannerTitle = strapiData?.bannerTitle || "Events";
  const breadcrumb = strapiData?.breadcrumb || ["Events"];
  const sectionLabel = strapiData?.sectionLabel || "ALL EVENTS";
  const sectionHeading =
    strapiData?.sectionHeading || "What's happening at Kids' Foundation";
  const filterOptions = strapiData?.filterOptions || [
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

  const events: EventItem[] =
    strapiData?.events && strapiData.events.length > 0
      ? strapiData.events
          .map((ev, idx) => {
            const fallback = DEFAULT_EVENTS[idx] || DEFAULT_EVENTS[0];
            const rawDate = ev.date || fallback.date;
            const { month, day, year } = parseDateParts(rawDate);
            const rawId = typeof ev.id === "number" ? ev.id : idx;
            const tag: "upcoming" | "past" = ev.tag || fallback.tag || "upcoming";
            return {
              id: ev.eventId || String(ev.id || `event-${idx}`),
              rawId,
              rawDate,
              date: formatDisplayDate(rawDate) || rawDate,
              month: ev.month || month,
              day: ev.day || day,
              year: ev.year || year,
              title: ev.title || fallback.title,
              description: ev.description || fallback.description,
              category: ev.category || fallback.category,
              image:
                getStrapiMediaUrl(ev.image) ||
                ev.imageUrl ||
                fallback.image,
              imageAlt: ev.imageAlt || fallback.imageAlt,
              time: ev.time || fallback.time,
              venue: ev.venue || fallback.venue,
              tag,
            };
          })
          .sort((a, b) => {
            // 1. Upcoming events on top of all
            const aIsUpcoming = a.tag === "upcoming" ? 1 : 0;
            const bIsUpcoming = b.tag === "upcoming" ? 1 : 0;
            if (bIsUpcoming !== aIsUpcoming) {
              return bIsUpcoming - aIsUpcoming;
            }
            // 2. Latest upload on top
            const idDiff = (b.rawId ?? 0) - (a.rawId ?? 0);
            if (idDiff !== 0) return idDiff;
            // 3. Fallback to event date
            const aTime = new Date(a.rawDate).getTime() || 0;
            const bTime = new Date(b.rawDate).getTime() || 0;
            return bTime - aTime;
          })
      : DEFAULT_EVENTS;

  return (
    <EventsClient
      bannerTitle={bannerTitle}
      breadcrumb={breadcrumb}
      sectionLabel={sectionLabel}
      sectionHeading={sectionHeading}
      filterOptions={filterOptions}
      events={events}
    />
  );
}