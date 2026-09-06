import { ArrowLeft, Compass, Heart, Users, Map } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { sectionImages } from '@/data/siteConfig';
import { useNav } from '@/context/NavContext';

export function AboutPage() {
  const { navigate, openEnquiry } = useNav();

  const values = [
    { icon: Heart, title: 'Personal', description: 'Every journey is managed personally, from first enquiry to final destination.' },
    { icon: Compass, title: 'Memorable', description: 'Routes and destinations chosen for their beauty, character and story.' },
    { icon: Users, title: 'Flexible', description: 'Day tours, extended journeys and group charters — tailored to you.' },
    { icon: Map, title: 'NSW-Based', description: 'Sydney and Central Coast roads, regional NSW destinations, and genuine local knowledge.' },
  ];

  return (
    <div className="bg-charcoal-950">
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0"><img src={sectionImages.about} alt="Misty Australian wilderness landscape" className="w-full h-full object-cover animate-slow-zoom" /></div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative h-full flex flex-col justify-end container-premium pb-16">
          <button onClick={() => navigate('home')} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ivory-200/80 hover:text-ochre-400 transition-colors mb-8 self-start"><ArrowLeft className="w-4 h-4" />Back to Home</button>
          <Reveal><p className="eyebrow mb-4">About</p></Reveal>
          <Reveal delay={1}><h1 className="font-display text-display-md md:text-display-lg font-light text-ivory-50 text-shadow-cinematic max-w-3xl">Travel should be <span className="italic text-ochre-300">personal, memorable and easy.</span></h1></Reveal>
        </div>
      </section>
      <section className="py-20 md:py-28"><div className="container-premium"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"><div>
        <Reveal><p className="eyebrow mb-4">Our Philosophy</p></Reveal>
        <Reveal delay={1}><h2 className="section-heading text-balance mb-8">Connecting travellers with <span className="italic text-ochre-300">memorable destinations.</span></h2></Reveal>
        <Reveal delay={2}><p className="text-lg text-ivory-200/80 leading-relaxed mb-4">Nexus Travel Group exists to connect travellers and groups with memorable destinations and journeys across Sydney and the Central Coast.</p></Reveal>
        <Reveal delay={3}><p className="text-base text-ivory-200/70 leading-relaxed">We believe travel should be personal — not a transaction. That's why every enquiry is answered by a real person, every journey is carefully planned, and every traveller is treated as a guest.</p></Reveal>
      </div><Reveal delay={2}><div className="relative"><div className="img-zoom overflow-hidden rounded-sm"><img src={sectionImages.aboutSecondary} alt="Misty eucalyptus forest" className="w-full h-[400px] md:h-[500px] object-cover" loading="lazy" /></div><div className="absolute -top-4 -left-4 w-24 h-24 border border-ochre-400/30 -z-10" /></div></Reveal></div></div></section>
      <section className="py-20 bg-charcoal-900"><div className="container-premium"><Reveal><p className="eyebrow mb-4 text-center">What We Believe</p></Reveal><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">{values.map((value, i) => { const Icon = value.icon; return <Reveal key={value.title} delay={(i % 4) + 1 as 1|2|3|4}><div className="text-center p-6"><div className="w-14 h-14 mx-auto rounded-full bg-charcoal-800 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-ochre-400" /></div><h3 className="font-display text-xl font-light text-ivory-50 mb-2">{value.title}</h3><p className="text-sm text-ivory-200/70 leading-relaxed">{value.description}</p></div></Reveal>; })}</div></div></section>
      <section className="relative py-24 md:py-32 overflow-hidden"><div className="absolute inset-0"><img src={sectionImages.about} alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-charcoal-950/85" /></div><div className="relative container-premium text-center"><Reveal><h2 className="font-display text-display-md font-light text-ivory-50 text-balance max-w-2xl mx-auto">The company story will be shared here soon.</h2></Reveal><Reveal delay={1}><p className="mt-6 text-ivory-200/70 max-w-xl mx-auto">In the meantime, we'd love to hear about where you'd like to go.</p></Reveal><Reveal delay={2}><button onClick={() => openEnquiry('Other / Custom Tour' as never)} className="btn-primary mt-10">Start Your Enquiry</button></Reveal></div></section>
    </div>
  );
}
