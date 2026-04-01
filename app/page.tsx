import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Crafting from "./components/Crafting";
import SocialRow from "./components/SocialRow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* ── DESKTOP: 1024px+ ── */}
      <div className="hidden lg:block relative bg-[#0A0A0A]" style={{ minHeight: "800px" }}>
        <div className="relative mx-auto" style={{ maxWidth: "1300px", height: "800px" }}>

          {/* Left photo */}
          <div className="absolute bg-[#1a1a1a] flex items-center justify-center" style={{ width: "525px", height: "700px", left: "50px", top: "50px", borderRadius: "20px" }}>
            <span className="text-[#333] text-[13px]">photo</span>
          </div>

          {/* Topbar */}
          <div className="absolute flex items-center justify-between" style={{ left: "625px", right: "50px", top: "50px", height: "20px" }}>
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse-dot" />
                <span className="text-white text-[12px] leading-5">Open for work</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <span className="text-[#9E9E9E] text-[12px] leading-5">1.2k</span>
              </div>
            </div>
            <Nav />
          </div>

          {/* Content block */}
          <div className="absolute flex flex-col gap-[30px]" style={{ left: "625px", top: "290px", width: "342px" }}>
            <div>
              <span className="text-white text-[14px] font-medium leading-5 block">Eudis Alvarez</span>
              <span className="text-[#9E9E9E] text-[12px] leading-5 block">UI/UX Designer, Venezuela</span>
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
              <a href="mailto:eudisalvz@gmail.com" className="text-[#9E9E9E] underline underline-offset-2 hover:opacity-70 transition-opacity">
                eudisalvz@gmail.com
              </a>
            </Section>
            <SocialRow />
          </div>

        </div>
      </div>

      {/* ── MOBILE: <1024px ── */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-[30px] mx-auto pt-[50px] pb-[50px]" style={{ width: "342px" }}>
          <div className="animate-fade-up [animation-delay:50ms]">
            <TopBar />
          </div>
          <div className="animate-fade-up [animation-delay:100ms] flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center">
                <span className="text-[#9E9E9E] text-[12px] font-medium">EA</span>
              </div>
              <div>
                <span className="text-white text-[14px] font-medium leading-5 block">Eudis Alvarez</span>
                <span className="text-[#9E9E9E] text-[12px] leading-5 block">UI/UX Designer, Venezuela</span>
              </div>
            </div>
            <Nav />
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
          <div className="animate-fade-up [animation-delay:250ms]"><Crafting /></div>
          <div className="animate-fade-up [animation-delay:300ms]">
            <Section label="Connect" id="connect">
              <a href="mailto:eudisalvz@gmail.com" className="text-[#9E9E9E] underline underline-offset-2 hover:opacity-70 transition-opacity">
                eudisalvz@gmail.com
              </a>
            </Section>
          </div>
          <div className="animate-fade-up [animation-delay:350ms]"><SocialRow /></div>
        </div>
      </div>

    </main>
  );
}
