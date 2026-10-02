import type { Metadata } from "next";
import CaseStudy from "../../components/CaseStudy";
import { images } from "../../images";
import { caseStudies, pageMetadata } from "../../seo";

export const metadata: Metadata = pageMetadata(caseStudies["decision-point-weather"]);

export default function DecisionPointWeather() {
  return (
    <CaseStudy
      name="Decision Point Weather"
      tags={["SaaS", "2025"]}
      overview="Decision Point Weather is a web dashboard built for business owners who operate outdoors. It helps them make smarter scheduling decisions by categorizing their core operations against real-time and forecasted weather data."
      problem="Weather-related losses are invisible until they happen. Business owners had no structured way to anticipate how a bad weather day would impact specific jobs or revenue, leading to costly scheduling mistakes."
      whatIDid="Designed the full dashboard from scratch, including the core data visualization system, job categorization flows, and onboarding experience. The goal was to make complex weather and business data feel actionable at a glance."
      result="Businesses using the platform can now proactively reschedule high-risk operations before weather impacts them, directly protecting revenue that would otherwise be lost."
      images={[images.dpwLogo, images.dpwImg1, images.dpwImg2, images.dpwImg3, images.dpwImg4]}
    />
  );
}
