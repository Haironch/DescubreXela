import { destinations, destinationText } from "@/data/destinations";
import { activities, activityText } from "@/data/activities";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_DESCRIPTION_EN } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export default function StructuredData({ locale }: { locale: Locale }) {
  const pageUrl = locale === "en" ? `${SITE_URL}/en` : SITE_URL;
  const description = locale === "en" ? SITE_DESCRIPTION_EN : SITE_DESCRIPTION;

  const attractions = destinations.map((d) => {
    const text = destinationText(d, locale);
    return {
      "@type": "TouristAttraction",
      "@id": `${pageUrl}/#${d.id}`,
      name: text.name,
      description: text.description,
      url: `${pageUrl}/#${d.id}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: d.lngLat[1],
        longitude: d.lngLat[0],
      },
      isAccessibleForFree: true,
    };
  });

  const events = activities.map((a) => {
    const text = activityText(a, locale);
    const destination = destinations.find((d) => d.name === a.location);
    return {
      "@type": "Event",
      name: text.title,
      description: text.description,
      startDate: a.isoDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: text.location,
        address: "Quetzaltenango, Guatemala",
        ...(destination
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: destination.lngLat[1],
                longitude: destination.lngLat[0],
              },
            }
          : {}),
      },
    };
  });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${pageUrl}/#website`,
        name: SITE_NAME,
        url: pageUrl,
        description,
        inLanguage: locale === "en" ? "en" : "es-GT",
      },
      {
        "@type": "TouristDestination",
        "@id": `${pageUrl}/#xela`,
        name: "Quetzaltenango (Xela)",
        description,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 14.8347,
          longitude: -91.5198,
        },
        containsPlace: attractions,
      },
      ...attractions,
      ...events,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
