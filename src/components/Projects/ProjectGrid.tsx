import { SimpleGrid } from "@chakra-ui/react";

import projects from "./projects";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <SimpleGrid spacing={3} columns={3}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
