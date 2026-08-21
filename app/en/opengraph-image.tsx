import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Xela — A City You Discover on Foot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const figtree = await readFile(
    path.join(process.cwd(), "app/assets/figtree-700-xela.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#0a0f0c",
          backgroundImage:
            "linear-gradient(to bottom, #0a1018 0%, #101c22 45%, #1a2b28 75%, #2c3428 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 140,
            width: 84,
            height: 84,
            borderRadius: "50%",
            backgroundColor: "#f5f1e8",
            boxShadow: "0 0 70px 34px rgba(233,228,216,0.22)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 280,
            backgroundImage:
              "radial-gradient(ellipse at 56% 100%, rgba(217,138,79,0.30) 0%, rgba(217,138,79,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 150,
            width: 460,
            height: 320,
            backgroundColor: "#22322a",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 560,
            width: 420,
            height: 250,
            backgroundColor: "#1a2620",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 30,
            letterSpacing: 9,
            color: "#e8b27f",
            display: "flex",
            marginBottom: 14,
          }}
        >
          QUETZALTENANGO · GUATEMALA
        </div>
        <div
          style={{
            fontFamily: "Figtree",
            fontWeight: 700,
            fontSize: 190,
            letterSpacing: -4,
            color: "#e9e4d8",
            display: "flex",
            lineHeight: 1,
          }}
        >
          XELA
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(233,228,216,0.65)",
            display: "flex",
            marginTop: 22,
            fontStyle: "italic",
          }}
        >
          The city you discover on foot
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Figtree",
          data: figtree,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
