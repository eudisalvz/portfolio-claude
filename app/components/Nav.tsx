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
          className={`text-[12px] leading-5 underline underline-offset-2 transition-opacity duration-150 hover:opacity-70 ${
            pathname === item.href ? "text-white" : "text-[#9E9E9E]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
