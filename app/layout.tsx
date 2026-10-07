import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import PillNav from "./components/PillNav";
import Copyright from "./components/Copyright";
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
        {/* Pill menu on every page, centered at the top */}
        <header className="site-header">
          <PillNav />
        </header>
        {children}
        <footer className="site-footer">
          <Copyright />
          {/* Right side of the footer row (bottom-right corner on desktop) */}
          <div className="footer-toggle">
            <ThemeToggle />
          </div>
        </footer>
      </body>
    </html>
  );
}
