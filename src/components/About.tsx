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
              I'm Sophie Roach, an Industrial Design student at Georgia Tech. I focus on creating thoughtful, human-centered products and graphics that balance simplicity with unique form.
            </p>
            <p>
              My design approach is shaped by an interdisciplinary lens. My minor in History provides an understanding of constantly evolving societal trends, while my pursuit of a certificate in either Sustainability or Entrepreneurship drives me to create solutions that are both ecologically conscious and market-ready. I aim to explore how aesthetics and experience influence how we interact with objects in our daily lives.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">2028</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Class Year</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-display text-primary">Industrial Design</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">Major</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};