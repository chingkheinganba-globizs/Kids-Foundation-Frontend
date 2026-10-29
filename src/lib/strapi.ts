import {
  GlobalSettingData,
  HeaderData,
  FooterData,
  HomePageData,
  AcademicStageData,
  NewsArticleData,
  GalleryItemData,
  StrapiMedia,
  AboutPageData,
  LearningPageData,
  CampusPageData,
  SportsArtsPageData,
  GalleryPageData,
  AdmissionPageData,
  EventsPageData,
  NewsPageData,
  PublicationsPageData,
  ClubsPageData,
  ContactPageData,
} from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

/**
 * Returns full URL for a Strapi API path
 */
export function getStrapiURL(path: string = ""): string {
  return `${STRAPI_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Formats a Strapi media URL (prepends STRAPI_URL if it is a relative path)
 */
export function getStrapiMediaUrl(media?: any): string {
  if (!media) return "";
  if (typeof media === "string") {
    if (media.startsWith("http://") || media.startsWith("https://") || media.startsWith("//")) {
      return media;
    }
    return `${STRAPI_URL}${media.startsWith("/") ? media : `/${media}`}`;
  }

  // Handle arrays if multiple files returned
  const target = Array.isArray(media) ? media[0] : media;
  if (!target) return "";

  const url =
    target.url ||
    target.data?.attributes?.url ||
    target.data?.url ||
    target.attributes?.url ||
    "";

  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//")) {
    return url;
  }
  return `${STRAPI_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

/**
 * Generic fetcher for Strapi REST endpoints with ISR
 */
async function fetchStrapi<T>(endpoint: string, tags: string[] = []): Promise<T | null> {
  const url = getStrapiURL(`/api/${endpoint}`);

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.STRAPI_API_TOKEN
          ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
          : {}),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`[fetchStrapi] Non-OK response (${res.status} ${res.statusText}) for: ${url}`);
      return null;
    }

    const json = await res.json();
    if (!json?.data) return null;

    // Handle collection types (arrays)
    if (Array.isArray(json.data)) {
      return json.data.map((item: any) =>
        item.attributes ? { id: item.id, ...item.attributes } : item
      ) as T;
    }

    // Handle single types (objects)
    if (json.data.attributes) {
      return { id: json.data.id, ...json.data.attributes } as T;
    }

    return json.data as T;
  } catch (err) {
    // Strapi server unreachable in local dev or network failure: fail silently to local fallback
    console.warn(`[fetchStrapi] Network error for: ${url}`, err);
    return null;
  }
}

/**
 * Fetch Global Settings (Header, Footer, Branding, Contact Info)
 */
export async function getGlobalSettings(): Promise<GlobalSettingData | null> {
  return fetchStrapi<GlobalSettingData>("global-setting?populate=*", ["global-settings"]);
}

/**
 * Fetch Header Singleton Data (School Name, Logo, Nav Links, More Links, Action Buttons, Top Notice)
 */
export async function getHeaderData(): Promise<HeaderData | null> {
  return fetchStrapi<HeaderData>("header?populate=*", ["header"]);
}

/**
 * Fetch Footer Singleton Data (Tagline, CBSE, Logo, FooterBg, Quick Links, Important Links, Contacts, Socials)
 */
export async function getFooterData(): Promise<FooterData | null> {
  return fetchStrapi<FooterData>("footer?populate=*", ["footer"]);
}

/**
 * Fetch Home Page Singleton Data (Hero, Excellence Banner)
 */
export async function getHomePageData(): Promise<HomePageData | null> {
  const query = [
    "populate[hero][populate][slides][populate]=*",
    "populate[hero][populate][primaryCta]=*",
    "populate[hero][populate][secondaryCta]=*",
    "populate[excellenceBanner]=*",
  ].join("&");

  return fetchStrapi<HomePageData>(`home-page?${query}`, ["home-page"]);
}

/**
 * Fetch Academic Stages from Learning Page Singleton
 */
export async function getAcademicStages(): Promise<AcademicStageData[] | null> {
  const learningPage = await getLearningPageData();
  if (!learningPage?.stages) return null;
  return learningPage.stages.map((s, idx) => ({
    id: idx + 1,
    stageId: s.stageId,
    tabNumber: `0${idx + 1}.`,
    tabLabel: s.title.split("(")[0].trim(),
    subLabel: s.title,
    heading: s.title,
    description: Array.isArray(s.description) ? s.description.join(" ") : (s.description || s.boldIntro || ""),
    tags: s.activities || [],
    image: s.image,
    sortOrder: idx + 1,
    cta: {
      label: "Explore Stage →",
      href: `/learning#${s.stageId}`,
    },
  }));
}

/**
 * Fetch News Articles from News Page Singleton
 */
