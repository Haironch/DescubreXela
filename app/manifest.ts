import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TITLE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description:
      "Experiencia web interactiva para descubrir Quetzaltenango, Guatemala.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f0c",
    theme_color: "#0a0f0c",
    lang: "es-GT",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
