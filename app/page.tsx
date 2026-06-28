import Nav from "./components/Nav";
import Section from "./components/Section";
import Crafting from "./components/Crafting";
import SocialRow from "./components/SocialRow";

export default function Home() {
  return (
    <>
      <style>{`
        .layout { min-height: 100vh; background: #0A0A0A; }
        .desktop { display: none; }
        .mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .mobile { display: none; }
          .desktop { display: flex; width: 100%; height: 100vh; }
          .desktop-photo {
            flex-shrink: 0;
            width: 40%;
            margin: 50px 0 50px 50px;
            border-radius: 20px;
            overflow: hidden;
          }
          .desktop-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 50px;
            overflow: hidden;
          }
          .desktop-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 20px;
          }
          .desktop-content {
            display: flex;
            flex-direction: column;
            gap: 30px;
            max-width: 342px;
          }
        }
      `}</style>

      <main className="layout">

        {/* DESKTOP */}
        <div className="desktop">
          <div className="desktop-photo">
            <video src="/hero.mp4" autoPlay loop muted playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="desktop-right">
            <div className="desktop-topbar">
              <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                </div>
              <Nav />
            </div>
            <div className="desktop-content">
              <div>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px", display: "block" }}>Eudis Alvarez</span>
                <span style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", display: "block" }}>UI / UX Designer · Lawyer</span>
              </div>
              <Section label="About" id="about">
                UI/UX Designer with a legal background. I turn complex workflows into simple, intuitive experiences.
              </Section>
              <Crafting />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
                <a href="mailto:eudis.vah@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  eudis.vah@gmail.com
                </a>
                <SocialRow />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="mobile">
          <Section label="About" id="about">
            UI/UX Designer with a legal background. I turn complex workflows into simple, intuitive experiences.
          </Section>
          <Crafting />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)" }}>Connect</span>
            <a href="mailto:eudis.vah@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              eudis.vah@gmail.com
            </a>
            <SocialRow />
          </div>
        </div>

      </main>
    </>
  );
}
