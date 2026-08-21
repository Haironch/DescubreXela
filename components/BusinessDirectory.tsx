import { businesses, businessText, type BusinessCategory } from "@/data/businesses";
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
              {group.items.map((b) => {
                const text = businessText(b, locale);
                return (
                  <div
                    key={b.id}
                    className={`rounded-xl border p-5 transition-colors ${
                      b.featured
                        ? "border-xela-ember/40 bg-xela-ember/[0.06]"
                        : "border-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="title-display text-lg text-xela-mist">
                        {text.name}
                      </h3>
                      {b.featured && (
                        <span className="shrink-0 rounded-full bg-xela-ember px-2.5 py-0.5 text-[0.65rem] font-medium tracking-wide text-xela-black">
                          {t.businesses.featured}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs tracking-[0.08em] text-xela-stone-light/80 uppercase">
                      {text.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-xela-stone-light">
                      {text.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
