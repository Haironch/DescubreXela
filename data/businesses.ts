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
  /** listado pagado — se marca a mano por ahora, sin cobro automatizado */
  featured: boolean;
};

export const businesses: Business[] = [
  {
    id: "cafe-qanil",
    name: "Café Q'anil",
    category: "Café",
    location: "Zona 1, cerca del Parque Central",
    description:
      "Café de altura guatemalteco, ambiente tranquilo para trabajar o platicar.",
    featured: true,
  },
  {
    id: "restaurante-el-cuartel",
    name: "Restaurante El Cuartel",
    category: "Restaurante",
    location: "Zona 1",
    description: "Cocina guatemalteca tradicional en un edificio histórico.",
    featured: false,
  },
  {
    id: "hotel-casa-manen",
    name: "Hotel Casa Mañen",
    category: "Hotel",
    location: "Zona 1",
    description: "Hospedaje boutique con vista a los volcanes.",
    featured: true,
  },
  {
    id: "xela-tours",
    name: "Xela Tours",
    category: "Tour",
    location: "Centro",
    description:
      "Excursiones guiadas a Fuentes Georginas, Laguna Chicabal y más.",
    featured: false,
  },
  {
    id: "mercado-la-democracia",
    name: "Mercado La Democracia",
    category: "Artesanías",
    location: "Zona 3",
    description: "Textiles y artesanías tejidas a mano por familias locales.",
    featured: false,
  },
];
