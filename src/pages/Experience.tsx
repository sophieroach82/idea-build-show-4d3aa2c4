import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { experiences, resumeUrl } from "@/data/resume";

const Experience = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 lg:pt-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-24">
          {/* Header */}
          <div className="mb-16">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
                Professional Background
              </p>
              <h1 className="editorial-heading text-foreground">
                Experience
              </h1>
              <p className="text-lg text-muted-foreground font-body font-light max-w-2xl">
                Product development and campus leadership.
              </p>
            </div>
          </div>

          <Button asChild variant="outline" className="mb-12 rounded-none"><a href={resumeUrl} download="Sophie-Roach-Resume.pdf"><Download />Download Resume</a></Button>

          <Link to="/education" className="inline-flex items-center gap-2 ml-5 text-sm underline underline-offset-4">Education<ArrowLeft className="rotate-180" size={14} /></Link>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary" />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="font-display text-2xl text-foreground">
                      {exp.title}
                    </h2>
                    <p className="text-primary font-body font-medium">
                      {exp.organization}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground font-body font-light flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-primary/50 mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-muted-foreground font-body">
                Interested in working together?
              </p>
              <Button asChild><Link
                to="/#contact"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch
              </Link></Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;