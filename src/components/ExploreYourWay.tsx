import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { sectionImages } from '@/data/siteConfig';
import { useNav } from '@/context/NavContext';
import type { EnquiryType } from '@/data/tours';

interface ExploreCard {
  title: string;
  description: string;
  image: string;
  cta: string;
  enquiryType: EnquiryType;
}

export function ExploreYourWay() {
  const { openEnquiry } = useNav();

  const cards: ExploreCard[] = [
    { title: 'Day Tours', description: 'Discover Sydney, the Central Coast and surrounding destinations with enjoyable, well-organised day tours designed for groups of all sizes.', image: sectionImages.exploreDay, cta: 'Plan Your Tour', enquiryType: 'Day Tour' },
    { title: 'School Group Tours', description: 'Safe, organised and engaging group travel for schools, including excursions, educational experiences and customised itineraries.', image: sectionImages.exploreCharter, cta: 'Plan Your Group Trip', enquiryType: 'School Group Tour' },
    { title: 'Extended Tours', description: 'Enjoy more of the journey with professionally planned multi-day tours and extended group travel experiences.', image: sectionImages.exploreMulti, cta: 'Plan Your Tour', enquiryType: 'Extended Tour' },
    { title: 'Guided Tours', description: 'Explore destinations with organised guided experiences designed to make group travel easy, informative and enjoyable.', image: sectionImages.exploreClub, cta: 'Plan Your Tour', enquiryType: 'Guided Tour' },
    { title: 'Group Cruises', description: 'Bring your group together with memorable cruise experiences, with assistance coordinating the journey from start to finish.', image: sectionImages.cinematicBreak, cta: 'Plan Your Cruise', enquiryType: 'Group Cruise' },
    { title: 'Winery Tours', description: 'Relax and enjoy a carefully planned group winery experience, ideal for social groups, celebrations and memorable days away.', image: '/winery-tour.png', cta: 'Plan Your Tour', enquiryType: 'Winery Tour' },
  ];

  return (
    <section id="explore" className="relative py-24 md:py-36 bg-charcoal-900">
      <div className="container-premium">
        <div className="mb-16 md:mb-20"><Reveal><p className="eyebrow mb-4">What We Offer</p></Reveal><Reveal delay={1}><h2 className="section-heading text-balance max-w-3xl">Six ways to travel. <span className="italic text-ochre-300">One standard of care.</span></h2></Reveal></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) + 1 as 1|2|3}>
              <div onClick={() => openEnquiry(card.enquiryType)} className="group relative overflow-hidden rounded-sm bg-charcoal-800 h-[380px] md:h-[440px] cursor-pointer">
                <div className="absolute inset-0 img-zoom"><img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-110" loading="lazy" /></div>
                <div className="absolute inset-0 bg-gradient-card" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"><h3 className="font-display text-2xl md:text-3xl font-light text-ivory-50 mb-3">{card.title}</h3><p className="text-ivory-200/80 text-sm leading-relaxed max-w-md mb-5 line-clamp-3">{card.description}</p><span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ochre-400 group-hover:text-ochre-300 transition-colors duration-300">{card.cta}<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" /></span></div>
                <div className="absolute inset-0 border border-ivory-200/0 group-hover:border-ochre-400/30 transition-colors duration-700 rounded-sm" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
