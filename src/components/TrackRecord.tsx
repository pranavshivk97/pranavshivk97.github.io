import { projects } from '../data/content';
import SectionHeader from './SectionHeader';

export default function TrackRecord() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeader title="Selected work" />
        <div>
          {projects.map((project) => (
            <article className="project reveal" key={project.no}>
              <div className="project-no">{project.no}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-tags">{project.tags.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
