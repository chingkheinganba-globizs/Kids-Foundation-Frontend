import React from "react";
import { Metadata } from "next";
import { getNewsPageData } from "@/lib/strapi";
import { NEWS_UPDATES_DATA, NewsUpdateItem } from "@/data/newsUpdatesData";
import { NewsClient } from "@/components/news/NewsClient";
import { formatAndSortNewsArticles } from "@/lib/newsHelper";

export const metadata: Metadata = {
  title: "News & Updates | Kids' Foundation School",
  description:
    "Stay updated with verified circulars, board examination schedules, admission announcements, and student accolades from Kids' Foundation School.",
};

export default async function NewsPage() {
  const strapiData = await getNewsPageData();

  const thresholdDays = strapiData?.latestDaysThreshold || 14;

  const articles: NewsUpdateItem[] =
    strapiData?.articles && strapiData.articles.length > 0
      ? formatAndSortNewsArticles(strapiData.articles, thresholdDays)
      : [...NEWS_UPDATES_DATA].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <NewsClient
      bannerTitle={strapiData?.bannerTitle || "News & Updates"}
      breadcrumb={strapiData?.breadcrumb || ["News & Events", "News & Updates"]}
      sectionLabel={strapiData?.sectionLabel || "Official Announcements & Institutional Circulars"}
      sectionHeading={strapiData?.sectionHeading || "School Notices, Academic Bulletins & News"}
      categories={strapiData?.categories && strapiData.categories.length > 0 ? strapiData.categories : undefined}
      articles={articles}
    />
  );
}