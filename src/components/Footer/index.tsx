import { Flex, Icon, Spacer } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
    return (
        <Flex
            as="footer"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            w="100%"
            p={3}
        >
            <SocialIcon url="https://www.linkedin.com/in/pranav-shivkumar/" bgColor='green' />
            <Spacer />
            <SocialIcon url="https://www.github.com/pranavshivk97" bgColor='green' />
        </Flex>
    )
}

export default Footer;