"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { scrollToId } from "@/components/SmoothScroll";
import CityScene from "@/components/scenes/CityScene";
import AscentScene from "@/components/scenes/AscentScene";
import ViewpointScene from "@/components/scenes/ViewpointScene";
import { directionsUrls, destinationText, type Destination } from "@/data/destinations";
import { getDictionary, type Locale } from "@/lib/i18n";

const scenes = {
  city: CityScene,
  ascent: AscentScene,
  viewpoint: ViewpointScene,
};

export default function DestinationSection({
  destination,
  variant,
  locale,
  pullback = false,
  align = "left",
  anchor = "bottom",
}: {
  destination: Destination;
  variant: keyof typeof scenes;
  locale: Locale;
  pullback?: boolean;
  align?: "left" | "right";
  anchor?: "top" | "bottom";
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const SceneComponent = scenes[variant];
  const directions = directionsUrls(destination);
  const t = getDictionary(locale);
  const text = destinationText(destination, locale);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sceneRef.current || !sectionRef.current) return;

      const far = sceneRef.current.querySelector(".scene-far");
      const mid = sceneRef.current.querySelector(".scene-mid");
      const near = sceneRef.current.querySelector(".scene-near");

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      })
        .fromTo(far, { y: 30 }, { y: -30, ease: "none" }, 0)
        .fromTo(mid, { y: 60 }, { y: -60, ease: "none" }, 0)
        .fromTo(near, { y: 110 }, { y: -110, ease: "none" }, 0);

      // el zoom de alejamiento es el más costoso en frame: solo en escritorio
      if (pullback) {
        gsap.matchMedia().add({ isDesktop: "(min-width: 768px)" }, ({ conditions }) => {
          if (!(conditions as { isDesktop: boolean }).isDesktop) return;
          gsap.fromTo(
            sceneRef.current,
            { scale: 1.28 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "center center",
                scrub: 0.6,
              },
            }
          );
        });
      }

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [pullback]);

  const isRight = align === "right";
  const isTop = anchor === "top";

  return (
    <section
      ref={sectionRef}
      id={destination.id}
      className={`relative flex min-h-screen w-full overflow-hidden bg-xela-black ${
        isTop ? "items-start" : "items-end"
      }`}
    >
      <div ref={sceneRef} className="absolute inset-0 will-change-transform">
        <SceneComponent />
      </div>

      <div
        ref={textRef}
        className={`relative z-10 w-full px-6 sm:px-10 ${
          isTop ? "pt-28 md:pt-36" : "pb-20 md:pb-28"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl flex-col ${
            isRight ? "items-end text-right" : "items-start text-left"
          }`}
        >
          <p className="eyebrow-number text-xela-ember-soft">{destination.number}</p>
          <h2 className="title-display mt-3 text-5xl text-xela-mist sm:text-6xl md:text-7xl">
            {text.name.toUpperCase()}
          </h2>
          <p className="title-display mt-3 text-lg italic text-xela-mist/80 sm:text-xl">
            {text.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-xela-stone-light">
            {text.description}
          </p>
          <div
            className={`mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 ${
              isRight ? "justify-end" : ""
            }`}
          >
            <a
              href={directions.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-xela-ember px-5 py-2.5 text-sm font-medium tracking-wide text-xela-black transition-colors hover:bg-xela-ember-soft"
            >
              {t.destination.waze} <span aria-hidden="true">→</span>
            </a>
          </div>
          <button
            onClick={() => scrollToId("#mapa")}
            className="mt-4 inline-flex items-center gap-2 text-sm tracking-wide text-xela-mist/70 transition-colors hover:text-xela-ember-soft"
          >
            <span aria-hidden="true">←</span> {t.destination.back}
          </button>
        </div>
      </div>
    </section>
  );
}
