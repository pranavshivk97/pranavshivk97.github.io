import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  return (
    <Flex>
      {/* Desktop */}
      <Flex
        as="header"
        position="fixed"
        w="100%"
        fontSize="xl"
        mb={10}
        zIndex="9999"
        background="rgba(0, 0, 0, 0.8)"
        display={["none", "none", "flex", "flex"]}
      >
        <Box p={5} className="link">
          <Link to="home-wrapper" duration={500} spy activeClass="active">
            Home
          </Link>
        </Box>

        <Box p={5} className="link">
          <Link to="about-me" duration={500} spy activeClass="active">
            About Me
          </Link>
        </Box>

        <Box p={5} className="link">
          <Link
            to="experiences"
            duration={500}
            spy
            offset={-70}
            activeClass="active"
          >
            Experience
          </Link>
        </Box>

        <Box p={5} cursor="pointer" className="link">
          <Link
            to="skills"
            duration={2000}
            spy
            offset={-70}
            activeClass="active"
          >
            Skills
          </Link>
        </Box>

        <Box p={5} className="link">
          <Link
            to="projects"
            duration={2500}
            spy
            offset={-70}
            activeClass="active"
          >
            Projects
          </Link>
        </Box>

        <Spacer />

        <Box p={5} className="link">
          <ChakraLink href="/resume.pdf" isExternal>
            Resume
          </ChakraLink>
        </Box>

        <Box p={5} className="link">
          <Link to="contact-form" duration={3000} spy activeClass="active">
            Contact
          </Link>
        </Box>
      </Flex>

      {/* Mobile */}
      <IconButton
        aria-label="open-menu"
        m={5}
        size="lg"
        icon={<HamburgerIcon />}
        onClick={() => setDisplay("flex")}
        display={["flex", "flex", "none", "none"]}
        position="fixed"
        background="#03a062"
      />
      <Flex
        className="navbar"
        display={display}
        background="rgba(0, 0, 0, 0.8)"
        w="100vw"
        position="fixed"
        top="0"
        left="0"
        zIndex={20}
        flexDir="column"
        overflowY="auto"
        fontSize="xl"
        mb={10}
      >
        <Flex justify="flex-end">
          <IconButton
            m={5}
            aria-label="close-menu"
            size="md"
            icon={<CloseIcon />}
            onClick={() => setDisplay("none")}
            background="#03a062"
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Box p={5} className="link">
            <Link to="home-wrapper" duration={500} spy activeClass="active">
              Home
            </Link>
          </Box>

          <Box p={5} className="link">
            <Link to="about-me" duration={500} spy activeClass="active">
              About Me
            </Link>
          </Box>

          <Box p={5} className="link">
            <Link
              to="experiences"
              duration={500}
              spy
              offset={-70}
              activeClass="active"
            >
              Experience
            </Link>
          </Box>

          <Box p={5} cursor="pointer" className="link">
            <Link
              to="skills"
              duration={2000}
              spy
              offset={-70}
              activeClass="active"
            >
              Skills
            </Link>
          </Box>

          <Box p={5} className="link">
            <Link
              to="projects"
              duration={2500}
              spy
              offset={-70}
              activeClass="active"
            >
              Projects
            </Link>
          </Box>

          <Box p={5} className="link">
            <ChakraLink href="/resume.pdf" isExternal>
              Resume
            </ChakraLink>
          </Box>

          <Box p={5} className="link">
            <Link to="contact-form" duration={3000} spy activeClass="active">
              Contact
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
