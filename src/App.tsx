import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TrackRecord from './components/TrackRecord';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { useReveal } from './hooks/useReveal';
import { navLinks } from './data/content';
import { smoothScrollTo } from './lib/smoothScroll';

export default function App() {
  useReveal();

  // Smooth-scroll in-page anchors the navbar doesn't handle itself
  // (hero links, footer back-to-top).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.('a[href^="#"]');
      if (!anchor || anchor.closest('.nav-links')) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      smoothScrollTo(target, navLinks.some((l) => l.href === href));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TrackRecord />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
