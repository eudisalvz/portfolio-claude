"use client";

import { useEffect, useRef, useState } from "react";
import MobileHeader from "./MobileHeader";

export default function ScrollHeader() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setHidden(false);
      } else if (y > lastY.current + 5) {
        setHidden(true);
      } else if (y < lastY.current - 5) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 300,
      background: "#0A0A0A",
      padding: "20px 20px 0",
      boxSizing: "border-box",
      transform: hidden ? "translateY(-110%)" : "translateY(0)",
      transition: "transform 0.3s ease",
    }}>
      <MobileHeader />
    </div>
  );
}
