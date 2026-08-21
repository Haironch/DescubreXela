import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BusinessDirectory from "@/components/BusinessDirectory";

export const metadata: Metadata = {
  title: "Negocios en Xela — DescubreXela",
  description:
    "Directorio de negocios locales en Quetzaltenango: cafés, restaurantes, hoteles, tours y artesanías.",
  alternates: {
    canonical: "/negocios",
  },
};

export default function NegociosPage() {
  return (
    <>
      <Nav locale="es" />
      <main className="min-h-screen bg-xela-black">
        <BusinessDirectory />
      </main>
      <footer className="bg-xela-black px-6 py-10 text-center text-xs tracking-[0.2em] text-xela-stone/70 sm:px-10">
        XELA — QUETZALTENANGO, GUATEMALA
      </footer>
    </>
  );
}
