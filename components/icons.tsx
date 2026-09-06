import type { ReactNode } from "react";
import type { IconName } from "@/data/world-of-discounts";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const shapes: Record<IconName, ReactNode> = {
  jar: (
    <>
      <path {...stroke} d="M8 8h8v3H8zM7 11h10l-1 9H8z" />
      <path {...stroke} d="M10 15h4" />
    </>
  ),
  chip: (
    <>
      <path {...stroke} d="M7 5h10l1 15H6z" />
      <path {...stroke} d="M9 9c2-1 4 1 6 0M9 13c2-1 4 1 6 0" />
    </>
  ),
  bottle: (
    <>
      <path {...stroke} d="M10 3h4v4l2 3v10H8V10l2-3z" />
      <path {...stroke} d="M8 12h8" />
    </>
  ),
  candy: (
    <>
      <path {...stroke} d="M7 10 4 7m13 3 3-3M7 14l-3 3m13-3 3 3M8 8h8v8H8z" />
    </>
  ),
  sparkle: (
    <>
      <path {...stroke} d="m12 3 .9 5.1L18 9l-5.1.9L12 15l-.9-5.1L6 9l5.1-.9zM18 16l.5 2.5L21 19l-2.5.5L18 22l-.5-2.5L15 19l2.5-.5z" />
    </>
  ),
  care: (
    <>
      <path {...stroke} d="M9 4h6v5h2v11H7V9h2zM9 13h6M12 10v6" />
    </>
  ),
  snow: (
    <>
      <path {...stroke} d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M8.5 5l3.5 2 3.5-2M8.5 19l3.5-2 3.5 2" />
    </>
  ),
  bag: (
    <>
      <path {...stroke} d="M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2" />
      <path {...stroke} d="M10 13h4" />
    </>
  ),
  surprise: (
    <>
      <path {...stroke} d="M12 3a9 9 0 1 0 9 9" />
      <path {...stroke} d="M12 7a2 2 0 0 1 2 2c0 2-2 2-2 4m0 4h.01" />
    </>
  ),
};

export function Mark({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {shapes[name]}
    </svg>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={className}>
      ↗
    </span>
  );
}

export function ProductShape({
  name,
  color,
  className = "",
}: {
  name: IconName;
  color: string;
  className?: string;
}) {
  const radius = name === "chip" || name === "candy" || name === "surprise" ? "rounded-[28px]" : "rounded-[18px]";

  return (
    <div
      className={`relative flex aspect-[3/4] w-full items-center justify-center border-[3px] border-ink ${radius} ${className}`}
      style={{ background: color }}
    >
      <Mark name={name} className="h-[46%] w-[46%]" />
    </div>
  );
}
