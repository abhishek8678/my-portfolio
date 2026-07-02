import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const roles = ["Fullstack Dev", "Problem Solver", "Tech Enthusiast", "Builder"];

const brands = [
  { name: "React", style: { fontFamily: "Georgia, serif", fontWeight: 700, letterSpacing: "-0.02em", fontSize: "15px" } },
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

          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-28 md:pt-36">
            <h1
              className="hero-title text-foreground text-5xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-xl mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Building
              <br />
              Digital Craft
            </h1>

            <p className="hero-fade text-foreground/60 text-base md:text-lg max-w-md mb-3 leading-relaxed">
              I'm <span className="text-foreground font-medium">Abhishek Kumar</span>, a full stack software engineer specializing in high-performance web applications with scalable architecture.
            </p>

            {/* Role cycling */}
            <p className="hero-fade text-foreground/50 text-sm md:text-base mb-8">
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
            <a
              href="#projects"
              className="hero-fade inline-flex items-center gap-3 bg-foreground text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 pill-glow"
            >
              View Projects
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-foreground" />
              </span>
            </a>

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
