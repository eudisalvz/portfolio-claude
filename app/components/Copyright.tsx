import CurrentYear from "./CurrentYear";

export default function Copyright() {
  return (
    <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>
      © <CurrentYear fallback={new Date().getFullYear()} /> Eudis Alvarez | All rights reserved
    </p>
  );
}
