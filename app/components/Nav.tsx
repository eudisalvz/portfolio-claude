"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "Gallery",  href: "/portfolio" },
  { label: "Projects", href: "/projects" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      {navItems.map((item) => (
        <Link key={item.label} href={item.href}
          style={{
            color: pathname === item.href ? "#FFFFFF" : "#9E9E9E",
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
