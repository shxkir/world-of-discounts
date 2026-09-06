import { nav, store } from "@/data/store";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <p className="font-display text-5xl uppercase leading-[0.85] md:text-6xl">
            World of
            <br />
            <span className="text-ticket">Discounts</span>
          </p>
          <p className="mt-5 max-w-sm font-mono text-xs uppercase tracking-[0.18em] text-ticket">
            {store.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ticket">Visit</p>
          <p className="mt-3 text-lg leading-snug">
            {store.address.line1}
            <br />
            {store.address.line2}
          </p>
          <a href={`tel:${store.phone.tel}`} className="mt-4 inline-block text-lg underline decoration-ticket">
            {store.phone.display}
          </a>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ticket">Google rating</p>
          <p className="mt-3 font-display text-5xl leading-none">{store.rating}</p>
          <p className="mt-1 text-sm">/ 5 · {store.reviewCount} reviews</p>
        </div>

        <nav className="grid gap-2 md:col-span-2" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="font-mono text-xs uppercase tracking-[0.16em] hover:text-ticket">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-cream/15 px-4 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-cream/55 md:px-6">
        Cambridge Park · Oxford Street · Penrith area · Local grocery & convenience
      </div>
    </footer>
  );
}
