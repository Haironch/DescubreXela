export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const dictionaries = {
  es: {
    nav: {
      explore: "Explorar Xela",
      places: "Lugares",
      activities: "Actividades",
      businesses: "Negocios",
    },
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
    businesses: {
      eyebrow: "Directorio",
      title: "Negocios en Xela",
      introPrefix:
        "Un directorio simple de negocios locales. Por ahora son ejemplos — iremos sumando negocios reales. Los que aparecen con",
      introSuffix: "tienen un listado pagado; el resto es gratis.",
      featured: "Destacado",
      categories: {
        Café: "Café",
        Restaurante: "Restaurante",
        Hotel: "Hotel",
        Tour: "Tour",
        Artesanías: "Artesanías",
      } as Record<string, string>,
    },
    reviews: {
      toggleShow: "Ver reseñas",
      toggleHide: "Ocultar reseñas",
      empty: "Todavía no hay reseñas aprobadas para este lugar.",
      signInPrompt: "Inicia sesión con Google para dejar una reseña.",
      signIn: "Iniciar sesión con Google",
      signOut: "Cerrar sesión",
      ratingLabel: "Tu calificación",
      textPlaceholder: "¿Cómo fue tu experiencia?",
      submit: "Enviar reseña",
      submitting: "Enviando...",
      profanityWarning: "Revisa tu comentario, parece tener lenguaje inapropiado.",
      pending:
        "¡Gracias! Tu reseña quedó en revisión y aparecerá cuando se apruebe.",
      error: "No se pudo enviar la reseña, intenta de nuevo.",
      reviewCount: (n: number) => (n === 1 ? "1 reseña" : `${n} reseñas`),
    },
    footer: "XELA — QUETZALTENANGO, GUATEMALA",
  },
  en: {
    nav: {
      explore: "Explore Xela",
      places: "Places",
      activities: "Activities",
      businesses: "Businesses",
    },
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
    businesses: {
      eyebrow: "Directory",
      title: "Businesses in Xela",
      introPrefix:
        "A simple directory of local businesses. These are examples for now — we'll add real businesses over time. Listings marked",
      introSuffix: "are paid; the rest are free.",
      featured: "Featured",
      categories: {
        Café: "Café",
        Restaurante: "Restaurant",
        Hotel: "Hotel",
        Tour: "Tour",
        Artesanías: "Crafts",
      } as Record<string, string>,
    },
    reviews: {
      toggleShow: "See reviews",
      toggleHide: "Hide reviews",
      empty: "No approved reviews for this place yet.",
      signInPrompt: "Sign in with Google to leave a review.",
      signIn: "Sign in with Google",
      signOut: "Sign out",
      ratingLabel: "Your rating",
      textPlaceholder: "How was your experience?",
      submit: "Submit review",
      submitting: "Submitting...",
      profanityWarning: "Please review your comment, it looks like it has inappropriate language.",
      pending: "Thanks! Your review is pending and will appear once approved.",
      error: "Couldn't submit the review, please try again.",
      reviewCount: (n: number) => (n === 1 ? "1 review" : `${n} reviews`),
    },
    footer: "XELA — QUETZALTENANGO, GUATEMALA",
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
