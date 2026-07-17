"use client";

/*
 * Le fil du couple — les deux danseurs du logo (lui en bleu, elle en rose)
 * traversent la page en dansant : leurs tracés se dessinent au scroll
 * entre les sections. Chaque figure raconte un pas différent.
 */

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type Figure = "croise" | "tour" | "promenade";

const FIGURES: Record<Figure, { bleu: string; rose: string }> = {
  // Ils se croisent deux fois, comme un chassé-croisé
  croise: {
    bleu: "M -20 40 C 200 40 320 100 600 100 S 1000 40 1220 40",
    rose: "M -20 100 C 200 100 320 40 600 40 S 1000 100 1220 100",
  },
  // Il la fait tourner : elle boucle au centre, lui garde le cap
  tour: {
    bleu: "M -20 96 C 240 96 420 92 540 84 C 660 76 820 88 1220 88",
    rose: "M -20 66 C 220 66 400 62 500 58 C 580 54 640 24 680 46 C 716 66 700 106 644 102 C 588 98 596 56 668 52 C 760 48 900 62 1220 62",
  },
  // Promenade : côte à côte, sur la même vague
  promenade: {
    bleu: "M -20 55 Q 140 20 300 55 T 620 55 T 940 55 T 1260 55",
    rose: "M -20 95 Q 140 60 300 95 T 620 95 T 940 95 T 1260 95",
  },
};

export default function FigureDeDanse({ figure = "croise" }: { figure?: Figure }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduce = useReducedMotion();
  const d = FIGURES[figure];

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-auto max-w-6xl px-5 hidden sm:block">
      <svg viewBox="0 0 1200 140" fill="none" className="w-full h-auto">
        {([
          { path: d.bleu, color: "var(--color-ciel-400)", delay: 0 },
          { path: d.rose, color: "var(--color-rose-400)", delay: 0.25 },
        ] as const).map((t) => (
          <motion.path
            key={t.path}
            d={t.path}
            stroke={t.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.5"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={inView || reduce ? { pathLength: 1 } : {}}
            transition={{ duration: 1.9, delay: t.delay, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
