import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f0c",
          borderRadius: 14,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 13,
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#f5f1e8",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 10,
            width: 46,
            height: 32,
            backgroundColor: "#3a4a3c",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
