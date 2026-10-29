import React from "react";
import type { Metadata } from "next";
import { CAMPUS_PAGE_DATA } from "@/data/campusPage";
import { getCampusPageData, getStrapiMediaUrl } from "@/lib/strapi";
import { CampusClient } from "@/components/campus/CampusClient";

export const metadata: Metadata = {
  title: "Campus Facilities & Tour | Kids' Foundation",
  description:
    "Explore the spacious 2-acre campus, modern facilities, sports grounds, science labs, and classrooms at Kids' Foundation School, Imphal.",
};

export default async function CampusPage() {
  const strapiData = await getCampusPageData();

  const banner = {
    title: strapiData?.pageTitle || CAMPUS_PAGE_DATA.banner.title,
    breadcrumb: strapiData?.breadcrumb || CAMPUS_PAGE_DATA.banner.breadcrumb,
  };

  const intro = {
    heading: strapiData?.introHeading || CAMPUS_PAGE_DATA.intro.heading,
    title: strapiData?.introTitle || "Our campus at a glance",
    description: strapiData?.introDescription || CAMPUS_PAGE_DATA.intro.description,
    facilities:
      strapiData?.facilities && strapiData.facilities.length > 0
        ? strapiData.facilities
        : CAMPUS_PAGE_DATA.intro.facilities,
  };

  const galleryImages =
    strapiData?.galleryImages && strapiData.galleryImages.length > 0
      ? strapiData.galleryImages.map((img, idx) => ({
          src:
            getStrapiMediaUrl(img.image) ||
            img.imageUrl ||
            CAMPUS_PAGE_DATA.galleryImages[idx]?.src ||
            "/images/campus-aerial.jpg",
          alt:
            img.alt ||
            img.title ||
            CAMPUS_PAGE_DATA.galleryImages[idx]?.alt ||
            "Campus image",
        }))
      : CAMPUS_PAGE_DATA.galleryImages;

  const video = {
    title: strapiData?.videoTitle || CAMPUS_PAGE_DATA.video.title,
    youtubeId: strapiData?.youtubeId || CAMPUS_PAGE_DATA.video.youtubeId,
    description: strapiData?.videoDescription || CAMPUS_PAGE_DATA.video.description,
  };

  return (
    <CampusClient
      banner={banner}
      intro={intro}
      galleryImages={galleryImages}
      video={video}
    />
  );
}
