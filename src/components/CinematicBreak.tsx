import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { sectionImages } from '@/data/siteConfig';

export function CinematicBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !imgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translate = (progress - 0.5) * 120;
        imgRef.current.style.transform = `translateY(${translate * 0.4}px) scale(1.15)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const handleDiscover = () => { const el = document.getElementById('tours'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  return <section ref={sectionRef} className="relative h-[70vh] min-h-[500px] w-full overflow-hidden"><div ref={imgRef} className="absolute inset-0 will-change-transform"><img src={sectionImages.cinematicBreak} alt="Australian outback road at sunset" className="w-full h-full object-cover" loading="lazy" /></div><div className="absolute inset-0 bg-charcoal-950/50" /><div className="absolute inset-0 bg-gradient-charcoal opacity-40" /><div className="relative h-full flex flex-col items-center justify-center text-center px-6"><h2 className="font-display text-display-lg md:text-display-xl font-light text-ivory-50 text-shadow-cinematic text-balance animate-fade-in">The road is calling.</h2><p className="mt-6 text-lg md:text-xl text-ivory-200/80 text-shadow-soft">Where will Nexus take you next?</p><button onClick={handleDiscover} className="btn-outline mt-10">Discover the Journeys<ArrowRight className="w-4 h-4" /></button></div></section>;
}
