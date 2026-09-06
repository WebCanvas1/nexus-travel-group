import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { EnquiryType } from '@/data/tours';

interface EnquiryState {
  type: EnquiryType | '';
  tourId: string;
}

interface NavContextValue {
  currentPage: string;
  navigate: (page: string) => void;
  enquiryState: EnquiryState;
  setEnquiryState: (state: Partial<EnquiryState>) => void;
  openEnquiry: (type?: EnquiryType, tourId?: string) => void;
}

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [enquiryState, setEnquiryStateInternal] = useState<EnquiryState>({
    type: '',
    tourId: '',
  });

  const navigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const setEnquiryState = useCallback((state: Partial<EnquiryState>) => {
    setEnquiryStateInternal((prev) => ({ ...prev, ...state }));
  }, []);

  const openEnquiry = useCallback(
    (type?: EnquiryType, tourId?: string) => {
      if (type || tourId) {
        setEnquiryStateInternal((prev) => ({
          ...prev,
          type: type || prev.type,
          tourId: tourId || prev.tourId,
        }));
      }
      if (currentPage !== 'home') {
        setCurrentPage('home');
      }
      setTimeout(() => {
        const el = document.getElementById('enquiry');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, currentPage !== 'home' ? 200 : 50);
    },
    [currentPage],
  );

  return (
    <NavContext.Provider
      value={{ currentPage, navigate, enquiryState, setEnquiryState, openEnquiry }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error('useNav must be used within NavProvider');
  return ctx;
}
