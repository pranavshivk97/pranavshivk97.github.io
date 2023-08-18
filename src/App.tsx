import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
