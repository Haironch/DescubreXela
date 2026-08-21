import type { Metadata } from "next";
import { piazzolla, figtree } from "@/lib/fonts";
import { SITE_URL, SITE_NAME, SITE_TITLE_EN, SITE_DESCRIPTION_EN } from "@/lib/site";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE_EN,
  description: SITE_DESCRIPTION_EN,
  alternates: {
    canonical: "/en",
    languages: {
      "es-GT": "/",
      en: "/en",
    },
  },
  keywords: [
    "Xela",
    "Quetzaltenango",
    "Guatemala travel",
    "things to do in Xela",
    "Guatemala tourism",
    "Parque Central Quetzaltenango",
    "El Baúl Xela",
    "Mirador Rutzil",
  ],
  openGraph: {
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
    url: `${SITE_URL}/en`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_EN,
    description: SITE_DESCRIPTION_EN,
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

export default function RootLayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${piazzolla.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-xela-black text-xela-mist">
        {children}
      </body>
    </html>
  );
}
