import { Clock3, MapPinned, Phone } from "lucide-react";
import { store } from "@/data/store";

export function Visit() {
  return (
    <section id="visit" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sale">Find us</p>
          <h2 className="mt-3 font-display text-6xl uppercase leading-[0.82] md:text-8xl">
            96 Oxford St
          </h2>
          <p className="mt-2 font-display text-3xl uppercase text-ink-2">{store.address.line2}</p>

          <div className="mt-8 grid gap-4">
            <a
              href={`tel:${store.phone.tel}`}
              className="flex min-h-16 items-center gap-4 rounded-[1.3rem] border-[3px] border-ink bg-cream px-5"
            >
              <Phone className="h-6 w-6" aria-hidden />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">Call store</span>
                <span className="font-display text-3xl uppercase">{store.phone.display}</span>
              </span>
            </a>
            <a
              href={store.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center gap-4 rounded-[1.3rem] border-[3px] border-ink bg-sale px-5 text-cream"
            >
              <MapPinned className="h-6 w-6" aria-hidden />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-cream/70">Get directions</span>
                <span className="font-display text-3xl uppercase">Open in Maps</span>
              </span>
            </a>
            <a
              href={store.map.listingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-16 items-center gap-4 rounded-[1.3rem] border-[3px] border-ink bg-ticket px-5"
            >
              <Clock3 className="h-6 w-6" aria-hidden />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em]">{store.hours.checkLabel}</span>
                <span className="text-sm text-ink-2">{store.hours.listingHintNote}</span>
              </span>
            </a>
          </div>

          <p className="mt-6 max-w-md text-sm text-ink-3">
            Recent listing status: {store.hours.listingHint}. A complete weekly timetable will appear here once the store supplies it.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border-[3px] border-ink bg-paper-2">
          <iframe
            title="Map showing World of Discounts on Oxford Street, Cambridge Park"
            src={store.map.embedUrl}
            className="h-[420px] w-full min-h-[420px] border-0 md:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {store.map.approximate ? (
            <p className="border-t-[3px] border-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
              Map pin is approximate to Oxford Street, Cambridge Park. Use Get Directions for the exact listing.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
