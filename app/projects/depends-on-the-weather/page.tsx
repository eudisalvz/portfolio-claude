import CaseStudy from "../../components/CaseStudy";

export default function DependsOnTheWeather() {
  return (
    <CaseStudy
      name="Depends on the Weather"
      slug="depends-on-the-weather"
      tags={["App", "2025"]}
      overview="Depends on the Weather is an outdoor activity app that tells you the best time of day to do what you love based on real-time weather data."
      problem="The original design covered the basics but lacked depth. Weather data was presented as plain numbers with no visual hierarchy, and the activity planning flow required too many steps to get to a useful answer."
      whatIDid="Redesigned the full app experience from the ground up. Rebuilt the information architecture to surface the most relevant data upfront, introduced visual statistics that make hourly forecasts scannable at a glance, and streamlined the activity selection flow to reduce friction."
      result="A redesign proposal ready for development, transforming a functional but basic utility into an experience that feels as effortless as the activities it supports."
      images={["/img1.png", "/img5.png", "/img1.png", "/img5.png"]}
    />
  );
}
