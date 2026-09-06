"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reviews, store } from "@/data/store";

gsap.registerPlugin(ScrollTrigger);

export function Reviews() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(".review-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.65,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={root} className="bg-ink px-4 py-20 text-cream md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ticket">Google reviews</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[0.85] md:text-7xl">
              Don’t just take our word for it.
            </h2>
            <div className="mt-8 flex items-end gap-6">
              <p className="font-display text-[7.5rem] leading-none text-ticket">{store.rating}</p>
              <div className="pb-4">
                <p className="text-3xl text-ticket" aria-label="4.3 out of 5 stars">
                  ★★★★☆
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em]">
                  {store.reviewCount} Google reviews
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={store.map.listingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-ticket px-6 font-display text-xl uppercase tracking-wide text-ink"
              >
                Read all reviews
              </a>
              <a
                href={store.map.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-full border-[3px] border-ticket px-6 font-display text-xl uppercase tracking-wide text-ticket"
              >
                Write a review
              </a>
            </div>
          </div>

          <div>
            <p className="max-w-xl text-cream/75">
              Neighbours mention {store.reviewThemes.map((t) => t.toLowerCase()).join(", ")}. Review wording has not been copied here — only the names supplied, labelled as Google reviews.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {store.reviewThemes.map((theme) => (
                <span key={theme} className="rounded-full border border-cream/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {reviews.map((review) => (
            <article
              key={review.reviewer}
              role="listitem"
              className="review-card rounded-[1.4rem] border-[3px] border-cream/15 bg-cream/5 p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ticket">Google Review</p>
              <h3 className="mt-3 font-display text-3xl uppercase leading-none">{review.reviewer}</h3>
              {review.text ? (
                <p className="mt-4 text-sm leading-relaxed text-cream/80">“{review.text}”</p>
              ) : (
                <p className="mt-4 text-sm text-cream/55">
                  Left a Google review for {store.name}. Full wording lives on the listing.
                </p>
              )}
            </article>
          ))}
          <article className="review-card rounded-[1.4rem] border-[3px] border-dashed border-ticket/40 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ticket">And more</p>
            <h3 className="mt-3 font-display text-3xl uppercase leading-none">
              {store.reviewCount - reviews.length} more on Google
            </h3>
            <p className="mt-4 text-sm text-cream/55">
              Remaining reviewers were not named in the supplied material, so they are not invented here.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
