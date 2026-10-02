"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",      href: "/",          desc: "Who I am and what I do." },
  { label: "Portfolio", href: "/portfolio",  desc: "A selection of my visual work." },
  { label: "Projects",  href: "/projects",   desc: "Case studies and client work." },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the menu on any route change (including browser back/forward)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      {/* Header row — always on top */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",
        zIndex: 300,
        background: "var(--color-bg)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
            <Image src="/pfp.jpg" alt="Eudis Alvarez" width={36} height={36} preload={pathname === "/"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>Eudis Alvarez</span>
            </div>
            <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "20px", display: "block" }}>UI / UX Designer · Lawyer</span>
          </div>
        </div>
        <button onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0", flexShrink: 0 }}>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" style={{ stroke: "var(--color-text)" }}>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" style={{ stroke: "var(--color-text)" }}>
              <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Dark overlay behind menu */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "var(--color-overlay)",
        zIndex: 199,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.15s ease",
      }} onClick={() => setOpen(false)} />

      {/* Menu panel — absolute inside layout, no fixed, no scroll lock */}
      <div style={{
        position: "absolute",
        top: 8,
        left: 8,
        right: 8,
        background: "var(--color-bg)",
        zIndex: 200,
        padding: "20px",
        paddingTop: "94px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.15s ease",
      }}>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} onClick={() => setOpen(false)}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <span style={{
                color: pathname === item.href ? "var(--color-text)" : "var(--color-text-secondary)",
                fontSize: "var(--fs-body)",
                fontWeight: 500,
                lineHeight: "var(--lh-body)",
                display: "block",
                marginBottom: "4px",
              }}>
                {item.label}
              </span>
              <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block" }}>
                {item.desc}
              </span>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--color-text)", flexShrink: 0 }}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ))}
      </div>
    </>
  );
}
