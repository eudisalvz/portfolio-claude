"use client";

import { usePathname } from "next/navigation";

// Footer row (copyright + theme toggle). On Home it matches the 348px column;
// elsewhere it follows the page's content margins (see .site-footer in globals.css).
export default function SiteFooter({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";
  return <footer className={isHome ? "site-footer site-footer--home" : "site-footer"}>{children}</footer>;
}
