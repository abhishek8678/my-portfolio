import { Navbar } from "../components/Navbar";
import { AmbientOrbs } from "@/components/AmbientOrbs";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
      <div className="min-h-screen bg-min-bg text-min-foreground overflow-x-hidden relative selection:bg-min-accent/30 selection:text-white">
       <AmbientOrbs />

        <Navbar />

         <main className="relative z-10 flex flex-col gap-0 md:gap-8 lg:gap-16">
           <HeroSection />
           <AboutSection />
           <SkillsSection />
           <ProjectsSection />
           <ContactSection />
         </main>

        <Footer />
    </div>
  );
}
