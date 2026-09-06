import { store } from "@/data/store";

export function Community() {
  return (
    <section id="about" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sale">Owner / community</p>
          <h2 className="mt-3 font-display text-6xl uppercase leading-[0.82] md:text-8xl">
            {store.community.headline}
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink-2">{store.community.copy}</p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rotate-[-2deg] rounded-[1.8rem] border-[3px] border-ink bg-ticket p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em]">From the reviews</p>
            <p className="mt-4 font-display text-4xl uppercase leading-[0.9]">
              {store.ownerMention} keeps coming up.
            </p>
            <p className="mt-5 text-lg leading-relaxed">{store.community.ownerNote}</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              No biography has been supplied. This note stays with what neighbours already said.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
