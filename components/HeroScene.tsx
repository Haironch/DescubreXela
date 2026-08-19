"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import VolcanoScene from "@/components/scenes/VolcanoScene";
import { scrollToId } from "@/components/SmoothScroll";

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // entrada progresiva
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 30, letterSpacing: "0.08em" },
          { opacity: 1, y: 0, letterSpacing: "0.02em", duration: 1.3, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".hero-tagline",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          cueRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: "power1.out" },
          "-=0.4"
        );

      // parallax de salida al hacer scroll
      if (sectionRef.current && sceneRef.current && textRef.current) {
        const far = sceneRef.current.querySelector(".scene-far-mountains");
        const volcanoes = sceneRef.current.querySelector(".scene-volcanoes");
        const foreground = sceneRef.current.querySelector(".scene-foreground");

        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        })
          .to(far, { y: -30, ease: "none" }, 0)
          .to(volcanoes, { y: -70, ease: "none" }, 0)
          .to(foreground, { y: -140, ease: "none" }, 0)
          .to(sceneRef.current, { scale: 1.12, ease: "none" }, 0)
          .to(textRef.current, { y: -120, opacity: 0, ease: "none" }, 0)
          .to(cueRef.current, { opacity: 0, ease: "none" }, 0);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-screen w-full overflow-hidden bg-xela-black"
    >
      <div ref={sceneRef} className="absolute inset-0 will-change-transform">
        <VolcanoScene />
      </div>

      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <p className="hero-eyebrow eyebrow text-xela-ember-soft">
          Quetzaltenango · Guatemala
        </p>
        <h1 className="hero-title title-display mt-4 text-[4.2rem] leading-[0.95] text-xela-mist sm:text-[6rem] md:text-[8rem]">
          XELA
        </h1>
        <p className="hero-subtitle mt-5 text-sm font-light tracking-[0.2em] text-xela-stone-light sm:text-base">
          QUETZALTENANGO, GUATEMALA
        </p>
        <p className="hero-tagline title-display mt-6 text-lg italic text-xela-mist/80 sm:text-xl">
          Una ciudad que se descubre caminando.
        </p>
      </div>

      <button
        ref={cueRef}
        onClick={() => scrollToId("#mapa")}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-xs font-light tracking-[0.25em] text-xela-mist/70 transition-colors hover:text-xela-ember-soft"
        aria-label="Explora Xela"
      >
        <span className="scroll-cue inline-block">EXPLORA XELA ↓</span>
      </button>
    </section>
  );
}
