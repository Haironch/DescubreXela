"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { destinations, XELA_CENTER } from "@/data/destinations";

const FLY_OPTIONS = {
  "parque-central": { zoom: 15.6, pitch: 48, bearing: -12 },
  "el-baul": { zoom: 15.2, pitch: 58, bearing: 18 },
  "mirador-panorama": { zoom: 15.2, pitch: 58, bearing: -32 },
} as const;

function buildMarkerEl(number: string) {
  const wrap = document.createElement("div");
  wrap.className = "relative flex h-9 w-9 items-center justify-center cursor-pointer";

  const ring = document.createElement("span");
  ring.dataset.role = "ring";
  wrap.appendChild(ring);

  const dot = document.createElement("span");
  dot.dataset.role = "dot";
  dot.className =
    "flex h-7 w-7 items-center justify-center rounded-full text-[0.65rem] font-medium transition-all duration-300";
  dot.textContent = number;
  wrap.appendChild(dot);

  return wrap;
}

function paintMarkerEl(wrap: HTMLElement, active: boolean) {
  const ring = wrap.querySelector<HTMLElement>('[data-role="ring"]');
  const dot = wrap.querySelector<HTMLElement>('[data-role="dot"]');
  if (ring) {
    ring.className = active
      ? "absolute inset-0 rounded-full border border-xela-ember-soft/70 scale-150 opacity-0 transition-all duration-500"
      : "absolute inset-0 rounded-full border border-xela-mist/40 marker-pulse";
  }
  if (dot) {
    dot.className = `flex h-7 w-7 items-center justify-center rounded-full text-[0.65rem] font-medium transition-all duration-300 ${
      active ? "scale-110 bg-xela-ember text-xela-black" : "bg-xela-mist/90 text-xela-black"
    }`;
  }
}

export default function RealMap({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<Record<string, maplibregl.Marker>>({});

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: XELA_CENTER,
      zoom: 14,
      pitch: 0,
      bearing: 0,
      attributionControl: { compact: true },
      cooperativeGestures: true,
    });
    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    map.on("error", (e) => {
      console.error("maplibre error:", e?.error?.message || e);
    });

    map.on("load", () => {
      map.resize();
      map.flyTo({ pitch: 48, bearing: -12, duration: 1200, essential: true });
    });

    destinations.forEach((d) => {
      const el = buildMarkerEl(d.number);
      paintMarkerEl(el, d.id === activeId);
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        onSelect(d.id);
      });
      const marker = new maplibregl.Marker({ element: el, anchor: "center" })
        .setLngLat(d.lngLat)
        .addTo(map);
      markersRef.current[d.id] = marker;
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    destinations.forEach((d) => {
      const marker = markersRef.current[d.id];
      if (!marker) return;
      paintMarkerEl(marker.getElement(), d.id === activeId);
    });

    const active = destinations.find((d) => d.id === activeId);
    const fly = active ? FLY_OPTIONS[active.id as keyof typeof FLY_OPTIONS] : undefined;
    if (active && fly) {
      map.flyTo({
        center: active.lngLat,
        zoom: fly.zoom,
        pitch: fly.pitch,
        bearing: fly.bearing,
        duration: 1600,
        curve: 1.3,
        essential: true,
      });
    }
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      className="real-map-canvas h-full w-full"
      role="img"
      aria-label="Mapa de Quetzaltenango con los tres destinos"
    />
  );
}
