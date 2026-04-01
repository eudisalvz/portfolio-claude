export default function TopBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span className="animate-pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "inline-block", flexShrink: 0 }} />
        <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>Open for work</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
        <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>1.2k</span>
      </div>
    </div>
  );
}
