import { NavProvider, useNav } from '@/context/NavContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { ExploreYourWay } from '@/components/ExploreYourWay';
import { FeaturedTours } from '@/components/FeaturedTours';
import { MultiDayJourneys } from '@/components/MultiDayJourneys';
import { SchoolGroupCharters } from '@/components/SchoolGroupCharters';
import { TravelClub } from '@/components/TravelClub';
import { WhyNexus } from '@/components/WhyNexus';
import { CinematicBreak } from '@/components/CinematicBreak';
import { Testimonials } from '@/components/Testimonials';
import { Enquiry } from '@/components/Enquiry';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AboutPage } from '@/components/AboutPage';
import { TourDetail } from '@/components/TourDetail';
import { StickyEnquireCTA } from '@/components/StickyEnquireCTA';

function AppContent() {
  const { currentPage } = useNav();

  // Tour detail page
  if (currentPage.startsWith('tour:')) {
    const tourId = currentPage.split(':')[1];
    return (
      <>
        <Header />
        <main>
          <TourDetail tourId={tourId} />
        </main>
        <Footer />
        <StickyEnquireCTA />
      </>
    );
  }

  // About page
  if (currentPage === 'about') {
    return (
      <>
        <Header />
        <main>
          <AboutPage />
        </main>
        <Footer />
        <StickyEnquireCTA />
      </>
    );
  }

  // Home page
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <ExploreYourWay />
        <FeaturedTours />
        <MultiDayJourneys />
        <SchoolGroupCharters />
        <TravelClub />
        <CinematicBreak />
        <WhyNexus />
        <Testimonials />
        <Enquiry />
        <Contact />
      </main>
      <Footer />
      <StickyEnquireCTA />
    </>
  );
}

export default function App() {
  return (
    <NavProvider>
      <AppContent />
    </NavProvider>
  );
}
