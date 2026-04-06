"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",      href: "/",          desc: "Who I am and what I do." },
  { label: "Portfolio", href: "/portfolio",  desc: "A selection of my visual work." },
  { label: "Projects",  href: "/projects",   desc: "Case studies and client work." },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div style={{ position: "relative" }}>

      {/* Full-screen overlay — always in DOM, toggled with opacity/pointer-events */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "#0A0A0A",
        zIndex: 99,
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.2s ease",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Header row inside menu — same layout as outside */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Video is intentionally NOT here — we use a separate visible one */}
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#111", flexShrink: 0 }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>Eudis Alvarez</span>
                <span className="animate-pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block", flexShrink: 0 }} />
                <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "20px" }}>Open for work</span>
              </div>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "20px", display: "block" }}>UI / UX Designer · Lawyer</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0", flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}
              style={{ textDecoration: "none" }}>
              <span style={{
                color: pathname === item.href ? "#fff" : "#9E9E9E",
                fontSize: "var(--fs-body)",
                fontWeight: 500,
                lineHeight: "var(--lh-body)",
                display: "block",
                marginBottom: "4px",
              }}>
                {item.label}
              </span>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block" }}>
                {item.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Always-visible header — single video instance, never unmounts */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", position: "relative", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
            <video src="/hero.mp4" autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>Eudis Alvarez</span>
              <span className="animate-pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block", flexShrink: 0 }} />
              <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "20px" }}>Open for work</span>
            </div>
            <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "20px", display: "block" }}>UI / UX Designer · Lawyer</span>
          </div>
        </div>
        <button onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0", flexShrink: 0, zIndex: 101 }}>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
}
