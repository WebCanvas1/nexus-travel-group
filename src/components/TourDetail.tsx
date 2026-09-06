import { Clock, MapPin, Check, ArrowLeft, Info } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { tours } from '@/data/tours';
import { useNav } from '@/context/NavContext';
import type { EnquiryType } from '@/data/tours';

interface TourDetailProps { tourId: string; }

export function TourDetail({ tourId }: TourDetailProps) {
  const { navigate, openEnquiry } = useNav();
  const tour = tours.find((t) => t.id === tourId);

  if (!tour) {
    return <div className="min-h-screen flex items-center justify-center bg-charcoal-950"><div className="text-center"><p className="text-ivory-200 mb-4">Tour not found.</p><button onClick={() => navigate('home')} className="btn-outline">Return Home</button></div></div>;
  }

  const handleBack = () => { navigate('home'); setTimeout(() => { const el = document.getElementById('tours'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); };
  const handleEnquire = () => openEnquiry(tour.typeName as EnquiryType, tour.id);

  return (
    <div className="bg-charcoal-950">
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0"><img src={tour.image} alt={tour.name} className="w-full h-full object-cover animate-slow-zoom" /></div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative h-full flex flex-col justify-end container-premium pb-16">
          <button onClick={handleBack} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-ivory-200/80 hover:text-ochre-400 transition-colors mb-8 self-start"><ArrowLeft className="w-4 h-4" />Back to Tours</button>
          <div className="flex flex-wrap items-center gap-4 mb-4"><span className="px-3 py-1.5 bg-ochre-500/20 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-ochre-300 rounded-sm">{tour.typeName}</span><span className="flex items-center gap-1.5 text-sm text-ivory-200/80"><MapPin className="w-4 h-4" /> {tour.destination}</span><span className="flex items-center gap-1.5 text-sm text-ivory-200/80"><Clock className="w-4 h-4" /> {tour.duration}</span></div>
          <h1 className="font-display text-display-md md:text-display-lg font-light text-ivory-50 text-shadow-cinematic max-w-3xl">{tour.name}</h1>
        </div>
      </section>
      <section className="py-20 md:py-28"><div className="container-premium"><div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"><div className="lg:col-span-2"><Reveal><p className="eyebrow mb-4">Overview</p></Reveal><Reveal delay={1}><p className="text-lg md:text-xl text-ivory-200/80 leading-relaxed">{tour.longDescription}</p></Reveal></div><Reveal delay={2}><div className="bg-charcoal-900 border border-ivory-200/5 rounded-sm p-6 space-y-4"><h3 className="text-xs uppercase tracking-[0.2em] text-ochre-400 mb-4">Tour Details</h3><div className="flex items-start gap-3"><Clock className="w-5 h-5 text-ivory-300/60 mt-0.5" /><div><p className="text-xs text-ivory-300/50 uppercase tracking-wide">Duration</p><p className="text-ivory-100">{tour.duration}</p></div></div><div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-ivory-300/60 mt-0.5" /><div><p className="text-xs text-ivory-300/50 uppercase tracking-wide">Destination</p><p className="text-ivory-100">{tour.destination}</p></div></div><div className="flex items-start gap-3"><Info className="w-5 h-5 text-ivory-300/60 mt-0.5" /><div><p className="text-xs text-ivory-300/50 uppercase tracking-wide">Type</p><p className="text-ivory-100">{tour.typeName}</p></div></div></div></Reveal></div></div></section>
      <section className="py-20 bg-charcoal-900"><div className="container-premium"><Reveal><p className="eyebrow mb-4">Highlights</p></Reveal><Reveal delay={1}><h2 className="font-display text-3xl md:text-4xl font-light text-ivory-50 mb-12">What you'll experience</h2></Reveal><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{tour.highlights.map((highlight, i) => <Reveal key={highlight} delay={((i % 2) + 1) as 1|2}><div className="flex items-start gap-4 p-5 bg-charcoal-800 rounded-sm border border-ivory-200/5"><Check className="w-5 h-5 text-ochre-400 mt-0.5 flex-shrink-0" /><p className="text-ivory-200/80">{highlight}</p></div></Reveal>)}</div></div></section>
      <section className="py-20 md:py-28"><div className="container-premium text-center"><button onClick={handleEnquire} className="btn-primary">Enquire About This Tour</button></div></section>
    </div>
  );
}
