const socials = [
  {
    name: "X", count: "124", href: "https://x.com/eudisalvz",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2.5L6.8 8.6L2 13.5H3.2L7.35 9.32L10.72 13.5H14L8.95 7.04L13.45 2.5H12.25L8.4 6.32L5.28 2.5H2ZM3.84 3.42H4.84L12.16 12.58H11.16L3.84 3.42Z" fill="#9E9E9E"/></svg>,
  },
  {
    name: "TikTok", count: "1015", href: "https://tiktok.com/@eudisalvz",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.5 1C11.5 3.5 13 5 14.5 5V7C13.4 7 12.4 6.6 11.5 6V10.5C11.5 13 9.5 15 7 15C4.5 15 2.5 13 2.5 10.5C2.5 8 4.5 6 7 6V8C5.6 8 4.5 9.1 4.5 10.5C4.5 11.9 5.6 13 7 13C8.4 13 9.5 11.9 9.5 10.5V1H11.5Z" fill="#9E9E9E"/></svg>,
  },
  {
    name: "LinkedIn", count: "19", href: "https://linkedin.com/in/eudisalvz",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2.5C2 1.67 2.67 1 3.5 1C4.33 1 5 1.67 5 2.5C5 3.33 4.33 4 3.5 4C2.67 4 2 3.33 2 2.5ZM2.25 5.5H4.75V14H2.25V5.5ZM6.5 5.5H8.9V6.6C9.35 5.9 10.2 5.25 11.4 5.25C13.3 5.25 14 6.6 14 8.5V14H11.5V9C11.5 8.1 11.2 7.4 10.3 7.4C9.4 7.4 9 8 9 9V14H6.5V5.5Z" fill="#9E9E9E"/></svg>,
  },
  {
    name: "Instagram", count: "828", href: "https://instagram.com/eudisalvz",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="#9E9E9E" strokeWidth="1.2"/><circle cx="8" cy="8" r="3" stroke="#9E9E9E" strokeWidth="1.2"/><circle cx="11.5" cy="4.5" r="0.75" fill="#9E9E9E"/></svg>,
  },
];

export default function SocialRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {socials.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {s.icon}
          <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>{s.count}</span>
        </a>
      ))}
    </div>
  );
}
