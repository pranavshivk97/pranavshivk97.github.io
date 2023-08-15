import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"

import Home from "./components/Home"
import Navbar from "./components/Navbar"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p={5} fontSize="xl">
    <Navbar />
      <Grid minH="100vh">
        <Home />
      </Grid>
    </Box>
  </ChakraProvider>
)
