import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

// Marquee items with distinct font styling (fintech brand marquee aesthetic)
const skillMarqueeItems = [
  { name: "React", style: { fontFamily: "Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "16px" } },
  { name: "TypeScript", style: { fontFamily: "Arial, sans-serif", fontWeight: 900, letterSpacing: "0.06em", fontSize: "13px", textTransform: "uppercase" } },
  { name: "Node.js", style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 600, letterSpacing: "0.01em", fontSize: "16px", fontStyle: "italic" } },
  { name: "PostgreSQL", style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.1em", fontSize: "13px", textTransform: "uppercase" } },
  { name: "Next.js", style: { fontFamily: "Palatino, serif", fontWeight: 400, letterSpacing: "-0.01em", fontSize: "17px" } },
  { name: "Docker", style: { fontFamily: "Impact, sans-serif", fontWeight: 400, letterSpacing: "0.04em", fontSize: "15px" } },
  { name: "GraphQL", style: { fontFamily: "Verdana, sans-serif", fontWeight: 700, letterSpacing: "-0.03em", fontSize: "14px" } },
  { name: "Tailwind", style: { fontFamily: "Georgia, serif", fontWeight: 600, letterSpacing: "0.02em", fontSize: "15px" } },
];

const viewAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="bg-page px-4 md:px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Skill marquee */}
        <div className="overflow-hidden mb-16">
          <div className="marquee-track-reverse">
            {[...skillMarqueeItems, ...skillMarqueeItems].map((item, i) => (
              <span
                key={i}
                className="mx-10 shrink-0 text-foreground/15 whitespace-nowrap"
                style={item.style}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Header */}
        <motion.div {...viewAnim} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <p className="text-muted text-sm mb-2">Technical Proficiency</p>
            <h2
              className="text-foreground text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              My Skills
            </h2>
          </div>
          <div className="md:pt-2">
            <p className="text-muted text-base leading-relaxed max-w-sm">
              Technologies and tools I work with daily to build robust, scalable applications.
            </p>
          </div>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-foreground text-white shadow-pill"
                  : "text-muted hover:text-foreground bg-card border border-border hover:border-border-hover"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.04,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card border border-border rounded-2xl p-5 group hover:shadow-card-hover hover:border-border-hover transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-foreground">
                  {skill.name}
                </h3>
                <span
                  className="text-xs text-muted font-medium"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-page rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-foreground transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};