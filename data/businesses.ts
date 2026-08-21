import type { Locale } from "@/lib/i18n";

export type BusinessCategory =
  | "Café"
  | "Restaurante"
  | "Hotel"
  | "Tour"
  | "Artesanías";

export type Business = {
  id: string;
  name: string;
  category: BusinessCategory;
  location: string;
  description: string;
  en: { location: string; description: string };
  /** listado pagado — se marca a mano por ahora, sin cobro automatizado */
  featured: boolean;
};

export function businessText(b: Business, locale: Locale) {
  if (locale === "en") {
    return { name: b.name, location: b.en.location, description: b.en.description };
  }
  return { name: b.name, location: b.location, description: b.description };
}

export const businesses: Business[] = [
  {
    id: "cafe-qanil",
    name: "Café Q'anil",
    category: "Café",
    location: "Zona 1, cerca del Parque Central",
    description:
      "Café de altura guatemalteco, ambiente tranquilo para trabajar o platicar.",
    en: {
      location: "Zone 1, near Parque Central",
      description:
        "Guatemalan high-altitude coffee, a calm spot to work or chat.",
    },
    featured: true,
  },
  {
    id: "restaurante-el-cuartel",
    name: "Restaurante El Cuartel",
    category: "Restaurante",
    location: "Zona 1",
    description: "Cocina guatemalteca tradicional en un edificio histórico.",
    en: {
      location: "Zone 1",
      description: "Traditional Guatemalan cooking in a historic building.",
    },
    featured: false,
  },
  {
    id: "hotel-casa-manen",
    name: "Hotel Casa Mañen",
    category: "Hotel",
    location: "Zona 1",
    description: "Hospedaje boutique con vista a los volcanes.",
    en: {
      location: "Zone 1",
      description: "Boutique lodging with views of the volcanoes.",
    },
    featured: true,
  },
  {
    id: "xela-tours",
    name: "Xela Tours",
    category: "Tour",
    location: "Centro",
    description:
      "Excursiones guiadas a Fuentes Georginas, Laguna Chicabal y más.",
    en: {
      location: "Downtown",
      description:
        "Guided excursions to Fuentes Georginas, Laguna Chicabal, and more.",
    },
    featured: false,
  },
  {
    id: "mercado-la-democracia",
    name: "Mercado La Democracia",
    category: "Artesanías",
    location: "Zona 3",
    description: "Textiles y artesanías tejidas a mano por familias locales.",
    en: {
      location: "Zone 3",
      description: "Textiles and crafts handwoven by local families.",
    },
    featured: false,
  },
];
