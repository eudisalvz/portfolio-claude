import type { Metadata } from "next";
import "./globals.css";
import ScrollHeader from "./components/ScrollHeader";

export const metadata: Metadata = {
  title: "Eudis Alvarez — Designer",
  description: "UI/UX Designer · Lawyer. Open for work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Fixed mobile header — hidden on desktop via CSS */}
        <div className="mobile-layout-header">
          <ScrollHeader />
        </div>
        {/* Spacer so content doesn't go under fixed header on mobile */}
        <div className="mobile-header-spacer" />
        {children}
      </body>
    </html>
  );
}
