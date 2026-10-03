import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-display", display: "swap", fallback: ["system-ui", "Arial"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", fallback: ["ui-monospace", "Menlo"] });
const desc = "Bringing your idea to light: quiet, fast websites and apps, built from Sariaya.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Helioki® — Elijah Oreste: web design and development", template: "%s | Helioki® — Elijah Oreste" },
  description: desc,
  icons: { icon: "/bk-logo.svg", apple: "/bk-logo.svg" },
  openGraph: { title: "Helioki® — Elijah Oreste", description: desc, locale: "en_PH", type: "website" },
  twitter: { card: "summary_large_image", title: "Helioki® — Elijah Oreste", description: desc },
};
export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
