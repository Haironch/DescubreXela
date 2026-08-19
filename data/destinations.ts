export type Destination = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  /** posición del marcador en el mapa ilustrado, en porcentaje (0-100) — usado por MapScene */
  map: { x: number; y: number };
  /** coordenadas reales [lng, lat], confirmadas por el cliente */
  lngLat: [number, number];
  accent: string;
  photoCredit?: string;
};

export const XELA_CENTER: [number, number] = [-91.51831195771608, 14.834737137663065];

export const destinations: Destination[] = [
  {
    id: "parque-central",
    number: "01",
    name: "Parque Central",
    tagline: "El corazón de Xela.",
    description:
      "Arquitectura, historia y vida urbana alrededor de la plaza que ha visto crecer a la ciudad. Cafés, comercios y gente caminando entre columnas neoclásicas.",
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
    map: { x: 74, y: 62 },
    lngLat: [-91.52224006470452, 14.829425629901422],
    accent: "var(--xela-night-blue)",
  },
];
