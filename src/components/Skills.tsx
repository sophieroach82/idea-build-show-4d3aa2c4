import georgiaTechAerial from "@/assets/georgia-tech-aerial.jpeg";

const skillCategories = [
  {
    title: "Skills",
    skills: ["Concept Development", "Collaboration", "Sketching", "Physical Prototyping", "3D Modeling", "Design Control"],
    accent: true,
  },
  {
    title: "Technology",
    skills: ["Adobe Creative Suite", "SolidWorks", "Fusion 360", "Python", "HTML", "Microsoft Suite"],
    accent: false,
  },
  {
    title: "Activities",
    skills: ["Alpha Delta Pi (Zeta Omicron)", "Industrial Designers Society of America (IDSA)"],
    accent: false,
  },
  {
    title: "Interests",
    skills: ["Travel", "Fashion", "Yoga", "Running: Half Marathon Finisher"],
    accent: true,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Georgia Tech aerial background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `url(${georgiaTechAerial})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-body">
            Capabilities
          </p>
          <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-8 lg:p-10 card-hover ${
                category.accent ? "bg-primary/5" : "bg-card"
              }`}
            >
              <h3 className="font-display text-xl mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-body bg-background border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};