import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#d8ff3e",
          color: "#11120e",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2 }}>
          <span>CAMBRIDGE PARK NSW</span>
          <span>4.3 / 5 · 11 GOOGLE REVIEWS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: -4, lineHeight: 0.85 }}>BIG VALUE.</div>
          <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: -4, lineHeight: 0.85 }}>EVERY DAY.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <span>WORLD OF DISCOUNTS</span>
          <span>96 Oxford St</span>
        </div>
      </div>
    ),
    size,
  );
}
