import type { Metadata } from "next";
import { Piazzolla, Figtree } from "next/font/google";
import "./globals.css";

const piazzolla = Piazzolla({
  variable: "--font-piazzolla",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const siteUrl = "https://descubre-xela.vercel.app";
const title = "Xela — Una ciudad que se descubre caminando";
const description =
  "Descubre Quetzaltenango: sus volcanes, su Parque Central, El Baúl y el Mirador Rutzil en una experiencia visual e interactiva.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "DescubreXela",
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${piazzolla.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-xela-black text-xela-mist">
        {children}
      </body>
    </html>
  );
}
