import { ImageResponse } from "next/og";
import { BUSINESS_NAME } from "@/app/config";

export const runtime = "edge";
export const alt = `${BUSINESS_NAME} — Software Studio`;
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
          SOFTWARE STUDIO · NAIROBI, KENYA
        </div>
        <div
          style={{
            color: "#fafafa",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 700,
          }}
        >
          {BUSINESS_NAME}
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
          Production software for African businesses that can&apos;t afford to
          get it wrong.
        </div>
      </div>
    ),
    { ...size },
  );
}
