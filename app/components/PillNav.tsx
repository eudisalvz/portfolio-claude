"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../nav";

// Active: exact match, or a sub-route (case studies under /projects mark Projects).
const isActive = (pathname: string, href: string) =>
  pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

export default function PillNav() {
  const pathname = usePathname();
  return (
    <nav className="pill pill-nav" aria-label="Main">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}
          aria-current={isActive(pathname, item.href) ? "page" : undefined}
          style={{ color: isActive(pathname, item.href) ? "var(--color-text)" : "var(--color-text-secondary)" }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
