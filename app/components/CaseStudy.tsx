import Link from "next/link";
import Image from "next/image";
import SocialRow from "./SocialRow";
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
    color: "#9E9E9E",
    background: "#141414",
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
    border: "1px solid #1B1B1B",
    borderRadius: "10px",
    background: "#000",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    boxSizing: "border-box",
  }}>
    {image ? (
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt}
        sizes="(min-width: 1024px) 45vw, 90vw"
        style={{ width: "100%", height: "100%", objectFit: "contain" }} />
    ) : (
      <span style={{ color: "#222", fontSize: 11 }}>image</span>
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
        .cs-layout { min-height: 100vh; background: #0A0A0A; overflow-x: hidden; }

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
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--fs-body)", color: "#9E9E9E" }}>
            <Link href="/" style={{ color: "#9E9E9E" }}>Home</Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "#9E9E9E" }}>Projects</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>{name}</span>
          </div>

          {/* Name + tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>{name}</span>
            {tags.map(t => <Tag key={t} label={t} />)}
          </div>

          {/* 4-col text grid */}
          <div className="cs-text-grid">
            <div>
              <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Overview</span>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{overview}</span>
            </div>
            <div>
              <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>The problem</span>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{problem}</span>
            </div>
            <div>
              <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>What I did</span>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{whatIDid}</span>
            </div>
            <div>
              <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Result</span>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{result}</span>
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

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
            <a href="mailto:eudis.vah@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              eudis.vah@gmail.com
            </a>
            <SocialRow />
          </div>

        </div>

        {/* MOBILE */}
        <div className="cs-mobile">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "var(--fs-body)", color: "#9E9E9E", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#9E9E9E" }}>Home</Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "#9E9E9E" }}>Projects</Link>
            <span>/</span>
            <span style={{ color: "#fff" }}>{name}</span>
          </div>

          {/* Name + tags */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>{name}</span>
            {tags.map(t => <Tag key={t} label={t} />)}
          </div>

          {/* Logo — always first on mobile */}
          {images[0] && <Vessel image={images[0]} ratio={aspectRatio} />}

          {/* All texts */}
          <div>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Overview</span>
            <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{overview}</span>
          </div>
          <div>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>The problem</span>
            <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{problem}</span>
          </div>
          <div>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>What I did</span>
            <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{whatIDid}</span>
          </div>
          <div>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "10px" }}>Result</span>
            <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{result}</span>
          </div>

          {/* Rest of images */}
          {images.slice(1).map((image, i) => <Vessel key={i} image={image} ratio={aspectRatio} />)}

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
            <a href="mailto:eudis.vah@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              eudis.vah@gmail.com
            </a>
            <SocialRow />
          </div>

        </div>
      </main>
    </>
  );
}
