import React from "react";
import { Box, Center, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box p={5} fontSize="xl">
      <HStack spacing={3} position="sticky">
        <Center w="100px">
          <Link href="/">Home</Link>
        </Center>
        <Center w="100px">
          <Link href="/experiences">Experience</Link>
        </Center>
        <Center w="100px">
          <Link href="#">Skills</Link>
        </Center>
        <Center w="100px">
          <Link href="#">Resume</Link>
        </Center>
        <Center w="100px">
          <Link href="#">Contact</Link>
        </Center>
      </HStack>
    </Box>
  );
};

export default Navbar;
