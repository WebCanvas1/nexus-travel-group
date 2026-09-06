import { useEffect, useState } from 'react';
import { useNav } from '@/context/NavContext';
import type { EnquiryType } from '@/data/tours';

export function StickyEnquireCTA() {
  const { openEnquiry, currentPage } = useNav();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (currentPage.startsWith('tour:')) return null;

  return (
    <button
      onClick={() => openEnquiry('Other / Custom Tour' as EnquiryType)}
      className={`lg:hidden fixed bottom-6 right-6 z-40 btn-primary !px-6 !py-3.5 shadow-2xl shadow-ochre-500/20 transition-all duration-500 ease-premium ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="Enquire now"
    >
      Enquire
    </button>
  );
}
