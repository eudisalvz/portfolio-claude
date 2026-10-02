import type { Metadata } from "next";
import { pageMetadata, pages } from "../seo";
import Nav from "../components/Nav";
import Connect from "../components/Connect";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";
import Image from "next/image";
import { images, type SiteImage } from "../images";

const cards: { id: number; image: SiteImage; position: string; background?: string }[] = [
  { id: 1, image: images.dowImg1,  position: "center center" },
  { id: 2, image: images.dowImg2,  position: "center center" },
  { id: 3, image: images.dowImg3,  position: "center center" },
  { id: 4, image: images.torqImg1, position: "center center" },
  { id: 5, image: images.torqImg2, position: "center center" },
  { id: 6, image: images.torqImg3, position: "center center" },
  { id: 7, image: images.torqImg4, position: "center center" },
  { id: 8, image: images.dpwCards,      position: "center center", background: "var(--gradient-sunset)" },
  { id: 9,  image: images.dpwRadial,      position: "center center", background: "var(--gradient-sunset)" },
  { id: 10, image: images.dpwImg2,  position: "center center" },
  { id: 11, image: images.dpwImg4,  position: "center center" },
  { id: 12, image: images.dpwImg1,  position: "center center" },
];

const cardStyle: React.CSSProperties = {
  aspectRatio: "4 / 3",
  border: "1px solid var(--color-image-border)",
  borderRadius: "10px",
  background: "var(--color-image-bg)",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  padding: "5%",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const metadata: Metadata = pageMetadata(pages.portfolio);

export default function Portfolio() {
  return (
    <>
      <style>{`
        .p-layout { background: var(--color-bg); overflow-x: hidden; }
        .p-desktop { display: none; }
        .p-mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          padding: 20px 28px 28px;
          box-sizing: border-box;
        }
        .p-grid-mobile {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 1024px) {
          .p-layout { min-height: 100vh; }
          .p-mobile { display: none; }
          .p-desktop {
            display: block;
            width: 100%;
            padding: 58px;
            box-sizing: border-box;
          }
          .p-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 50px;
          }
          .p-grid-desktop {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
            width: 100%;
          }
        }
      `}</style>

      <main className="p-layout">

        {/* DESKTOP */}
        <div className="p-desktop">
          <div className="p-topbar">
            <span style={{ color: "var(--color-text)", fontSize: "var(--fs-body)", lineHeight: "20px", textTransform: "uppercase" }}>Crafting</span>
            <Nav />
          </div>
          <div className="p-grid-desktop">
            {cards.map((card) => (
              <div key={card.id} style={{ ...cardStyle, padding: "5%", background: card.background ?? cardStyle.background }}>
                <Image src={card.image.src} width={card.image.width} height={card.image.height} alt={card.image.alt} unoptimized
                  style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
          <Connect style={{ marginTop: "50px" }} />
          <Copyright style={{ marginTop: "30px" }} />
        </div>

        {/* MOBILE */}
        <div className="p-mobile">
          <div className="p-grid-mobile">
            {cards.map((card) => (
              <div key={card.id} style={{ ...cardStyle, padding: "5%", background: card.background ?? cardStyle.background }}>
                <Image src={card.image.src} width={card.image.width} height={card.image.height} alt={card.image.alt} unoptimized
                  style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
          <Connect gap={10} lineHeight="var(--lh-body)" />
          <Copyright />
        </div>

        <BackToTop />

      </main>
    </>
  );
}
