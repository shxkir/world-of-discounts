import { Arrow } from "@/components/icons";
import { Wordmark } from "@/components/ui";
import { worldOfDiscounts } from "@/data/world-of-discounts";

const { contact, location, social } = worldOfDiscounts;

const nav = [
  { href: "#deals", label: "Deals" },
  { href: "#finds", label: "Finds" },
  { href: "#story", label: "The store" },
  { href: "#visit", label: "Visit us" },
];

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-[-5rem] left-4 z-50 bg-white px-4 py-3 font-extrabold focus:top-4"
    >
      Skip to content
    </a>
  );
}

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex h-[76px] items-center justify-between bg-cream/85 px-[clamp(1rem,3vw,3.5rem)] backdrop-blur-md">
      <a href="#top" aria-label="World of Discounts home">
        <Wordmark className="text-[1.15rem] leading-none" />
      </a>
      <nav className="hidden items-center gap-8 text-[0.8rem] font-bold tracking-[0.08em] uppercase md:flex" aria-label="Main navigation">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="relative after:absolute after:right-full after:bottom-[-5px] after:left-0 after:h-0.5 after:bg-current after:transition-[right] hover:after:right-0">
            {item.label}
          </a>
        ))}
      </nav>
      <a href={contact.phoneHref} className="hidden border-b border-ink pb-1 font-mono text-[0.72rem] uppercase md:inline">
        Call us <Arrow className="ml-1" />
      </a>
    </header>
  );
}

export function Footer() {
  const socials = [
    social.instagram ? { href: social.instagram, label: "Instagram" } : null,
    social.facebook ? { href: social.facebook, label: "Facebook" } : null,
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <footer className="flex flex-col justify-between gap-4 bg-cream px-[clamp(1.2rem,3vw,3.5rem)] pt-8 pb-24 font-mono text-xs md:flex-row md:items-center md:pb-8">
      <a href="#top">
        <Wordmark className="text-base" />
      </a>
      <p>{location.formatted}</p>
      <div className="flex flex-wrap gap-4">
        {socials.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="border-b border-ink pb-0.5">
            {item.label}
          </a>
        ))}
        <a href={location.mapUrl} target="_blank" rel="noreferrer" className="border-b border-ink pb-0.5">
          View map ↗
        </a>
      </div>
    </footer>
  );
}

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-[1fr_1.45fr] border-t-2 border-ink bg-cream md:hidden">
      <a href={contact.phoneHref} className="flex items-center justify-center text-[0.75rem] font-black tracking-[0.05em]">
        CALL
      </a>
      <a
        href={location.directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center border-l-2 border-ink bg-lime text-[0.75rem] font-black tracking-[0.05em]"
      >
        DIRECTIONS <Arrow className="ml-1" />
      </a>
    </div>
  );
}
