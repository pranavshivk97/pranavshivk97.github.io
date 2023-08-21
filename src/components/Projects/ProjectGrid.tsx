import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

import projects from "./projects";

const ProjectGrid = () => {
  return (
    <SimpleGrid spacing={4} columns={3}>
      {projects.map((project, index) => (
        <Card align="center" key={index} maxW="md">
          <CardHeader>
            <VStack spacing={2}>
              <Heading size="md">{project.title}</Heading>
              <HStack spacing={3}>
                {project.tech.map((skill, index) => (
                  <Tag key={index}>{skill}</Tag>
                ))}
              </HStack>
            </VStack>
          </CardHeader>
          <Divider />
          <CardBody>
            <Text>{project.description}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">Check it out!</Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
