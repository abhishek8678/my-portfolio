import { Briefcase, Code, User, ArrowRight } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-space font-semibold mb-16 text-min-foreground">
          About <span className="text-min-accent">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 md:p-10" hover={false}>
            <div className="space-y-6">
              <h3 className="text-2xl font-space font-medium text-min-foreground">
                Passionate Web Developer & Tech Creator
              </h3>

              <p className="text-min-muted-foreground text-base leading-relaxed font-inter font-light">
                Motivated and detail-oriented Information Technology student with a strong grasp of programming, software
                development, and data analysis. Committed to leveraging academic knowledge and technical skills to solve
                real-world problems and drive innovation.
              </p>

              <p className="text-min-muted-foreground text-base leading-relaxed font-inter font-light">
                I'm passionate about creating elegant solutions to complex
                problems, and I'm constantly learning new technologies and
                techniques to stay at the forefront of the ever-evolving web
                landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button onClick={() => window.location.href='#contact'} className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 duration-200" />
                </Button>
                <Button variant="secondary" onClick={() => {}}>
                  Download CV
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-6">
            <Card className="flex items-start gap-6 p-6 md:p-8" hover={true}>
              <div className="shrink-0 mt-1">
                <Code className="h-6 w-6 text-min-accent" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <h4 className="font-space font-medium text-lg text-min-foreground mb-2">Web Development</h4>
                <p className="text-min-muted-foreground text-sm font-light leading-relaxed">
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 p-6 md:p-8" hover={true}>
              <div className="shrink-0 mt-1">
                <User className="h-6 w-6 text-min-accent" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <h4 className="font-space font-medium text-lg text-min-foreground mb-2">UI/UX Design</h4>
                <p className="text-min-muted-foreground text-sm font-light leading-relaxed">
                  Designing intuitive user interfaces and seamless user experiences.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-6 p-6 md:p-8" hover={true}>
              <div className="shrink-0 mt-1">
                <Briefcase className="h-6 w-6 text-min-accent" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <h4 className="font-space font-medium text-lg text-min-foreground mb-2">Project Management</h4>
                <p className="text-min-muted-foreground text-sm font-light leading-relaxed">
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