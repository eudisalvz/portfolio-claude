const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const projects = [
  { label: "Cardverse",          sub: "App · Q2 2026", logo: "/cardverse-logo.png", href: "https://www.cardverse.io/" },
  { label: "Alamo Algorithmics", sub: "Dev-Des Agency · 2024", logo: "/alamo-logo.png", href: "https://www.alamoalgorithmics.com/" },
];

export default function Crafting() {
  return (
    <div id="crafting" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>Crafting</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {projects.map((p) => (
          <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
                <img src={p.logo} alt={p.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>{p.label}</span>
                <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{p.sub}</span>
              </div>
            </div>
            <ArrowUpRight />
          </a>
        ))}
      </div>
    </div>
  );
}
