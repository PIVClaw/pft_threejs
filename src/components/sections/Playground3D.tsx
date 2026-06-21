"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const Scene = dynamic(
  () => import("@/components/three/Scene").then((mod) => mod.Scene),
  { ssr: false },
);

export function Playground3D() {
  return (
    <section id="playground" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Playground 3D</p>
          <h2 className="section-title mt-4">Zone d’expérimentation pour interactions WebGL.</h2>
          <p className="section-copy">
            Un espace pour présenter des tests visuels, des objets réactifs au mouvement et des explorations créatives autour de Three.js.
          </p>
        </motion.div>

        <Card className="mt-10 overflow-hidden p-3">
          <div className="relative h-[320px] rounded-[1.4rem] border border-white/6 bg-black sm:h-[420px]">
            <div className="hidden h-full w-full md:block">
              <Scene interactive />
            </div>
            <div className="flex h-full items-center justify-center px-6 text-center md:hidden">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-secondary">Mode mobile optimisé</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Canvas 3D allégé pour préserver les performances.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                  Sur petit écran, cette section peut être enrichie plus tard avec une version simplifiée, une image statique ou un rendu basse qualité.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
              Playground 3D — Zone d’expérimentation
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
