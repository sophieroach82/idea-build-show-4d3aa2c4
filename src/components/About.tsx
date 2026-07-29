export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
              About Me
            </p>
            <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Bridging Design & Technology
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground font-body font-light leading-relaxed">
            <p>
              I'm Sophie Roach, an Industrial Design student at Georgia Tech focused on creating thoughtful, human-centered products that balance simplicity with distinctive form.
            </p>
            <p>
              My approach is shaped by an interdisciplinary lens. A minor in History grounds my work in constantly evolving societal trends, while a planned certificate in Sustainability or Entrepreneurship pushes me toward solutions that are both ecologically conscious and market-ready. Recent work at Brasseler USA, documenting Nordent medical devices in SolidWorks, has sharpened how I move between physical prototypes and engineering-grade precision.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-border">
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">2028</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Class Year</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">Industrial Design</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Major</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">Brasseler USA</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Engineering Intern '26</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};