"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const transform = useMotionTemplate`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <motion.a
      href={project.href}
      style={{ transform }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        rotateX.set(-((offsetY - centerY) / centerY) * 6);
        rotateY.set(((offsetX - centerX) / centerX) * 8);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      whileHover={{ y: -6 }}
      className="block h-full"
    >
      <Card className="h-full p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-secondary">
            Projet
          </span>
          <span className="text-white/40">↗</span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Projets</p>
          <h2 className="section-title mt-4">Des concepts conçus pour séduire, convaincre et convertir.</h2>
          <p className="section-copy">
            Une sélection de projets placeholder pour exposer un style visuel premium, une direction produit claire et un savoir-faire technique moderne.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
