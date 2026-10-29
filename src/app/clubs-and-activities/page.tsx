import React from "react";
import { Metadata } from "next";
import { getClubsPageData, getStrapiMediaUrl } from "@/lib/strapi";
import { CLUBS_DATA, Club } from "@/data/clubsData";
import { ClubsClient } from "@/components/clubs/ClubsClient";

export const metadata: Metadata = {
  title: "Clubs & Activities | Kids' Foundation School",
  description:
    "Explore student clubs and societies at Kids' Foundation School, cultivating curiosity, leadership, debate, arts, athletics, and STEM skills.",
};

export default async function ClubsAndActivitiesPage() {
  const strapiData = await getClubsPageData();

  const clubs: Club[] =
    strapiData?.clubs && strapiData.clubs.length > 0
      ? strapiData.clubs.map((c, idx) => ({
          id: c.clubId || `club-${c.id || idx}`,
          name: c.name,
          category: (c.category || "STEM & Innovation") as Club["category"],
          meetingSchedule: c.meetingSchedule || "",
          location: c.location || "",
          mentor: c.mentor || "",
          mentorRole: c.mentorRole || "",
          membersCount: c.membersCount || 0,
          badgeColor: c.badgeColor || "bg-blue-50 text-blue-700 border-blue-200",
          accentGradient: c.accentGradient || "from-blue-600 to-indigo-700",
          image: c.imageUrl || getStrapiMediaUrl(c.image) || "/images/gallery-science-lab.jpg",
          description: c.description,
          recentHighlight: c.recentHighlight || "",
        }))
      : CLUBS_DATA;

  return (
    <ClubsClient
      bannerTitle={strapiData?.bannerTitle || "Clubs & Activities"}
      breadcrumb={strapiData?.breadcrumb || ["Home", "Clubs & Activities"]}
      bannerImage={
        strapiData?.bannerImageUrl ||
        getStrapiMediaUrl(strapiData?.bannerImage) ||
        "/images/pages_hero_background_image/sports_and_arts_hero.jpg"
      }
      overviewHeading={strapiData?.overviewHeading}
      overviewDescription={strapiData?.overviewDescription}
      categories={strapiData?.categories && strapiData.categories.length > 0 ? strapiData.categories : undefined}
      clubs={clubs}
    />
  );
}
