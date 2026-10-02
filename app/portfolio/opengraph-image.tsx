import { textOgImage } from "../og";
import { pages, siteName } from "../seo";

const page = pages.portfolio;

export const alt = `${page.title} | ${siteName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return textOgImage(page);
}
