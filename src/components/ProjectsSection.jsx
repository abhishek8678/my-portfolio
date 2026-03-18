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
    <section id="projects" className="py-24 md:py-32 lg:py-40 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-space font-semibold mb-6 text-min-foreground">
          Featured <span className="text-min-accent">Projects</span>
        </h2>

        <p className="text-min-muted-foreground mb-16 max-w-2xl text-base font-light leading-relaxed">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <Card key={key} hover={true} className="p-0 flex flex-col group overflow-hidden">
              <div className="h-48 overflow-hidden relative border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-[11px] font-mono tracking-wide rounded bg-white/5 border border-white/10 text-min-muted-foreground group-hover:text-min-foreground transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-space font-medium mb-3 text-min-foreground">{project.title}</h3>
                <p className="text-min-muted-foreground text-sm font-light leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                <div className="flex justify-end items-center mt-auto pt-4 border-t border-white/5 gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-min-muted-foreground hover:text-min-accent transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} strokeWidth={1.5} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-min-muted-foreground hover:text-min-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} strokeWidth={1.5} />
                    </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button onClick={() => window.open('https://github.com/abhishek8678', '_blank')} variant="ghost" className="group text-min-accent hover:text-min-accent hover:bg-min-accent/10">
            View all on GitHub <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};