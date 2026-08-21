export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const dictionaries = {
  es: {
    nav: { explore: "Explorar Xela", places: "Lugares", activities: "Actividades" },
    hero: {
      eyebrow: "Quetzaltenango · Guatemala",
      subtitle: "QUETZALTENANGO, GUATEMALA",
      tagline: "Una ciudad que se descubre caminando.",
      cue: "EXPLORA XELA ↓",
      cueLabel: "Explora Xela",
    },
    map: {
      eyebrow: "Explora Xela",
      title: "Tres puntos de partida",
      destinationLabel: "Destino",
      explore: "Explorar destino",
      ariaLabel: "Mapa de Quetzaltenango con los tres destinos",
    },
    activities: {
      eyebrow: "Vive Xela",
      title: "Actividades",
      intro:
        "Algunas próximas actividades en Xela. Iremos agregando más conforme se vayan organizando.",
    },
    destination: { waze: "Abrir en Waze", back: "Volver al mapa" },
    footer: "XELA — QUETZALTENANGO, GUATEMALA",
  },
  en: {
    nav: { explore: "Explore Xela", places: "Places", activities: "Activities" },
    hero: {
      eyebrow: "Quetzaltenango · Guatemala",
      subtitle: "QUETZALTENANGO, GUATEMALA",
      tagline: "A city you discover on foot.",
      cue: "EXPLORE XELA ↓",
      cueLabel: "Explore Xela",
    },
    map: {
      eyebrow: "Explore Xela",
      title: "Three starting points",
      destinationLabel: "Destination",
      explore: "Explore destination",
      ariaLabel: "Map of Quetzaltenango with the three destinations",
    },
    activities: {
      eyebrow: "Experience Xela",
      title: "Activities",
      intro:
        "A few upcoming activities in Xela. We'll add more as they get organized.",
    },
    destination: { waze: "Open in Waze", back: "Back to map" },
    footer: "XELA — QUETZALTENANGO, GUATEMALA",
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
