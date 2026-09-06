import { Sparkles, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { sectionImages } from '@/data/siteConfig';
import { useNav } from '@/context/NavContext';

export function TravelClub() {
  const { openEnquiry } = useNav();
  const benefits = ['Upcoming travel opportunities','Member updates','Special journeys','Travel community','Early information about upcoming tours'];
  return (
    <section id="travel-club" className="relative py-24 md:py-36 overflow-hidden bg-charcoal-900">
      <div className="absolute inset-0"><img src={sectionImages.travelClub} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" /><div className="absolute inset-0 bg-gradient-charcoal" /><div className="absolute inset-0 bg-charcoal-900/60" /></div>
      <div className="relative container-premium"><div className="max-w-3xl mx-auto text-center">
        <Reveal><div className="inline-flex items-center gap-2 mb-6"><Sparkles className="w-4 h-4 text-ochre-400" /><p className="eyebrow">Travel Club</p></div></Reveal>
        <Reveal delay={1}><h2 className="section-heading text-balance">The journey doesn't end <span className="italic text-ochre-300">here.</span></h2></Reveal>
        <Reveal delay={2}><p className="mt-4 font-display text-2xl font-light text-ivory-200/90">Welcome to the Nexus Travel Club.</p></Reveal>
        <Reveal delay={3}><p className="mt-8 text-lg text-ivory-200/70 leading-relaxed max-w-2xl mx-auto">A community for people who love discovering new places, sharing memorable journeys and hearing about upcoming Nexus Travel Group experiences.</p></Reveal>
        <Reveal delay={4}><div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-xl mx-auto">{benefits.map((benefit) => <div key={benefit} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-ochre-400" /><span className="text-sm text-ivory-200/80">{benefit}</span></div>)}</div></Reveal>
        <Reveal delay={5}><button onClick={() => openEnquiry('Other / Custom Tour' as never)} className="btn-primary mt-12">Register Your Interest<ArrowRight className="w-4 h-4" /></button></Reveal>
      </div></div>
    </section>
  );
}
