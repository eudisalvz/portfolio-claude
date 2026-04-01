const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const projects = [
  { label: "Alamo Algorithmics", tag: "Client work",        href: "#" },
  { label: "eudisalvarez.com",   tag: "Personal portfolio", href: "https://eudisalvarez.com" },
];

export default function Crafting() {
  return (
    <div id="crafting" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>Crafting</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {projects.map((p) => (
          <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>
            <span>{p.label} — {p.tag}</span>
            <ArrowUpRight />
          </a>
        ))}
      </div>
    </div>
  );
}
