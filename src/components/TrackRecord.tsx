import { projects } from '../data/content';
import SectionHeader from './SectionHeader';

export default function TrackRecord() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <SectionHeader
          no="[ 04 ]"
          title="Track record"
          intro="A few systems and product problems that show how I operate—not just what I shipped."
        />
        <div className="projects-grid stagger-tilt">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-no">{project.no}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
