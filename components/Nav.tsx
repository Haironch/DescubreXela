"use client";

import { useEffect, useState } from "react";
import { scrollToId } from "@/components/SmoothScroll";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Explorar Xela", href: "#mapa" },
  { label: "Lugares", href: "#parque-central" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-500 sm:px-10 ${
        solid ? "bg-xela-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <button
        onClick={() => scrollToId("#inicio")}
        className="title-display text-sm tracking-[0.15em] text-xela-mist"
      >
        XELA
      </button>
      <ul className="flex items-center gap-6 text-xs font-light tracking-[0.15em] text-xela-mist/80 sm:gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => scrollToId(l.href)}
              className="transition-colors hover:text-xela-ember-soft"
            >
              {l.label.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
