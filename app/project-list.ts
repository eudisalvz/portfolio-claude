// Every project, newest first. External products (http) open in a new tab;
// case studies are internal routes. Shared by /projects and the Home About text.
export const projects = [
  { name: "Cardverse",              sub: "App · Q2 2026",              logo: "/cardverse-logo.png", href: "https://www.cardverse.io/" },
  { name: "Depends on the Weather", sub: "App · 2025",                 logo: "/dow-logo.png",       href: "/projects/depends-on-the-weather" },
  { name: "Master Perfumes",        sub: "Ecommerce · 2025",           logo: "/master-logo.png",    href: "/projects/master-perfumes" },
  { name: "Decision Point Weather", sub: "SaaS · 2025",                logo: "/dpw-logo.png",       href: "/projects/decision-point-weather" },
  { name: "Alamo Algorithmics",     sub: "Dev & Design Agency · 2024", logo: "/alamo-logo.png",     href: "https://www.alamoalgorithmics.com/" },
  { name: "Torq app",               sub: "App · 2024",                 logo: "/torq-logo.png",      href: "/projects/torq-app" },
] as const;

export type ProjectName = (typeof projects)[number]["name"];

export const isExternal = (href: string) => href.startsWith("http");
