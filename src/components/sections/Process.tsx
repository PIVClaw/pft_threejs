"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Comprendre le contexte, les objectifs, les utilisateurs et l’intention de marque.",
  },
  {
    number: "02",
    title: "Conception",
    description: "Structurer l’expérience, l’interface et la direction visuelle autour d’un système cohérent.",
  },
  {
    number: "03",
    title: "Développement",
    description: "Construire une interface rapide, animée et robuste avec une attention portée à la qualité.",
  },
  {
    number: "04",
    title: "Livraison",
    description: "Finaliser, tester, optimiser et préparer la mise en ligne dans une logique évolutive.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Process</p>
          <h2 className="section-title mt-4">Découverte → Conception → Développement → Livraison</h2>
          <p className="section-copy">
            Une méthode simple et lisible pour transformer une vision en résultat concret, sans sacrifier l’ambition créative.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card className="relative h-full p-6">
                <span className="text-xs uppercase tracking-[0.28em] text-secondary">{step.number}</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
