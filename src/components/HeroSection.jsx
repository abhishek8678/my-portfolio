import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";

const roles = ["Fullstack Dev", "Problem Solver", "Tech Enthusiast", "Builder"];

const brands = [
  { name: "React", style: { fontFamily: "Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "15px" } },
  { name: "Spring Boot", style: { fontFamily: "Palatino, 'Book Antiqua', serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: "15px" } },
  { name: "Node.js", style: { fontFamily: "Arial, sans-serif", fontWeight: 900, letterSpacing: "0.08em", fontSize: "13px", textTransform: "uppercase" } },
  { name: "TypeScript", style: { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 600, letterSpacing: "0.01em", fontSize: "15px", fontStyle: "italic" } },
  { name: "MongoDB", style: { fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "0.12em", fontSize: "13px", textTransform: "uppercase" } },
  { name: "PostgreSQL", style: { fontFamily: "Palatino, 'Book Antiqua', serif", fontWeight: 400, letterSpacing: "-0.01em", fontSize: "16px" } },
  { name: "Next.js", style: { fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 400, letterSpacing: "0.04em", fontSize: "14px" } },
  { name: "Tailwind", style: { fontFamily: "Verdana, sans-serif", fontWeight: 700, letterSpacing: "-0.03em", fontSize: "13px" } },
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".hero-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.1 });
    tl.fromTo(".hero-fade", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, "-=0.6");
  }, []);

  return (
    <section id="hero" className="h-screen flex flex-col overflow-hidden bg-page">
      {/* Hero card */}
      <div className="flex-1 px-4 md:px-6 pt-20 pb-4 md:pb-6">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "calc(100vh - 96px)" }}
        >
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
          />

          {/* Soft overlay for readability in light and dark mode */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent dark:from-[#0A0915]/95 dark:via-[#0A0915]/75 dark:to-black/30 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent dark:from-[#0A0915]/85 dark:to-transparent transition-colors duration-300" />

          {/* Glowing gradient aura in dark mode */}
          <div className="hidden dark:block absolute top-10 left-10 w-80 h-80 bg-purple-600/25 rounded-full blur-[90px] pointer-events-none" />
          <div className="hidden dark:block absolute bottom-10 right-20 w-80 h-80 bg-sky-500/20 rounded-full blur-[90px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-28 md:pt-36">
            <h1
              className="hero-title text-foreground text-5xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-xl mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Building
              <br />
              <span className="dark:bg-gradient-to-r dark:from-white dark:via-purple-200 dark:to-sky-300 dark:bg-clip-text dark:text-transparent">
                Digital Craft
              </span>
            </h1>

            <p className="hero-fade text-muted text-base md:text-lg max-w-md mb-3 leading-relaxed">
              I'm <span className="text-foreground font-medium">Abhishek Kumar</span>, a full stack software engineer specializing in high-performance web applications with scalable architecture.
            </p>

            {/* Role cycling */}
            <p className="hero-fade text-muted-light text-sm md:text-base mb-8">
              Currently a{" "}
              <span
                key={roleIndex}
                className="text-foreground font-medium animate-role-cycle inline-block"
              >
                {roles[roleIndex]}
              </span>{" "}
              based in Jaipur, India.
            </p>

            {/* CTA */}
            <div className="hero-fade flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-foreground text-page text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:opacity-90 transition-all duration-200 pill-glow shadow-md cursor-pointer"
              >
                View Projects
                <span className="bg-page rounded-full p-2 flex items-center justify-center text-foreground">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>

              <a
                href="/resume.pdf"
                download="Abhishek_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/80 dark:bg-card/70 hover:bg-white dark:hover:bg-card text-foreground text-base md:text-lg font-medium pl-6 pr-2 py-2 rounded-full border border-border hover:border-purple-500/40 backdrop-blur-md hover:shadow-card dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-200 cursor-pointer"
              >
                Download CV
                <span className="bg-foreground text-page rounded-full p-2 flex items-center justify-center">
                  <Download className="w-5 h-5" />
                </span>
              </a>
            </div>

            {/* Brand marquee */}
            <div className="hero-fade mt-16 md:mt-24 w-full max-w-md overflow-hidden">
              <div className="marquee-track">
                {[...brands, ...brands].map((brand, i) => (
                  <span
                    key={i}
                    className="mx-7 shrink-0 text-foreground/40 whitespace-nowrap"
                    style={brand.style}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
