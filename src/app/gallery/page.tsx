import React from "react";
import type { Metadata } from "next";
import { GALLERY_PAGE_DATA } from "@/data/galleryPage";
import { getGalleryPageData, getStrapiMediaUrl } from "@/lib/strapi";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery | Kids' Foundation",
  description:
    "Explore photos and memories of campus life, academics, sports, culture, and events at Kids' Foundation School, Imphal.",
};

export default async function GalleryPage() {
  const strapiData = await getGalleryPageData();

  const banner = {
    title: strapiData?.bannerTitle || GALLERY_PAGE_DATA.banner.title,
    breadcrumb: strapiData?.breadcrumb || GALLERY_PAGE_DATA.banner.breadcrumb,
  };

  const sectionHeader = {
    label: strapiData?.sectionLabel || "MOMENTS & MEMORIES",
    heading: strapiData?.sectionHeading || "Life at Kids' Foundation",
    description:
      strapiData?.sectionDescription ||
      "A glimpse into the moments, experiences and achievements that make school life memorable.",
  };

  const categories =
    strapiData?.categories && strapiData.categories.length > 0
      ? strapiData.categories
      : GALLERY_PAGE_DATA.categories;

  const images =
    strapiData?.images && strapiData.images.length > 0
      ? strapiData.images.map((img, idx) => ({
          id: img.id || `gal-${idx}`,
          src:
            getStrapiMediaUrl(img.image) ||
            img.imageUrl ||
            GALLERY_PAGE_DATA.images[idx]?.src ||
            "/images/gallery-science-lab.jpg",
          alt:
            img.alt ||
            GALLERY_PAGE_DATA.images[idx]?.alt ||
            img.title ||
            "Gallery photo",
          category: img.category || GALLERY_PAGE_DATA.images[idx]?.category || "Campus",
          title: img.title || GALLERY_PAGE_DATA.images[idx]?.title || "Life at Kids' Foundation",
        }))
      : GALLERY_PAGE_DATA.images;

  return (
    <GalleryClient
      banner={banner}
      sectionHeader={sectionHeader}
      categories={categories}
      images={images}
    />
  );
}
