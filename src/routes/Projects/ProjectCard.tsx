import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  VStack,
  Tag,
  Text,
  ButtonGroup,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

interface ProjectProps {
  title: string;
  description: string;
  tech: Array<string>;
  image: string;
  github: string;
}

const ProjectCard = (props: { project: ProjectProps }) => {
  return (
    <Card align="center" maxW="sm" >
      <CardHeader>
        {/* <Image boxSize="sm" src={props.project.image} /> */}
        <Heading size="md">{props.project.title}</Heading>
        <HStack spacing={3}>
          {props.project.tech.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </HStack>
      </CardHeader>
      <CardBody>
        <List>
          <ListItem></ListItem>
        </List>
        <Text>{props.project.description}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing={3}>
          <Button variant="outline">
            <Link href={props.project.github}>Check it out!</Link>
          </Button>
          {/* <Button colorScheme="blue">Let's Go!</Button> */}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
