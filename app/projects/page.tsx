import type { Metadata } from "next";
import { pageMetadata, pages } from "../seo";
import Contact from "../components/Contact";
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
          <span style={{ color: "var(--color-text)", fontSize: "var(--fs-title)", fontWeight: "var(--fw-title)", lineHeight: "var(--lh-title)" }}>{name}</span>
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
    <main className="column-page">
      {/* Same centered 348px column as Home (.column in globals.css) */}
      <div className="column" style={{ gap: 30 }}>
        {/* Projects */}
        <div>
          <span style={{ color: "var(--color-text)", fontSize: "var(--fs-title)", fontWeight: "var(--fw-title)", lineHeight: "var(--lh-title)", display: "block", marginBottom: "10px" }}>Projects</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>{projects.map(p => <ProjectRow key={p.name} {...p} />)}</div>
        </div>

        {/* Contact */}
        <Contact />
      </div>
    </main>
  );
}
