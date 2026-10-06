import { aboutCopy, facts } from '../data/content';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeader kicker="About" title="Product-minded engineer." />
        <div className="about-grid">
          <div className="about-copy reveal">
            {aboutCopy.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <dl className="facts reveal">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
