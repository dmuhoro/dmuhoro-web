import { ImageResponse } from "next/og";
import { SITE_URL } from "@/app/config";

export const runtime = "edge";
export const alt =
  "Daniel Muhoro — Full-stack Engineer & Systems Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            color: "#D97706",
            fontSize: 24,
            letterSpacing: "0.15em",
            marginBottom: 16,
          }}
        >
          NAIROBI, KENYA · FULL-STACK ENGINEER & SYSTEMS ARCHITECT
        </div>
        <div
          style={{
            color: "#fafafa",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 700,
          }}
        >
          I build the infrastructure other people&apos;s businesses run on.
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 24,
            marginTop: 20,
            maxWidth: 600,
            lineHeight: 1.4,
          }}
        >
          Self-taught engineer designing and shipping production software solo
          for African SMEs, clinics, and cross-border payment rails.
        </div>
      </div>
    ),
    { ...size },
  );
}
