import { motion } from "framer-motion";
import { ArrowRight, Code, User, Briefcase } from "lucide-react";

const specialties = [
  {
    icon: Code,
    title: "Full Stack\nDevelopment",
    description: "Building scalable end-to-end applications using modern frameworks and distributed systems.",
    dark: false,
  },
  {
    icon: User,
    title: "Architectural\nDesign",
    description: "Designing robust system architectures and intuitive, tactile user interfaces.",
    dark: true,
  },
  {
    icon: Briefcase,
    title: "Project\nManagement",
    description: "Leading projects from conception to completion with agile methodologies.",
    dark: true,
  },
];

const viewAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

export const AboutSection = () => {
  return (
    <section id="about" className="bg-page px-4 md:px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Header row */}
        <motion.div {...viewAnim} className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="text-foreground text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              Meet Abhishek.
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-foreground text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 pill-glow"
            >
              Get in Touch
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-foreground" />
              </span>
            </a>
          </div>
          {/* Right */}
          <p
            className="text-foreground/60 text-xl md:text-2xl leading-relaxed"
          >
            I am a dedicated full stack software engineer with a deep passion for architecting scalable systems and building intuitive digital products. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless, end-to-end solutions.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large card with image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="sm:col-span-2 rounded-2xl overflow-hidden relative min-h-80"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="relative z-10 p-7 min-h-80 flex flex-col justify-between">
              <h3
                className="text-white text-2xl font-medium leading-snug"
                style={{ letterSpacing: "-0.02em" }}
              >
                Code that scales
              </h3>
              <p className="text-white/70 text-base max-w-xs">
                I thrive at the intersection of architecture and design, pushing the boundaries of modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Dark cards */}
          {specialties.filter(s => s.dark).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: (index + 1) * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl p-7 min-h-80 flex flex-col justify-between"
              style={{ backgroundColor: "#2B2644" }}
            >
              <h3
                className="text-white text-2xl font-medium leading-snug whitespace-pre-line"
                style={{ letterSpacing: "-0.02em" }}
              >
                {item.title}
              </h3>
              <p className="text-white/60 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};