import { Button, Kicker } from "@/components/ui";
import { worldOfDiscounts } from "@/data/world-of-discounts";

export function Visit() {
  const { business, contact, location, hours } = worldOfDiscounts;

  return (
    <section id="visit" className="grid min-h-[650px] overflow-hidden bg-ink text-cream md:grid-cols-2" aria-labelledby="visit-title">
      <div className="relative min-h-[300px] overflow-hidden bg-[#f4c460] text-ink" aria-hidden="true">
        <p className="absolute top-[9%] left-[8%] text-[clamp(2.4rem,5vw,5rem)] leading-none font-black tracking-[-0.1em] opacity-90">
          CAMBRIDGE PARK
        </p>
        <span className="absolute top-[51%] -left-[13%] block h-[18px] w-[105%] -rotate-[34deg] border-y-2 border-ink bg-cream" />
        <span className="absolute top-[62%] left-[12%] block h-[18px] w-[110%] rotate-[46deg] border-y-2 border-ink bg-cream" />
        <span className="absolute top-[27%] -left-[10%] block h-[18px] w-[90%] -rotate-[7deg] border-y-2 border-ink bg-cream" />
        <span className="absolute top-[47%] left-[52%] z-10 grid size-[76px] -rotate-45 place-items-center rounded-[50%_50%_50%_0] border-[3px] border-ink bg-coral text-3xl shelf-shadow">
          <span className="rotate-45">★</span>
        </span>
        <span className="absolute top-[53%] left-[62%] -rotate-7 bg-ink px-2 py-1 font-mono text-[0.7rem] font-semibold text-cream">
          OXFORD ST
        </span>
      </div>

      <div className="flex flex-col justify-center px-[clamp(1.2rem,7vw,8rem)] py-[clamp(3rem,7vw,8rem)] max-md:pb-24">
        <Kicker index="05">Come on by</Kicker>
        <h2 id="visit-title" className="display-title my-4 text-[clamp(3.2rem,6.2vw,6.5rem)] text-cream">
          YOUR NEXT
          <br />
          <em>GOOD FIND</em>
          <br />
          IS WAITING.
        </h2>
        <address className="flex flex-col text-[1.05rem] leading-snug not-italic">
          <strong className="mb-1 font-mono text-[0.75rem] tracking-[0.07em]">{business.name}</strong>
          <span>{location.street}</span>
          <span>
            {location.suburb} {location.region} {location.postalCode}
          </span>
        </address>
        <a href={contact.phoneHref} className="visit-phone my-4 inline-block w-max border-b-2 border-cream text-[1.3rem] font-extrabold">
          {contact.phone}
        </a>
        <p className="hours-chip my-2 inline-flex w-max items-center gap-2 bg-lime px-2.5 py-2 font-mono text-[0.65rem] tracking-[0.06em] text-ink">
          <span aria-hidden="true">◷</span> {hours.status}
        </p>
        {hours.weekly.length > 0 ? (
          <ul className="mt-3 max-w-xs font-mono text-xs">
            {hours.weekly.map((row) => (
              <li key={row.day} className="flex justify-between gap-4 border-b border-white/15 py-1">
                <span>{row.day}</span>
                <span>
                  {row.opens}–{row.closes}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 max-w-xs font-mono text-[0.68rem] opacity-70">{hours.note}</p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={contact.phoneHref} variant="light">
            CALL NOW
          </Button>
          <Button href={location.directionsUrl} variant="outline" external>
            GET DIRECTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}
