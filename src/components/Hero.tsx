import heroProduct from "@/assets/hero-product.svg";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col justify-end bg-background">
      {/* Large product image - dominant, like the reference */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={heroProduct}
          alt="Design work"
          className="w-[90%] md:w-[75%] lg:w-[65%] max-h-[80vh] object-contain opacity-90 blur-[1px]"
          style={{ filter: 'blur(1.5px) saturate(0.9)' }}
        />
      </div>

      {/* Bottom content - name and tagline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end">
          <h1 className="display-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.9] fade-in-up stagger-1">
            sophie<br />roach
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-md fade-in-up stagger-2 lg:pb-2">
            A creative problem solver who bridges Industrial Design with technical proficiency in design software and Adobe Creative Cloud.
          </p>
        </div>
      </div>
    </section>
  );
};
