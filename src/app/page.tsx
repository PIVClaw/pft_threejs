import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Playground3D } from "@/components/sections/Playground3D";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Playground3D />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
