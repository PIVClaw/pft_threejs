export type SkillCategory = {
  title: string;
  icon: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "⚛️",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: ["Node.js", "API REST", "Auth", "Bases de données", "Architecture"],
  },
  {
    title: "3D / WebGL",
    icon: "🧊",
    items: ["Three.js", "React Three Fiber", "Shaders", "Optimisation", "Interactions"],
  },
  {
    title: "Design",
    icon: "🎨",
    items: ["UI Systems", "UX Thinking", "Prototypage", "Motion", "Direction visuelle"],
  },
];
