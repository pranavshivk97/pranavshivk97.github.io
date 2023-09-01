import { Box, Heading } from "@chakra-ui/react";

import Timeline from "./Timeline";
import ReactTimeline from "./ReactTimeline";

const Experience = () => {
  return (
    <Box id="experiences" m={10} p={10} background="blackAlpha.900">
        <Heading textAlign="center" as="h1">Experience</Heading>
        <ReactTimeline />
    </Box>
  );
};

export default Experience;
