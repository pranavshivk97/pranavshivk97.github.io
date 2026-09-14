import { education } from '../data/content';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHeader no="[ 06 ]" title="Education" />
        <div className="education-list stagger">
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <div className="education-mark" aria-hidden="true">
                {item.mark}
              </div>
              <div className="education-body">
                <div className="education-kicker">{item.kicker}</div>
                <p className="degree">{item.degree}</p>
                <div>
                  <span className="school">{item.school}</span>
                  <span className="location">{item.location}</span>
                </div>
              </div>
              <time className="date" dateTime={item.dateTime}>
                {item.dates}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
