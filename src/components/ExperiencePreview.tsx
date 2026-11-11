import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeDownload } from "@/components/ResumeDownload";

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
              Product development at Brasseler USA and President of Georgia Tech’s Collegiate Panhellenic Council.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-none"><Link to="/experience">View experience<ArrowRight /></Link></Button>
            <ResumeDownload variant="link" className="font-normal" />
          </div>
        </div>
      </div>
    </section>
  );
};
