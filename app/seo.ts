import type { Metadata } from "next";
import { images, type SiteImage } from "./images";

export const siteName = "Eudis Alvarez";
export const siteTitle = "Eudis Alvarez | UI/UX Designer";
export const siteDescription =
  "UI/UX designer with a legal background. I turn complex workflows into simple, intuitive web and mobile experiences.";

// Vercel exposes the production domain (without protocol) at build and run time.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export const pages = {
  portfolio: {
    path: "/portfolio",
    title: "Portfolio",
    description: "A selection of my visual work: mobile apps, web dashboards and interfaces for weather, construction and e-commerce products.",
  },
  projects: {
    path: "/projects",
    title: "Projects",
    description: "Case studies and client work, from SaaS dashboards and mobile apps to e-commerce, plus my own products Cardverse and Alamo Algorithmics.",
  },
} satisfies Record<string, PageSeo>;

interface CaseStudySeo extends PageSeo {
  name: string;
  ogImage: SiteImage;
}

export const caseStudies = {
  "torq-app": {
    path: "/projects/torq-app",
    name: "Torq app",
    title: "Torq app case study",
    description: "How I redesigned Torq's mobile app and built its web app from scratch: estimates, invoices and team management for US contractors.",
    ogImage: images.torqImg1,
  },
  "master-perfumes": {
    path: "/projects/master-perfumes",
    name: "Master Perfumes",
    title: "Master Perfumes case study",
    description: "Designing a premium e-commerce experience for a fragrance brand, from product discovery to a frictionless checkout.",
    ogImage: images.masterImg1,
  },
  "decision-point-weather": {
    path: "/projects/decision-point-weather",
    name: "Decision Point Weather",
    title: "Decision Point Weather case study",
    description: "A SaaS dashboard that helps outdoor businesses reschedule high-risk jobs before bad weather hits, turning forecast data into clear decisions.",
    ogImage: images.dpwImg2,
  },
  "depends-on-the-weather": {
    path: "/projects/depends-on-the-weather",
    name: "Depends on the Weather",
    title: "Depends on the Weather case study",
    description: "Redesigning an outdoor activity app that shows the best time of day for what you love, with scannable hourly forecasts and a faster planning flow.",
    ogImage: images.dowImg1,
  },
} satisfies Record<string, CaseStudySeo>;

export type CaseStudySlug = keyof typeof caseStudies;

// Page-level metadata. The Open Graph image comes from each segment's opengraph-image.tsx.
export function pageMetadata({ path, title, description }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      url: path,
      title: `${title} | ${siteName}`,
      description,
    },
  };
}
