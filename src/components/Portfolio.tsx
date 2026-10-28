import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
const filters = ['All', 'Furniture', 'Home objects', 'Wearables'];
export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  return <section id="portfolio" className="section-padding bg-background"><div className="page-width">
    <div className="section-title"><div><p className="meta text-muted-foreground mb-5">01 / Selected work</p><h2 className="editorial-heading">Objects with<br/><em>intention.</em></h2></div><p className="text-muted-foreground max-w-xs text-lg">Product sketches, models, and prototypes from Georgia Tech design studio.</p></div>
    <div className="flex flex-wrap gap-2 border-b border-border pb-5 mb-8" role="group" aria-label="Filter projects">{filters.map(item => <Button key={item} onClick={()=>setFilter(item)} variant={item === filter ? 'default' : 'ghost'} className="rounded-none" aria-pressed={item === filter}>{item}</Button>)}</div>
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">{products.filter(product => filter === 'All' || product.type === filter).map(product => <Link key={product.id} to={`/project/${product.id}`} className="project-tile group">
      <div className={`project-image ${product.id === 'tailor-d' ? 'stool-tile' : ''} ${!product.image ? 'type-tile' : ''}`}>
        {product.image ? <img src={product.image} alt={product.subtitle} loading="lazy" /> : <div><p className="meta text-muted-foreground mb-6">Material exploration / 2026</p><span className="italic">Naturlig</span><p className="text-lg mt-5">Simply, sustainable footwear.</p></div>}
        <span className="project-open"><ArrowUpRight size={22}/></span>
      </div>
      <div className="flex justify-between gap-4 pt-5"><div><h3 className="text-3xl mb-1">{product.name}</h3><p className="text-muted-foreground">{product.subtitle}</p></div><p className="meta text-muted-foreground pt-2">{product.year} / {product.type}</p></div>
    </Link>)}</div>
  </div></section>;
};
