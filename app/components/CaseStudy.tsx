import Link from "next/link";
import SocialRow from "./SocialRow";

interface CaseStudyProps {
  name: string;
  tags: string[];
  overview: string;
  problem: string;
  whatIDid: string;
  result: string;
  images: string[];
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

const Vessel = ({ src, ratio = "4/3" }: { src?: string; ratio?: string }) => (
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
    {src ? (
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
                <Vessel src={images[0]} ratio={aspectRatio} />
                <Vessel src={images[1]} ratio={aspectRatio} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <Vessel src={images[2]} ratio={aspectRatio} />
                <Vessel src={images[3]} ratio={aspectRatio} />
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: getDesktopGrid(images.length), gap: "20px" }}>
              {images.map((src, i) => <Vessel key={i} src={src} ratio={aspectRatio} />)}
            </div>
          )}

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
            <a href="mailto:eudisalvz@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              eudisalvz@gmail.com
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
          {images[0] && <Vessel src={images[0]} ratio={aspectRatio} />}

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
          {images.slice(1).map((src, i) => <Vessel key={i} src={src} ratio={aspectRatio} />)}

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
            <a href="mailto:eudisalvz@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              eudisalvz@gmail.com
            </a>
            <SocialRow />
          </div>

        </div>
      </main>
    </>
  );
}
