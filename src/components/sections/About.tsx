"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const animation = useScrollAnimation();

  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div {...animation} className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Card className="overflow-hidden p-3">
            <div className="flex min-h-[320px] items-center justify-center rounded-[1.35rem] border border-dashed border-white/10 bg-[radial-gradient(circle_at_top,rgba(108,99,255,0.2),transparent_40%),linear-gradient(180deg,#111,#0d0d0d)] text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-secondary">Placeholder</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Votre portrait / visuel</h3>
              </div>
            </div>
          </Card>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-secondary">À propos</p>
            <h2 className="section-title mt-4">Une approche créative, technique et orientée expérience.</h2>
            <p className="section-copy">
              Je développe des interfaces modernes qui combinent esthétique, clarté et performance. Mon objectif est de transformer une idée en une expérience numérique mémorable, avec une attention particulière portée au détail, au rythme visuel et à la fluidité.
            </p>
            <p className="section-copy">
              Ce portfolio MVP pose les bases d’un univers premium en dark mode : sections immersives, composants réutilisables, animations subtiles et espace d’expérimentation 3D prêt à évoluer vers une version encore plus ambitieuse.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
