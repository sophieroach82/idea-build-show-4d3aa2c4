import heroStool from "@/assets/hero-stool.png";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-end bg-background" style={{ backgroundImage: 'var(--hero-gradient)' }}>
      {/* Large hero product image - top right */}
      <div className="absolute top-0 right-0 md:right-[4%] h-[70vh] md:h-[92vh] w-[55%] md:w-[45%] pointer-events-none">
        <img
          src={heroStool}
          alt="TAILOR-D portable plywood step stool"
          className="w-full h-full object-contain object-right-top mix-blend-multiply"
        />
      </div>


      {/* Bottom-left content - name and tagline, all left-aligned */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground font-body fade-in-up">
            Industrial Designer · Georgia Tech
          </p>
          <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] fade-in-up stagger-1 uppercase tracking-tight">
            Sophie<br />Roach
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-md fade-in-up stagger-2">
            Industrial Design student at Georgia Tech creating thoughtful, human-centered products.
          </p>
        </div>
      </div>
    </section>
  );
};
