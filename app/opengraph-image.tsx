import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(61,217,165,0.3), transparent 30%), radial-gradient(circle at top right, rgba(102,167,255,0.3), transparent 35%), #07111f",
          color: "white",
          padding: 64,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#72f1c3" }}>
          Streamline IPTV
        </div>
        <div>
          <div style={{ fontSize: 74, lineHeight: 1.05, fontWeight: 700, maxWidth: 860 }}>
            Legal IPTV platform for live channels, player apps, and premium VOD.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#d6def0", maxWidth: 760 }}>
            Built for Smart TV, Android, iPhone, Fire TV, and modern browsers.
          </div>
        </div>
      </div>
    ),
    size
  );
}
