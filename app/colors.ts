// Literal palette for places that can't read CSS variables (next/og images, theme-color meta).
// Keep in sync with the --color-* variables in app/globals.css.
export const colors = {
  bg: "#FCFCFC",
  text: "#0A0A0A",
  textSecondary: "#6B6B6B",
  imageBg: "#FAFAFA",
  imageBorder: "#E5E5E5",
} as const;
