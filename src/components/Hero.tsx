import { profile } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <p className="hero-kicker">
          {profile.title} · {profile.location}
        </p>
        <h1>{profile.name}</h1>
        <p className="hero-lede">{profile.heroLede}</p>
        <div className="hero-links">
          <a className="text-link" href={`mailto:${profile.email}`}>
            Email <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#projects">
            Selected work <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
