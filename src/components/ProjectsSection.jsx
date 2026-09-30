import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 6,
    title: "Food Frenzy — Full-Stack Dining Platform",
    description:
      "Enterprise dining & ordering platform built with Spring Boot 3.4 & Java 21. Features dual-theme engine (dark/light), Google OAuth 2.0 security, dynamic cart settlement, and Swagger OpenAPI docs.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    tags: ["Spring Boot", "Java 21", "PostgreSQL", "OAuth 2.0"],
    demoUrl: "https://github.com/abhishek8678/Food-Frenzy#readme",
    githubUrl: "https://github.com/abhishek8678/Food-Frenzy",
  },
  {
    id: 5,
    title: "RecruitAI — AI Recruitment Screener",
    description:
      "Enterprise AI screening platform featuring a 70/30 Hybrid Scoring Engine (NVIDIA Llama-3.1 + TF-IDF) and an interactive Virtual Prep Room interview simulator.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "FastAPI", "NVIDIA LLM", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/abhishek8678/AI-Recruitment-Screener",
  },
  {
    id: 4,
    title: "Movie Booking Application",
    description:
      "A full-stack movie booking platform with seat selection, Stripe payments, JWT auth, and QR ticket generation.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/abhishek8678/Movie-Booking",
  },
  {
    id: 1,
    title: "AI powered News Aggregator",
    description:
      "A full-stack AI-driven platform aggregating news from multiple APIs with automated cron-based fetching.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "AI", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Weather Dashboard Web App",
    description:
      "A modern responsive weather dashboard with real-time forecasting and interactive maps.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ScoreMate",
    description:
      "A comprehensive academic tracking dashboard with AI-driven analytics and grading insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const viewAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-page px-4 md:px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <motion.div
          {...viewAnim}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16"
        >
          <div className="md:pr-12 md:pt-2">
            <p className="text-muted text-sm mb-2">Selected Work</p>
            <h2
              className="text-foreground text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Projects
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-sm">
              Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>
          </div>
          <div className="flex md:justify-end md:items-start">
            <button
              onClick={() => window.open("https://github.com/abhishek8678", "_blank")}
              className="inline-flex items-center gap-3 bg-foreground text-page text-base font-medium pl-8 pr-2 py-2 rounded-full hover:opacity-90 transition-all duration-200 pill-glow shadow-md cursor-pointer"
            >
              View all work
              <span className="bg-page rounded-full p-2 flex items-center justify-center text-foreground">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border dark:border-white/10 dark:hover:border-purple-500/50 dark:hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] transition-all duration-500"
            >
              {/* Background */}
              <div className="relative aspect-[21/9] md:aspect-[3/1]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                  {/* Top — tags */}
                  <div className="flex gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] uppercase tracking-wider text-white/90 bg-white/15 dark:bg-purple-950/50 dark:border dark:border-purple-400/30 backdrop-blur-sm rounded-full px-3 py-1 font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3
                        className="text-white text-2xl md:text-3xl font-medium mb-2"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed hidden md:block">
                        {project.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/15 dark:bg-black/50 dark:border dark:border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 dark:hover:bg-purple-600/40 dark:hover:border-purple-400/50 transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <Github size={18} strokeWidth={1.5} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/15 dark:bg-black/50 dark:border dark:border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 dark:hover:bg-purple-600/40 dark:hover:border-purple-400/50 transition-all duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};