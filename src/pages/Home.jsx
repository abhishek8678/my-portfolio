import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col bg-page min-h-screen relative text-foreground transition-colors duration-300 overflow-x-hidden">
      {/* Dark mode radiant ambient light-blue and purple glow mesh */}
      <div className="ambient-gradient-mesh">
        <div className="ambient-glow-purple" />
        <div className="ambient-glow-blue" />
        <div className="ambient-glow-bottom" />
      </div>

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};
