import { Piazzolla, Figtree } from "next/font/google";

export const piazzolla = Piazzolla({
  variable: "--font-piazzolla",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
