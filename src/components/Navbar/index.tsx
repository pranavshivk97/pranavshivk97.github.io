import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex fontSize="xl">
      <Box p="5">
        <Link href="/">Home</Link>
      </Box>

      <Box p="5">
        <Link href="/experiences">Experience</Link>
      </Box>

      <Box p="5">
        <Link href="/skills">Skills</Link>
      </Box>

      <Box p="5">
        <Link href="/projects">Projects</Link>
      </Box>

      <Spacer />

      <Box p="5">
        <Link href="#">Resume</Link>
      </Box>

      <Box p="5">
        <Link href="/contact">Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
