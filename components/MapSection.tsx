"use client";

import { useState } from "react";
import RealMap from "@/components/RealMap";
import { destinations } from "@/data/destinations";
import { scrollToId } from "@/components/SmoothScroll";

export default function MapSection() {
  const [activeId, setActiveId] = useState(destinations[0].id);
  const active = destinations.find((d) => d.id === activeId)!;

  return (
    <section
      id="mapa"
      className="relative flex min-h-screen w-full flex-col justify-center bg-xela-black px-6 py-24 sm:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 md:mb-14">
          <p className="eyebrow text-xela-ember-soft">Explora Xela</p>
          <h2 className="title-display mt-3 text-4xl text-xela-mist sm:text-5xl">
            Tres puntos de partida
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1.55fr_1fr] md:gap-12">
          {/* mapa */}
          <div className="relative aspect-[10/8] w-full overflow-hidden rounded-2xl border border-white/5 sm:aspect-[10/7]">
            <RealMap activeId={activeId} onSelect={setActiveId} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_20px_rgba(10,15,12,0.7)]" />
          </div>

          {/* panel de información integrado */}
          <div key={active.id} className="map-panel-fade">
            <div
              className="mb-5 flex h-36 w-full items-end overflow-hidden rounded-xl p-4 sm:h-40"
              style={{
                background: `linear-gradient(135deg, ${active.accent}, transparent 130%)`,
              }}
            >
              <span
                className="title-display text-6xl opacity-25"
                style={{ color: "var(--xela-mist)" }}
              >
                {active.number}
              </span>
            </div>

            <p className="eyebrow text-xela-stone-light">{active.number} — Destino</p>
            <h3 className="title-display mt-2 text-3xl text-xela-mist">
              {active.name}
            </h3>
            <p className="title-display mt-1 text-base italic text-xela-mist/70">
              {active.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-xela-stone-light">
              {active.description}
            </p>

            <button
              onClick={() => scrollToId(`#${active.id}`)}
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-xela-ember-soft transition-colors hover:text-xela-mist"
            >
              Explorar destino
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
