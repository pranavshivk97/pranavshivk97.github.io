import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from 'react-scroll';

import './Navbar.css'

const Navbar = () => {
  return (
    <Flex 
      as="header" 
      position="fixed" 
      w="100%" 
      backgroundColor="white" 
      fontSize="xl" 
      mb={10} 
      zIndex="9999"
      background="rgba(0, 0, 0, 0.8)"
    >
      <Box p={5} className="link">
        <Link 
          to="home-wrapper" 
          duration={500}
          spy
          activeClass="active"
        >
          Home
        </Link>
      </Box>

      <Box p={5} className="link">
        <Link
          to="experiences" 
          duration={500}
          spy
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
          activeClass="active"
        >
          Projects
        </Link>
      </Box>

      <Spacer />

      <Box p={5} className="link">
        <Link to="#">Resume</Link>
      </Box>

      <Box p={5} className="link">
        <Link 
          to="contact-form" 
          duration={3000}
          spy
          activeClass="active"
        >
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
