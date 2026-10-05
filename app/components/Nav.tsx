"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../nav";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      {navItems.map((item) => (
        <Link key={item.label} href={item.href}
          style={{
            color: pathname === item.href ? "var(--color-text)" : "var(--color-text-secondary)",
            fontSize: "var(--fs-body)",
            lineHeight: "var(--lh-body)",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
