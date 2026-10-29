/**
 * Strapi v5 Type Definitions for Kids' Foundation
 */

export interface StrapiMediaFormat {
  url: string;
  name: string;
  width?: number;
  height?: number;
}

export interface StrapiMedia {
  id?: number;
  documentId?: string;
  name?: string;
  url: string;
  size?: number;
  ext?: string;
  mime?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

export interface PhoneEntry {
  id?: number;
  label?: string;
  number: string;
}

export interface SocialLink {
  id?: number;
  platform: "facebook" | "instagram" | "youtube" | "twitter" | "linkedin";
  url: string;
}

export interface LinkButton {
  id?: number;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface GlobalSettingData {
  id?: number;
  documentId?: string;
  schoolName: string;
  location: string;
  tagline: string;
  cbseAffiliationNo: string;
  estdYear: string;
  address: string;
  phones?: PhoneEntry[];
  landline?: string;
  email: string;
  topNoticeText?: string;
  topNoticeLink?: string;
  logo?: StrapiMedia;
  footerBg?: StrapiMedia;
  socialLinks?: SocialLink[];
  copyright: string;
}

export interface HeaderData {
  id?: number;
  documentId?: string;
  schoolName: string;
  location: string;
  topNoticeText?: string;
  topNoticeLink?: string;
  logo?: StrapiMedia;
  navigation?: LinkButton[];
  moreLinks?: LinkButton[];
  actionButtons?: LinkButton[];
}

export interface FooterData {
  id?: number;
  documentId?: string;
  tagline: string;
  cbseAffiliationNo: string;
  logo?: StrapiMedia;
  footerBg?: StrapiMedia;
  quickLinks?: LinkButton[];
  importantLinks?: LinkButton[];
  address: string;
  phones?: PhoneEntry[];
  landline?: string;
  email: string;
  socialLinks?: SocialLink[];
  copyright: string;
}

export interface HeroSlide {
  id?: number;
  media: StrapiMedia;
  alt: string;
  caption?: string;
}

export interface HeroSectionData {
  id?: number;
  badge: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  primaryCta: LinkButton;
  secondaryCta: LinkButton;
  scrollIndicator?: string;
  slides?: HeroSlide[];
}

export interface ExcellenceBannerData {
  id?: number;
  yearsEmblem: string;
  yearsLabel: string;
  subtitle: string;
  heading: string;
  description: string;
}

export interface AboutSectionData {
  id?: number;
  label: string;
  heading: string;
  paragraph1: string;
  paragraph2: string;
  cta: LinkButton;
  image?: StrapiMedia;
}

export interface FounderMessageData {
  id?: number;
  heading: string;
  paragraph1: string;
  paragraph2: string;
  cta: LinkButton;
  photo?: StrapiMedia;
}

export interface SectionHeaderData {
  id?: number;
  label: string;
  heading: string;
  description?: string;
  bottomLinkText?: string;
  bottomLinkHref?: string;
}

export interface AdmissionsCtaData {
  id?: number;
  label: string;
  heading: string;
  description: string;
  primaryCta: LinkButton;
  secondaryCta: LinkButton;
}

export interface HomePageData {
  id?: number;
  documentId?: string;
  hero?: HeroSectionData;
  excellenceBanner?: ExcellenceBannerData;
  about?: AboutSectionData;
  academicStagesHeader?: SectionHeaderData;
  founderMessage?: FounderMessageData;
  newsSectionHeader?: SectionHeaderData;
  gallerySectionHeader?: SectionHeaderData;
  admissionsCta?: AdmissionsCtaData;
}

export interface AcademicStageData {
  id?: number;
  documentId?: string;
  stageId: string;
  tabNumber: string;
  tabLabel: string;
  subLabel: string;
  heading: string;
  description: string;
  tags?: string[];
  cta: LinkButton;
  image?: StrapiMedia;
  sortOrder: number;
}

export interface NewsArticleData {
  id?: number;
  documentId?: string;
  title: string;
  slug: string;
  category: "events" | "news" | "circular" | "notice";
  publishedDate: string;
  excerpt: string;
  content?: string;
  coverImage?: StrapiMedia;
  externalOrDownloadUrl?: string;
  noticePdf?: StrapiMedia;
  isFeatured?: boolean;
}

export interface GalleryItemData {
  id?: number;
  documentId?: string;
  title: string;
  category: "Campus" | "Activities" | "Sports" | "Arts" | "Celebrations";
  image?: StrapiMedia;
  isFeaturedOnHome?: boolean;
  sortOrder?: number;
}

export interface TextItem {
  id?: number;
  keyId?: string;
  title: string;
  description?: string;
}

export interface AboutPageData {
  id?: number;
  documentId?: string;
  pageTitle?: string;
  breadcrumb?: string[];
  storyLabel?: string;
  storyHeading?: string;
  storyTopParagraphs?: string[];
  storyImage?: StrapiMedia;
  storyImageAlt?: string;
  storyBottomParagraphs?: string[];
  pillars?: TextItem[];
  founderTag?: string;
  founderHeading?: string;
  founderWelcome?: string;
  founderParagraphs?: string[];
  founderQuote?: string;
  founderClosing?: string;
  founderName?: string;
  founderRole?: string;
  founderInstitution?: string;
  founderImage?: StrapiMedia;
}

export interface LearningStageItem {
  id?: number;
  stageId: string;
  subLabel?: string;
  title: string;
  boldIntro?: string;
  description: string[];
  activities?: string[];
  bottomText?: string;
  image?: StrapiMedia;
  imageAlt?: string;
}

export interface LearningPageData {
  id?: number;
  documentId?: string;
  pageTitle?: string;
  breadcrumb?: string[];
  introHeading?: string;
  introLabel?: string;
  introText?: string;
  stages?: LearningStageItem[];
}

export interface GalleryCardItem {
  id?: number;
  title?: string;
  category?: string;
  image?: StrapiMedia;
  imageUrl?: string;
  alt?: string;
}

export interface CampusPageData {
  id?: number;
  documentId?: string;
  pageTitle?: string;
  breadcrumb?: string[];
  introHeading?: string;
  introTitle?: string;
  introDescription?: string;
  facilities?: string[];
  galleryImages?: GalleryCardItem[];
  videoTitle?: string;
  youtubeId?: string;
  videoDescription?: string;
}

export interface ActivityItemData {
  id?: number;
  name: string;
  description: string;
}

export interface SportsArtsPageData {
  id?: number;
  documentId?: string;
  pageTitle?: string;
  breadcrumb?: string[];
  introLabel?: string;
  introTitle?: string;
  introLead?: string;
  activities?: ActivityItemData[];
  facilitiesCallout?: string[];
  gallery?: GalleryCardItem[];
}

export interface GalleryPageImageItem {
  id?: number;
  title: string;
  category: string;
  image?: StrapiMedia;
  imageUrl?: string;
  alt?: string;
}

export interface GalleryPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  sectionLabel?: string;
  sectionHeading?: string;
  sectionDescription?: string;
  categories?: string[];
  images?: GalleryPageImageItem[];
}

export interface AdmissionFeeRow {
  id?: number;
  level: string;
  amount: string;
}

export interface AdmissionTuitionFeeRow {
  id?: number;
  level: string;
  description?: string;
  amount: string;
}

export interface AdmissionEnquiryData {
  id?: number;
  label?: string;
  heading?: string;
  description?: string;
  email?: string;
  phone?: string;
  downloadLabel?: string;
  downloadHref?: string;
  admissionFormFile?: StrapiMedia;
}

export interface AdmissionProceduresData {
  id?: number;
  label?: string;
  heading?: string;
  registrationTitle?: string;
  registrationDescription?: string;
  testsTitle?: string;
  testsDescription?: string;
}

export interface AdmissionFeeStructureData {
  id?: number;
  label?: string;
  heading?: string;
  tuitionFeesTitle?: string;
  tuitionFees?: AdmissionTuitionFeeRow[];
  admissionFeesTitle?: string;
  admissionFees?: AdmissionFeeRow[];
}

export interface AdmissionPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  enquiry?: AdmissionEnquiryData;
  procedures?: AdmissionProceduresData;
  feeStructure?: AdmissionFeeStructureData;
}

