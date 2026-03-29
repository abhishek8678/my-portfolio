import { Button } from "./ui/Button";

export const HeroSection = () => {
    return (
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        
        <div className="container max-w-5xl mx-auto text-center z-10">
            <div className="space-y-8 flex flex-col items-center">
                
                {/* Neumorphic Hero Badge in a Deep Well */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#E0E5EC] shadow-neu-inset-deep mb-4">
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_5px_rgba(108,99,255,0.5)]"></span>
                    </span>
                    <span className="text-muted text-xs font-bold tracking-widest uppercase">Available for work</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-extrabold tracking-tight leading-[1.05] text-foreground max-w-4xl mx-auto text-shadow-neumorphic">
                    <span className="block mb-2">Building tactile</span>
                    <span className="text-accent relative inline-block">
                        <span className="relative z-10">digital experiences</span>
                    </span>
                </h1>

               <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mt-6 font-body font-normal"> 
                I'm Abhishek, a full stack software engineer specializing in building robust, high-performance web applications with a focus on tactile depth, scalable architecture, and seamless user experiences.
                </p>
                
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                    <Button onClick={() => window.location.href='#projects'} size="lg" className="w-full sm:w-auto text-base px-8 h-14">
                        View projects
                    </Button>
                    <Button onClick={() => window.location.href='#about'} variant="secondary" size="lg" className="w-full sm:w-auto text-base px-8 h-14">
                        About me
                    </Button>
                </div>
            </div>
        </div>

    </section>
  )
}
