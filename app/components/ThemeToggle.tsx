"use client";

import { useSyncExternalStore } from "react";
import { applyTheme, THEME_STORAGE_KEY, type Theme } from "../theme";

// Current theme, read from <html data-theme> (set by the inline script before paint).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = (): Theme => (document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

// Lucide icons (ISC license): sun-medium and moon.
const SunMedium = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v1" /><path d="M12 20v1" /><path d="M3 12h1" /><path d="M20 12h1" />
    <path d="m18.364 5.636-.707.707" /><path d="m6.343 17.657-.707.707" />
    <path d="m5.636 5.636.707.707" /><path d="m17.657 17.657.707.707" />
  </svg>
);
const Moon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);

// Indicator position and icon colors come from CSS ([data-theme] in globals.css),
// so the toggle is correct on first paint, before React hydrates.
export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${next} theme`}
      onClick={() => {
        applyTheme(next);
        try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch {}
      }}
    >
      <span className="theme-toggle-indicator" aria-hidden="true" />
      <span className="theme-toggle-icon theme-toggle-icon--light"><SunMedium /></span>
      <span className="theme-toggle-icon theme-toggle-icon--dark"><Moon /></span>
    </button>
  );
}
