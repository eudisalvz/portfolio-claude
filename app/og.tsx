import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import type { SiteImage } from "./images";
import { colors } from "./colors";

// Shared renderer for the opengraph-image.tsx files.
// ImageResponse only accepts static ttf/otf/woff fonts, so the Geist TTFs are read from the geist package.

export const ogSize = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans");
const fonts = Promise.all([
  readFile(join(fontDir, "Geist-Regular.ttf")),
  readFile(join(fontDir, "Geist-Medium.ttf")),
]).then(([regular, medium]) => [
  { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
  { name: "Geist", data: medium, weight: 500 as const, style: "normal" as const },
]);

const Header = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{ color: colors.text, fontSize: 30, fontWeight: 500 }}>Eudis Alvarez</span>
    <span style={{ color: colors.textSecondary, fontSize: 26 }}>UI / UX Designer · Lawyer</span>
  </div>
);

// Option A: text-only card (Home, Portfolio, Projects)
export async function textOgImage({ title, description }: { title: string; description: string }) {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
        background: colors.bg, padding: 80, fontFamily: "Geist",
      }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ color: colors.text, fontSize: 64, fontWeight: 500, lineHeight: 1.1 }}>{title}</span>
          <span style={{ color: colors.textSecondary, fontSize: 30, lineHeight: 1.4, maxWidth: 960 }}>{description}</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts },
  );
}

// Option C: case study name + original screenshot (read from public/, never modified)
export async function caseStudyOgImage({ name, image }: { name: string; image: SiteImage }) {
  // Satori can't decode WebP, so the screenshot is converted to PNG in memory (lossless).
  const file = await readFile(join(process.cwd(), "public", image.src));
  const png = image.src.endsWith(".webp") ? await sharp(file).png().toBuffer() : file;
  const src = `data:image/png;base64,${png.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", alignItems: "stretch", gap: 48,
        background: colors.bg, padding: 60, fontFamily: "Geist",
      }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <Header />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ color: colors.textSecondary, fontSize: 28 }}>Case study</span>
            <span style={{ color: colors.text, fontSize: 56, fontWeight: 500, lineHeight: 1.1 }}>{name}</span>
          </div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", width: 620,
          background: colors.imageBg, border: `1px solid ${colors.imageBorder}`, borderRadius: 20, padding: 24,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img>, next/image does not apply */}
          <img src={src} width={572} height={Math.round((572 * image.height) / image.width)} alt="" />
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts },
  );
}
