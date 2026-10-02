import SocialRow from "./SocialRow";

interface ConnectProps {
  gap?: number;
  lineHeight?: string;
  style?: React.CSSProperties;
}

export default function Connect({ gap = 8, lineHeight, style }: ConnectProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: `${gap}px`, ...style }}>
      <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", lineHeight }}>Connect</span>
      <a href="mailto:eudis.vah@gmail.com" style={{ color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight, textDecoration: "underline", textUnderlineOffset: "2px" }}>
        eudis.vah@gmail.com
      </a>
      <SocialRow />
    </div>
  );
}
