"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../nav";

export default function PillNav() {
  const pathname = usePathname();
  return (
    <nav className="pill pill-nav" aria-label="Main">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
          style={{ color: pathname === item.href ? "var(--color-text)" : "var(--color-text-secondary)" }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
