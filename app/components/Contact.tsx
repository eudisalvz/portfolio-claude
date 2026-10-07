// Contact block (same on every page): "Let's connect" + handle on the left, Linkedin and X on the right.
const links = [
  {
    label: "Linkedin",
    href: "https://linkedin.com/in/eudisalvz",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 2.5C2 1.67 2.67 1 3.5 1C4.33 1 5 1.67 5 2.5C5 3.33 4.33 4 3.5 4C2.67 4 2 3.33 2 2.5ZM2.25 5.5H4.75V14H2.25V5.5ZM6.5 5.5H8.9V6.6C9.35 5.9 10.2 5.25 11.4 5.25C13.3 5.25 14 6.6 14 8.5V14H11.5V9C11.5 8.1 11.2 7.4 10.3 7.4C9.4 7.4 9 8 9 9V14H6.5V5.5Z" fill="currentColor" /></svg>,
  },
  {
    label: "X",
    href: "https://x.com/eudisalvz",
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 2.5L6.8 8.6L2 13.5H3.2L7.35 9.32L10.72 13.5H14L8.95 7.04L13.45 2.5H12.25L8.4 6.32L5.28 2.5H2ZM3.84 3.42H4.84L12.16 12.58H11.16L3.84 3.42Z" fill="currentColor" /></svg>,
  },
];

export default function Contact({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="contact" style={style}>
      <p>Let&apos;s connect</p>
      <div className="contact-row">
        <span>Eudis Alvarez (@eudisalvz)</span>
        <div className="contact-links">
          {links.map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
