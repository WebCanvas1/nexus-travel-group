import type { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps { children: ReactNode; className?: string; delay?: 0 | 1 | 2 | 3 | 4 | 5; as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'p'; }
export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
  const Tag = as as keyof JSX.IntrinsicElements;
  return <Tag ref={ref as never} className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}>{children}</Tag>;
}
