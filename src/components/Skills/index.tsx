import { Box, Divider, Heading, Progress, Stack, Text } from '@chakra-ui/react';

const Skills = () => {
    return (
        <Box m={10}>
            <Stack spacing={5}>
                <Heading fontSize="2xl" textTransform="uppercase">Programming Languages</Heading>
                <Text fontSize="lg">Python</Text>
                <Progress isAnimated max={10} value={8} />

                <Text fontSize="lg">C++</Text>
                <Progress isAnimated max={10} value={5} />

                <Text fontSize="lg">JavaScript/TypeScript</Text>
                <Progress isAnimated max={10} value={8} />

                <Text fontSize="lg">Golang</Text>
                <Progress isAnimated max={10} value={5} />

                <Divider />

                <Heading fontSize="2xl" textTransform="uppercase">Frameworks and Technologies</Heading>

                <Text fontSize="lg">React</Text>
                <Progress isAnimated max={10} value={8} />

                <Text fontSize="lg">Docker</Text>
                <Progress isAnimated max={10} value={6} />

                <Divider />

                <Heading fontSize="2xl" textTransform="uppercase">Databases</Heading>

                <Text fontSize="lg">MySQL</Text>
                <Progress isAnimated max={10} value={5} />

                <Text fontSize="lg">MongoDB</Text>
                <Progress isAnimated max={10} value={6} />

                <Text fontSize="lg">Postgres</Text>
                <Progress isAnimated max={10} value={7} />
            </Stack>
        </Box>
    )
}

export default Skills;