import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Crafting from "./components/Crafting";
import SocialRow from "./components/SocialRow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block w-full h-screen" style={{ maxWidth: "1300px", height: "800px", margin: "0 auto", position: "relative" }}>

        {/* Left: photo */}
        <div
          className="absolute"
          style={{
            width: "525px",
            height: "700px",
            left: "50px",
            top: "50px",
            background: "#1a1a1a",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Replace with <Image> once you have the photo */}
          <span className="text-[#333] text-sm">photo</span>
        </div>

        {/* Right: topbar */}
        <div
          className="absolute"
          style={{ width: "625px", left: "625px", top: "50px" }}
        >
          <div className="flex items-center justify-between">
            {/* Left side of topbar: badge + visits */}
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-dot flex-shrink-0" />
                <span className="text-white text-[12px] leading-5">Open for work</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6"  y1="20" x2="6"  y2="14" />
                </svg>
                <span className="text-[#9E9E9E] text-[12px] leading-5">1.2k</span>
              </div>
            </div>

            {/* Right side of topbar: nav */}
            <div className="flex items-center gap-[30px]">
              <a href="#about"    className="text-[12px] leading-5 underline underline-offset-2 text-white   hover:opacity-70 transition-opacity">About</a>
              <a href="#crafting" className="text-[12px] leading-5 underline underline-offset-2 text-[#9E9E9E] hover:opacity-70 transition-opacity">Crafting</a>
              <a href="#connect"  className="text-[12px] leading-5 underline underline-offset-2 text-[#9E9E9E] hover:opacity-70 transition-opacity">Connect</a>
            </div>
          </div>
        </div>

        {/* Right: content block */}
        <div
          className="absolute flex flex-col gap-[30px]"
          style={{
            width: "342px",
            left: "917px", // 625 + (625 - 342) / 2 ≈ 917
            top: "290px",
          }}
        >
          {/* Name + role */}
          <div className="flex flex-col gap-0.5">
            <span className="text-white text-[14px] font-medium leading-5">Eudis Alvarez</span>
            <span className="text-[#9E9E9E] text-[12px] leading-5">UI/UX Designer, Venezuela</span>
          </div>

          {/* About */}
          <Section label="About" id="about">
            I&apos;m Eudis, a web and mobile apps designer from Venezuela.
            <br /><br />
            With a background in law, I bring a unique perspective to design,
            thinking through systems, constraints, and user rights from the ground up.
          </Section>

          {/* Interests */}
          <Section label="Interests" id="interests">
            Minimal interfaces, design systems, and the space where aesthetics meets function.
          </Section>

          {/* Crafting */}
          <Crafting />

          {/* Connect */}
          <Section label="Connect" id="connect">
            <a
              href="mailto:eudisalvz@gmail.com"
              className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-150"
            >
              eudisalvz@gmail.com
            </a>
          </Section>

          {/* Social */}
          <SocialRow />
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden w-full">
        <div className="flex flex-col gap-[30px] w-[342px] mx-auto pt-[50px] pb-[50px]">

          <div className="animate-fade-up [animation-delay:50ms]">
            <TopBar />
          </div>

          <div className="animate-fade-up [animation-delay:100ms]">
            <Hero />
          </div>

          <div className="animate-fade-up [animation-delay:150ms]">
            <Section label="About" id="about">
              I&apos;m Eudis, a web and mobile apps designer from Venezuela.
              <br /><br />
              With a background in law, I bring a unique perspective to design,
              thinking through systems, constraints, and user rights from the ground up.
            </Section>
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <Section label="Interests" id="interests">
              Minimal interfaces, design systems, and the space where aesthetics meets function.
            </Section>
          </div>

          <div className="animate-fade-up [animation-delay:250ms]">
            <Crafting />
          </div>

          <div className="animate-fade-up [animation-delay:300ms]">
            <Section label="Connect" id="connect">
              <a
                href="mailto:eudisalvz@gmail.com"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-150"
              >
                eudisalvz@gmail.com
              </a>
            </Section>
          </div>

          <div className="animate-fade-up [animation-delay:350ms]">
            <SocialRow />
          </div>

        </div>
      </div>

    </main>
  );
}
