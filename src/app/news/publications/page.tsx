import React from "react";
import { Metadata } from "next";
import { getPublicationsPageData, getStrapiMediaUrl } from "@/lib/strapi";
import { formatDisplayDate } from "@/lib/newsHelper";
import { PUBLICATIONS_DATA, Publication } from "@/data/publicationsData";
import { PublicationsClient } from "@/components/publications/PublicationsClient";

export const metadata: Metadata = {
  title: "Publications | Kids' Foundation School",
  description:
    "Official publications, annual magazines, student anthologies, curriculum blueprints, and academic handbooks from Kids' Foundation School, Imphal.",
};


export default async function PublicationsPage() {
  const strapiData = await getPublicationsPageData();

  const publications: Publication[] =
    strapiData?.publications && strapiData.publications.length > 0
      ? strapiData.publications.map((pub, idx) => ({
          id: pub.pubId || `pub-${pub.id || idx}`,
          title: pub.title,
          category: (pub.category || "Magazine & Newsletter") as Publication["category"],
          edition: pub.edition || "",
          publishedDate: formatDisplayDate(pub.publishedDate) || pub.publishedDate || "",
          academicYear: pub.academicYear || "",
          pages: pub.pages || 0,
          fileSize: pub.fileSize || "1 MB",
          format: "PDF",
          language: pub.language || "English",
          description: pub.description || "",
          highlights: pub.highlights || [],
          coverImage: pub.coverImageUrl || getStrapiMediaUrl(pub.coverImage) || "/images/news-cultural-meet.jpg",
          pdfUrl: getStrapiMediaUrl(pub.pdfFile) || undefined,
          downloadFileName: pub.downloadFileName || `${pub.title.replace(/\s+/g, "_")}.pdf`,
          editorOrAuthor: pub.editorOrAuthor || "",
          featured: pub.featured ?? false,
        }))
      : PUBLICATIONS_DATA;

  return (
    <PublicationsClient
      bannerTitle={strapiData?.bannerTitle || "Publications"}
      breadcrumb={strapiData?.breadcrumb || ["News & Events", "Publications"]}
      bannerImage={
        strapiData?.bannerImageUrl ||
        getStrapiMediaUrl(strapiData?.bannerImage) ||
        "/images/pages_hero_background_image/news_hero.jpg"
      }
      sectionHeading={strapiData?.sectionHeading}
      sectionDescription={strapiData?.sectionDescription}
      categories={strapiData?.categories && strapiData.categories.length > 0 ? strapiData.categories : undefined}
      publications={publications}
    />
  );
}
