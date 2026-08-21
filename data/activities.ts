import type { Locale } from "@/lib/i18n";

export type Activity = {
  id: string;
  title: string;
  date: string;
  /** fecha en formato ISO 8601, para datos estructurados (JSON-LD) */
  isoDate: string;
  location: string;
  description: string;
  en: { title: string; date: string; description: string };
};

export function activityText(a: Activity, locale: Locale) {
  if (locale === "en") {
    return { title: a.en.title, date: a.en.date, location: a.location, description: a.en.description };
  }
  return { title: a.title, date: a.date, location: a.location, description: a.description };
}

export const activities: Activity[] = [
  {
    id: "recorrido-centro-historico",
    title: "Recorrido guiado: Centro Histórico",
    date: "23 de agosto",
    isoDate: "2026-08-23",
    location: "Parque Central",
    description:
      "Un recorrido a pie por la arquitectura y las calles del centro de Xela.",
    en: {
      title: "Guided Tour: Historic Center",
      date: "August 23",
      description:
        "A walking tour through the architecture and streets of downtown Xela.",
    },
  },
  {
    id: "feria-artesanias",
    title: "Feria de artesanías de Xela",
    date: "31 de agosto",
    isoDate: "2026-08-31",
    location: "Parque Central",
    description:
      "Artesanos locales muestran textiles, cerámica y madera tallada.",
    en: {
      title: "Xela Crafts Fair",
      date: "August 31",
      description:
        "Local artisans showcase textiles, ceramics, and carved wood.",
    },
  },
  {
    id: "amanecer-el-baul",
    title: "Amanecer en El Baúl",
    date: "6 de septiembre",
    isoDate: "2026-09-06",
    location: "El Baúl",
    description:
      "Caminata corta para ver salir el sol sobre el valle de Quetzaltenango.",
    en: {
      title: "Sunrise at El Baúl",
      date: "September 6",
      description:
        "A short hike to watch the sun rise over the valley of Quetzaltenango.",
    },
  },
  {
    id: "noche-marimba",
    title: "Noche de marimba",
    date: "12 de septiembre",
    isoDate: "2026-09-12",
    location: "Pasaje Enríquez",
    description:
      "Música en vivo en uno de los rincones más emblemáticos de la ciudad.",
    en: {
      title: "Marimba Night",
      date: "September 12",
      description:
        "Live music in one of the city's most iconic corners.",
    },
  },
  {
    id: "tour-fotografico-mirador",
    title: "Tour fotográfico: Mirador Rutzil",
    date: "20 de septiembre",
    isoDate: "2026-09-20",
    location: "Mirador Rutzil",
    description:
      "Sesión guiada para capturar el atardecer sobre los volcanes.",
    en: {
      title: "Photo Tour: Mirador Rutzil",
      date: "September 20",
      description:
        "A guided session to capture the sunset over the volcanoes.",
    },
  },
];
