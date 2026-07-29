import heroShelf from "@/assets/hero-shelf.png";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-end bg-background" style={{ backgroundImage: 'var(--hero-gradient)' }}>
      {/* Large hero product image - top right, cropped and enlarged like reference */}
      <div className="absolute -top-8 -right-[25%] w-[145%] md:w-[135%] lg:w-[125%] h-[100vh]">
        <img
          src={heroShelf}
          alt="Air O Display Shelf"
          className="w-full h-full object-contain object-right"
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
            A creative problem solver bridging Industrial Design with engineering rigor — from felt-and-cardboard prototypes to SolidWorks documentation for medical devices.
          </p>
        </div>
      </div>
    </section>
  );
};
