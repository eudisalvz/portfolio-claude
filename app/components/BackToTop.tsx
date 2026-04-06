"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "#1a1a1a",
        border: "none",
        borderRadius: "100px",
        padding: "12px 18px",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        zIndex: 50,
      }}
    >
      <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "20px" }}>
        Back to top
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
