import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { products, processPages } from '@/data/products';

export default function ProductCaseStudy() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  useEffect(() => { setActive(0); setExpanded({}); setLightbox(null); window.scrollTo(0, 0); }, [id]);
  useEffect(() => {
    if (!product) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(Number(entry.target.getAttribute('data-chapter')));
    }), { rootMargin: '-20% 0px -60% 0px' });
    document.querySelectorAll('[data-chapter]').forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [product]);
  const pages = product ? processPages(product.id) : [];
  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setLightbox(value => value === null ? null : (value + 1) % pages.length);
      if (event.key === 'ArrowLeft') setLightbox(value => value === null ? null : (value + pages.length - 1) % pages.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, pages.length]);
  if (!product) return <div className="min-h-screen bg-background"><Navigation/><main className="section-padding pt-40"><h1 className="editorial-heading">Project not found.</h1><Link to="/#portfolio" className="inline-flex gap-3 mt-8"><ArrowLeft/>All work</Link></main></div>;
  const next = products[(products.indexOf(product) + 1) % products.length];
  return <div className="bg-background min-h-screen"><Navigation/>
    <main className="pt-28 md:pt-32">
      <div className="page-width px-6 md:px-12">
        <div className="meta flex justify-between items-center gap-5 border-b border-border pb-6"><Link to="/#portfolio" className="flex gap-3 items-center"><ArrowLeft size={14}/>All work</Link>{next && <Link to={`/project/${next.id}`} className="flex items-center gap-3">Next: {next.name}<ArrowRight size={14}/></Link>}</div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-12 md:py-16"><div><p className="meta text-muted-foreground mb-5">{product.type} / {product.year}</p><h1 className="case-heading">{product.name}<span className="text-muted-foreground">.</span></h1></div><p className="text-2xl max-w-xs">{product.subtitle}</p></div>
        {product.image && <div className={`project-image mb-12 ${product.id==='tailor-d'?'stool-tile':''}`}><img src={product.image} alt={product.subtitle}/></div>}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-24 border-t border-border py-10 mb-10"><p className="text-xl md:text-2xl leading-relaxed">{product.overview}</p><dl className="space-y-5"><div><dt className="meta text-muted-foreground mb-2">Materials</dt><dd>{product.materials}</dd></div><div><dt className="meta text-muted-foreground mb-2">Methods</dt><dd>{product.tools.join(' / ')}</dd></div>{product.id==='tailor-d'&&<div><dt className="meta text-muted-foreground mb-2">Collaboration</dt><dd>Sophie Roach & Melissa Yao</dd></div>}</dl></div>
      </div>
      <div className="chapter-nav"><div className="page-width chapter-nav-inner px-0 md:px-12" role="group" aria-label="Process chapters">{product.chapters.map((chapter,index)=><Button key={chapter.title} variant="ghost" aria-pressed={index===active} onClick={()=>{setActive(index);document.getElementById(`chapter-${index}`)?.scrollIntoView({behavior:'smooth'});}}><span className="text-muted-foreground text-xs">0{index+1}</span>{chapter.title}</Button>)}</div></div>
      <div className="page-width px-6 md:px-12">
        {product.chapters.map((chapter,index)=><section id={`chapter-${index}`} data-chapter={index} key={chapter.title} className="case-section py-16 md:py-24 border-b border-border">
          <div className="section-title"><div><p className="meta text-muted-foreground mb-5">0{index+1} / {chapter.title}</p><h2 className="text-4xl md:text-5xl max-w-xl">{chapter.heading}</h2></div><p className="max-w-md text-lg leading-relaxed text-muted-foreground">{chapter.text}</p></div>
          <div className="grid md:grid-cols-2 gap-7">{(expanded[index] ? chapter.pages : chapter.pages.slice(0,2)).map(page=> <figure key={page}>
            <Button variant="ghost" className={`book-image-button relative group ${product.id==='air-o'?'wide-page':''}`} onClick={()=>setLightbox(page-1)} aria-label={`Enlarge ${product.name} process page ${page}`}><img src={pages[page-1]} alt={`${product.name}: ${chapter.title}, original process page ${page}`} loading="lazy"/><span className="absolute bottom-3 right-3 bg-background/90 p-2 text-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"><ZoomIn size={18}/></span></Button>
            <figcaption className="meta text-muted-foreground mt-3">{chapter.title} / Process page {String(page).padStart(2,'0')}</figcaption>
          </figure>)}</div>
          {chapter.pages.length>2 && <Button variant="outline" className="rounded-none mt-8" aria-expanded={!!expanded[index]} onClick={()=>setExpanded({...expanded,[index]:!expanded[index]})}>{expanded[index] ? 'Show fewer pages' : `All ${chapter.title.toLowerCase()} pages (${chapter.pages.length})`}<ArrowRight/></Button>}
        </section>)}
        {next&&<Link to={`/project/${next.id}`} className="flex items-center justify-between gap-5 py-16 group"><div><p className="meta text-muted-foreground mb-4">Next project</p><p className="editorial-heading">{next.name}</p><p className="mt-3 text-muted-foreground">{next.subtitle}</p></div><ArrowUpRight size={48} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"/></Link>}
        <div className="py-8 border-t border-border flex justify-between gap-5"><Link to="/#portfolio" className="flex items-center gap-2"><ArrowLeft size={16}/>All work</Link><Link to="/#contact" className="flex items-center gap-2">Get in touch<ArrowUpRight size={16}/></Link></div>
      </div>
    </main>
    <Dialog open={lightbox!==null} onOpenChange={open=>{if(!open)setLightbox(null);}}><DialogContent className="w-[96vw] max-w-6xl p-4 md:p-6 max-h-[94svh] overflow-auto"><DialogTitle className="font-normal pr-8">{product.name} / Process book</DialogTitle><DialogDescription className="sr-only">Original process page enlarged.</DialogDescription>{lightbox!==null&&<><img className="w-full max-h-[72svh] object-contain" src={pages[lightbox]} alt={`${product.name} process page ${lightbox+1}`}/><div className="flex justify-between items-center"><Button variant="outline" size="icon" aria-label="Previous process page" onClick={()=>setLightbox((lightbox+pages.length-1)%pages.length)}><ChevronLeft/></Button><span className="meta">{lightbox+1} / {pages.length}</span><Button variant="outline" size="icon" aria-label="Next process page" onClick={()=>setLightbox((lightbox+1)%pages.length)}><ChevronRight/></Button></div></>}</DialogContent></Dialog>
  </div>;
}
