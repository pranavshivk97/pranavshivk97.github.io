import { Box } from "@chakra-ui/react";

import Home from "./routes/Home";
import Navbar from "./routes/Navbar";
import Experience from "./routes/Experience";
import Projects from "./routes/Projects";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer";
import AboutMe from "./routes/AboutMe";
import "./App.css";


export const App = () => (
  <Box color="#03a062" background="gray.900">
    <Navbar />
    <Home />
    <AboutMe />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Box>
);
