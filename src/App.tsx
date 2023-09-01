import { Box, ChakraProvider, theme } from "@chakra-ui/react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'

export const App = () => (
  <Box color="#03a062" background="gray.900">
    <Navbar />
    <Home />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Box>
);
