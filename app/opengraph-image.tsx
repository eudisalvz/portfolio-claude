import { textOgImage } from "./og";
import { siteDescription, siteTitle } from "./seo";

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return textOgImage({ title: "UI/UX Designer", description: siteDescription });
}
