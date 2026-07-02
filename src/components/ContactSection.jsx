import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Github,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const viewAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true, margin: "-100px" },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "abhishekstark1707@gmail.com",
    href: "mailto:abhishekstark1707@gmail.com",
    isLink: true,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8678021510",
    href: "tel:+918678021510",
    isLink: true,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jaipur, Rajasthan, India",
    href: null,
    isLink: false,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "https://github.com/abhishek8678", label: "GitHub" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description:
          "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-page px-4 md:px-6 pt-24 pb-8 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <motion.div {...viewAnim} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          <div>
            <p className="text-muted text-sm mb-2">Get In Touch</p>
            <h2
              className="text-foreground text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Let's Connect
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-sm">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
          </div>
          <div className="flex md:justify-end md:items-start">
            <a
              href="mailto:abhishekstark1707@gmail.com"
              className="inline-flex items-center gap-3 bg-foreground text-white text-base font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 pill-glow"
            >
              Email me
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-foreground" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — Contact info + socials */}
          <div className="lg:col-span-2 space-y-3">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.08,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="bg-card border border-border rounded-2xl p-5 flex items-center gap-5 group hover:shadow-card-hover hover:border-border-hover transition-all duration-300"
              >
                <div className="bg-page rounded-xl p-3 flex-shrink-0">
                  <item.icon size={20} className="text-foreground" strokeWidth={1.5} />
                </div>
                <div className="text-left min-w-0">
                  <h4 className="font-medium text-sm text-foreground mb-0.5">
                    {item.title}
                  </h4>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-muted text-sm hover:text-foreground transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <h4 className="text-xs text-muted uppercase tracking-[0.15em] font-medium mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border text-muted hover:text-foreground hover:shadow-card-hover hover:border-border-hover transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card"
          >
            <h3
              className="text-2xl font-medium mb-8 text-foreground"
              style={{ letterSpacing: "-0.02em" }}
            >
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted uppercase tracking-[0.12em]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-page border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted uppercase tracking-[0.12em]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-page border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted uppercase tracking-[0.12em]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can I help you?"
                  className="w-full min-h-[140px] rounded-xl bg-page border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all resize-y"
                />
              </div>

              <div className="pt-2 text-left">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 cursor-pointer pill-glow"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <LogoMark className="w-5 h-5 text-foreground" />
              <span className="font-medium text-lg text-foreground" style={{ letterSpacing: "-0.02em" }}>
                Abhishek Kumar
              </span>
            </div>
            <div className="flex items-center gap-8">
              {["Twitter", "LinkedIn", "GitHub"].map((name) => (
                <a
                  key={name}
                  href={name === "GitHub" ? "https://github.com/abhishek8678" : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted uppercase tracking-[0.15em] font-medium hover:text-foreground transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pb-4">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Abhishek Kumar. Crafted with precision.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoMark = ({ className }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" className={className}>
    <path d="M128.005 191.173C128.448 156.208 156.93 128 192 128V64H128C128 99.346 99.346 128 64 128V192H128ZM192 256H64C28.654 256 0 227.346 0 192V64H64V0H192C227.346 0 256 28.654 256 64V192H192Z" />
  </svg>
);