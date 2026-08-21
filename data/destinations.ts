import type { Locale } from "@/lib/i18n";

export type Destination = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  en: { tagline: string; description: string };
  /** posición del marcador en el mapa ilustrado, en porcentaje (0-100) — usado por MapScene */
  map: { x: number; y: number };
  /** coordenadas reales [lng, lat], confirmadas por el cliente */
  lngLat: [number, number];
  accent: string;
  photoCredit?: string;
};

export const XELA_CENTER: [number, number] = [-91.51831195771608, 14.834737137663065];

export function directionsUrls(d: Destination) {
  const [lng, lat] = d.lngLat;
  return {
    googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
    waze: `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`,
  };
}

export function destinationText(d: Destination, locale: Locale) {
  if (locale === "en") {
    return { name: d.name, tagline: d.en.tagline, description: d.en.description };
  }
  return { name: d.name, tagline: d.tagline, description: d.description };
}

export const destinations: Destination[] = [
  {
    id: "parque-central",
    number: "01",
    name: "Parque Central",
    tagline: "El corazón de Xela.",
    description:
      "Arquitectura, historia y vida urbana alrededor de la plaza que ha visto crecer a la ciudad. Cafés, comercios y gente caminando entre columnas neoclásicas.",
    en: {
      tagline: "The heart of Xela.",
      description:
        "Architecture, history, and urban life around the plaza that has watched the city grow. Cafés, shops, and people strolling between neoclassical columns.",
    },
    map: { x: 50, y: 46 },
    lngLat: [-91.51831195771608, 14.834737137663065],
    accent: "var(--xela-earth)",
  },
  {
    id: "el-baul",
    number: "02",
    name: "El Baúl",
    tagline: "Xela desde otra perspectiva.",
    description:
      "Un ascenso corto entre vegetación y neblina hasta un mirador que abre de golpe el valle completo de Quetzaltenango.",
    en: {
      tagline: "Xela from another perspective.",
      description:
        "A short climb through vegetation and mist to a viewpoint that suddenly opens onto the whole valley of Quetzaltenango.",
    },
    map: { x: 27, y: 30 },
    lngLat: [-91.50017166171457, 14.834059039308896],
    accent: "var(--xela-forest-2)",
  },
  {
    id: "mirador-panorama",
    number: "03",
    name: "Mirador Rutzil",
    tagline: "Una vista para recordar Xela.",
    description:
      "Desde un punto pequeño en la montaña, la ciudad entera y sus volcanes se despliegan hasta el horizonte.",
    en: {
      tagline: "A view to remember Xela by.",
      description:
        "From a small point on the mountain, the whole city and its volcanoes unfold to the horizon.",
    },
    map: { x: 74, y: 62 },
    lngLat: [-91.52224006470452, 14.829425629901422],
    accent: "var(--xela-night-blue)",
  },
];
