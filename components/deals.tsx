"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useId, useState, type KeyboardEvent } from "react";
import { Arrow, Mark } from "@/components/icons";
import { Kicker } from "@/components/ui";
import { worldOfDiscounts } from "@/data/world-of-discounts";

export function DealWall() {
  const [activeDeal, setActiveDeal] = useState(0);
  const { deals, location } = worldOfDiscounts;
  const active = deals[activeDeal];
  const tabPrefix = useId();

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const last = deals.length - 1;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        setActiveDeal((index) => (index === last ? 0 : index + 1));
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        setActiveDeal((index) => (index === 0 ? last : index - 1));
      }
      if (event.key === "Home") {
        event.preventDefault();
        setActiveDeal(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setActiveDeal(last);
      }
    },
    [deals.length],
  );

  return (
    <section id="deals" className="bg-cream px-[clamp(1.2rem,7vw,8rem)] py-[clamp(5rem,11vw,11rem)]" aria-labelledby="deals-title">
      <Kicker index="01">What’s on the wall</Kicker>
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 id="deals-title" className="display-title text-[clamp(3.5rem,8.8vw,8.5rem)]">
          THE
          <br />
          <em>DEAL WALL.</em>
        </h2>
        <p className="mb-4 max-w-[270px] leading-snug">
          Prices and specials are confirmed in store — because the good stuff moves fast.
        </p>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(250px,.7fr)]">
        <div
          className="grid grid-cols-2 gap-4"
          role="tablist"
          aria-label="Deal wall selections"
          onKeyDown={onKeyDown}
        >
          {deals.map((deal, index) => {
            const selected = index === activeDeal;
            return (
              <button
                key={deal.name}
                id={`${tabPrefix}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${tabPrefix}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveDeal(index)}
                className={`relative min-h-[205px] overflow-hidden border-2 border-ink p-4 text-left transition ${
                  selected ? "-translate-x-1 -translate-y-1 shadow-[7px_8px_0_#11120e]" : "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_8px_0_#11120e]"
                }`}
                style={{ background: `color-mix(in srgb, ${deal.color} 50%, #f6efe2)` }}
              >
                <span className="relative z-10 inline-block bg-ink px-1.5 py-1 font-mono text-[0.58rem] tracking-[0.1em] text-cream">
                  {deal.badge}
                </span>
                <Mark name={deal.icon} className="absolute top-6 right-4 z-0 h-[78px] w-[78px]" />
                <span className="mt-[4.6rem] block font-mono text-[0.62rem] tracking-[0.08em] uppercase">{deal.category}</span>
                <strong className="relative z-10 mt-1 block max-w-[150px] text-[clamp(1.25rem,2vw,1.9rem)] leading-none tracking-[-0.07em]">
                  {deal.name}
                </strong>
                <span className="absolute right-4 bottom-3 text-2xl" aria-hidden="true">
                  ↗
                </span>
              </button>
            );
          })}
        </div>

        <aside
          id={`${tabPrefix}-panel`}
          role="tabpanel"
          aria-labelledby={`${tabPrefix}-tab-${activeDeal}`}
          className="flex min-h-[340px] flex-col items-start border-2 border-ink bg-ink p-[clamp(1.5rem,3vw,3rem)] text-cream"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex h-full w-full flex-col items-start"
            >
              {active.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={active.image} alt="" className="mb-auto h-16 w-16 rounded-full object-cover" />
              ) : (
                <div className="mb-auto grid size-16 place-items-center rounded-full text-ink" style={{ background: active.color }}>
                  <Mark name={active.icon} className="h-9 w-9" />
                </div>
              )}
              <p className="mt-8 font-mono text-[0.7rem] tracking-[0.08em] uppercase" style={{ color: active.color }}>
                {active.badge}
              </p>
              <h3 className="mb-3 text-[clamp(2rem,3.2vw,3.2rem)] leading-none tracking-[-0.08em]">{active.name}</h3>
              <strong className="inline-block px-2.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.09em] text-ink" style={{ background: active.color }}>
                {active.price}
              </strong>
              <p className="mt-3 max-w-[230px] text-[0.92rem] leading-snug opacity-75">{active.availability}</p>
              <a href={location.directionsUrl} target="_blank" rel="noreferrer" className="mt-auto border-b border-cream pb-1 font-mono text-[0.66rem] tracking-[0.06em]">
                COME SEE WHAT’S THERE <Arrow />
              </a>
            </motion.div>
          </AnimatePresence>
        </aside>
      </div>
      <p className="mt-6 font-mono text-[0.7rem] opacity-70">
        No online price list yet — call or visit for today’s in-store range and pricing.
      </p>
    </section>
  );
}
