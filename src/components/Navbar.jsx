import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const LogoMark = ({ className }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" className={className}>
    <path d="M128.005 191.173C128.448 156.208 156.93 128 192 128V64H128C128 99.346 99.346 128 64 128V192H128ZM192 256H64C28.654 256 0 227.346 0 192V64H64V0H192C227.346 0 256 28.654 256 64V192H192Z" />
  </svg>
);

export const Navbar = () => {
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
        isScrolled && "bg-page/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
      )}
    >
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <LogoMark className="w-7 h-7 text-foreground" />
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
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right — CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-foreground text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 pill-glow"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground hover:text-muted transition-colors rounded-xl"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute top-full left-4 right-4 bg-card rounded-2xl p-5 flex flex-col transition-all duration-300 ease-out md:hidden shadow-card-hover border border-border",
          isMenuOpen
            ? "opacity-100 translate-y-2"
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
                ? "text-foreground bg-page"
                : "text-muted hover:text-foreground hover:bg-page"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="mt-3 bg-foreground text-white text-center text-base font-medium py-3 rounded-full hover:bg-gray-800 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};