"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Mark } from "@/components/icons";
import { Button, Kicker } from "@/components/ui";
import { worldOfDiscounts } from "@/data/world-of-discounts";

const floats = [
  { name: "bottle" as const, className: "right-[18%] top-[16%] bg-cream", delay: 0 },
  { name: "candy" as const, className: "right-[4%] top-[42%] bg-ink text-cream", delay: 0.15 },
  { name: "jar" as const, className: "left-[58%] bottom-[14%] bg-sky", delay: 0.3 },
];

const shapes = [
  { name: "chip" as const, className: "left-[10%] h-[54%] w-[17%] rounded-t-lg bg-[#ffb4bb] -rotate-6", label: "VALUE" },
  { name: "chip" as const, className: "left-[29%] h-[38%] w-[27%] rounded-t-[50%] bg-banana rotate-6", label: "" },
  { name: "bottle" as const, className: "left-[59%] h-[67%] w-[19%] rounded-t-xl bg-sky -rotate-3", label: "" },
  { name: "bag" as const, className: "left-[80%] h-[43%] w-[19%] rounded-md bg-cream rotate-[9deg]", label: "" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const sunY = useTransform(scrollY, [0, 500], [0, -60]);
  const shelfY = useTransform(scrollY, [0, 500], [0, -40]);
  const { business, location } = worldOfDiscounts;

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-lime px-[clamp(1.2rem,10vw,10rem)] pt-[clamp(8rem,17vh,10rem)] pb-32" aria-labelledby="hero-title">
      <div className="noise pointer-events-none absolute inset-0 -z-10 opacity-20" />
      <motion.div
        aria-hidden="true"
        className="absolute top-[12%] -right-[5vw] -z-10 aspect-square w-[min(55vw,760px)] rounded-full bg-coral"
        style={reduce ? undefined : { y: sunY }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-15 [background-image:linear-gradient(#11120e_1px,transparent_1px),linear-gradient(90deg,#11120e_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(90deg,rgba(0,0,0,.8),transparent_75%)]"
      />

      {floats.map((item) => (
        <motion.div
          key={item.name + item.className}
          aria-hidden="true"
          className={`hero-orbit absolute z-10 grid aspect-square w-[clamp(60px,8vw,116px)] place-items-center rounded-full border-2 border-ink ticket-shadow ${item.className}`}
          animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5 + item.delay, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          <Mark name={item.name} className="h-[58%] w-[58%]" />
        </motion.div>
      ))}

      <div className="hero-float absolute top-[24%] right-[12%] z-10 rotate-12 border-2 border-ink bg-cream p-2.5 font-mono text-[clamp(0.65rem,1vw,0.9rem)] leading-tight ticket-shadow" aria-hidden="true">
        BARGAINS
        <br />
        <b className="font-display text-[1.2em]">THIS WAY</b>
      </div>
      <div className="hero-float absolute right-[30%] bottom-[19%] z-10 -rotate-6 border-2 border-ink bg-sky p-2.5 font-mono text-[clamp(0.65rem,1vw,0.9rem)] leading-tight ticket-shadow" aria-hidden="true">
        GOOD
        <br />
        <b className="font-display text-[1.2em]">FIND!</b>
      </div>

      <div className="relative z-20 max-w-[760px]">
        <Kicker>Cambridge Park’s local value stop</Kicker>
        <h1 id="hero-title" className="display-title mb-6 max-w-[780px] text-[clamp(4.1rem,10.9vw,10.8rem)]">
          BIG VALUE.
          <br />
          <em>EVERY DAY.</em>
        </h1>
        <p className="mb-8 max-w-[470px] text-[clamp(1rem,1.45vw,1.3rem)] leading-snug font-medium">
          {business.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="#deals">EXPLORE DEALS</Button>
          <Button href={location.directionsUrl} variant="ghost" external>
            GET DIRECTIONS
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-2 font-mono text-[0.78rem]">
          <span className="grid size-[23px] place-items-center rounded-full bg-ink text-lime" aria-hidden="true">
            ★
          </span>
          <b className="font-display">{business.googleRating} / 5</b>
          <span>on Google · {business.googleReviewCount} reviews</span>
        </div>
      </div>

      <motion.div aria-hidden="true" className="absolute right-[3%] bottom-[-3vh] z-10 h-[42vh] w-[min(48vw,690px)] max-md:right-[-8%] max-md:h-[34vh] max-md:w-[88vw]" style={reduce ? undefined : { y: shelfY }}>
        <div className="absolute bottom-[9%] h-[11px] w-full bg-ink shadow-[0_4px_0_rgba(17,18,14,.2)]" />
        <div className="absolute bottom-0 h-[11px] w-full bg-ink" />
        {shapes.map((shape) => (
          <div key={shape.className} className={`product-shape absolute bottom-[12%] grid place-items-center border-[3px] border-ink shelf-shadow ${shape.className}`}>
            {shape.label ? <span className="-rotate-90 font-mono text-[0.7rem]">{shape.label}</span> : <Mark name={shape.name} className="h-[55%] w-[55%]" />}
          </div>
        ))}
      </motion.div>

      <p className="absolute bottom-6 left-[clamp(1.2rem,3vw,3.5rem)] hidden font-mono text-[0.65rem] font-medium tracking-[0.1em] md:block">
        SCROLL TO DISCOVER <span className="bob ml-2 inline-block text-xl">↓</span>
      </p>
    </section>
  );
}
