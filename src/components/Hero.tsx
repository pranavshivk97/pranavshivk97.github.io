import { useEffect, useRef } from 'react';
import { focusAreas, profile } from '../data/content';

interface HeroProps {
  /** Start the typing loop once the intro has finished. */
  active: boolean;
}

export default function Hero({ active }: HeroProps) {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!active) return;
    const focus = typedRef.current;
    if (!focus) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      focus.textContent = focusAreas[0];
      return;
    }

    let areaIndex = 0;
    let charIndex = focusAreas[0].length;
    let phase: 'hold' | 'delete' | 'type' = 'hold';
    let focusTimer = 0;
    let cancelled = false;

    const scheduleFocus = (delay: number) => {
      window.clearTimeout(focusTimer);
      focusTimer = window.setTimeout(typeFocus, delay);
    };

    const commitPhrase = () => {
      const phrase = focusAreas[areaIndex];
      charIndex = phrase.length;
      focus.textContent = phrase;
    };

    const typeFocus = () => {
      if (cancelled || document.hidden) return;
      const phrase = focusAreas[areaIndex];

      if (phase === 'hold') {
        commitPhrase();
        phase = 'delete';
        scheduleFocus(1450);
        return;
      }

      if (phase === 'delete') {
        charIndex = Math.max(0, charIndex - 1);
        focus.textContent = phrase.slice(0, charIndex);
        if (charIndex === 0) {
          areaIndex = (areaIndex + 1) % focusAreas.length;
          phase = 'type';
          scheduleFocus(280);
          return;
        }
        scheduleFocus(34);
        return;
      }

      const nextPhrase = focusAreas[areaIndex];
      charIndex = Math.min(nextPhrase.length, charIndex + 1);
      focus.textContent = nextPhrase.slice(0, charIndex);
      if (charIndex === nextPhrase.length) {
        commitPhrase();
        phase = 'hold';
        scheduleFocus(1450);
        return;
      }
      scheduleFocus(70);
    };

    const onVisibility = () => {
      if (!document.hidden && !cancelled) {
        commitPhrase();
        phase = 'hold';
        scheduleFocus(1450);
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    commitPhrase();
    scheduleFocus(1450);

    return () => {
      cancelled = true;
      window.clearTimeout(focusTimer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [active ]);

  return (
    <section className="hero" id="home">
      <div className="wrap hero-content">
        <div className="status-line">
          <span className="pulse" />
          {profile.location} · {profile.title}
        </div>
        <h1 aria-label={profile.name}>
          <span aria-hidden="true">{profile.firstName}</span>
          <span className="outline" aria-hidden="true">
            {profile.lastName}
          </span>
        </h1>
        <div className="role-line" aria-label={profile.title}>
          <span className="role-prefix">~/role $</span>
          <span>{profile.title}</span>
        </div>
        <div className="byline-line" aria-label="Areas of work">
          <span className="byline-prefix">~/building $</span>
          <span id="typed-focus" ref={typedRef}>
            {focusAreas[0]}
          </span>
          <span className="caret" aria-hidden="true" />
        </div>
        <p className="hero-copy">{profile.heroCopy}</p>
        <div className="hero-actions">
          <a className="btn" href="#projects">
            Explore the work <span aria-hidden="true">↘</span>
          </a>
          <a className="btn ghost" href="#contact">
            Start a conversation
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">
          01
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        Scroll to inspect
      </div>
    </section>
  );
}
