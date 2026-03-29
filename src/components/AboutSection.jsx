import { Briefcase, Code, User, ArrowRight } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-6 relative z-10 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-16 text-foreground text-shadow-neumorphic">
          About <span className="text-accent underline decoration-accent/20 underline-offset-8">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Card className="p-8 md:p-12 shadow-neu-extruded" hover={false}>
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Software Engineer & Full Stack Developer
              </h3>

              <p className="text-muted text-lg leading-relaxed font-body">
                I am a dedicated full stack software engineer with a deep passion for architecting scalable systems and building intuitive digital products. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless, end-to-end solutions that solve complex real-world challenges.
              </p>

              <p className="text-muted text-lg leading-relaxed font-body">
                I thrive at the intersection of architecture and design, constantly pushing the boundaries of modern web technologies to deliver high-performance applications that are as physically satisfying as they are functional.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button onClick={() => window.location.href='#contact'} className="group h-14 px-8">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 duration-200" />
                </Button>
                <Button variant="secondary" onClick={() => {}} className="h-14 px-8">
                  Download CV
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-8">
            <Card className="flex items-start gap-6 p-8 shadow-neu-extruded transition-transform duration-300 hover:scale-[1.02]" hover={true}>
              <div className="shrink-0 p-4 rounded-2xl shadow-neu-inset-deep bg-[#E0E5EC]">
                <Code className="h-6 w-6 text-accent" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-xl text-foreground mb-2">Full Stack Development</h4>
                <p className="text-muted text-base font-body leading-relaxed">
                  Building scalable end-to-end applications using modern frameworks and distributed systems.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 p-8 shadow-neu-extruded transition-transform duration-300 hover:scale-[1.02]" hover={true}>
              <div className="shrink-0 p-4 rounded-2xl shadow-neu-inset-deep bg-[#E0E5EC]">
                <User className="h-6 w-6 text-accent" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-xl text-foreground mb-2">Architectural Design</h4>
                <p className="text-muted text-base font-body leading-relaxed">
                  Designing robust system architectures and intuitive, tactile user interfaces.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 p-8 shadow-neu-extruded transition-transform duration-300 hover:scale-[1.02]" hover={true}>
              <div className="shrink-0 p-4 rounded-2xl shadow-neu-inset-deep bg-[#E0E5EC]">
                <Briefcase className="h-6 w-6 text-accent" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-xl text-foreground mb-2">Project Management</h4>
                <p className="text-muted text-base font-body leading-relaxed">
                  Leading projects from conception to completion with agile methodologies.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};