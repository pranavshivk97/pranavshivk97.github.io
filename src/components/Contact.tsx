import { profile } from '../data/content';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-panel reveal">
          <h2>Let’s build what comes next.</h2>
          <p>
            For product engineering opportunities, ambitious 0→1 work, or a conversation about
            building AI-powered experiences that hold up in production.
          </p>
          <div className="contact-actions">
            <a className="btn" href={`mailto:${profile.email}`}>
              Email {profile.firstName} <span aria-hidden="true">↗</span>
            </a>
            <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <footer className="footer-line">
          <span>
            {profile.name} · {profile.title}
          </span>
          <div className="footer-links">
            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
