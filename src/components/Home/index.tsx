import {
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Center p={["5em", "10em"]}>
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        <GridItem w="100%">
          <VStack align="left" spacing={3}>
            <Text fontSize="2xl">Hi, I am</Text>
            <Heading as="h1" size="4xl">
              Pranav Shivkumar
            </Heading>
            <Text fontSize="4xl">Software Engineer</Text>
          </VStack>
        </GridItem>

        <GridItem w="100%">
          <Image
            borderRadius="full"
            boxSize="300px"
            src="/pranav_shivkumar.JPG"
            alt="Pranav Shivkumar"
          />
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Home;
