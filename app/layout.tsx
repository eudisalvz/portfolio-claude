import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eudis Alvarez — Designer",
  description: "UI/UX Designer from Venezuela. Open for work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
