import React from 'react'
import { Center, HStack } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <HStack spacing={3} position='fixed'>
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