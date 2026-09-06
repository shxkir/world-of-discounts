"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, store } from "@/data/store";

gsap.registerPlugin(ScrollTrigger);

export function BasketScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(".drop-item", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: -180,
        rotate: (i) => (i % 2 === 0 ? -25 : 25),
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "bounce.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sale">The basket</p>
        <h2 className="mt-3 font-display text-5xl uppercase leading-[0.85] md:text-7xl">
          Ready to find
          <br />
          your next bargain?
        </h2>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative z-10 flex justify-center gap-3">
            {products.slice(0, 5).map((product, i) => (
              <div
                key={product.id}
                className="drop-item w-16 overflow-hidden rounded-xl border-[3px] border-ink bg-cream md:w-24"
                style={{ transform: `rotate(${i % 2 ? 8 : -8}deg)` }}
              >
                <Image src={product.image} alt={product.alt} width={160} height={210} className="aspect-[3/4] object-cover" />
              </div>
            ))}
          </div>
          <Image
            src="/products/wod-basket.webp"
            alt="Illustrated shopping basket waiting to be filled"
            width={1100}
            height={733}
            className="relative z-0 -mt-6 w-full rounded-[2rem] border-[3px] border-ink object-cover"
          />
        </div>

        <a
          href={store.map.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-sale px-8 font-display text-2xl uppercase tracking-wide text-cream"
        >
          Visit World of Discounts
        </a>
      </div>
    </section>
  );
}
