import Nav from "../components/Nav";
import TopBar from "../components/TopBar";

const cards = [
  { id: 1 }, { id: 2 }, { id: 3 },
  { id: 4 }, { id: 5 }, { id: 6 },
  { id: 7 }, { id: 8 }, { id: 9 },
];

const SocialButtons = () => (
  <div className="flex items-center gap-[10px]">
    {/* X */}
    <a href="https://x.com/eudisalvz" target="_blank" rel="noopener noreferrer"
      className="w-[26px] h-[26px] border border-[#9E9E9E] rounded-lg flex items-center justify-center hover:opacity-70 transition-opacity">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 2.5L6.8 8.6L2 13.5H3.2L7.35 9.32L10.72 13.5H14L8.95 7.04L13.45 2.5H12.25L8.4 6.32L5.28 2.5H2ZM3.84 3.42H4.84L12.16 12.58H11.16L3.84 3.42Z" fill="#9E9E9E"/>
      </svg>
    </a>
    {/* LinkedIn */}
    <a href="https://linkedin.com/in/eudisalvz" target="_blank" rel="noopener noreferrer"
      className="w-[26px] h-[26px] border border-[#9E9E9E] rounded-lg flex items-center justify-center hover:opacity-70 transition-opacity">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 2.5C2 1.67 2.67 1 3.5 1C4.33 1 5 1.67 5 2.5C5 3.33 4.33 4 3.5 4C2.67 4 2 3.33 2 2.5ZM2.25 5.5H4.75V14H2.25V5.5ZM6.5 5.5H8.9V6.6C9.35 5.9 10.2 5.25 11.4 5.25C13.3 5.25 14 6.6 14 8.5V14H11.5V9C11.5 8.1 11.2 7.4 10.3 7.4C9.4 7.4 9 8 9 9V14H6.5V5.5Z" fill="#9E9E9E"/>
      </svg>
    </a>
    {/* Telegram */}
    <a href="https://t.me/eudisalvz" target="_blank" rel="noopener noreferrer"
      className="w-[26px] h-[26px] border border-[#9E9E9E] rounded-lg flex items-center justify-center hover:opacity-70 transition-opacity">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.9 2.3L11.7 13.1C11.6 13.5 11.3 13.6 11 13.4L7.8 11L6.3 12.4C6.1 12.6 5.9 12.7 5.6 12.7L5.8 9.4L11.3 4.4C11.6 4.1 11.2 4 10.8 4.3L3.9 8.7L0.8 7.7C0.4 7.6 0.4 7.3 0.9 7.1L13 2.1C13.4 1.9 13.8 2.1 13.9 2.3Z" fill="#9E9E9E"/>
      </svg>
    </a>
    {/* WhatsApp */}
    <a href="https://wa.me/eudisalvz" target="_blank" rel="noopener noreferrer"
      className="w-[26px] h-[26px] border border-[#9E9E9E] rounded-lg flex items-center justify-center hover:opacity-70 transition-opacity">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1C4.1 1 1 4.1 1 8C1 9.3 1.4 10.5 2 11.5L1 15L4.6 14C5.6 14.6 6.8 15 8 15C11.9 15 15 11.9 15 8C15 4.1 11.9 1 8 1ZM10.9 10.4C10.7 10.9 9.9 11.4 9.4 11.4C8.9 11.5 8.3 11.4 5.7 10.3C3.7 9.4 2.5 7.4 2.4 7.2C2.3 7 1.7 6.2 1.7 5.4C1.7 4.6 2.1 4.2 2.3 4C2.5 3.8 2.7 3.7 2.9 3.7C3 3.7 3.2 3.7 3.3 3.7C3.5 3.7 3.6 3.7 3.8 4.1C4 4.5 4.4 5.4 4.5 5.5C4.6 5.6 4.6 5.8 4.5 5.9C4.4 6 4.3 6.2 4.2 6.3C4.1 6.4 4 6.5 4.1 6.7C4.2 6.9 4.7 7.7 5.4 8.3C6.3 9 7.1 9.2 7.4 9.3C7.7 9.4 7.8 9.4 7.9 9.2C8 9 8.5 8.5 8.6 8.3C8.7 8.1 8.9 8.1 9.1 8.2C9.3 8.3 10.2 8.7 10.4 8.9C10.6 9 10.7 9.1 10.8 9.2C10.9 9.5 10.9 9.9 10.9 10.4Z" fill="#9E9E9E"/>
      </svg>
    </a>
  </div>
);

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* ── DESKTOP ── */}
      <div className="hidden lg:block" style={{ width: "1300px", margin: "0 auto", minHeight: "960px", position: "relative" }}>

        {/* Top left: page title */}
        <div className="absolute" style={{ left: "50px", top: "50px" }}>
          <span className="text-white text-[12px] leading-5" style={{ fontFamily: "var(--font-sf)" }}>Crafting</span>
        </div>

        {/* Top right: nav */}
        <div className="absolute" style={{ right: "50px", top: "50px" }}>
          <Nav />
        </div>

        {/* Grid */}
        <div
          className="absolute"
          style={{
            left: "50px", top: "120px",
            width: "1201px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                height: "250px",
                border: "1px solid #1B1B1B",
                borderRadius: "10px",
                background: "#0f0f0f",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="text-[#222] text-[11px]">project {card.id}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden w-full">
        <div className="flex flex-col gap-[20px] mx-auto pt-[50px] pb-[50px]" style={{ width: "350px" }}>

          {/* Topbar */}
          <div className="animate-fade-up [animation-delay:50ms] px-0">
            <TopBar />
          </div>

          {/* Hero + nav */}
          <div className="animate-fade-up [animation-delay:100ms] flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center flex-shrink-0">
                <span className="text-[#9E9E9E] text-[12px] font-medium">EA</span>
              </div>
              <div>
                <span className="text-white text-[14px] font-medium leading-5 block">Eudis Alvarez</span>
                <span className="text-[#9E9E9E] text-[12px] leading-5 block">UI/UX Designer, Venezuela</span>
              </div>
            </div>
            <Nav />
          </div>

          {/* Cards */}
          <div className="animate-fade-up [animation-delay:150ms] flex flex-col gap-[20px]">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  width: "350px",
                  height: "250px",
                  border: "1px solid #1B1B1B",
                  borderRadius: "10px",
                  background: "#0f0f0f",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-[#222] text-[11px]">project {card.id}</span>
              </div>
            ))}
          </div>

          {/* Footer: title + email + socials */}
          <div className="animate-fade-up [animation-delay:200ms] flex flex-col gap-[10px] pt-[10px]">
            <span
              className="text-white text-[12px] leading-5 uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Crafting
            </span>
            <a
              href="mailto:eudisalvz@gmail.com"
              className="text-[#9E9E9E] text-[12px] leading-5 underline underline-offset-2 uppercase hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              eudisalvz@gmail.com
            </a>
            <SocialButtons />
          </div>

        </div>
      </div>

    </main>
  );
}
