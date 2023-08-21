import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Center m="10em" py={2}>
      <SimpleGrid minChildWidth="120px" spacing={3}>
        <Box>
          <Image
            borderRadius="full"
            boxSize="300px"
            src="/pranav_shivkumar.JPG"
            alt="Pranav Shivkumar"
          />
        </Box>

        <Box>
          <VStack align="left" spacing={3}>
            <Text fontSize="lg">Hi, my name is</Text>
            <Heading as="h1" size="4xl">
              Pranav Shivkumar
            </Heading>
            <Text fontSize="xl">
              I am a Software Engineer & Full Stack Developer with over 2 years
              of professional experience. I specialize in building full stack
              web applications and I currently work at Cisco.
            </Text>
          </VStack>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default Home;
