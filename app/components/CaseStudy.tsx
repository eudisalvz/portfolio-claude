import Link from "next/link";
import Image from "next/image";
import Connect from "./Connect";
import Copyright from "./Copyright";
import type { SiteImage } from "../images";

interface CaseStudyProps {
  name: string;
  tags: string[];
  overview: string;
  problem: string;
  whatIDid: string;
  result: string;
  images: SiteImage[];
  aspectRatio?: string;
}

const Tag = ({ label }: { label: string }) => (
  <span style={{
    fontSize: "var(--fs-body)",
    color: "var(--color-text-secondary)",
    background: "var(--color-placeholder-bg)",
    borderRadius: "6px",
    padding: "0px 5px",
    whiteSpace: "nowrap",
  }}>
    {label}
  </span>
);

const Vessel = ({ image, ratio = "4/3" }: { image?: SiteImage; ratio?: string }) => (
  <div style={{
    width: "100%",
    aspectRatio: ratio,
    border: "1px solid var(--color-image-border)",
    borderRadius: "10px",
    background: "var(--color-image-bg)",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    boxSizing: "border-box",
  }}>
    {image ? (
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} unoptimized
        style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    ) : (
      <span style={{ color: "var(--color-placeholder-text)", fontSize: 11 }}>image</span>
    )}
  </div>
);

const getDesktopGrid = (count: number): string => {
  if (count === 1) return "1fr";
  if (count === 2) return "1fr 1fr";
  if (count === 3) return "1fr 1fr 1fr";
  if (count === 4) return "1fr 1fr";
  return "1fr 1fr";
};

export default function CaseStudy({ name, tags, overview, problem, whatIDid, result, images, aspectRatio = "4/3" }: CaseStudyProps) {
  return (
    <>
      <style>{`
        .cs-layout { background: var(--color-bg); overflow-x: hidden; }

        .cs-mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .cs-desktop { display: none; }

        @media (min-width: 1024px) {
          .cs-layout { min-height: 100vh; }
          .cs-mobile { display: none; }
          .cs-desktop {
            display: flex;
            flex-direction: column;
            gap: 50px;
            width: 100%;
            padding: 50px;
            box-sizing: border-box;
          }
          .cs-text-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 30px;
          }
        }
      `}</style>

      <main className="cs-layout">

        {/* DESKTOP */}
        <div className="cs-desktop">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--fs-body)", color: "var(--color-text-secondary)" }}>
            <Link href="/" style={{ color: "var(--color-text-secondary)" }}>Home</Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "var(--color-text-secondary)" }}>Projects</Link>
            <span>/</span>
            <span style={{ color: "var(--color-text)" }}>{name}</span>
          </div>

          {/* Name + tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500 }}>{name}</span>
            {tags.map(t => <Tag key={t} label={t} />)}
          </div>

          {/* 4-col text grid */}
          <div className="cs-text-grid">
            <div>
              <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Overview</span>
              <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{overview}</span>
            </div>
            <div>
              <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>The problem</span>
              <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{problem}</span>
            </div>
            <div>
              <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>What I did</span>
              <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{whatIDid}</span>
            </div>
            <div>
              <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Result</span>
              <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{result}</span>
            </div>
          </div>

          {/* Images — adaptive grid */}
          {images.length === 4 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <Vessel image={images[0]} ratio={aspectRatio} />
                <Vessel image={images[1]} ratio={aspectRatio} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <Vessel image={images[2]} ratio={aspectRatio} />
                <Vessel image={images[3]} ratio={aspectRatio} />
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: getDesktopGrid(images.length), gap: "20px" }}>
              {images.map((image, i) => <Vessel key={i} image={image} ratio={aspectRatio} />)}
            </div>
          )}

          {/* Connect + copyright (30px apart, like the other pages) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <Connect gap={10} />
            <Copyright />
          </div>

        </div>

        {/* MOBILE */}
        <div className="cs-mobile">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--fs-body)", color: "var(--color-text-secondary)", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "var(--color-text-secondary)" }}>Home</Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "var(--color-text-secondary)" }}>Projects</Link>
            <span>/</span>
            <span style={{ color: "var(--color-text)" }}>{name}</span>
          </div>

          {/* Name + tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500 }}>{name}</span>
            {tags.map(t => <Tag key={t} label={t} />)}
          </div>

          {/* Logo — always first on mobile */}
          {images[0] && <Vessel image={images[0]} ratio={aspectRatio} />}

          {/* All texts */}
          <div>
            <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Overview</span>
            <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{overview}</span>
          </div>
          <div>
            <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>The problem</span>
            <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{problem}</span>
          </div>
          <div>
            <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>What I did</span>
            <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{whatIDid}</span>
          </div>
          <div>
            <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Result</span>
            <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{result}</span>
          </div>

          {/* Rest of images */}
          {images.slice(1).map((image, i) => <Vessel key={i} image={image} ratio={aspectRatio} />)}

          {/* Connect */}
          <Connect gap={10} />
          <Copyright />

        </div>
      </main>
    </>
  );
}
