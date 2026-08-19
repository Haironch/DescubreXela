import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import HeroScene from "@/components/HeroScene";
import MapSection from "@/components/MapSection";
import DestinationSection from "@/components/DestinationSection";
import { destinations } from "@/data/destinations";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main>
        <HeroScene />
        <MapSection />
        <DestinationSection destination={destinations[0]} variant="city" />
        <DestinationSection destination={destinations[1]} variant="ascent" />
        <DestinationSection
          destination={destinations[2]}
          variant="viewpoint"
          pullback
        />
      </main>
      <footer className="bg-xela-black px-6 py-10 text-center text-xs tracking-[0.2em] text-xela-stone/70 sm:px-10">
        XELA — QUETZALTENANGO, GUATEMALA
      </footer>
    </SmoothScroll>
  );
}
