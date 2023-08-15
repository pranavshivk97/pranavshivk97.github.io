import React from 'react'
import { Center, Flex, HStack } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <HStack spacing={3}>
            <Center w='100px'>
                Home
            </Center>
            <Center w='100px'>
                Experience
            </Center>
            <Center w='100px'>
                Skills
            </Center>
            <Center w='100px'>
                Resume
            </Center>
            <Center w='100px'>
                Contact
            </Center>
        </HStack>
    )
}

export default Navbar;