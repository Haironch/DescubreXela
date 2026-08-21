import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import HeroScene from "@/components/HeroScene";
import MapSection from "@/components/MapSection";
import DestinationSection from "@/components/DestinationSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import StructuredData from "@/components/StructuredData";
import { destinations } from "@/data/destinations";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <SmoothScroll>
      <StructuredData locale={locale} />
      <Nav locale={locale} />
      <main>
        <HeroScene locale={locale} />
        <MapSection locale={locale} />
        <DestinationSection
          destination={destinations[0]}
          variant="city"
          locale={locale}
        />
        <DestinationSection
          destination={destinations[1]}
          variant="ascent"
          locale={locale}
          align="right"
        />
        <DestinationSection
          destination={destinations[2]}
          variant="viewpoint"
          locale={locale}
          pullback
          anchor="top"
        />
        <ActivitiesSection locale={locale} />
      </main>
      <footer className="bg-xela-black px-6 py-10 text-center text-xs tracking-[0.2em] text-xela-stone/70 sm:px-10">
        {t.footer}
      </footer>
    </SmoothScroll>
  );
}
