import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/Card";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "TypeScript", level: 50, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Next.js", level: 50, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 40, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 30, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-space font-semibold text-min-foreground">
              My <span className="text-min-accent">Skills</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-sm font-mono tracking-wide transition-all duration-200 capitalize",
                    activeCategory === category
                      ? "bg-white/10 text-min-foreground border border-white/20 shadow-sm"
                      : "bg-transparent text-min-muted-foreground border border-transparent hover:text-min-foreground hover:bg-white/5"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <Card key={key} hover={true} className="p-6 flex flex-col items-start group">
              <div className="w-full flex justify-between items-center mb-4 text-left">
                 <h3 className="font-space font-medium text-lg text-min-foreground">{skill.name}</h3>
                 <span className="text-min-accent font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-auto">
                 <div 
                   className="h-full bg-min-accent rounded-full transition-all duration-1000 ease-out" 
                   style={{ width: `${skill.level}%` }} 
                 />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};