export interface EventItemData {
  id?: number;
  eventId?: string;
  title: string;
  date: string;
  month?: string;
  day?: string;
  year?: string;
  description: string;
  category: string;
  image?: StrapiMedia;
  imageUrl?: string;
  imageAlt?: string;
  time?: string;
  venue?: string;
  tag: "upcoming" | "past";
}

export interface EventsPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  sectionLabel?: string;
  sectionHeading?: string;
  filterOptions?: string[];
  events?: EventItemData[];
}

export interface NewsItemData {
  id?: number;
  newsId?: string;
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  hasDocument?: boolean;
  documentName?: string;
  documentSize?: string;
  documentType?: string;
  fullContent?: string[];
  noticeImage?: StrapiMedia;
  noticeImageUrl?: string;
  noticePdf?: StrapiMedia;
  isLatest?: boolean;
  daysToShowLatest?: number;
}

export interface NewsPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  sectionLabel?: string;
  sectionHeading?: string;
  categories?: string[];
  latestDaysThreshold?: number;
  articles?: NewsItemData[];
}

export interface PublicationCardData {
  id?: number;
  pubId?: string;
  title: string;
  category: string;
  edition?: string;
  publishedDate?: string;
  academicYear?: string;
  pages?: number;
  fileSize?: string;
  format?: string;
  language?: string;
  description?: string;
  highlights?: string[];
  coverImage?: StrapiMedia;
  coverImageUrl?: string;
  pdfFile?: StrapiMedia;
  downloadFileName?: string;
  editorOrAuthor?: string;
  featured?: boolean;
}

export interface PublicationsPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  bannerImage?: StrapiMedia;
  bannerImageUrl?: string;
  sectionHeading?: string;
  sectionDescription?: string;
  categories?: string[];
  publications?: PublicationCardData[];
}

export interface ClubItemData {
  id?: number;
  clubId: string;
  name: string;
  tagline?: string;
  category: string;
  gradeLevel?: string;
  meetingSchedule?: string;
  location?: string;
  mentor?: string;
  mentorRole?: string;
  membersCount?: number;
  description: string;
  badgeColor?: string;
  accentGradient?: string;
  image?: StrapiMedia;
  imageUrl?: string;
  keyActivities?: string[];
  learningOutcomes?: string[];
  recentHighlight?: string;
}

export interface ClubsPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  bannerImage?: StrapiMedia;
  bannerImageUrl?: string;
  overviewHeading?: string;
  overviewDescription?: string;
  categories?: string[];
  clubs?: ClubItemData[];
}

export interface ContactItemData {
  id?: number;
  icon: string;
  label: string;
  value?: string;
  values?: string[];
}

export interface ContactPageData {
  id?: number;
  documentId?: string;
  bannerTitle?: string;
  breadcrumb?: string[];
  bannerImage?: StrapiMedia;
  bannerImageUrl?: string;
  getInTouchLabel?: string;
  getInTouchHeading?: string;
  getInTouchDescription?: string;
  contactItems?: ContactItemData[];
  formHeading?: string;
  formDescription?: string;
  formSubmitLabel?: string;
  mapLabel?: string;
  mapHeading?: string;
  mapAddress?: string;
  mapEmbedUrl?: string;
  mapDirectUrl?: string;
  mapTitle?: string;
}



