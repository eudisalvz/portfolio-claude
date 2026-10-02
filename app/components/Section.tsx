interface SectionProps {
  label: string;
  id?: string;
  children: React.ReactNode;
}

export default function Section({ label, id, children }: SectionProps) {
  return (
    <div id={id} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}>{label}</span>
      <div style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{children}</div>
    </div>
  );
}
