import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Center h="800px" id="home-wrapper">
      <SimpleGrid
        minChildWidth="200px"
        spacing={3}
        m={5}
        p={10}
        // background="blackAlpha.900"
        display="flex"
      >
        <Box>
          <Image
            borderRadius="full"
            boxSize="300px"
            src="/pranav_shivkumar.JPG"
            alt="Pranav Shivkumar"
          />
        </Box>

        <Box>
          <VStack align="right" spacing={3}>
            <Text fontSize="lg">Hi, I am</Text>
            <Heading as="h1" size="4xl">
              Pranav Shivkumar
            </Heading>
            <Text fontSize="xl">Software Engineer @ Cisco Systems</Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default Home;
