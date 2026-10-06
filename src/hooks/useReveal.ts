import { useEffect } from 'react';

/** Adds `.visible` to `.reveal` elements as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !reduced) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }

    els.forEach((el) => el.classList.add('visible'));
    return undefined;
  }, []);
}
