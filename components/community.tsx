"use client";

import { useId, useState } from "react";
import { Mark } from "@/components/icons";
import { Kicker } from "@/components/ui";
import { worldOfDiscounts } from "@/data/world-of-discounts";

export function Story() {
  const { story } = worldOfDiscounts;

  return (
    <section id="story" className="relative flex min-h-[680px] items-center overflow-hidden bg-sky px-[clamp(1.2rem,18vw,19rem)] py-[clamp(5rem,10vw,10rem)]" aria-labelledby="story-title">
      <div className="spin-slow absolute top-[-88px] left-[6%] grid size-[330px] place-items-center rounded-full border-2 border-ink max-md:top-[-100px] max-md:right-[-110px] max-md:left-auto max-md:size-[270px]" aria-hidden="true">
        <span className="-rotate-[25deg] font-mono text-[0.7rem] tracking-[0.12em]">FRIENDLY · HELPFUL · LOCAL · VALUE · </span>
        <b className="absolute text-5xl">★</b>
      </div>
      <div className="relative z-10 max-w-[620px]">
        <Kicker index="03">Why locals pop in</Kicker>
        <h2 id="story-title" className="display-title my-5 text-[clamp(3.4rem,6vw,6.3rem)]">
          {story.title}
        </h2>
        <p className="max-w-[530px] text-[1.08rem] leading-relaxed">{story.body}</p>
        <p className="owner-note mt-8 max-w-[470px] border-l-[3px] border-ink p-4 font-mono text-[0.7rem] font-medium">
          {story.ownerMention}
        </p>
      </div>
      <div className="absolute right-[9%] bottom-[12%] grid aspect-[1.2] w-[230px] rotate-[-12deg] place-items-center rounded-[50%_45%_45%_40%] border-2 border-ink bg-cream p-16 text-center text-[2rem] leading-none font-black tracking-[-0.08em] shelf-shadow max-md:right-[8%] max-md:bottom-[7%] max-md:w-[145px] max-md:p-8 max-md:text-[1.25rem]" aria-hidden="true">
        SEE YOU
        <br />
        IN STORE!
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span className="my-2 block tracking-[0.13em]" aria-label={`Rated ${value} out of 5 stars`}>
      {"★★★★★"}
    </span>
  );
}

export function Reviews() {
  const { business, reviews, reviewThemes } = worldOfDiscounts;
  const [index, setIndex] = useState(0);
  const labelId = useId();
  const current = reviews[index];

  return (
    <section className="relative grid items-center gap-8 border-b-2 border-ink bg-cream px-[clamp(1.2rem,7vw,8rem)] py-[clamp(4rem,9vw,9rem)] md:grid-cols-[.85fr_1.45fr_.6fr]" aria-labelledby="reviews-title">
      <div className="max-w-[260px] border-2 border-ink bg-lime p-5 shelf-shadow">
        <p className="font-mono text-[0.63rem] tracking-[0.08em]">GOOGLE REVIEWS</p>
        <strong className="block text-[5rem] leading-none tracking-[-0.1em]">{business.googleRating}</strong>
        <span className="font-mono text-[0.9rem] font-semibold">/ 5</span>
        <Stars value={business.googleRating} />
        <small className="block font-mono text-[0.63rem] tracking-[0.08em]">Based on {business.googleReviewCount} Google reviews</small>
      </div>

      <div>
        <Kicker index="04">Good word gets around</Kicker>
        <h2 id="reviews-title" className="display-title my-4 text-[clamp(3rem,6vw,6rem)]">
          THE WORD
          <br />
          <em>ON THE STREET.</em>
        </h2>
        {reviews.length === 0 ? (
          <>
            <p className="review-empty max-w-[450px] text-[0.95rem] leading-relaxed">
              Individual review excerpts aren’t published here until supplied and approved. What’s already clear: customers often mention friendly, helpful service, variety and bargains.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {reviewThemes.map((theme) => (
                <li key={theme} className="border-2 border-ink bg-white px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.06em] uppercase">
                  {theme}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="max-w-[460px]">
            <div id={labelId} className="sr-only">
              Customer review {index + 1} of {reviews.length}
            </div>
            <blockquote className="border-2 border-ink bg-white p-5" aria-live="polite" aria-labelledby={labelId}>
              <p className="text-lg leading-snug">“{current.text}”</p>
              <footer className="mt-4 font-mono text-xs uppercase">
                {current.reviewer} · {current.rating}/5 · {current.source}
              </footer>
            </blockquote>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="border-2 border-ink px-3 py-2 text-sm font-bold"
                onClick={() => setIndex((value) => (value === 0 ? reviews.length - 1 : value - 1))}
              >
                Previous review
              </button>
              <button
                type="button"
                className="border-2 border-ink px-3 py-2 text-sm font-bold"
                onClick={() => setIndex((value) => (value === reviews.length - 1 ? 0 : value + 1))}
              >
                Next review
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid size-[155px] rotate-[11deg] place-items-center content-center rounded-full border-2 border-ink bg-ink text-center text-[0.95rem] leading-[0.85] font-black tracking-[-0.08em] text-cream max-md:absolute max-md:top-16 max-md:right-4 max-md:size-[110px] max-md:text-[0.8rem]" aria-hidden="true">
        THANKS,
        <br />
        CAMBRIDGE
        <br />
        PARK <span className="mt-1 text-coral">♥</span>
      </div>
    </section>
  );
}

export function ShelfStory() {
  return (
    <section className="grid min-h-[490px] grid-cols-[10vw_1fr_1fr] bg-ink text-cream max-md:grid-cols-[45px_1fr]" aria-labelledby="extra-stop-title">
      <div className="border-l border-white/20 p-8 font-mono text-[0.67rem] tracking-[0.12em] [writing-mode:vertical-rl] rotate-180 max-md:row-span-2">
        FOLLOW THE FINDS
      </div>
      <div className="relative grid min-h-[290px] place-items-center overflow-hidden bg-[#bce8e5] text-ink">
        <span className="sticker absolute top-7 right-7 z-10 rotate-[13deg] bg-lime p-2 font-mono text-[0.7rem] ticket-shadow">
          LOCAL
          <br />
          FAVOURITE
        </span>
        <Mark name="surprise" className="h-1/2 w-1/2" />
        <p className="absolute bottom-5 left-6 m-0 max-w-[130px] text-base leading-none font-bold">Every visit has the potential for a small win.</p>
      </div>
      <div className="flex flex-col justify-center p-[clamp(2rem,6vw,7rem)] max-md:col-start-2">
        <p className="font-mono text-[0.7rem] tracking-[0.08em] uppercase">No boring errands</p>
        <h3 id="extra-stop-title" className="display-title my-3 text-[clamp(2.4rem,5.2vw,5rem)]">
          THE LITTLE
          <br />
          <em>EXTRA STOP.</em>
        </h3>
        <p className="max-w-[290px] leading-relaxed opacity-80">Browse the categories, ask the team, and give yourself a minute to look around.</p>
      </div>
    </section>
  );
}
