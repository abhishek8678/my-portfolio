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
    <section id="skills" className="py-24 md:py-32 lg:py-40 px-6 relative z-10 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground text-shadow-neumorphic">
              My <span className="text-accent underline decoration-accent/20 underline-offset-8">Skills</span>
            </h2>

            <div className="flex flex-wrap gap-4 p-2 rounded-[20px] shadow-neu-inset-sm bg-[#E0E5EC]">
              {categories.map((category, key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-2 rounded-xl text-sm font-display font-bold tracking-wide transition-all duration-300 capitalize",
                    activeCategory === category
                      ? "bg-[#E0E5EC] shadow-neu-extruded-sm text-accent"
                      : "bg-transparent text-muted hover:text-foreground active:shadow-neu-inset-sm"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, key) => (
            <Card key={key} hover={true} className="p-8 flex flex-col items-start group shadow-neu-extruded hover:scale-[1.05]">
              <div className="w-full flex justify-between items-center mb-6 text-left">
                 <h3 className="font-display font-bold text-xl text-foreground">{skill.name}</h3>
                 <span className="text-accent font-display font-black text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-[#E0E5EC] shadow-neu-inset-sm rounded-full overflow-hidden mt-auto p-[2px]">
                 <div 
                   className="h-full bg-accent rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(108,99,255,0.4)]" 
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