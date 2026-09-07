import { ChevronDown } from 'lucide-react';
import { heroImages } from '@/data/siteConfig';
import { useNav } from '@/context/NavContext';
import type { EnquiryType } from '@/data/tours';

export function Hero() {
  const { openEnquiry } = useNav();
  const scrollToExplore = () => { const el = document.getElementById('introduction'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  const scrollToTours = () => { const el = document.getElementById('tours'); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0"><img src={heroImages.main} alt="Aerial view of a scenic coastal road in New South Wales, Australia" className="w-full h-full object-cover animate-slow-zoom" fetchPriority="high" /></div>
      <div className="absolute inset-0 bg-gradient-hero" /><div className="absolute inset-0 bg-charcoal-950/20" />
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6"><div className="max-w-4xl">
        <p className="eyebrow mb-6 opacity-0" style={{ animation: 'fadeDown 0.8s ease-out 0.3s forwards' }}>Nexus Travel Group</p>
        <h1 className="font-display font-light text-ivory-50 text-display-xl text-balance text-shadow-cinematic opacity-0" style={{ animation: 'fadeUp 1s ease-out 0.5s forwards' }}>See More. <span className="italic font-normal text-ochre-300">Go Further.</span></h1>
        <p className="mt-8 text-base md:text-lg text-ivory-200/90 max-w-2xl mx-auto text-balance text-shadow-soft opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 0.9s forwards' }}>Thoughtfully planned tours and group travel experiences, made simple.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 1.2s forwards' }}><button onClick={scrollToTours} className="btn-primary">Explore Tours</button><button onClick={() => openEnquiry('Other / Custom Tour' as EnquiryType)} className="btn-outline">Enquire Now</button></div>
      </div></div>
      <div className="absolute bottom-0 left-0 right-0 z-10 opacity-0" style={{ animation: 'fadeUp 0.8s ease-out 1.6s forwards' }}><div className="bg-charcoal-950/60 backdrop-blur-sm border-t border-ivory-200/10"><div className="container-premium py-5"><div className="flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between text-center">{['Day Tours', 'School Groups', 'Extended Tours', 'Winery Tours', 'Group Cruises'].map((item, i) => (<div key={item} className="flex items-center">{i > 0 && <span className="hidden md:block mx-6 text-ivory-200/20">|</span>}<span className="text-xs md:text-sm uppercase tracking-[0.2em] text-ivory-200/80 hover:text-ochre-400 transition-colors duration-300 cursor-default">{item}</span></div>))}</div></div></div></div>
      <button onClick={scrollToExplore} className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 group" aria-label="Scroll to explore"><span className="text-[10px] uppercase tracking-[0.3em] text-ivory-200/60 group-hover:text-ochre-400 transition-colors">Scroll</span><ChevronDown className="w-5 h-5 text-ivory-200/60 group-hover:text-ochre-400 animate-scroll-bounce transition-colors" /></button>
    </section>
  );
}
