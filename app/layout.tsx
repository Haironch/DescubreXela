import type { Metadata } from "next";
import { Piazzolla, Figtree } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Xela",
    "Quetzaltenango",
    "Guatemala",
    "turismo Guatemala",
    "qué hacer en Xela",
    "Parque Central Quetzaltenango",
    "El Baúl Xela",
    "Mirador Rutzil",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
