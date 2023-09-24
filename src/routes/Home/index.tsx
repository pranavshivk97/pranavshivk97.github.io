import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  return (
    // Desktop
    <>
      {/* <Flex > */}
        <Center h="800px" id="home-wrapper" display={["none", "none", "flex", "flex"]}>
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
      {/* </Flex> */}

      {/* Mobile */}
      <Box p={10} m={10} display={["flex", "flex", "none", "none"]}>
        <Flex>
          <VStack spacing={5}>
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
          </VStack>
        </Flex>
      </Box>

    </>
    
  );
};

export default Home;
