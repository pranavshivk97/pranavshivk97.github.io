import { Box, Heading } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <Box id="projects" m={10}>
      <Heading as="h1" textAlign="center">Projects</Heading>
      <ProjectGrid />
    </Box>
  );
};

export default Projects;
