import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Helioki®";
export default function OG() {
  return new ImageResponse(
    (<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fff", color: "#000", padding: 64 }}>
      <div style={{ fontSize: 28 }}>Sariaya, PH — HLK / 25—26</div>
      <div style={{ fontSize: 220, fontWeight: 700, letterSpacing: -9 }}>HELIOKI®</div>
      <div style={{ fontSize: 32 }}>Bringing your idea to light.</div>
    </div>), size);
}
