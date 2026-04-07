import Nav from "../components/Nav";
import SocialRow from "../components/SocialRow";
import BackToTop from "../components/BackToTop";

const cards = [
  { id: 1, src: "/dow-img1.png",  position: "center center" },
  { id: 2, src: "/dow-img2.png",  position: "center center" },
  { id: 3, src: "/dow-img3.png",  position: "center center" },
  { id: 4, src: "/torq-img1.png", position: "center center" },
  { id: 5, src: "/torq-img2.png", position: "center center" },
  { id: 6, src: "/torq-img3.png", position: "center center" },
  { id: 7, src: "/torq-img4.png", position: "center center" },
  { id: 8, src: "/img3.png",      position: "center center" },
  { id: 9,  src: "/img8.png",      position: "center center" },
  { id: 10, src: "/dpw-img2.png",  position: "center center" },
  { id: 11, src: "/dpw-img4.png",  position: "center center" },
];

const cardStyle: React.CSSProperties = {
  aspectRatio: "4 / 3",
  border: "1px solid #1B1B1B",
  borderRadius: "10px",
  background: "#000000",
  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  padding: "5%",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Portfolio() {
  return (
    <>
      <style>{`
        .p-layout { min-height: 100vh; background: #0A0A0A; overflow-x: hidden; }
        .p-desktop { display: none; }
        .p-mobile {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
        }
        .p-grid-mobile {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 1024px) {
          .p-mobile { display: none; }
          .p-desktop {
            display: block;
            width: 100%;
            padding: 50px;
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
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "20px", textTransform: "uppercase" }}>Crafting</span>
            <Nav />
          </div>
          <div className="p-grid-desktop">
            {cards.map((card) => (
              <div key={card.id} style={{ ...cardStyle, padding: "5%" }}>
                <img src={card.src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="p-mobile">
          <div className="p-grid-mobile">
            {cards.map((card) => (
              <div key={card.id} style={{ ...cardStyle, padding: "5%" }}>
                <img src={card.src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ color: "#fff", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)" }}>Connect</span>
            <a href="mailto:eudisalvz@gmail.com" style={{ color: "#9E9E9E", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              eudisalvz@gmail.com
            </a>
            <SocialRow />
          </div>
        </div>

        <BackToTop />

      </main>
    </>
  );
}
