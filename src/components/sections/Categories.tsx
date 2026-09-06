"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories, products } from "@/data/store";
import { ProductCard } from "@/components/ui/ProductCard";

gsap.registerPlugin(ScrollTrigger);

export function Categories() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(categories[0].id);
  const selected = categories.find((c) => c.id === active) ?? categories[0];
  const assortment = useMemo(
    () => products.filter((p) => p.category === selected.id),
    [selected.id],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(".cat-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 50,
        opacity: 0,
        rotate: 4,
        stagger: 0.06,
        duration: 0.7,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="categories" ref={root} className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sale">The aisles</p>
            <h2 className="mt-2 font-display text-5xl uppercase leading-[0.85] md:text-7xl">
              What fills
              <br />
              the basket
            </h2>
          </div>
          <p className="max-w-sm text-ink-2">
            Inventory changes. These categories stay. Explore the mix — photos here are a demo assortment until the owner adds the real catalogue.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const on = category.id === active;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                aria-pressed={on}
                className={`cat-card group relative min-h-40 overflow-hidden rounded-[1.6rem] border-[3px] border-ink text-left transition-transform ${
                  on ? "bg-ink text-cream" : "bg-cream"
                }`}
              >
                <Image
                  src={category.image}
                  alt=""
                  width={400}
                  height={300}
                  className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative z-10 flex h-full flex-col justify-between p-5">
                  <span
                    className="self-start rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{ background: category.accent, color: "#16120b" }}
                  >
                    Explore
                  </span>
                  <div>
                    <h3 className="font-display text-4xl uppercase leading-none">{category.name}</h3>
                    <p className={`mt-2 max-w-xs text-sm ${on ? "text-cream/80" : "text-ink-2"}`}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.8rem] border-[3px] border-ink bg-paper-2 p-5 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-3xl uppercase">{selected.name}</h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
              Demo assortment · prices check in store
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {(assortment.length ? assortment : products.slice(0, 4)).map((product, i) => (
              <ProductCard key={product.id} product={product} tilt={i % 2 ? "4deg" : "-4deg"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
