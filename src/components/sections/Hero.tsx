"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { products, store } from "@/data/store";

const orbit = [
  { product: products[0], x: "4%", y: "10%", w: "w-[22vw] max-w-44", tilt: "-14deg", delay: "0s" },
  { product: products[2], x: "78%", y: "8%", w: "w-[24vw] max-w-48", tilt: "10deg", delay: "0.4s" },
  { product: products[3], x: "8%", y: "58%", w: "w-[18vw] max-w-36", tilt: "8deg", delay: "0.8s" },
  { product: products[4], x: "72%", y: "56%", w: "w-[20vw] max-w-40", tilt: "-8deg", delay: "0.2s" },
  { product: products[5], x: "86%", y: "32%", w: "w-[16vw] max-w-32", tilt: "16deg", delay: "1s" },
  { product: products[8], x: "2%", y: "34%", w: "w-[16vw] max-w-28", tilt: "-6deg", delay: "1.2s" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(".hero-copy > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".hero-pack", {
        scale: 0.6,
        opacity: 0,
        rotate: 18,
        duration: 1.1,
        stagger: 0.08,
        ease: "back.out(1.4)",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-ticket/70 blur-0" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-sale/25" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-sky/25" />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {orbit.map((item) => (
          <div
            key={item.product.id}
            className="hero-pack floaty absolute"
            style={{
              left: item.x,
              top: item.y,
              animationDelay: item.delay,
              "--tilt": item.tilt,
            } as React.CSSProperties}
          >
            <div className={`${item.w} rotate-[var(--tilt)]`}>
              <div className="overflow-hidden rounded-[1.3rem] border-[3px] border-ink bg-cream shadow-[10px_14px_0_rgba(22,18,11,0.16)]">
                <Image
                  src={item.product.image}
                  alt={item.product.alt}
                  width={360}
                  height={480}
                  priority
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-copy relative z-10 mx-auto flex min-h-[72svh] max-w-5xl flex-col items-center justify-center text-center">
        <p className="sticker mb-6 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em]">
          {store.tagline}
        </p>
        <h1 className="font-display text-[clamp(3.4rem,12vw,9.4rem)] leading-[0.82] uppercase">
          Your local place
          <br />
          for a <span className="text-sale">great deal.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl">
          {store.heroSupport}
        </p>
        <div className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#categories"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-ink px-7 font-display text-xl uppercase tracking-wide text-ticket"
          >
            {store.primaryCta}
          </a>
          <a
            href={store.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full border-[3px] border-ink bg-cream px-7 font-display text-xl uppercase tracking-wide"
          >
            {store.secondaryCta}
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
          {store.address.line1} · {store.area}
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-4 flex max-w-5xl justify-center gap-3 md:hidden">
        {products.slice(0, 4).map((product, i) => (
          <div
            key={product.id}
            className="hero-pack w-20 overflow-hidden rounded-2xl border-[3px] border-ink bg-cream"
            style={{ transform: `rotate(${i % 2 === 0 ? -6 : 6}deg)` }}
          >
            <Image src={product.image} alt={product.alt} width={160} height={210} className="aspect-[3/4] object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
