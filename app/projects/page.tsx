import type { Metadata } from "next";
import { pageMetadata, pages } from "../seo";
import Nav from "../components/Nav";
import Connect from "../components/Connect";
import Image from "next/image";
import Link from "next/link";
import { isExternal, projects } from "../project-list";

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
  const external = isExternal(href);
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
          padding: 20px 28px 28px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .pr-layout { min-height: calc(100vh - var(--footer-h)); }
          .pr-mobile { display: none; }
          .pr-desktop {
            display: flex;
            width: 100%;
            height: calc(100vh - var(--footer-h));
            box-sizing: border-box;
          }
          .pr-left {
            flex-shrink: 0;
            width: calc((100% - 16px) * 0.4);
            margin: 58px 0 42px 58px;
            border-radius: 20px;
            background: var(--color-panel);
            overflow: hidden;
          }
          .pr-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 58px 58px 42px 50px;
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
