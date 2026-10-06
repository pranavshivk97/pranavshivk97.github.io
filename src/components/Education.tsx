import { education } from '../data/content';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHeader title="Education" />
        <div className="edu">
          {education.map((item) => (
            <div className="edu-item reveal" key={item.school}>
              <div>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-school">
                  {item.school} — {item.location}
                </p>
              </div>
              <div className="edu-dates">{item.dates}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
