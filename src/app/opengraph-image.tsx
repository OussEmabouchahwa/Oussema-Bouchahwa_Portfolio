import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oussema Bouchahwa · Full-stack developer & video creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E1013",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Tape accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#F2B33D",
          }}
        />

        {/* Monogram */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 80,
            width: 52,
            height: 52,
            background: "#ECEAE5",
            color: "#0E1013",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          ob
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#ECEAE5",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          I build software &amp; cut films.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 26,
            color: "#A9AEB5",
            letterSpacing: "-0.01em",
          }}
        >
          Oussema Bouchahwa · Full-stack developer · Sfax, Tunisia
        </div>
      </div>
    ),
    size,
  );
}
