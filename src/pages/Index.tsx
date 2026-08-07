import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
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
