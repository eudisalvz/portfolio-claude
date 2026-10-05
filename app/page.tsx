import Image from "next/image";
import Link from "next/link";
import { Shadows_Into_Light } from "next/font/google";
import { socials } from "./components/SocialRow";
import { isExternal, projects, type ProjectName } from "./project-list";

const handwriting = Shadows_Into_Light({ weight: "400", subsets: ["latin"], display: "swap" });

// Project names in the About text link to their case study (same tab) or site (new tab).
const ProjectLink = ({ name }: { name: ProjectName }) => {
  const { href } = projects.find((p) => p.name === name)!;
  return isExternal(href) ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="home-link">{name}</a>
  ) : (
    <Link href={href} className="home-link">{name}</Link>
  );
};

const connectLinks = [
  { label: "Linkedin", social: socials.find((s) => s.name === "LinkedIn")! },
  { label: "X",        social: socials.find((s) => s.name === "X")! },
];

export default function Home() {
  return (
    <>
      <style>{`
        /* Layout comes from .column-page / .column in globals.css (shared with Projects) */
        .home { font-size: 12px; line-height: 20px; }
        .home-column { align-items: center; }
        .home-name {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
        }
        .home-about {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          margin-top: 30px;
          color: var(--color-text-secondary);
          text-align: justify;
        }
        .home-about p { margin: 0; }
        .home-link {
          color: var(--color-text);
          text-decoration: underline;
          text-decoration-style: dotted;
          text-underline-offset: 2px;
        }
        .home-connect {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
          margin-top: 10px;
          color: var(--color-text);
        }
      `}</style>

      <main className="column-page home">
        <div className="column home-column">
          <Image src="/pfp.jpg" alt="Eudis Alvarez" width={94} height={94} preload
            style={{ borderRadius: 20, objectFit: "cover" }} />

          <div className="home-name">
            <span style={{ color: "var(--color-text)", fontSize: 14, fontWeight: 500 }}>Eudis Alvarez</span>
            <span style={{ color: "var(--color-text-secondary)" }}>UI / UX Designer · Lawyer</span>
          </div>

          <div className="home-about">
            <p><span className={handwriting.className}>Hi there</span> 👋</p>
            <p>I&apos;m a UI/UX designer with a legal background. I turn complex workflows into simple, intuitive web and mobile experiences.</p>
            <p>
              Over the past few years, I&apos;ve redesigned the <ProjectLink name="Torq app" /> for US contractors and built a SaaS
              dashboard for <ProjectLink name="Decision Point Weather" />. I also reimagined <ProjectLink name="Depends on the Weather" />,
              an outdoor planning app, and crafted a premium e-commerce experience for <ProjectLink name="Master Perfumes" />, across
              construction, weather and retail.
            </p>
            <p>
              I also build my own things. I run <ProjectLink name="Alamo Algorithmics" />, a dev &amp; design agency, and I&apos;m
              currently working on <ProjectLink name="Cardverse" />.
            </p>
            <p>My legal background shapes how I design: clear structure, attention to detail and products people can trust.</p>
            <p>Let&apos;s connect</p>
          </div>

          <div className="home-connect">
            <span>Eudis Alvarez (@eudisalvz)</span>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {connectLinks.map(({ label, social }) => (
                <a key={label} href={social.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {social.icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
