"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollToId } from "@/components/SmoothScroll";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function Nav({ locale }: { locale: Locale }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale);
  const pathname = usePathname();

  const homeHref = locale === "en" ? "/en" : "/";
  const isHome = pathname === homeHref;

  const links = [
    { label: t.nav.explore, hash: "#mapa" },
    { label: t.nav.places, hash: "#parque-central" },
    { label: t.nav.activities, hash: "#actividades" },
  ];

  const otherLocalePath = locale === "es" ? "/en" : "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleAnchorClick(hash: string, e: React.MouseEvent) {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      scrollToId(hash);
    }
    // si no estamos en el inicio, se deja la navegación normal del <a>
  }

  const navLinks = (
    <>
      {links.map((l) => (
        <li key={l.hash}>
          <a
            href={`${homeHref}${l.hash}`}
            onClick={(e) => handleAnchorClick(l.hash, e)}
            className="whitespace-nowrap transition-colors hover:text-xela-ember-soft"
          >
            {l.label.toUpperCase()}
          </a>
        </li>
      ))}
      <li>
        <a
          href={locale === "es" ? "/negocios" : "/en/businesses"}
          onClick={() => setOpen(false)}
          className="whitespace-nowrap transition-colors hover:text-xela-ember-soft"
        >
          {t.nav.businesses.toUpperCase()}
        </a>
      </li>
    </>
  );

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || !isHome || open ? "bg-xela-black/90" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5 sm:px-10">
        <a
          href={homeHref}
          onClick={(e) => {
            setOpen(false);
            if (isHome) {
              e.preventDefault();
              scrollToId("#inicio");
            }
          }}
          className="title-display shrink-0 text-sm tracking-[0.15em] text-xela-mist"
        >
          XELA
        </a>

        {/* nav de escritorio */}
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex items-center gap-8 text-xs font-light tracking-[0.15em] text-xela-mist/80">
            {navLinks}
          </ul>
          <a
            href={otherLocalePath}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
            className="shrink-0 text-lg leading-none opacity-80 transition-opacity hover:opacity-100"
          >
            {locale === "es" ? "🇺🇸" : "🇬🇹"}
          </a>
        </div>

        {/* botón hamburguesa en móvil */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-5 bg-xela-mist transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-xela-mist transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* panel desplegable en móvil */}
      {open && (
        <div className="border-t border-white/10 bg-xela-black px-4 pb-6 sm:hidden">
          <ul className="flex flex-col gap-5 pt-5 text-sm font-light tracking-[0.1em] text-xela-mist/90">
            {navLinks}
          </ul>
          <a
            href={otherLocalePath}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
            className="mt-6 inline-block text-lg leading-none opacity-80"
          >
            {locale === "es" ? "🇺🇸 English" : "🇬🇹 Español"}
          </a>
        </div>
      )}
    </nav>
  );
}
