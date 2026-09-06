import { store } from "@/data/store";

const bits = [
  store.tagline,
  store.secondaryTagline,
  "CAMBRIDGE PARK",
  "OXFORD STREET",
  "CHECK IN STORE",
  "FAMILY FINDS",
];

export function MarqueeBand({ reverse = false }: { reverse?: boolean }) {
  const row = [...bits, ...bits, ...bits];
  return (
    <div className={`${reverse ? "bg-sale text-cream" : "bg-ink text-ticket"} overflow-hidden border-y-[3px] border-ink py-3`}>
      <div className={`flex w-max gap-8 ${reverse ? "marquee-track-rev" : "marquee-track"}`}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 font-display text-2xl uppercase tracking-wide md:text-4xl">
            {item}
            <span aria-hidden className={reverse ? "text-ticket" : "text-sale"}>
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
