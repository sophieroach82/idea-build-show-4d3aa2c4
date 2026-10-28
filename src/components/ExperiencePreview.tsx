import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ExperiencePreview = () => {
  return (
    <section className="section-padding">
      <div className="page-width">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-10 border-y border-border">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
              Professional Background
            </p>
            <h2 className="display-heading text-3xl md:text-4xl text-foreground">
              Experience & Leadership
            </h2>
            <p className="text-muted-foreground font-body max-w-md">
              From freelance design to DEI leadership and my product development internship at Brasseler USA.
            </p>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 group whitespace-nowrap"
          >
            View Full Resume
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
