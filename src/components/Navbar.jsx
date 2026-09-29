import { cn } from "@/lib/utils";
import { Menu, X, FileDown, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { LogoMark } from "./LogoMark";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        isScrolled
          ? "bg-page/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <LogoMark className="w-7 h-7 text-foreground transition-transform duration-300 group-hover:scale-105" />
          <span
            className="text-2xl font-medium tracking-tight text-foreground"
          >
            Abhishek
          </span>
        </a>

        {/* Center Links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors duration-200",
                activeSection === item.href
                  ? "text-foreground font-semibold"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right — CTA, Resume & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2.5 rounded-full border border-border bg-card/60 hover:bg-card hover:border-purple-500/40 text-foreground transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300 rotate-0 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 -rotate-12 transition-transform duration-300" />
            )}
          </button>

          <a
            href="/resume.pdf"
            download="Abhishek_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-foreground/20 hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="bg-foreground text-page text-base font-medium px-7 py-2.5 rounded-full hover:opacity-90 transition-all duration-200 pill-glow cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-xl border border-border bg-card/80 text-foreground transition-colors"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground hover:text-muted transition-colors rounded-xl"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute top-full left-4 right-4 bg-card rounded-2xl p-5 flex flex-col transition-all duration-300 ease-out md:hidden shadow-card-hover border border-border",
          isMenuOpen
            ? "opacity-100 translate-y-2 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "text-base font-medium py-3 px-4 rounded-xl transition-all duration-200",
              activeSection === item.href
                ? "text-foreground bg-page font-semibold"
                : "text-muted hover:text-foreground hover:bg-page"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Abhishek_Kumar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 border border-border text-foreground text-center text-base font-medium py-3 rounded-full hover:bg-page transition-colors flex items-center justify-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <FileDown className="w-4 h-4" />
          Download Resume
        </a>
        <a
          href="#contact"
          className="mt-2 bg-foreground text-page text-center text-base font-medium py-3 rounded-full hover:opacity-90 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};