import { Instagram, Linkedin, Mail, MapPin, Phone, Linkedin as LinkedInIcon, Twitter, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Card } from "./ui/Card";
import { Input, Textarea } from "./ui/Input";
import { Button } from "./ui/Button";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 px-6 relative z-10 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-foreground text-shadow-neumorphic text-center">
          Get In <span className="text-accent underline decoration-accent/20 underline-offset-8">Touch</span>
        </h2>

        <p className="text-muted mb-16 max-w-2xl text-lg font-body leading-relaxed font-normal mx-auto text-center">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <Card className="flex items-center space-x-6 p-6 shadow-neu-extruded hover:shadow-neu-extruded-hover transition-all duration-300" hover={true}>
                <div className="shrink-0 p-4 rounded-2xl shadow-neu-inset bg-[#E0E5EC]">
                  <Mail className="h-6 w-6 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">Email</h4>
                  <a href="mailto:abhishekstark1707@gmail.com" className="text-muted text-base font-body font-normal hover:text-accent transition-colors">
                    abhishekstark1707@gmail.com
                  </a>
                </div>
              </Card>

              <Card className="flex items-center space-x-6 p-6 shadow-neu-extruded hover:shadow-neu-extruded-hover transition-all duration-300" hover={true}>
                <div className="shrink-0 p-4 rounded-2xl shadow-neu-inset bg-[#E0E5EC]">
                  <Phone className="h-6 w-6 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">Phone</h4>
                  <a href="tel:+918678021510" className="text-muted text-base font-body font-normal hover:text-accent transition-colors">
                    +91 8678021510
                  </a>
                </div>
              </Card>

              <Card className="flex items-center space-x-6 p-6 shadow-neu-extruded hover:shadow-neu-extruded-hover transition-all duration-300" hover={true}>
                <div className="shrink-0 p-4 rounded-2xl shadow-neu-inset bg-[#E0E5EC]">
                  <MapPin className="h-6 w-6 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">Location</h4>
                  <p className="text-muted text-base font-body font-normal">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </Card>
            </div>

            <div className="pt-8 border-t border-accent/10">
              <h4 className="font-display font-bold text-sm text-foreground mb-6 uppercase tracking-widest">Social Profiles</h4>
              <div className="flex space-x-6">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Github, href: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    className="p-4 bg-[#E0E5EC] text-muted hover:text-accent shadow-neu-extruded-sm hover:shadow-neu-extruded rounded-2xl active:shadow-neu-inset-sm transition-all duration-300"
                  >
                    <social.icon size={24} strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 p-10 md:p-12 shadow-neu-extruded">
            <h3 className="text-3xl font-display font-bold mb-10 text-foreground">Send a Message</h3>

            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3 text-left">
                    <label htmlFor="name" className="block text-xs font-display font-black tracking-widest text-muted">
                      NAME
                    </label>
                    <Input id="name" name="name" required placeholder="John Doe" className="h-14 rounded-[20px]" />
                  </div>

                  <div className="space-y-3 text-left">
                    <label htmlFor="email" className="block text-xs font-display font-black tracking-widest text-muted">
                      EMAIL
                    </label>
                    <Input type="email" id="email" name="email" required placeholder="john@example.com" className="h-14 rounded-[20px]" />
                  </div>
              </div>

              <div className="space-y-3 text-left">
                <label htmlFor="message" className="block text-xs font-display font-black tracking-widest text-muted">
                  MESSAGE
                </label>
                <Textarea id="message" name="message" required placeholder="How can I help you?" className="min-h-[160px] rounded-[24px]" />
              </div>

              <div className="pt-4 text-left">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto h-16 px-12 text-lg rounded-[20px]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};