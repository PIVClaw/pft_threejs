"use client";

import { Variants } from "framer-motion";
import { useMemo } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function useScrollAnimation(delay = 0) {
  return useMemo(
    () => ({
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.65, ease, delay },
    }),
    [delay],
  );
}

export const staggerReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};
