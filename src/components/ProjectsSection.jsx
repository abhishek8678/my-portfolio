import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

const projects = [
       {
        id : 1,
        title : "AI powered News Aggregator",
        description : "A full-stack AI-driven platform aggregating news from multiple APIs with automated cron-based fetching.",
        image : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
        tags : ["React", "AI", "Node.js"],
        demoUrl : "#",
        githubUrl : " #",
       },
       {
        id : 2,
        title : "Weather Dashboard Web App",
        description : "A modern responsive weather dashboard with real-time forecasting and interactive maps.",
        image : "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
        tags : ["React", "API"],
        demoUrl : "#",
        githubUrl : " #",
       },
       {
        id : 3,
        title : "ScoreMate",
        description : "A comprehensive academic tracking dashboard with AI-driven analytics and grading insights.",
        image : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        tags : ["React", "Tailwind"],
        demoUrl : "#",
        githubUrl : " #",
       },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 px-6 relative z-10 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-foreground text-shadow-neumorphic text-center">
          Featured <span className="text-accent underline decoration-accent/20 underline-offset-8">Projects</span>
        </h2>

        <p className="text-muted mb-16 max-w-2xl text-lg font-body leading-relaxed font-normal mx-auto text-center">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
            <Card key={key} hover={true} className="p-0 flex flex-col group overflow-hidden shadow-neu-extruded hover:scale-[1.03] transition-all duration-500">
              <div className="h-56 overflow-hidden relative m-4 rounded-[24px] shadow-neu-inset-sm p-1 bg-[#E0E5EC]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[20px] transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />
              </div>

              <div className="p-8 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-display font-black tracking-widest rounded-full bg-[#E0E5EC] shadow-neu-inset text-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted text-base font-body leading-relaxed mb-8 grow font-normal">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-6 border-t border-accent/10 gap-4">
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="p-3 bg-[#E0E5EC] rounded-xl shadow-neu-extruded-sm text-muted hover:text-accent active:shadow-neu-inset-sm transition-all duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} strokeWidth={2} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="p-3 bg-[#E0E5EC] rounded-xl shadow-neu-extruded-sm text-muted hover:text-accent active:shadow-neu-inset-sm transition-all duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} strokeWidth={2} />
                      </a>
                    </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button onClick={() => window.open('https://github.com/abhishek8678', '_blank')} className="group text-lg h-14 px-10">
            View all on GitHub <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};