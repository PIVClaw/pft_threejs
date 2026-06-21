"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Scene } from "@/components/three/Scene";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-90">
        <div className="hidden h-full w-full md:block">
          <Scene />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.15)_35%,rgba(10,10,10,0.9)_100%)]" />
      </div>

      <div className="section-shell grid-noise relative z-10 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-secondary"
          >
            Portfolio expérimental
          </motion.p>

          <motion.h1
            variants={item}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Votre Nom
          </motion.h1>

          <motion.h2
            variants={item}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 text-xl font-medium text-white/90 sm:text-2xl"
          >
            Développeur & Créateur Digital
          </motion.h2>

          <motion.p
            variants={item}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            Je conçois des expériences web immersives, élégantes et performantes pour mettre en valeur des idées, des produits et des identités visuelles.
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#projects">Voir mes projets</Button>
            <Button href="#contact" className="bg-transparent hover:bg-white/10 glow-secondary">
              Discutons de votre idée
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-primary to-secondary" />
      </motion.a>
    </section>
  );
}
