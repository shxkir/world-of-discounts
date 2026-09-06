import { MapPinned, Phone } from "lucide-react";
import { store } from "@/data/store";

export function MobileDock() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-2 overflow-hidden rounded-[1.6rem] border-[3px] border-ink bg-ink shadow-[6px_8px_0_rgba(22,18,11,0.25)]">
        <a
          href={`tel:${store.phone.tel}`}
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-ticket font-display text-lg uppercase tracking-wide text-ink"
        >
          <Phone className="h-5 w-5" aria-hidden />
          Call
        </a>
        <a
          href={store.map.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-sale font-display text-lg uppercase tracking-wide text-cream"
        >
          <MapPinned className="h-5 w-5" aria-hidden />
          Directions
        </a>
      </div>
    </div>
  );
}
