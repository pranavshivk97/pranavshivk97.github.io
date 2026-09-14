import { skillGroups } from '../data/content';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHeader no="[ 05 ]" title="Technical stack" />
        <div className="skills-layout stagger">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.heading}>
              <h3>{group.heading}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
