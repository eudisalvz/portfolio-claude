import type { MetadataRoute } from "next";
import { caseStudies, pages, siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...Object.values(pages).map((p) => p.path), ...Object.values(caseStudies).map((c) => c.path)];
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
