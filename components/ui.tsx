import type { ReactNode } from "react";
import { Arrow } from "@/components/icons";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1 font-black tracking-[-0.08em] ${className}`}>
      <span>WORLD</span>
      <i className="font-serif text-[0.62em] not-italic">OF</i>
      <span>DISCOUNTS</span>
    </span>
  );
}

export function Kicker({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-[0.7rem] font-medium tracking-[0.08em] uppercase">
      {index ? <span className="text-coral">{index}</span> : <span className="size-2 rounded-full bg-coral" />}
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "dark",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "ghost" | "light" | "outline";
  external?: boolean;
}) {
  const styles = {
    dark: "bg-ink text-cream border-ink",
    ghost: "bg-transparent text-ink border-ink",
    light: "bg-cream text-ink border-cream",
    outline: "bg-transparent text-cream border-cream",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 border-2 px-4 py-2 text-[0.75rem] font-extrabold tracking-[0.03em] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#11120e] ${styles}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <Arrow />
    </a>
  );
}
