import CaseStudy from "../../components/CaseStudy";

export default function TorqApp() {
  return (
    <CaseStudy
      name="Torq app"
      tags={["App", "2024"]}
      overview="Torq is a mobile and web platform built for contractors in the United States. It centralizes estimates, invoices, team management, and a map-based network of suppliers with exclusive discounts — all in one place."
      problem="Contractors were juggling multiple disconnected tools to run their business. The existing mobile app lacked the depth and polish needed to compete in a market where trust and professionalism are everything."
      whatIDid="Redesigned the mobile app end to end and built the web app from scratch. Focused on simplifying complex workflows like estimate generation and team coordination, while maintaining the flexibility contractors need in the field."
      result="Over the course of my time on the project, the team worked toward bringing the full product vision to market. The experience shaped a robust design system that served both platforms throughout development."
      images={["/img2.png", "/img6.png", "/img9.png", "/img2.png"]}
    />
  );
}
