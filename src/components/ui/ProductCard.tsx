import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Product } from "@/data/store";

export function ProductCard({
  product,
  className,
  tilt = "-3deg",
}: {
  product: Product;
  className?: string;
  tilt?: string;
}) {
  return (
    <figure
      className={cn("relative", className)}
      style={{ "--tilt": tilt } as React.CSSProperties}
    >
      <div className="relative overflow-hidden rounded-[1.4rem] border-[3px] border-ink bg-cream shadow-[8px_10px_0_rgba(22,18,11,0.14)]">
        <Image
          src={product.image}
          alt={product.alt}
          width={733}
          height={1100}
          className="aspect-[3/4] w-full object-cover"
          sizes="(max-width: 768px) 46vw, 240px"
        />
        {product.demo ? (
          <figcaption className="absolute left-3 top-3 rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ticket">
            Demo
          </figcaption>
        ) : null}
        <div className="absolute bottom-3 right-3 rotate-[-6deg]">
          <div className="sticker px-3 py-2 text-center">
            <p className="font-display text-2xl leading-none">{product.priceLabel}</p>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em]">
              {product.priceNote}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 font-display text-xl uppercase tracking-wide">{product.name}</p>
    </figure>
  );
}
