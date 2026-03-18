import { ArrowDown } from "lucide-react";
import { Button } from "./ui/Button";

export const HeroSection = () => {
    return (
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        
        <div className="container max-w-5xl mx-auto text-center z-10">
            <div className="space-y-8 flex flex-col items-center">
                
                {/* Glowing Hero Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 shadow-glow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-min-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-min-accent"></span>
                    </span>
                    <span className="text-min-muted-foreground text-xs font-mono tracking-wide uppercase">Available for work</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-space tracking-tight leading-[1.05] text-min-foreground drop-shadow-sm max-w-4xl mx-auto">
                    <span className="block mb-2">Building atmospheric</span>
                    <span className="text-min-accent">digital experiences</span>
                </h1>

               <p className="text-lg md:text-xl text-min-muted-foreground max-w-2xl mx-auto leading-relaxed mt-6 font-inter font-light"> 
                I'm Abhishek, a frontend developer specializing in creating sophisticated, high-performance web applications with precise attention to atmospheric depth and typography.
                </p>
                
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Button onClick={() => window.location.href='#projects'} size="lg" className="w-full sm:w-auto h-12 text-base px-8">
                        View projects
                    </Button>
                    <Button onClick={() => window.location.href='#about'} variant="secondary" size="lg" className="w-full sm:w-auto h-12 text-base px-8">
                        About me
                    </Button>
                </div>
            </div>
        </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 opacity-50 hover:opacity-100 transition-opacity duration-300" onClick={() => window.location.href='#about'}>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-bounce">
          <ArrowDown className="h-4 w-4 text-min-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
