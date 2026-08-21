export type Activity = {
  id: string;
  title: string;
  date: string;
  /** fecha en formato ISO 8601, para datos estructurados (JSON-LD) */
  isoDate: string;
  location: string;
  description: string;
};

export const activities: Activity[] = [
  {
    id: "recorrido-centro-historico",
    title: "Recorrido guiado: Centro Histórico",
    date: "23 de agosto",
    isoDate: "2026-08-23",
    location: "Parque Central",
    description:
      "Un recorrido a pie por la arquitectura y las calles del centro de Xela.",
  },
  {
    id: "feria-artesanias",
    title: "Feria de artesanías de Xela",
    date: "31 de agosto",
    isoDate: "2026-08-31",
    location: "Parque Central",
    description:
      "Artesanos locales muestran textiles, cerámica y madera tallada.",
  },
  {
    id: "amanecer-el-baul",
    title: "Amanecer en El Baúl",
    date: "6 de septiembre",
    isoDate: "2026-09-06",
    location: "El Baúl",
    description:
      "Caminata corta para ver salir el sol sobre el valle de Quetzaltenango.",
  },
  {
    id: "noche-marimba",
    title: "Noche de marimba",
    date: "12 de septiembre",
    isoDate: "2026-09-12",
    location: "Pasaje Enríquez",
    description:
      "Música en vivo en uno de los rincones más emblemáticos de la ciudad.",
  },
  {
    id: "tour-fotografico-mirador",
    title: "Tour fotográfico: Mirador Rutzil",
    date: "20 de septiembre",
    isoDate: "2026-09-20",
    location: "Mirador Rutzil",
    description:
      "Sesión guiada para capturar el atardecer sobre los volcanes.",
  },
];
