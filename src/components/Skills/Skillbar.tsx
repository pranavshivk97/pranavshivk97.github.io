import { Box, Text } from "@chakra-ui/react";
import React from "react";

import "./Skillbar.css";

const Skillbar = (props: { title: string; level: Number }) => {
  return (
    <Box className="container">
      <Box className="title">{props.title}</Box>
      <Box w={`${String(props.level)}%`} className="skills">
        <Text className="percentage">{String(props.level)}%</Text>
      </Box>
    </Box>
  );
};

export default Skillbar;
