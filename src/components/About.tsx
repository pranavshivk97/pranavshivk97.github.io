import { aboutCopy, signalCard } from '../data/content';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHeader
          no="[ 02 ]"
          title={
            <>
              From ambiguity
              <br />
              to impact.
            </>
          }
        />
        <div className="about-grid">
          <div className="about-copy reveal reveal-scan">
            {aboutCopy.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
          <aside className="signal-card reveal reveal-scan" aria-label="Profile summary">
            <dl>
              {signalCard.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
