import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Low-MOQ Ethnic Wear Manufacturing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFF8F4 0%, #FDE8DC 50%, #F5C4B8 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 64, height: 2, background: "#E8A090" }} />
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.35em",
              color: "#8B6F5C",
              textTransform: "uppercase",
            }}
          >
            Bengaluru · Since 2017
          </span>
          <div style={{ width: 64, height: 2, background: "#E8A090" }} />
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "#4A3728",
          }}
        >
          TAILOR<span style={{ color: "#D4846A" }}>-</span>MADE
        </div>
        <div
          style={{
            fontSize: 32,
            fontStyle: "italic",
            color: "#C4788A",
            marginTop: 8,
          }}
        >
          Online
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#6B5344",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Low-MOQ Ethnic Wear Manufacturing
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 20,
            color: "#8B6F5C",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Block prints · Handlooms · Kurtis · Co-ord sets · From 100 pieces
        </div>
      </div>
    ),
    { ...size }
  );
}
