import { Box, Divider, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import Skillbar from 'react-skillbars'

import { programmingLanguages, frameworks, databases, colors } from './skills'

const Skills = () => {
    return (
        <Box alignItems="center" m={10}>
            <Stack spacing={5}>
                <Heading fontSize="xl" textTransform="uppercase">Programming Languages</Heading>
                <Skillbar skills={programmingLanguages} colors={colors} />
                
                <Divider />

                <Heading fontSize="xl" textTransform="uppercase">Frameworks and Technologies</Heading>
                <Skillbar skills={frameworks} colors={colors} />

                <Divider />

                <Heading fontSize="xl" textTransform="uppercase">Databases</Heading>
                <Skillbar skills={databases} colors={colors}/>
            </Stack>
        </Box>
    )
}

export default Skills;