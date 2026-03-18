import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react";
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
    <section id="contact" className="py-24 md:py-32 lg:py-40 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-space font-semibold mb-6 text-min-foreground">
          Get In <span className="text-min-accent">Touch</span>
        </h2>

        <p className="text-min-muted-foreground mb-16 max-w-2xl text-base font-light leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Mail className="h-5 w-5 text-min-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-space text-sm text-min-foreground mb-1">Email</h4>
                  <a href="mailto:abhishekstark1707@gmail.com" className="text-min-muted-foreground text-sm font-light hover:text-min-accent transition-colors">
                    abhishekstark1707@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Phone className="h-5 w-5 text-min-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-space text-sm text-min-foreground mb-1">Phone</h4>
                  <a href="tel:+918678021510" className="text-min-muted-foreground text-sm font-light hover:text-min-accent transition-colors">
                    +91 8678021510
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <MapPin className="h-5 w-5 text-min-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-space text-sm text-min-foreground mb-1">Location</h4>
                  <p className="text-min-muted-foreground text-sm font-light">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <h4 className="font-space text-sm text-min-foreground mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitch, href: "#" }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" className="p-2 text-min-muted-foreground hover:text-min-accent hover:bg-min-accent/10 rounded-lg transition-colors">
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card onSubmit={handleSubmit} className="lg:col-span-3">
            <h3 className="text-2xl font-space font-medium mb-8 text-min-foreground">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label htmlFor="name" className="block text-xs font-mono tracking-wide text-min-muted-foreground">
                      NAME
                    </label>
                    <Input id="name" name="name" required placeholder="John Doe" />
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="block text-xs font-mono tracking-wide text-min-muted-foreground">
                      EMAIL
                    </label>
                    <Input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="message" className="block text-xs font-mono tracking-wide text-min-muted-foreground">
                  MESSAGE
                </label>
                <Textarea id="message" name="message" required placeholder="How can I help you?" />
              </div>

              <div className="pt-2 text-left">
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto min-w-[160px]">
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