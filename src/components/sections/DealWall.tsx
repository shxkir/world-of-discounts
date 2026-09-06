"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { deals } from "@/data/store";

gsap.registerPlugin(ScrollTrigger);

const badgeClass: Record<(typeof deals)[number]["badge"], string> = {
  SPECIAL: "sticker-red",
  "NEW ARRIVAL": "sticker-green",
  "LIMITED FIND": "sticker-pink",
  "STAFF PICK": "",
  "FAMILY FAVOURITE": "sticker-red",
  "BACK IN STOCK": "sticker-green",
};

export function DealWall() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(".deal-card", {
        scrollTrigger: { trigger: root.current, start: "top 72%" },
        y: 70,
        rotate: (i) => (i % 2 === 0 ? -8 : 8),
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "back.out(1.5)",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="deals" ref={root} className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-6xl uppercase leading-[0.8] md:text-9xl">
            The
            <br />
            <span className="text-sale">deal wall</span>
          </h2>
          <p className="max-w-sm text-ink-2">
            A wall of tickets, not invented prices. Every card stays at $— until the store supplies a real figure.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {deals.map((deal, i) => (
            <article
              key={deal.id}
              className="deal-card relative overflow-hidden rounded-[1.7rem] border-[3px] border-ink bg-cream p-6"
              style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1.4}deg)` }}
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-ticket/80" />
              <span className={`sticker relative z-10 inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${badgeClass[deal.badge]}`}>
                {deal.badge}
              </span>
              <h3 className="relative z-10 mt-6 font-display text-4xl uppercase leading-none">{deal.title}</h3>
              <p className="relative z-10 mt-3 max-w-sm text-ink-2">{deal.detail}</p>
              <div className="relative z-10 mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-6xl leading-none">{deal.priceLabel}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sale">{deal.priceNote}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
                  Ticket {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
