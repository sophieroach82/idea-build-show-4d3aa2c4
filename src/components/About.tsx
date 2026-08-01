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
              I'm Sophie Roach, an Industrial Design student at Georgia Tech. I focus on creating thoughtful, human-centered products that balance simplicity with intentional details.
            </p>
            <p>
              I am pursuing a Sustainability certificate because I want the things people use every day to work better without costing the planet more. Good design should make life easier and leave less behind.
            </p>
            <p>
              Most recently, I worked as an Engineering Intern in Product Development at Brasseler USA. I reverse engineered hundreds of Nordent dental instruments by creating SolidWorks part models and engineering drawings for Design History File documentation, using Keyence and toolmaker gauges, Artec 3D scanning, and bending macros. I also defined user requirements and built a traceability matrix for scaler hardened-point tips, and analyzed production and cycle time data across four part families to develop a manufacturing capacity model.
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