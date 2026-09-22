import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import ContactCard from '@/components/ContactCard';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Ambient background glow & developer grid pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      {/* Rangkaian Komponen Terstruktur Rapi */}
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Experience />
      <TechStack />
      <ContactCard />
    </main>
  );
}