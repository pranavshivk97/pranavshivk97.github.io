import React, {useState, useEffect, useRef } from 'react'
import { Box, Heading } from '@chakra-ui/react'

import { experiences } from '../experiences'
import TimelineItem from './TimelineCard'

import './Timeline.css'

const TimelineComponent = () => {
    return (
        <Box className='timeline-container'>
            {experiences.map((experience, index) => (
                <TimelineItem key={index} experience={experience}/>    
            ))}
        </Box>
    )
}

export default TimelineComponent;