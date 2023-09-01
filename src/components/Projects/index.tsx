import { Box, Heading } from "@chakra-ui/react";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <Box id="projects" m={10} p={10} background="blackAlpha.900">
      <Heading as="h1" textAlign="center" mb={10}>Projects</Heading>
      <ProjectGrid />
    </Box>
  );
};

export default Projects;
