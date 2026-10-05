import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MobileHeader from "./components/MobileHeader";
import Copyright from "./components/Copyright";
import SiteFooter from "./components/SiteFooter";
import ThemeToggle from "./components/ThemeToggle";
import { siteDescription, siteName, siteTitle, siteUrl } from "./seo";
import { themeScript } from "./theme";

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
    // data-theme is set by the inline script before paint, so React must accept the DOM value.
    <html lang="en" className={GeistSans.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {/* Mobile header lives in the layout so it persists across page navigation (hidden on Home) */}
        <MobileHeader />
        {children}
        <SiteFooter>
          <Copyright />
          <ThemeToggle />
        </SiteFooter>
      </body>
    </html>
  );
}
