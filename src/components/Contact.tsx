import { profile } from '../data/content';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <h2 className="contact-title reveal">Let&rsquo;s build what&rsquo;s next.</h2>
        <p className="contact-copy reveal">
          I&rsquo;m always up for talking product engineering &mdash; 0&rarr;1
          work, platform problems, or AI features that have to survive
          production.
        </p>
        <div className="contact-actions reveal">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
        <div className="contact-actions reveal">
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span className="arrow" aria-hidden="true">&nearr;</span>
          </a>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span className="arrow" aria-hidden="true">&nearr;</span>
          </a>
        </div>
        <footer className="footer reveal">
          <div className="footer-inner">
            <span>&copy; 2026 {profile.name}</span>
            <a href="#home">Back to top &uarr;</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
