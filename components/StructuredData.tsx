import { destinations } from "@/data/destinations";
import { activities } from "@/data/activities";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export default function StructuredData() {
  const attractions = destinations.map((d) => ({
    "@type": "TouristAttraction",
    "@id": `${SITE_URL}/#${d.id}`,
    name: d.name,
    description: d.description,
    url: `${SITE_URL}/#${d.id}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: d.lngLat[1],
      longitude: d.lngLat[0],
    },
    isAccessibleForFree: true,
  }));

  const events = activities.map((a) => {
    const destination = destinations.find((d) => d.name === a.location);
    return {
      "@type": "Event",
      name: a.title,
      description: a.description,
      startDate: a.isoDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: a.location,
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
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "es-GT",
      },
      {
        "@type": "TouristDestination",
        "@id": `${SITE_URL}/#xela`,
        name: "Quetzaltenango (Xela)",
        description: SITE_DESCRIPTION,
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
