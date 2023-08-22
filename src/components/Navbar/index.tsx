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
        <Link href="#">Contact</Link>
      </Box>
    </Flex>
    // <Box>
    //   <Box p={5} fontSize="xl" float="left">
    //     <HStack spacing={3} position="sticky">
    //       <Center w="100px">
    //         <Link href="/">Home</Link>
    //       </Center>
    //       <Center w="100px">
    //         <Link href="/experiences">Experience</Link>
    //       </Center>
    //       <Center w="100px">
    //         <Link href="#">Skills</Link>
    //       </Center>
    //       <Center w="100px">
    //         <Link href="#">Projects</Link>
    //       </Center>
    //     </HStack>
    //   </Box>

    //   <Box p={5} fontSize="xl" float="right">
    //     <HStack spacing={3} position="sticky">
    //       <Center w="100px">
    //         <Link href="#">Resume</Link>
    //       </Center>
    //       <Center w="100px">
    //         <Link href="#">Contact</Link>
    //       </Center>
    //     </HStack>
    //   </Box>
    // </Box>
  );
};

export default Navbar;
