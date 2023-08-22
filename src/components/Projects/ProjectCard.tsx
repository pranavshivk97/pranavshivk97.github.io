import { Button, Card, CardHeader, CardBody, CardFooter, HStack, Heading, Image, VStack, Tag, Text, ButtonGroup, List, ListItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface ProjectProps {
    title: string
    description: string
    tech: Array<string>
    image: string
    github: string
}


const ProjectCard = (props: { project: ProjectProps} ) => {
    return (
        <Card align="center" maxW="sm">
          <CardHeader>
            <VStack spacing={2}>
              <Image
              fit="scale-down"
              src={props.project.image}
              />
              <Heading size="md">{props.project.title}</Heading>
              <HStack spacing={3}>
                {props.project.tech.map((skill, index) => (
                  <Tag key={index}>{skill}</Tag>
                ))}
              </HStack>
            </VStack>
          </CardHeader>
          <CardBody>
            <List>
                <ListItem></ListItem>
            </List>
            <Text>{props.project.description}</Text>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing={3}>
                <Button variant="ghost">
                    <Link to={props.project.github}>Check it out!</Link>
                </Button>
                <Button colorScheme="blue">Let's Go!</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
    )
}

export default ProjectCard;