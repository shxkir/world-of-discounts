"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return children;
  }

  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.1, smoothWheel: true, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
