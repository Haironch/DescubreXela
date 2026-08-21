"use client";

import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  Timestamp,
  where,
} from "firebase/firestore";
import { auth, db, googleProvider, isFirebaseConfigured } from "@/lib/firebase";
import { containsProfanity } from "@/lib/profanity";
import { getDictionary, type Locale } from "@/lib/i18n";

type Review = {
  id: string;
  rating: number;
  text: string;
  userName: string;
  userPhoto?: string | null;
  createdAt?: Timestamp | null;
};

export default function ReviewSection({
  businessId,
  locale,
}: {
  businessId: string;
  locale: Locale;
}) {
  const t = getDictionary(locale).reviews;
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "pending" | "error">(
    "idle"
  );
  const [warn, setWarn] = useState(false);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });
  }, []);

  useEffect(() => {
    if (!db) return;
    const q = query(
      collection(db, "reviews"),
      where("businessId", "==", businessId),
      where("approved", "==", true)
    );
    const unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map(
        (d) => ({ id: d.id, ...(d.data() as Omit<Review, "id">) })
      );
      items.sort(
        (a, b) => (b.createdAt?.toMillis() ?? 0) - (a.createdAt?.toMillis() ?? 0)
      );
      setReviews(items);
    });
    return () => unsub();
  }, [businessId]);

  if (!isFirebaseConfigured) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !text.trim() || !db) return;

    if (containsProfanity(text)) {
      setWarn(true);
      return;
    }
    setWarn(false);
    setStatus("submitting");
    try {
      await addDoc(collection(db, "reviews"), {
        businessId,
        uid: user.uid,
        userName: user.displayName ?? "Anónimo",
        userPhoto: user.photoURL ?? null,
        rating,
        text: text.trim().slice(0, 500),
        approved: false,
        createdAt: serverTimestamp(),
      });
      setText("");
      setRating(5);
      setStatus("pending");
    } catch {
      setStatus("error");
    }
  }

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <div className="mt-4 border-t border-white/10 pt-4">
      {avg && (
        <p className="mb-3 text-xs text-xela-ember-soft">
          ★ {avg} · {t.reviewCount(reviews.length)}
        </p>
      )}

      {reviews.length === 0 && (
        <p className="text-xs text-xela-stone-light/70">{t.empty}</p>
      )}

      <ul className="space-y-3">
        {reviews.map((r) => (
          <li key={r.id} className="text-xs text-xela-stone-light">
            <div className="flex items-center gap-2">
              <span className="text-xela-ember-soft">{"★".repeat(r.rating)}</span>
              <span className="text-xela-mist/80">{r.userName}</span>
            </div>
            <p className="mt-0.5 leading-relaxed">{r.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {!authReady ? null : !user ? (
          <div>
            <p className="mb-2 text-xs text-xela-stone-light/70">{t.signInPrompt}</p>
            <button
              onClick={() =>
                auth && signInWithPopup(auth, googleProvider).catch(() => {})
              }
              className="text-xs tracking-wide text-xela-ember-soft transition-colors hover:text-xela-mist"
            >
              {t.signIn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1" aria-label={t.ratingLabel}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className={`text-sm ${
                      n <= rating ? "text-xela-ember-soft" : "text-xela-stone/40"
                    }`}
                    aria-label={String(n)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => auth && signOut(auth)}
                className="text-[0.65rem] text-xela-stone-light/60 hover:text-xela-stone-light"
              >
                {t.signOut}
              </button>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t.textPlaceholder}
              maxLength={500}
              rows={2}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-xela-mist placeholder:text-xela-stone-light/50 focus:border-xela-ember-soft/50 focus:outline-none"
            />
            {warn && (
              <p className="text-[0.65rem] text-xela-ember">{t.profanityWarning}</p>
            )}
            {status === "pending" && (
              <p className="text-[0.65rem] text-xela-forest-2">{t.pending}</p>
            )}
            {status === "error" && (
              <p className="text-[0.65rem] text-xela-ember">{t.error}</p>
            )}
            <button
              type="submit"
              disabled={!text.trim() || status === "submitting"}
              className="rounded-full bg-xela-ember px-4 py-1.5 text-xs font-medium text-xela-black transition-colors hover:bg-xela-ember-soft disabled:opacity-40"
            >
              {status === "submitting" ? t.submitting : t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
