import { businesses, type BusinessCategory } from "@/data/businesses";
import BusinessCard from "@/components/BusinessCard";
import { getDictionary, type Locale } from "@/lib/i18n";

const categoryOrder: BusinessCategory[] = [
  "Café",
  "Restaurante",
  "Hotel",
  "Tour",
  "Artesanías",
];

export default function BusinessDirectory({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: businesses.filter((b) => b.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 sm:px-10 md:pt-36 md:pb-32">
      <p className="eyebrow text-xela-ember-soft">{t.businesses.eyebrow}</p>
      <h1 className="title-display mt-3 text-4xl text-xela-mist sm:text-5xl">
        {t.businesses.title}
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-xela-stone-light">
        {t.businesses.introPrefix}{" "}
        <span className="text-xela-ember-soft">{t.businesses.featured}</span>{" "}
        {t.businesses.introSuffix}
      </p>

      <div className="mt-14 space-y-14">
        {grouped.map((group) => (
          <section key={group.category}>
            <h2 className="eyebrow text-xela-stone-light">
              {t.businesses.categories[group.category] ?? group.category}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {group.items.map((b) => (
                <BusinessCard key={b.id} business={b} locale={locale} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
