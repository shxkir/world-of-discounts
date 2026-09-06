"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Mark, ProductShape } from "@/components/icons";
import { Kicker } from "@/components/ui";
import { worldOfDiscounts } from "@/data/world-of-discounts";

export function Aisle() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { products } = worldOfDiscounts;

  useEffect(() => {
    if (reduce || window.matchMedia("(max-width: 800px)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cleanupScroll: (() => void) | undefined;
    let cancelled = false;

    const run = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !sectionRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".aisle-card");
        const tags = gsap.utils.toArray<HTMLElement>(".aisle-tag");
        const basket = sectionRef.current?.querySelector(".aisle-basket");

        const applyProgress = (p: number) => {
          cards.forEach((card, index) => {
            const start = Math.max(0, (index - 2) / Math.max(1, cards.length - 2));
            const local = index < 3 ? 1 : Math.min(1, Math.max(0, (p - start) / 0.22));
            gsap.set(card, {
              y: 70 * (1 - local),
              opacity: local,
              rotate: 6 * (1 - local),
              scale: 0.94 + 0.06 * local,
            });
          });
          tags.forEach((tag, index) => {
            gsap.set(tag, { opacity: index < 3 || p > index * 0.08 ? 1 : 0, y: 0 });
          });
          if (basket) {
            gsap.set(basket, { x: -24 + p * 72, rotate: -6 + p * 12 });
          }
        };

        applyProgress(0);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          onUpdate: (self) => applyProgress(self.progress),
        });

        ScrollTrigger.refresh();
      }, sectionRef);

      const onLenisScroll = () => ScrollTrigger.update();
      window.addEventListener("scroll", onLenisScroll, { passive: true });
      cleanupScroll = () => window.removeEventListener("scroll", onLenisScroll);
    };

    void run();
    return () => {
      cancelled = true;
      ctx?.revert();
      cleanupScroll?.();
    };
  }, [reduce]);

  return (
    <section ref={sectionRef} id="finds" className="relative overflow-hidden bg-coral text-ink" aria-labelledby="finds-title">
      <div className="flex min-h-[100svh] flex-col justify-between px-[clamp(1.2rem,7vw,8rem)] py-[clamp(4rem,8vw,8rem)]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Kicker index="02">Walk the aisles</Kicker>
            <h2 id="finds-title" className="display-title max-w-[14ch] text-[clamp(3.4rem,8.3vw,8.2rem)]">
              MORE THAN
              <br />
              <em>ONE KIND OF</em>
              <br />
              GOOD FIND.
            </h2>
          </div>
          <p className="max-w-[260px] leading-snug">
            From the essentials you came in for to the little things you didn’t know you needed.
          </p>
        </div>

        <div className="relative mt-10 grid gap-4 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div className="aisle-basket relative z-10 w-max border-2 border-ink bg-lime px-4 py-3 font-mono text-xs tracking-[0.08em] uppercase ticket-shadow">
            <span className="mr-2">🧺</span> Basket filling up
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="aisle-card relative overflow-hidden border-2 border-ink bg-cream p-3 shelf-shadow"
                style={{ background: `color-mix(in srgb, ${product.color} 42%, #f6efe2)` }}
              >
                <span className="aisle-tag absolute top-2 right-2 z-10 bg-ink px-1.5 py-0.5 font-mono text-[0.55rem] tracking-[0.08em] text-cream">
                  {product.badge}
                </span>
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.image} alt={product.name} className="mb-3 aspect-[3/4] w-full object-cover" loading="lazy" />
                ) : (
                  <ProductShape name={product.icon} color={product.color} className="mb-3 max-h-36" />
                )}
                <p className="font-mono text-[0.6rem] tracking-[0.08em] uppercase opacity-70">{product.category}</p>
                <h3 className="mt-1 text-lg leading-none font-black tracking-[-0.06em]">{product.name}</h3>
                <p className="mt-2 inline-block bg-ink px-1.5 py-1 font-mono text-[0.58rem] tracking-[0.08em] text-cream">
                  {product.price}
                </p>
                <span className="sr-only">
                  Item {index + 1} of {products.length}. {product.availability}
                </span>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-6 font-mono text-[0.7rem] opacity-70">
          Illustrated placeholders until the store supplies product photos. Prices stay in store.
        </p>
      </div>
    </section>
  );
}

export function CategoryRibbon() {
  const { categories } = worldOfDiscounts;
  const loop = [...categories, ...categories];

  return (
    <section className="overflow-hidden bg-coral pb-8" aria-label="Store categories">
      <div className="marquee-track flex w-max gap-4 px-4 motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center">
        {loop.map((category, index) => (
          <article
            key={`${category.slug}-${index}`}
            className="relative h-[205px] w-[190px] shrink-0 border-2 border-ink p-4 shelf-shadow transition hover:-translate-y-2 hover:-rotate-2"
            style={{ background: category.color }}
            aria-hidden={index >= categories.length}
          >
            <span className="font-mono text-[0.62rem]">0{(index % categories.length) + 1}</span>
            {category.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={category.image} alt="" className="absolute top-10 left-1/2 h-20 w-20 -translate-x-1/2 object-contain" />
            ) : (
              <Mark name={category.icon} className="absolute top-11 left-[55px] h-20 w-20" />
            )}
            <h3 className="absolute bottom-3 left-4 m-0 max-w-[130px] text-[1.25rem] leading-none tracking-[-0.06em]">
              {category.name}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
