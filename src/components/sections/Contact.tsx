"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter/X", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.28em] text-secondary">Contact</p>
            <h2 className="section-title mt-4">Parlons de votre prochaine expérience digitale.</h2>
            <p className="section-copy">
              Ce formulaire est volontairement non fonctionnel dans cette V1, mais l’interface est prête à être connectée à votre stack email ou à un backend.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-secondary/40 hover:text-secondary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <Card className="p-6 sm:p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-white/85">
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50 focus:bg-white/7"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-white/85">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="vous@email.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50 focus:bg-white/7"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-white/85">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Décrivez votre projet, votre besoin ou votre idée."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50 focus:bg-white/7"
                  />
                </div>
                <Button className="w-full sm:w-auto">Envoyer un message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
