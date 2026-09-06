import { Reveal } from '@/components/Reveal';
import { sectionImages } from '@/data/siteConfig';

export function Introduction() {
  return (
    <section id="introduction" className="relative py-24 md:py-36 bg-charcoal-950">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal><p className="eyebrow mb-6">The Journey Starts Here</p></Reveal>
            <Reveal delay={1}><h2 className="section-heading text-balance">There's more to see than you <span className="italic text-ochre-300">think.</span></h2></Reveal>
            <Reveal delay={2}><p className="mt-8 text-lg text-ivory-200/80 leading-relaxed max-w-xl">Nexus Travel Group creates memorable journeys — from relaxing day escapes to extended adventures and customised group travel across Sydney and the Central Coast. Every trip is personally managed, every route carefully chosen, every detail considered.</p></Reveal>
            <Reveal delay={3}><p className="mt-4 text-base text-ivory-300/70 leading-relaxed max-w-xl">Whether you're chasing coastal horizons, regional towns or a memorable day away with your group, we'll take you there in comfort and style.</p></Reveal>
          </div>
          <div className="order-1 lg:order-2 relative"><Reveal><div className="relative"><div className="img-zoom relative overflow-hidden rounded-sm"><img src={sectionImages.intro} alt="Red dirt road through the Australian outback" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" /></div><div className="absolute -bottom-12 -left-6 md:-left-12 w-40 md:w-56 img-zoom overflow-hidden rounded-sm border-4 border-charcoal-950 shadow-2xl hidden sm:block"><img src={sectionImages.introSecondary} alt="Misty eucalyptus forest in Australia" className="w-full h-32 md:h-44 object-cover" loading="lazy" /></div><div className="absolute -top-4 -right-4 w-24 h-24 border border-ochre-400/30 -z-10" /></div></Reveal></div>
        </div>
      </div>
    </section>
  );
}
