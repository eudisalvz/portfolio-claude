import type { Metadata } from "next";
import { pageMetadata, pages } from "../seo";
import Nav from "../components/Nav";
import Connect from "../components/Connect";
import Image from "next/image";
import Link from "next/link";

// Newest first. External products open in a new tab; case studies stay in the same tab.
const projects = [
  { name: "Cardverse",              sub: "App · Q2 2026",              logo: "/cardverse-logo.png", href: "https://www.cardverse.io/" },
  { name: "Depends on the Weather", sub: "App · 2025",                 logo: "/dow-logo.png",       href: "/projects/depends-on-the-weather" },
  { name: "Master Perfumes",        sub: "Ecommerce · 2025",           logo: "/master-logo.png",    href: "/projects/master-perfumes" },
  { name: "Decision Point Weather", sub: "SaaS · 2025",                logo: "/dpw-logo.png",       href: "/projects/decision-point-weather" },
  { name: "Alamo Algorithmics",     sub: "Dev & Design Agency · 2024", logo: "/alamo-logo.png",     href: "https://www.alamoalgorithmics.com/" },
  { name: "Torq app",               sub: "App · 2024",                 logo: "/torq-logo.png",      href: "/projects/torq-app" },
];

const ArrowUpRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--color-text)", flexShrink: 0 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--color-text)", flexShrink: 0 }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const rowStyle: React.CSSProperties = { textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" };

const ProjectRow = ({ name, sub, logo, href }: { name: string; sub: string; logo: string; href: string }) => {
  const external = href.startsWith("http");
  const content = (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
          <Image src={logo} alt={name} width={36} height={36} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>{name}</span>
          <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{sub}</span>
        </div>
      </div>
      {external ? <ArrowUpRight /> : <ArrowRight />}
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={rowStyle}>{content}</a>
  ) : (
    <Link href={href} style={rowStyle}>{content}</Link>
  );
};

export const metadata: Metadata = pageMetadata(pages.projects);

export default function Projects() {
  return (
    <>
      <style>{`
        .pr-layout { background: var(--color-bg); overflow-x: hidden; }
        .pr-desktop { display: none; }
        .pr-mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .pr-layout { min-height: 100vh; }
          .pr-mobile { display: none; }
          .pr-desktop {
            display: flex;
            width: 100%;
            height: 100vh;
            box-sizing: border-box;
          }
          .pr-left {
            flex-shrink: 0;
            width: 40%;
            margin: 50px 0 50px 50px;
            border-radius: 20px;
            background: var(--color-panel);
            overflow: hidden;
          }
          .pr-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 50px 50px 50px 50px;
            overflow: hidden;
          }
          .pr-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 20px;
          }
          .pr-content {
            display: flex;
            flex-direction: column;
            gap: 30px;
            max-width: 342px;
          }
        }
      `}</style>

      <main className="pr-layout">

        {/* DESKTOP */}
        <div className="pr-desktop">
          <div className="pr-left">
            <video src="/hero.mp4" autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <div className="pr-right">
            {/* Topbar */}
            <div className="pr-topbar">
              <Nav />
            </div>

            {/* Content */}
            <div className="pr-content">
              {/* Name + role */}
              <div>
                <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500, lineHeight: "20px", display: "block" }}>Eudis Alvarez</span>
                <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block" }}>UI / UX Designer · Lawyer</span>
              </div>

              {/* Projects */}
              <div>
                <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block", marginBottom: "10px" }}>Projects</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{projects.map(p => <ProjectRow key={p.name} {...p} />)}</div>
              </div>

              {/* Connect */}
              <Connect />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="pr-mobile">

          {/* Projects */}
          <div>
            <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Projects</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{projects.map(p => <ProjectRow key={p.name} {...p} />)}</div>
          </div>

          {/* Connect */}
          <Connect />

        </div>
      </main>
    </>
  );
}
