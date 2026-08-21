"use client";

import { useEffect, useState } from "react";
import { scrollToId } from "@/components/SmoothScroll";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function Nav({ locale }: { locale: Locale }) {
  const [solid, setSolid] = useState(false);
  const t = getDictionary(locale);

  const links = [
    { label: t.nav.explore, href: "#mapa" },
    { label: t.nav.places, href: "#parque-central" },
    { label: t.nav.activities, href: "#actividades" },
  ];

  const otherLocalePath = locale === "es" ? "/en" : "/";

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-5 transition-colors duration-500 sm:px-10 ${
        solid ? "bg-xela-black/90" : "bg-transparent"
      }`}
    >
      <button
        onClick={() => scrollToId("#inicio")}
        className="title-display shrink-0 text-sm tracking-[0.15em] text-xela-mist"
      >
        XELA
      </button>
      <div className="flex items-center gap-4 sm:gap-8">
        <ul className="flex items-center gap-3 text-[10px] font-light tracking-[0.06em] text-xela-mist/80 sm:gap-8 sm:text-xs sm:tracking-[0.15em]">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollToId(l.href)}
                className="whitespace-nowrap transition-colors hover:text-xela-ember-soft"
              >
                {l.label.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <a
          href={otherLocalePath}
          aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
          className="shrink-0 text-lg leading-none opacity-80 transition-opacity hover:opacity-100"
        >
          {locale === "es" ? "🇺🇸" : "🇬🇹"}
        </a>
      </div>
    </nav>
  );
}
