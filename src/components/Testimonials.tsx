import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 bg-charcoal-900">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal><Quote className="w-10 h-10 text-ochre-400/40 mx-auto mb-8" /></Reveal>
          <Reveal delay={1}><p className="eyebrow mb-6">Customer Stories</p></Reveal>
          <Reveal delay={2}><h2 className="section-heading text-balance">Coming <span className="italic text-ochre-300">soon.</span></h2></Reveal>
          <Reveal delay={3}><p className="mt-8 text-lg text-ivory-200/70 leading-relaxed max-w-xl mx-auto">We're collecting stories from travellers who've journeyed with us. Real experiences, in their own words, will appear here soon.</p></Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i as 1|2|3}>
                <div className="bg-charcoal-800/50 border border-ivory-200/5 rounded-sm p-8 text-left h-full">
                  <div className="flex gap-1 mb-4">{[1, 2, 3, 4, 5].map((s) => <span key={s} className="w-2 h-2 rounded-full bg-ivory-200/10" />)}</div>
                  <p className="text-ivory-300/40 text-sm leading-relaxed italic">Customer review will appear here.</p>
                  <div className="mt-6 pt-4 border-t border-ivory-200/5"><div className="w-10 h-10 rounded-full bg-ivory-200/5" /><p className="mt-3 text-xs text-ivory-300/30 uppercase tracking-wide">Traveller name</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
