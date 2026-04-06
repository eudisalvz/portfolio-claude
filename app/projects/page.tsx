import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import SocialRow from "../components/SocialRow";

const myProjects = [
  { name: "Cardverse",          tags: ["App"],          year: "Q2 2026" },
  { name: "Alamo Algorithmics", tags: ["Dev-Des Agency"], year: "2024" },
];

const clientProjects = [
  { name: "Depends On The Weather", tags: ["App"],        year: "2025" },
  { name: "Master Perfumes",        tags: ["Ecommerce"],  year: "2025" },
  { name: "Decision Point Weather", tags: ["SaaS"],       year: "2025" },
  { name: "Torq app",               tags: ["App"],        year: "2024" },
  { name: "Mighty shield insurance",tags: ["Web page"],   year: "2024" },
];

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Tag = ({ label }: { label: string }) => (
  <span style={{
    fontSize: "var(--fs-body)",
    lineHeight: "var(--lh-body)",
    color: "#9E9E9E",
    background: "#141414",
    borderRadius: "6px",
    padding: "0px 5px",
    whiteSpace: "nowrap",
  }}>
    {label}
  </span>
);

const ProjectRow = ({ name, tags, year }: { name: string; tags: string[]; year: string }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "10px 0",
    cursor: "pointer",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", flex: 1 }}>
      <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", whiteSpace: "nowrap" }}>{name}</span>
      {tags.map(t => <Tag key={t} label={t} />)}
      <Tag label={year} />
    </div>
    <ChevronRight />
  </div>
);

export default function Projects() {
  return (
    <>
      <style>{`
        .pr-layout { min-height: 100vh; background: #0A0A0A; overflow-x: hidden; }
        .pr-desktop { display: none; }
        .pr-mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          padding: 50px 20px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
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
            background: #1a1a1a;
            overflow: hidden;
          }
          .pr-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 50px 50px 50px 50px;
            overflow-y: auto;
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
            max-width: 420px;
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
              <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="animate-pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                  <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Open for work</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)" }}>1.2k</span>
                </div>
              </div>
              <Nav />
            </div>

            {/* Content */}
            <div className="pr-content">
              {/* Name + role */}
              <div>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px", display: "block" }}>Eudis Alvarez</span>
                <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block" }}>UI / UX Designer · Lawyer</span>
              </div>

              {/* My projects */}
              <div>
                <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block", marginBottom: "4px" }}>My projects</span>
                {myProjects.map(p => <ProjectRow key={p.name} {...p} />)}
              </div>

              {/* Projects for clients */}
              <div>
                <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block", marginBottom: "4px" }}>Projects for clients</span>
                {clientProjects.map(p => <ProjectRow key={p.name} {...p} />)}
              </div>

              {/* Connect */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
                <a href="mailto:eudis.vah@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  eudis.vah@gmail.com
                </a>
                <SocialRow />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="pr-mobile">
          <TopBar />

          {/* Avatar + name + role */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1a1a", border: "1px solid #222", overflow: "hidden" }}>
              <video src="/hero.mp4" autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>Eudis Alvarez</span>
              <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>UI / UX Designer · Lawyer</span>
            </div>
          </div>

          <Nav />

          {/* My projects */}
          <div>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "4px" }}>My projects</span>
            {myProjects.map(p => <ProjectRow key={p.name} {...p} />)}
          </div>

          {/* Projects for clients */}
          <div>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", display: "block", marginBottom: "4px" }}>Projects for clients</span>
            {clientProjects.map(p => <ProjectRow key={p.name} {...p} />)}
          </div>

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
