import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { useNav } from '@/context/NavContext';
import type { EnquiryType } from '@/data/tours';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navigate, openEnquiry, currentPage } = useNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (target: string) => {
    if (target === 'about') {
      navigate('about');
    } else if (currentPage !== 'home') {
      navigate('home');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const handleEnquire = () => {
    openEnquiry('Other / Custom Tour' as EnquiryType);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-charcoal-950 transition-all duration-500 ease-premium ${
          scrolled
            ? 'shadow-xl shadow-black/10 border-b border-ivory-200/5'
            : 'border-b border-ivory-200/[0.03]'
        }`}
      >
        <div className="container-premium flex h-[86px] md:h-[96px] items-center justify-between">
          <button
            onClick={() => {
              navigate('home');
              setMobileOpen(false);
            }}
            className="group flex items-center -ml-2"
            aria-label="Nexus Travel Group home"
          >
            <img
              src="/nexus-logo.jpg"
              alt="Nexus Travel Group"
              className="h-[74px] md:h-[84px] w-auto object-contain mix-blend-normal"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {siteConfig.nav.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNav(item.target)}
                className="link-underline text-sm font-medium text-ivory-100/90 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button onClick={handleEnquire} className="btn-primary !py-3 !px-6">
              Enquire Now
            </button>
          </nav>

          <button onClick={() => setMobileOpen(true)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
            <span className="block w-6 h-px bg-ivory-100 transition-all" />
            <span className="block w-6 h-px bg-ivory-100 transition-all" />
            <span className="block w-4 h-px bg-ivory-100 transition-all ml-auto" />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-premium ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-charcoal-950/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className="relative h-full flex flex-col justify-center px-8">
          <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 p-2" aria-label="Close menu">
            <X className="w-7 h-7 text-ivory-100" />
          </button>
          <div className="absolute top-3 left-5">
            <img src="/nexus-logo.jpg" alt="Nexus Travel Group" className="h-20 w-auto object-contain" />
          </div>
          <nav className="flex flex-col gap-2">
            {siteConfig.nav.map((item, i) => (
              <button
                key={item.target}
                onClick={() => handleNav(item.target)}
                className="text-left font-display text-3xl font-light text-ivory-100 hover:text-ochre-400 transition-all duration-500 ease-premium"
                style={{ opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s, color 0.3s ease` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button onClick={handleEnquire} className="btn-primary mt-12 w-full sm:w-auto sm:self-start" style={{ opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s' }}>
            Enquire Now
          </button>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pt-6 border-t border-ivory-200/10" style={{ opacity: mobileOpen ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }}>
            <span className="text-xs uppercase tracking-[0.3em] text-ivory-300">Nexus Travel Group</span>
            <span className="text-xs text-ochre-400">See more. Go further.</span>
          </div>
        </div>
      </div>
    </>
  );
}
