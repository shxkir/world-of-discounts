"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journey, products } from "@/data/store";

gsap.registerPlugin(ScrollTrigger);

const tones = ["#ffe14a", "#fff8ea", "#e31837", "#0c6b4d", "#2ea8ff", "#ff3b7a", "#16120b"];

export function StoreJourney() {
  const root = useRef<HTMLElement>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 900px)").matches;
    const ctx = gsap.context(() => {
      if (reduced || !desktop || !scroller.current) return;
      const distance = scroller.current.scrollWidth - window.innerWidth;
      gsap.to(scroller.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="bg-paper-2">
      <div className="px-4 py-16 md:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sale">Store experience</p>
        <h2 className="mt-2 font-display text-5xl uppercase leading-[0.85] md:text-7xl">
          Walk in with us
        </h2>
      </div>
      <p className="px-4 pb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3 md:hidden">
        Swipe the aisle →
      </p>
      <div ref={scroller} className="flex w-max gap-4 overflow-visible px-4 pb-20 md:px-6 max-md:w-full max-md:overflow-x-auto max-md:scroll-px-4 max-md:snap-x">
        {journey.map((step, i) => {
          const dark = tones[i] === "#16120b" || tones[i] === "#0c6b4d" || tones[i] === "#e31837" || tones[i] === "#ff3b7a";
          return (
            <article
              key={step.id}
              className="relative h-[62vh] w-[82vw] max-w-[640px] shrink-0 snap-start overflow-hidden rounded-[2rem] border-[3px] border-ink p-7 md:w-[54vw]"
              style={{ background: tones[i], color: dark ? "#fff8ea" : "#16120b" }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-70">{step.label}</p>
              <h3 className="mt-6 font-display text-5xl uppercase leading-[0.85] md:text-7xl">{step.title}</h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed opacity-85">{step.copy}</p>
              {i === 2 || i === 4 ? (
                <div className="absolute bottom-6 right-6 w-32 rotate-12 overflow-hidden rounded-2xl border-[3px] border-ink md:w-40">
                  <Image
                    src={products[i % products.length].image}
                    alt=""
                    width={200}
                    height={260}
                    className="aspect-[3/4] object-cover"
                  />
                </div>
              ) : null}
              <span className="absolute bottom-6 left-7 font-display text-8xl leading-none opacity-15">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
