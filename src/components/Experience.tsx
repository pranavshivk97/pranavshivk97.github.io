import { roles } from '../data/content';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHeader kicker="Experience" title="Where I've worked." />
        <div>
          {roles.map((role) => (
            <article className="role reveal" key={role.company}>
              <div className="role-dates">
                {role.dates}
                {role.location && <span>{role.location}</span>}
              </div>
              <div className="role-body">
                <h3 className="role-company">{role.company}</h3>
                <p className="role-title">{role.title}</p>
                <ul>
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
