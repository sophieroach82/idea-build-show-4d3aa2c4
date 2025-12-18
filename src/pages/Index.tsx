import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { Contact } from "@/components/Contact";
import georgiaTeachAerial from "@/assets/georgia-tech-aerial.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${georgiaTeachAerial})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <ExperiencePreview />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default Index;
