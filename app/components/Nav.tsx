"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",      href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Projects",  href: "/projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-[30px]">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          style={{ color: pathname === item.href ? "#FFFFFF" : "#9E9E9E" }}
          className="text-[12px] leading-5 underline underline-offset-2 transition-opacity duration-150 hover:opacity-70 no-underline"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
