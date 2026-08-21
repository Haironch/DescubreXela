import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BusinessDirectory from "@/components/BusinessDirectory";

export const metadata: Metadata = {
  title: "Businesses in Xela — DescubreXela",
  description:
    "Local business directory in Quetzaltenango: cafés, restaurants, hotels, tours, and crafts.",
  alternates: {
    canonical: "/en/businesses",
    languages: {
      "es-GT": "/negocios",
      en: "/en/businesses",
    },
  },
};

export default function BusinessesPage() {
  return (
    <>
      <Nav locale="en" />
      <main className="min-h-screen bg-xela-black">
        <BusinessDirectory locale="en" />
      </main>
      <footer className="bg-xela-black px-6 py-10 text-center text-xs tracking-[0.2em] text-xela-stone/70 sm:px-10">
        XELA — QUETZALTENANGO, GUATEMALA
      </footer>
    </>
  );
}
