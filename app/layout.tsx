import type { Metadata } from "next";
import "./globals.css";
import MobileHeader from "./components/MobileHeader";

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
        {/* Mobile header lives here so video persists across page navigation */}
        <div className="mobile-layout-header" style={{ position: "relative" }}>
          <MobileHeader />
        </div>
        {children}
      </body>
    </html>
  );
}
