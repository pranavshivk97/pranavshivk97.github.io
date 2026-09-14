import { roles } from '../data/content';
import CompanyLogo from './CompanyLogo';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHeader
          no="[ 03 ]"
          title="Experience"
          intro="A path from infrastructure and backend engineering to ownership of AI-powered, user-facing product systems."
        />
        <div className="timeline">
          {roles.map((role) => (
            <article className="role reveal" key={role.company}>
              <div className="role-meta">
                {role.dates}
                {role.location && <span>{role.location}</span>}
              </div>
              <div className="role-body">
                <div className="role-head">
                  <CompanyLogo name={role.logo} />
                  <p className="role-company">{role.company}</p>
                </div>
                <h3>{role.title}</h3>
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
