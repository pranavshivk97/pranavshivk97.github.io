import { Box, Heading } from "@chakra-ui/react";

import Timeline from "./Timeline";

const Experience = () => {
  return (
    <Box id="experiences" bg="grey" p={10} m={5}>
      <Heading textAlign="center" as="h1">Experience</Heading>
      <Timeline />
    </Box>
  );
};

export default Experience;
