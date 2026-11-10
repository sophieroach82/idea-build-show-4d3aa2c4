import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return <section className="editorial-hero relative overflow-hidden">
    <div className="page-width hero-center animate-fade-in">
      <div className="hero-copy">
        <h1 className="hero-name">Sophie Roach</h1>
        <p className="hero-intro italic">Thoughtful by design</p>
        <Button asChild variant="link" className="mt-5 text-sm font-normal"><Link to="/#portfolio">View my work <ArrowDown /></Link></Button>
      </div>
    </div>
  </section>;
};
