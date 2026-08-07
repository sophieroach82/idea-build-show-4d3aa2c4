export const About = () => {
  return (
    <section id="about" className="section-padding bg-card relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body text-shadow-soft">
              About Me
            </p>
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-foreground text-shadow-soft">
              Bridging Design & Technology
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground font-body font-light leading-relaxed text-shadow-soft">
            <p>
              I'm Sophie Roach, an Industrial Design student at Georgia Tech. I design products that look simple but feel intentional; every part has a use, meaning, or justification behind it. Interning at Brasseler USA, modeling dental and surgical instrumentation, gave me time on the manufacturing floor watching how tolerances and features get added to a part. That experience shaped how I design—keep things simple, so that when a machine has to go out of its way to add features, it's intentional.
            </p>
            <p>
              I am also pursuing a certificate in sustainability, because I see unjustified parts and features as a direct source of material waste. Simplicity isn't just an aesthetic choice; it's as much about the product's footprint as it is form.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-border">
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary text-shadow-soft">2028</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide text-shadow-soft">Class Year</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary text-shadow-soft">Industrial Design</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide text-shadow-soft">Major</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary text-shadow-soft">Brasseler USA</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide text-shadow-soft">Engineering Intern '26</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};