import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Crafting from "./components/Crafting";
import SocialRow from "./components/SocialRow";

const fadeDelays = [
  "[animation-delay:50ms]",
  "[animation-delay:100ms]",
  "[animation-delay:150ms]",
  "[animation-delay:200ms]",
  "[animation-delay:250ms]",
  "[animation-delay:300ms]",
  "[animation-delay:350ms]",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-start justify-center">
      <div className="w-[390px] min-h-[844px]">
        <div className="flex flex-col gap-[30px] w-[342px] mx-auto pt-[50px] pb-[50px]">

          <div className={`animate-fade-up ${fadeDelays[0]}`}>
            <TopBar />
          </div>

          <div className={`animate-fade-up ${fadeDelays[1]}`}>
            <Hero />
          </div>

          <div className={`animate-fade-up ${fadeDelays[2]}`}>
            <Section label="About" id="about">
              I&apos;m Eudis, a web and mobile apps designer from Venezuela.
              <br /><br />
              With a background in law, I bring a unique perspective to design,
              thinking through systems, constraints, and user rights from the ground up.
            </Section>
          </div>

          <div className={`animate-fade-up ${fadeDelays[3]}`}>
            <Section label="Interests" id="interests">
              Minimal interfaces, design systems, and the space where aesthetics meets function.
            </Section>
          </div>

          <div className={`animate-fade-up ${fadeDelays[4]}`}>
            <Crafting />
          </div>

          <div className={`animate-fade-up ${fadeDelays[5]}`}>
            <Section label="Connect" id="connect">
              <a
                href="mailto:eudisalvz@gmail.com"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-150"
              >
                eudisalvz@gmail.com
              </a>
            </Section>
          </div>

          <div className={`animate-fade-up ${fadeDelays[6]}`}>
            <SocialRow />
          </div>

        </div>
      </div>
    </main>
  );
}
