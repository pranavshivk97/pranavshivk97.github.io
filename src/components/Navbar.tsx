import { useCallback, useEffect, useRef, useState } from 'react';
import { navLinks } from '../data/content';
import { smoothScrollTo } from '../lib/smoothScroll';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('ps-theme', next);
    } catch {
      /* storage unavailable — theme just won't persist */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#16130f' : '#faf7f1');
    setTheme(next);
  }, []);

  const updateNav = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    setScrolled(window.scrollY > 24);

    const marker = window.scrollY + nav.offsetHeight + Math.min(180, window.innerHeight * 0.28);
    let activeIndex = 0;
    navLinks.forEach((link, index) => {
      const section = document.querySelector(link.href);
      if (section && (section as HTMLElement).offsetTop <= marker) activeIndex = index;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      activeIndex = navLinks.length - 1;
    }
    setActiveHref(navLinks[activeIndex].href);
  }, []);

  useEffect(() => {
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, [updateNav]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    setActiveHref(href);
    smoothScrollTo(target, true);
  };

  return (
    <nav
      ref={navRef}
      className={`site-nav${scrolled ? ' scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="nav-inner">
        <a
          className="nav-name"
          href="#home"
          aria-label="Back to top"
          onClick={(e) => handleClick(e, '#home')}
        >
          PS
        </a>
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'location' : undefined}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-icon theme-icon-sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </span>
            <span className="theme-icon theme-icon-moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
