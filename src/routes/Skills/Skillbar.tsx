import { Box, Text, useInterval } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

import "./Skillbar.css";

const Skillbar = (props: { title: string; level: Number }) => {
  const increaseBars = keyframes(`
    100% { width: ${String(props.level)}%; }
  `);

  // console.log(increaseBars);
  const [percentage, setPercentage] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  // console.log(isVisible);

  // const prefersReducedMotion = usePrefersReducedMotion();

  // const animation = `${increaseBars} 2.5s forwards`;

  useInterval(() => {
    if (percentage !== props.level) {
      setPercentage((prevPercentage) => prevPercentage + 1);
    }
  }, 10);

  useEffect(() => {
    if (isVisible) {
      ref.current?.classList.add(".skill-animation");
    }
  }, [entry, isVisible]);

  // console.log(ref)

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       const skills = ref.current?.querySelector(".skills");

  //       if (entry.isIntersecting) {
  //         // console.log(skills)
  //         // ref.current.style.animation = animation;
  //         // skills.
  //         skills?.classList.add(".skill-animation");
  //         return;
  //       }
  //     })
  //   })

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }
  // }, [])

  return (
    <Box className="skill-container">
      <Box className="title">{props.title}</Box>
      <Box
        ref={ref}
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
