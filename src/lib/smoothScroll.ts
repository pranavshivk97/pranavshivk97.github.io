let scrollRaf = 0;

export function cancelSmoothScroll() {
  cancelAnimationFrame(scrollRaf);
  scrollRaf = 0;
}

/** Eased scroll to an in-page target, accounting for the fixed nav. */
export function smoothScrollTo(target: Element, smooth = true) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  cancelSmoothScroll();

  const nav = document.getElementById('nav');
  const navHeight = nav ? nav.offsetHeight : 0;

  let destination: number;
  if (target.id === 'home') {
    destination = 0;
  } else {
    const anchor = target.querySelector('.section-header, .contact-panel') || target;
    destination = Math.max(0, anchor.getBoundingClientRect().top + window.scrollY - navHeight - 18);
  }

  const start = window.scrollY;
  if (!smooth || reduced || Math.abs(destination - start) < 2) {
    window.scrollTo({ top: destination, left: 0, behavior: 'auto' });
    return;
  }

  const distance = destination - start;
  const duration = Math.min(720, Math.max(420, Math.abs(distance) * 0.24));
  const startedAt = performance.now();
  const previousBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  const step = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased =
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) {
      scrollRaf = requestAnimationFrame(step);
    } else {
      document.documentElement.style.scrollBehavior = previousBehavior;
      scrollRaf = 0;
    }
  };

  scrollRaf = requestAnimationFrame(step);
}
