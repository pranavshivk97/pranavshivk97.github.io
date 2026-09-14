import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen';
import SignalField from './components/SignalField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
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
  const [introDone, setIntroDone] = useState(false);

  useLayoutEffect(() => {
    document.body.classList.toggle('intro-active', !introDone);
  }, [introDone]);

  useReveal();

  // Smooth-scroll any in-page anchor the navbar doesn't handle itself
  // (hero CTAs, footer back-to-top), mirroring the original behavior.
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

  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      {!introDone && <IntroScreen onDone={handleIntroDone} />}
      <SignalField />
      <div className="noise" aria-hidden="true" />
      <div className="page" id="portfolio-page" inert={!introDone}>
        <Navbar />
        <main>
          <Hero active={introDone} />
          <Marquee />
          <About />
          <Experience />
          <TrackRecord />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
}
