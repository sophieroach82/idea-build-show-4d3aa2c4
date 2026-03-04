import heroShelf from "@/assets/hero-shelf.png";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-end bg-background">
      {/* Large hero product image - top right, cropped and enlarged like reference */}
      <div className="absolute -top-24 -right-[30%] w-[120%] md:w-[110%] lg:w-[100%] h-[90vh]">
        <img
          src={heroShelf}
          alt="Air O Display Shelf"
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Bottom-left content - name and tagline, all left-aligned */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] fade-in-up stagger-1 uppercase tracking-tight">
            Sophie<br />Roach
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-md fade-in-up stagger-2">
            A creative problem solver who bridges Industrial Design with technical proficiency in design software and Adobe Creative Cloud.
          </p>
        </div>
      </div>
    </section>
  );
};
