import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 top-0 pt-4 px-4 sm:px-6 pointer-events-none">
      <nav
        className={cn(
          "mx-auto max-w-6xl transition-all duration-300 pointer-events-auto rounded-[32px] px-6",
          isScrolled 
            ? "py-3 bg-[#E0E5EC] shadow-neu-extruded" 
            : "py-5 bg-transparent shadow-none"
        )}
      >
        <div className="flex items-center justify-between">
          <a
            className="flex items-center group"
            href="#hero"
          >
            <div className="px-4 py-2 rounded-2xl bg-[#E0E5EC] shadow-neu-inset-sm hover:shadow-neu-inset transition-all duration-300">
              <span className="text-xl font-display font-black tracking-tight text-foreground whitespace-nowrap">
                Abhishek Kumar
              </span>
            </div>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" onClick={() => window.location.href='#contact'}>Let's talk</Button>
          </div>

          {/* mobile nav toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors z-50 rounded-xl shadow-neu-extruded-sm active:shadow-neu-inset bg-[#E0E5EC]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 mt-4 bg-[#E0E5EC] rounded-[32px] p-6 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-out md:hidden shadow-neu-extruded",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-2 w-full text-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-base font-medium text-foreground p-3 hover:text-accent font-display transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4" onClick={() => { setIsMenuOpen(false); window.location.href='#contact'; }}>
              Let's talk
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};