import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Crafting from "./components/Crafting";
import SocialRow from "./components/SocialRow";

export default function Home() {
  return (
    <>
      <style>{`
        .layout {
          min-height: 100vh;
          background: #0A0A0A;
        }

        /* MOBILE */
        .desktop { display: none; }
        .mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 342px;
          margin: 0 auto;
          padding: 50px 20px;
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .mobile { display: none; }
          .desktop {
            display: flex;
            width: 100%;
            height: 100vh;
            min-height: 700px;
          }
          .desktop-photo {
            flex-shrink: 0;
            width: 40%;
            margin: 50px 0 50px 50px;
            border-radius: 20px;
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .desktop-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 50px 50px 50px 50px;
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
            <span style={{ color: "#333", fontSize: "13px" }}>photo</span>
          </div>
          <div className="desktop-right">
            <div className="desktop-topbar">
              <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className="animate-pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ color: "#fff", fontSize: 12, lineHeight: "20px" }}>Open for work</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span style={{ color: "#9E9E9E", fontSize: 12, lineHeight: "20px" }}>1.2k</span>
                </div>
              </div>
              <Nav />
            </div>
            <div className="desktop-content">
              <div>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px", display: "block" }}>Eudis Alvarez</span>
                <span style={{ color: "#9E9E9E", fontSize: 12, lineHeight: "20px", display: "block" }}>UI/UX Designer, Venezuela</span>
              </div>
              <Section label="About" id="about">
                I&apos;m Eudis, a web and mobile apps designer from Venezuela.
                <br /><br />
                With a background in law, I bring a unique perspective to design,
                thinking through systems, constraints, and user rights from the ground up.
              </Section>
              <Section label="Interests" id="interests">
                Minimal interfaces, design systems, and the space where aesthetics meets function.
              </Section>
              <Crafting />
              <Section label="Connect" id="connect">
                <a href="mailto:eudisalvz@gmail.com" style={{ color: "#9E9E9E", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                  eudisalvz@gmail.com
                </a>
              </Section>
              <SocialRow />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="mobile">
          <div className="animate-fade-up" style={{ animationDelay: "50ms" }}>
            <TopBar />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "100ms", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1a1a1a", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#9E9E9E", fontSize: 12, fontWeight: 500 }}>EA</span>
              </div>
              <div>
                <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, lineHeight: "20px", display: "block" }}>Eudis Alvarez</span>
                <span style={{ color: "#9E9E9E", fontSize: 12, lineHeight: "20px", display: "block" }}>UI/UX Designer, Venezuela</span>
              </div>
            </div>
            <Nav />
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
            <Section label="About" id="about">
              I&apos;m Eudis, a web and mobile apps designer from Venezuela.
              <br /><br />
              With a background in law, I bring a unique perspective to design,
              thinking through systems, constraints, and user rights from the ground up.
            </Section>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Section label="Interests" id="interests">
              Minimal interfaces, design systems, and the space where aesthetics meets function.
            </Section>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "250ms" }}><Crafting /></div>
          <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Section label="Connect" id="connect">
              <a href="mailto:eudisalvz@gmail.com" style={{ color: "#9E9E9E", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                eudisalvz@gmail.com
              </a>
            </Section>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "350ms" }}><SocialRow /></div>
        </div>

      </main>
    </>
  );
}
