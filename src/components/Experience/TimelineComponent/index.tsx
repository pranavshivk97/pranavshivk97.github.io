import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

import { experiences } from '../experiences'
import TimelineItem from './TimelineItem'

import './TimelineComponent.css'

const TimelineComponent = () => {
    return (
        <Box id="experiences" p={10} m={5}>
            <Heading textAlign="center" as="h1">Experience</Heading>
            <Box className='timeline-container'>
                {experiences.map((experience, index) => (
                    <TimelineItem key={index} experience={experience}/>    
                ))}
            </Box>
           
            {/* <Timeline /> */}
        </Box>
    )
}

export default TimelineComponent;