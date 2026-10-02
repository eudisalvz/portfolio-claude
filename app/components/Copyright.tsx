import CurrentYear from "./CurrentYear";

export default function Copyright({ style }: { style?: React.CSSProperties }) {
  return (
    <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", ...style }}>
      © <CurrentYear fallback={new Date().getFullYear()} /> Eudis Alvarez | All rights reserved
    </p>
  );
}
