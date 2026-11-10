export const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative border-t border-border">
      <div className="page-width relative z-10 about-layout">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body ">
              02 / About Me
            </p>
            <h2 className="editorial-heading text-foreground ">
              About me
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground font-body font-light leading-relaxed ">
            <p>
              I'm Sophie Roach, an Industrial Design student at Georgia Tech creating thoughtful, human-centered products. My product development internship at Brasseler USA shaped how I approach design: simple forms, intentional details, and a clear understanding of how things are made.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-border">
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary ">2028</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide ">Class Year</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary ">Industrial Design</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide ">Major</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary ">Brasseler USA</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide ">Product Development · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};