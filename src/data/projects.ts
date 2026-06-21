export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Studio Portfolio Immersif",
    description:
      "Une vitrine premium pensée pour valoriser une identité digitale forte avec animations fluides, transitions élégantes et narration visuelle.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    href: "#",
  },
  {
    title: "Expérience Produit 3D",
    description:
      "Une page de démonstration orientée conversion avec mise en scène WebGL, micro-interactions et mise en avant d’un produit digital.",
    tags: ["Three.js", "R3F", "UX"],
    href: "#",
  },
  {
    title: "Dashboard Créatif",
    description:
      "Une interface moderne dark mode conçue pour présenter des données, workflows et visuels interactifs dans un environnement cohérent.",
    tags: ["TypeScript", "Design System", "Data UI"],
    href: "#",
  },
];
