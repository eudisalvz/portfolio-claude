import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MobileHeader from "./components/MobileHeader";
import { siteDescription, siteName, siteTitle, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    url: "/",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
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