export async function getNewsArticles(): Promise<NewsArticleData[] | null> {
  const newsPage = await getNewsPageData();
  if (!newsPage?.articles) return null;
  return newsPage.articles.map((a, idx) => ({
    id: a.id || idx + 1,
    title: a.title,
    slug: a.newsId || `news-${a.id || idx}`,
    publishedDate: a.date,
    category: a.category === "events" ? "events" : "news",
    excerpt: a.subtitle || (a.fullContent ? a.fullContent[0] : ""),
    coverImage: a.noticeImage,
  }));
}

/**
 * Fetch Curated Gallery Items from Gallery Page Singleton
 */
export async function getGalleryItems(): Promise<GalleryItemData[] | null> {
  const galleryPage = await getGalleryPageData();
  if (!galleryPage?.images) return null;
  const sorted = [...galleryPage.images].sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
  return sorted.slice(0, 6).map((img, idx) => ({
    id: img.id || idx + 1,
    title: img.title,
    category: (img.category || "Campus") as any,
    image: img.image,
    sortOrder: idx + 1,
    isFeaturedOnHome: true,
  }));
}

/**
 * Fetch About Page Singleton Data (Story, Pillars, Founder's Message)
 */
export async function getAboutPageData(): Promise<AboutPageData | null> {
  return fetchStrapi<AboutPageData>("about-page?populate=*", ["about-page"]);
}

/**
 * Fetch Learning Page Singleton Data (Approach Intro, Stages & Activities)
 */
export async function getLearningPageData(): Promise<LearningPageData | null> {
  const query = "populate[stages][populate]=*";
  return fetchStrapi<LearningPageData>(`learning-page?${query}`, ["learning-page"]);
}

/**
 * Fetch Campus Page Singleton Data (Intro, Facilities, Gallery, Virtual Tour)
 */
export async function getCampusPageData(): Promise<CampusPageData | null> {
  const query = "populate[galleryImages][populate]=*";
  return fetchStrapi<CampusPageData>(`campus-page?${query}`, ["campus-page"]);
}

/**
 * Fetch Sports & Arts Page Singleton Data (Activities, Facilities Callout, Gallery)
 */
export async function getSportsArtsPageData(): Promise<SportsArtsPageData | null> {
  const query = "populate[activities]=true&populate[gallery][populate]=*";
  return fetchStrapi<SportsArtsPageData>(`sports-and-arts-page?${query}`, ["sports-and-arts-page"]);
}

/**
 * Fetch Gallery Page Singleton Data (Banner, Section Header, Categories, Photos)
 */
export async function getGalleryPageData(): Promise<GalleryPageData | null> {
  const query = "populate[images][populate]=*";
  return fetchStrapi<GalleryPageData>(`gallery-page?${query}`, ["gallery-page"]);
}

/**
 * Fetch Admission Page Singleton Data (Enquiry, Procedures, Fee Structure Tables)
 */
export async function getAdmissionPageData(): Promise<AdmissionPageData | null> {
  const query = "populate[enquiry]=true&populate[procedures]=true&populate[feeStructure][populate]=*";
  return fetchStrapi<AdmissionPageData>(`admission-page?${query}`, ["admission-page"]);
}

/**
 * Fetch Events Page Singleton Data (Banner, Filters, Event Cards)
 */
export async function getEventsPageData(): Promise<EventsPageData | null> {
  const query = "populate[events][populate]=*";
  return fetchStrapi<EventsPageData>(`events-page?${query}`, ["events-page"]);
}

/**
 * Fetch News and Updates Page Singleton Data (Banner, Categories, Notices)
 */
export async function getNewsPageData(): Promise<NewsPageData | null> {
  const query = "populate[articles][populate]=*";
  return fetchStrapi<NewsPageData>(`news-page?${query}`, ["news-page"]);
}

/**
 * Fetch Publications Page Singleton Data (Banner, Categories, Handbooks, Magazines)
 */
export async function getPublicationsPageData(): Promise<PublicationsPageData | null> {
  const query = "populate[publications][populate]=*";
  return fetchStrapi<PublicationsPageData>(`publications-page?${query}`, ["publications-page"]);
}

/**
  * Fetch Clubs & Activities Page Singleton Data (Banner, Categories, Clubs List)
  */
export async function getClubsPageData(): Promise<ClubsPageData | null> {
  const query = "populate[clubs][populate]=*";
  return fetchStrapi<ClubsPageData>(`clubs-page?${query}`, ["clubs-page"]);
}

/**
  * Fetch Contact Page Singleton Data (Banner, Contact Items, Form info, Map)
  */
export async function getContactPageData(): Promise<ContactPageData | null> {
  const query = "populate[contactItems]=true";
  return fetchStrapi<ContactPageData>(`contact-page?${query}`, ["contact-page"]);
}



