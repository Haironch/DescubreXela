"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let activeLenis: Lenis | null = null;

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    if (isMobile) {
      // el scroll táctil nativo ya es más fluido que cualquier simulación por JS;
      // normalizeScroll evita el salto al colapsar la barra de direcciones.
      ScrollTrigger.normalizeScroll(true);
      return () => {
        ScrollTrigger.normalizeScroll(false);
      };
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    activeLenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      activeLenis = null;
    };
  }, []);

  return <>{children}</>;
}

export function scrollToId(id: string) {
  const el = document.querySelector(id) as HTMLElement | null;
  if (!el) return;

  if (activeLenis) {
    activeLenis.scrollTo(el, { duration: 1.4 });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
}
