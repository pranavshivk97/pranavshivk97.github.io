import { Box, Heading } from "@chakra-ui/react";

import Timeline from "./Timeline";
import ReactTimeline from "./ReactTimeline";
import ReactChronoTimeline from "./ReactChronoTimeline";

const Experience = () => {
  return (
    <Box id="experiences" m={10} p={10} background="blackAlpha.900">
        <Heading textAlign="center" as="h1" pb={10}>Experience</Heading>
        <ReactTimeline />
        {/* <ReactChronoTimeline /> */}
    </Box>
  );
};

export default Experience;
