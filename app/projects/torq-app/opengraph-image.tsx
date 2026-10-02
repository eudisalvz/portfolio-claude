import { caseStudyOgImage } from "../../og";
import { caseStudies, siteName } from "../../seo";

const study = caseStudies["torq-app"];

export const alt = `${study.title} | ${siteName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return caseStudyOgImage({ name: study.name, image: study.ogImage });
}
