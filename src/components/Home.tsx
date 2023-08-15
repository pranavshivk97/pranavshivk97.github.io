import { Center, HStack, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react';


const Home = () => {
    return (
        <Center>
            <HStack>
                <VStack align='left' pe={10} spacing={3}>
                    <Text fontSize='2xl'>Hi, I am</Text>
                    <Heading as='h1' size='4xl'>
                        Pranav Shivkumar
                    </Heading>
                    <Text fontSize='4xl'>Software Engineer</Text>
                </VStack>

                <Image 
                    borderRadius='full'
                    boxSize='300px'
                    src='/pranav_shivkumar.JPG'
                    alt='Pranav Shivkumar'
                />
            </HStack>
        </Center>
    )
}

export default Home;