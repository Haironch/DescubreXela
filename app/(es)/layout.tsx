import type { Metadata } from "next";
import { piazzolla, figtree } from "@/lib/fonts";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      "es-GT": "/",
      en: "/en",
    },
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

export default function RootLayoutEs({ children }: { children: React.ReactNode }) {
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
