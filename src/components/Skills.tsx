import { skillGroups } from '../data/content';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHeader kicker="Stack" title="Tools I reach for." />
        <div className="stack-grid">
          {skillGroups.map((group) => (
            <div className="stack-group reveal" key={group.heading}>
              <h3>{group.heading}</h3>
              <p>{group.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
