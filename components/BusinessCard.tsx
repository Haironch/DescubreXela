"use client";

import { useState } from "react";
import ReviewSection from "@/components/ReviewSection";
import { businessText, type Business } from "@/data/businesses";
import { getDictionary, type Locale } from "@/lib/i18n";
import { isFirebaseConfigured } from "@/lib/firebase";

export default function BusinessCard({
  business,
  locale,
}: {
  business: Business;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale);
  const text = businessText(business, locale);

  return (
    <div
      className={`rounded-xl border p-5 transition-colors ${
        business.featured
          ? "border-xela-ember/40 bg-xela-ember/[0.06]"
          : "border-white/10"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="title-display text-lg text-xela-mist">{text.name}</h3>
        {business.featured && (
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

      {isFirebaseConfigured && (
        <>
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-4 text-xs tracking-wide text-xela-stone-light/70 transition-colors hover:text-xela-ember-soft"
          >
            {open ? t.reviews.toggleHide : t.reviews.toggleShow}
          </button>
          {open && <ReviewSection businessId={business.id} locale={locale} />}
        </>
      )}
    </div>
  );
}
