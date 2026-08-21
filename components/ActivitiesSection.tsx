import { activities, activityText } from "@/data/activities";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function ActivitiesSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section
      id="actividades"
      className="relative bg-xela-black px-6 py-24 sm:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-xela-ember-soft">{t.activities.eyebrow}</p>
        <h2 className="title-display mt-3 text-4xl text-xela-mist sm:text-5xl">
          {t.activities.title}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-xela-stone-light">
          {t.activities.intro}
        </p>

        <div className="mt-12 border-t border-white/10">
          {activities.map((a) => {
            const text = activityText(a, locale);
            return (
              <div
                key={a.id}
                className="flex flex-col gap-2 border-b border-white/10 py-7 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <p className="eyebrow-number shrink-0 text-xela-ember-soft sm:w-32">
                  {text.date}
                </p>
                <div>
                  <h3 className="title-display text-xl text-xela-mist sm:text-2xl">
                    {text.title}
                  </h3>
                  <p className="mt-1 text-xs tracking-[0.1em] text-xela-stone-light/80 uppercase">
                    {text.location}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-xela-stone-light">
                    {text.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
