import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <Box
      h="1000px"
      id="about-me"
      alignItems="center"
      m={10}
      p={10}
      background="blackAlpha.900"
    >
      <Heading textAlign="center">About Me</Heading>
      <VStack
        spacing={5}
        p={20}
        m={20}
        border="2px solid #03a062"
        boxShadow="md"
      >
        <Text fontSize="lg">
          Welcome! I'm Pranav Shivkumar, a dedicated full-stack software
          engineer with over two years of hands-on experience crafting
          innovative digital solutions. My tech journey ignited while pursuing
          my Bachelor's degree, sparking my passion for problem-solving and
          coding.
        </Text>

        <Text fontSize="lg">
          I earned a Master of Science degree from Rutgers University, New
          Brunswick, specializing in Software Engineering with a minor in Data
          Science. Here, I honed my programming prowess and established a
          rock-solid foundation in software development. During my master's
          journey, I seized the opportunity to contribute as a Software
          Engineering Intern in two dynamic startups, enriching my enthusiasm
          for full-stack web development and exposing me to an array of
          cutting-edge technologies. I presently thrive as a Software Engineer
          at Cisco Systems, where I'm actively involved in crafting a full-stack
          platform that seamlessly integrates diverse Cisco IT automation tools.
        </Text>

        <Text fontSize="lg">
          My technical repertoire includes mastery of languages such as Python,
          JavaScript, C++, and Go, coupled with expertise in essential tools and
          frameworks such as Docker and React. I navigate the software
          development landscape with agility, firmly grounded in methodologies
          like Agile and Scrum. My database expertise spans both relational
          (MySQL and Postgres) and NoSQL (MongoDB) domains.
        </Text>

        <Text fontSize="lg">
          I'm always open to new opportunities, collaborations, and networking.
          Whether you're interested in discussing potential projects, tech
          trends, or simply want to connect, please feel free to reach out to me
          on LinkedIn or drop me a line at pranavshivkumar3@gmail.com.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutMe;
