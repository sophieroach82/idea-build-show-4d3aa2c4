import { useState } from "react";
import { MapPin, Mail, GraduationCap, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:sophieroach82@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Email draft ready",
      description: "Complete your message in your email app.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Savannah, GA / Atlanta, GA",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sophieroach82@gmail.com",
      href: "mailto:sophieroach82@gmail.com",
    },
    {
      icon: GraduationCap,
      label: "University",
      value: "Georgia Institute of Technology",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card text-foreground">
      <div className="page-width">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
                04 / Get in Touch
              </p>
              <h2 className="editorial-heading">
                Let's Connect
              </h2>
              <p className="text-muted-foreground font-body font-light">
                I'm always open to discussing new opportunities, creative projects, or simply connecting with fellow designers.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-body"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-body">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/sophie-roach-056961333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-body text-sm uppercase tracking-wider"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground font-body">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 font-body"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground font-body">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 font-body"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground font-body">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors duration-300 font-body resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Compose Email"}
              <Send size={16} />
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Sophie Roach. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-sm">
            Industrial Design / Georgia Tech
          </p>
        </div>
      </div>
    </section>
  );
};
