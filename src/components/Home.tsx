import React from 'react'
import { Box, Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';


const Home = () => {
    return (
        <Center>
            <SimpleGrid columns={2} gap={10}>
                <Box textAlign='left'>
                    <Text>Hi, I am</Text>
                    <Heading as='h1' size='4xl'>
                        Pranav Shivkumar
                    </Heading>
                    <Text fontSize='xl'>Software Engineer</Text>
                </Box>

                <Box>
                    <Image 
                        borderRadius='full'
                        boxSize='300px'
                        src='/pranav_shivkumar.JPG'
                        alt='Pranav Shivkumar'
                    />
                </Box>
            </SimpleGrid>
        </Center>
    )
}

export default Home;