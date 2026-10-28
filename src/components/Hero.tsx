import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const featured = products.filter(product => product.image);
  const product = featured[index];
  if (!product) return null;
  return <section className="editorial-hero relative overflow-hidden">
    <div className="page-width relative h-full">
      <div className="hero-topline meta flex justify-between gap-4"><span>Industrial design · Portfolio</span><span>Atlanta / Savannah</span></div>
      <Link to={`/project/${product.id}`} className={`hero-object group ${product.id === 'tailor-d' ? 'is-stool' : ''}`} aria-label={`Explore ${product.name}`}>
        <img key={product.id} src={product.image} alt={product.subtitle} className="hero-object-image animate-fade-in" />
      </Link>
      <div className="hero-copy relative z-10 pointer-events-none">
        <p className="hero-intro italic text-muted-foreground">Thoughtful by design.</p>
        <h1 className="hero-name uppercase">Sophie<br/>Roach<span className="text-muted-foreground">.</span></h1>
        <p className="mt-6 max-w-sm text-lg leading-relaxed text-foreground">Industrial Design student at Georgia Tech creating thoughtful, human-centered products.</p>
        <Button asChild variant="link" className="pointer-events-auto mt-6 px-0 h-auto text-base"><Link to="/#portfolio">Selected work <ArrowUpRight /></Link></Button>
      </div>
      <div className="hero-bottom relative z-20 flex justify-between items-end gap-4">
        <div className="meta space-y-2"><p><span className="text-muted-foreground mr-4">Now</span>Georgia Tech · Class of 2028</p><p><span className="text-muted-foreground mr-4">Previously</span>Product development · Brasseler USA</p></div>
        <div className="hero-selector"><div className="flex items-center gap-3"><Button variant="outline" size="icon" onClick={() => setIndex((index + featured.length - 1) % featured.length)} aria-label="Previous featured project"><ArrowLeft /></Button><span className="meta tabular-nums">0{index+1} / 0{featured.length}</span><Button variant="outline" size="icon" onClick={() => setIndex((index+1)%featured.length)} aria-label="Next featured project"><ArrowRight /></Button></div><Link to={`/project/${product.id}`} className="mt-3 flex items-center justify-end gap-3 text-sm">{product.name} <ArrowUpRight size={14}/></Link></div>
      </div>
      <Link to="/#portfolio" className="hero-scroll meta"><ArrowDown size={14}/> Selected work</Link>
    </div>
  </section>;
};
