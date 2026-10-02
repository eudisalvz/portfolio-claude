import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MobileHeader from "./components/MobileHeader";
import Copyright from "./components/Copyright";
import { siteDescription, siteName, siteTitle, siteUrl } from "./seo";
import { colors } from "./colors";

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

export const viewport: Viewport = {
  themeColor: colors.bg,
  colorScheme: "light",
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
        <footer className="site-footer">
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
