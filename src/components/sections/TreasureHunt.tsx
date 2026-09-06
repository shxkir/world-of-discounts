"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/store";

gsap.registerPlugin(ScrollTrigger);

export function TreasureHunt() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: root.current,
        start: "top 70%",
        end: "bottom 40%",
        onUpdate: (self: { progress: number }) => {
          const next = Math.min(products.length - 1, Math.floor(self.progress * products.length));
          setIndex(next);
        },
      };
      ScrollTrigger.create(trigger);

      if (!reduced) {
        gsap.from(".hunt-item", {
          scrollTrigger: { trigger: root.current, start: "top 80%" },
          y: 80,
          x: (i) => (i % 2 === 0 ? -60 : 60),
          rotate: (i) => (i % 2 === 0 ? -12 : 12),
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const featured = products[index];

  return (
    <section id="finds" ref={root} className="overflow-hidden bg-aisle px-4 py-20 text-cream md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ticket">What will you find today?</p>
        <h2 className="mt-3 max-w-4xl font-display text-5xl uppercase leading-[0.85] md:text-8xl">
          You never know what you’ll find.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-cream/80">
          A treasure-hunt shop. Walk in for milk. Walk out with a freezer find, a snack run and something you didn’t know was there.
        </p>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
            {products.map((product, i) => (
              <div
                key={product.id}
                className={`hunt-item overflow-hidden rounded-2xl border-[3px] border-cream/20 bg-cream transition-transform ${
                  i === index ? "scale-105 border-ticket" : "opacity-70"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={240}
                  height={320}
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="rounded-[1.8rem] border-[3px] border-ticket bg-ink p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ticket">Now on the shelf</p>
            <p className="mt-3 font-display text-5xl uppercase leading-none">{featured.name}</p>
            <p className="mt-4 text-cream/75">
              Demo assortment only. Real stock moves through the week — prices stay on the tickets in store.
            </p>
            <div className="mt-6 sticker w-fit px-4 py-3">
              <p className="font-display text-4xl leading-none">{featured.priceLabel}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em]">{featured.priceNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
