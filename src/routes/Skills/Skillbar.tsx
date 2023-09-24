import { Box, Text, useInterval } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer'

// import { useIntersectionObserver } from "usehooks-ts";
// import { keyframes, usePrefersReducedMotion } from "@chakra-ui/react";


import "./Skillbar.css";

const Skillbar = (props: { title: string; level: Number }) => {
  const [percentage, setPercentage] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  useInterval(() => {
    if (inView && percentage !== props.level) {
      setPercentage((prevPercentage) => prevPercentage + 1);
    }
  }, 30);

  return (
    <Box ref={ref} className="skill-container">
      <Box className="title">{props.title}</Box>
        <Box
            w={`${String(props.level)}%`}
            className={`skills ${inView && "skill-animation"}`}
          />
        <Text display="inline-block" className="percentage">{percentage}%</Text>
    </Box>
  );
};

export default Skillbar;
