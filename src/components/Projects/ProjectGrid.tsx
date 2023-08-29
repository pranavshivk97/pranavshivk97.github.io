import { SimpleGrid } from "@chakra-ui/react";

import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  return (
    <SimpleGrid spacing={3} minChildWidth="400px">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
