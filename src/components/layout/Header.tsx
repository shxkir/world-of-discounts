"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, store } from "@/data/store";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-paper/90 shadow-[0_8px_0_rgba(22,18,11,0.06)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <span className="sticker grid h-12 w-12 place-items-center font-display text-lg leading-none">
            {store.shortName}
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] uppercase tracking-wide md:text-2xl">
              World of
            </span>
            <span className="block font-display text-[1.35rem] uppercase tracking-wide text-sale md:text-2xl">
              Discounts
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-2 transition-colors hover:text-sale"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${store.phone.tel}`}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border-[3px] border-ink bg-cream px-4 font-mono text-[11px] uppercase tracking-[0.16em]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
          <a
            href={store.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-sale px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-cream"
          >
            Directions
          </a>
        </div>

        <button
          type="button"
          className="grid min-h-12 min-w-12 place-items-center rounded-full border-[3px] border-ink bg-ticket lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t-[3px] border-ink bg-paper px-4 py-6 lg:hidden"
      >
        <nav className="grid gap-2" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="min-h-12 border-b border-ink/15 py-3 font-display text-3xl uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={`tel:${store.phone.tel}`}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-ink font-mono text-xs uppercase tracking-[0.16em] text-ticket"
          >
            Call store
          </a>
          <a
            href={store.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-sale font-mono text-xs uppercase tracking-[0.16em] text-cream"
          >
            Directions
          </a>
        </div>
      </div>
    </header>
  );
}
