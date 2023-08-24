import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import { SkillBar as ReactSkillbar } from "react-skillbars";

import { programmingLanguages, frameworks, databases, colors } from "./skills";
import Skillbar from "./Skillbar";

const Skills = () => {
  return (
    <Box id="skills" alignItems="center" m={10} p={10}>
      <Heading as="h1" textAlign="center">
        Skills
      </Heading>
      <Stack spacing={5}>
        <Heading fontSize="xl" textTransform="uppercase">
          Programming Languages
        </Heading>
        {/* <ReactSkillbar skills={programmingLanguages} colors={colors} /> */}

        {programmingLanguages.map((lang, index) => (
          <Skillbar title={lang.type} level={lang.level} />
        ))}
        <Divider />

        <Heading fontSize="xl" textTransform="uppercase">
          Frameworks and Technologies
        </Heading>
        <ReactSkillbar skills={frameworks} colors={colors} />

        <Divider />

        <Heading fontSize="xl" textTransform="uppercase">
          Databases
        </Heading>
        <ReactSkillbar skills={databases} colors={colors} />
      </Stack>
    </Box>
  );
};

export default Skills;
