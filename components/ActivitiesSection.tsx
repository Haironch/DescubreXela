import { activities } from "@/data/activities";

export default function ActivitiesSection() {
  return (
    <section
      id="actividades"
      className="relative bg-xela-black px-6 py-24 sm:px-10 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-xela-ember-soft">Vive Xela</p>
        <h2 className="title-display mt-3 text-4xl text-xela-mist sm:text-5xl">
          Actividades
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-xela-stone-light">
          Algunas próximas actividades en Xela. Iremos agregando más
          conforme se vayan organizando.
        </p>

        <div className="mt-12 border-t border-white/10">
          {activities.map((a) => (
            <div
              key={a.id}
              className="flex flex-col gap-2 border-b border-white/10 py-7 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <p className="eyebrow-number shrink-0 text-xela-ember-soft sm:w-32">
                {a.date}
              </p>
              <div>
                <h3 className="title-display text-xl text-xela-mist sm:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.1em] text-xela-stone-light/80 uppercase">
                  {a.location}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-xela-stone-light">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
