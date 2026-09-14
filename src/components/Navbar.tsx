import { useCallback, useEffect, useRef, useState } from 'react';
import { navLinks } from '../data/content';
import { smoothScrollTo } from '../lib/smoothScroll';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

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
      id="nav"
      className={`site-nav${scrolled ? ' scrolled' : ''}`}
      aria-label="Primary navigation"
    >
      <div className="nav-inner">
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = link.href === activeHref;
            const isContact = link.href === '#contact';
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${isActive ? 'active' : ''}${isContact ? ' contact-link' : ''}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
