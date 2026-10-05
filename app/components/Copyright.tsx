import CurrentYear from "./CurrentYear";

export default function Copyright() {
  return (
    <p style={{ margin: 0, color: "var(--color-text-secondary)", opacity: 0.5, fontSize: 10, lineHeight: "20px" }}>
      © <CurrentYear fallback={new Date().getFullYear()} /> Eudis Alvarez | All rights reserved
    </p>
  );
}
