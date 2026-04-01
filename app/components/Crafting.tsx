const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
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
    <div id="crafting" className="flex flex-col gap-2.5">
      <span className="text-white text-[12px] leading-5">Crafting</span>
      <div className="flex flex-col gap-2.5">
        {projects.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9E9E9E", textDecoration: "none" }}
            className="flex items-center justify-between h-5 hover:opacity-70 transition-opacity duration-150"
          >
            <span className="text-[12px] leading-5">
              {p.label} — {p.tag}
            </span>
            <ArrowUpRight />
          </a>
        ))}
      </div>
    </div>
  );
}
