"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Compétences</p>
          <h2 className="section-title mt-4">Un socle polyvalent pour créer des produits marquants.</h2>
          <p className="section-copy">
            Frontend, backend, 3D et design : une stack pensée pour construire des expériences complètes et cohérentes.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55 }}
            >
              <Card className="h-full p-6">
                <div className="text-3xl">{skill.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{skill.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
