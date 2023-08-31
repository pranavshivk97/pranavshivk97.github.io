import React, {useState, useEffect, useRef } from 'react'
import { Box, Heading } from '@chakra-ui/react'

import { experiences } from '../experiences'
import TimelineItem from './TimelineItem'

import './TimelineComponent.css'

const TimelineComponent = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setVisible] = useState<boolean>(false);
    // const entry = useIntersectionObserver(cardRef, {});
    // const isVisible = !!entry?.isIntersecting;

    const options = {
        root: null,
        threshold: 1,
        rootMargin: '0px'
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        }, options);

        if (cardRef.current) {
            observer.observe(cardRef.current);
            // cardRef.current.classList.add('card-animation');
        }

        return (() => {
            if (cardRef.current) observer.unobserve(cardRef.current)
        })
    }, [])
    return (
        <Box id="experiences" p={10} m={5}>
            <Heading textAlign="center" as="h1">Experience</Heading>
            <Box ref={cardRef} className={`timeline-container ${isVisible ? 'is-visible' : ''}`}>
                {experiences.map((experience, index) => (
                    <TimelineItem key={index} experience={experience}/>    
                ))}
            </Box>
           
            {/* <Timeline /> */}
        </Box>
    )
}

export default TimelineComponent;