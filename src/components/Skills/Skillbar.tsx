import { Box, Text, useInterval } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from 'usehooks-ts';

import "./Skillbar.css";

const Skillbar = (props: { title: string; level: Number }) => {
  const [percentage, setPercentage] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  console.log(isVisible);

  useInterval(() => {
    if (percentage !== props.level) {
      setPercentage((prevPercentage) => prevPercentage + 1)
    }
  }, 10)

  useEffect(() => {
    if (isVisible) {
      entry.target.classList.add('.skill-animation')
    }
  }, [entry]);

  return (
    <Box ref={ref} className="container">
      <Box className="title">{props.title}</Box>
      <Box
        w={`${String(props.level)}%`} 
        // className={`skills ${isVisible && "skill-animation"}`}
        className="skills"
      >
        <Text className="percentage">{percentage}%</Text>
      </Box>
    </Box>
  );
};

export default Skillbar;
