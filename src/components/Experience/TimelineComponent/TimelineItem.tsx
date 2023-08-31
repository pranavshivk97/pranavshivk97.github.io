import { Box, Card, CardBody, CardHeader, SimpleGrid, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from 'usehooks-ts';

import './TimelineItem.css'
import { experiences } from '../experiences';
import Experience from '..';

interface ExperienceProps {
    work: boolean
    title: string
    company?: string | undefined
    school?: string | undefined
    location: string
    duration: string
    description: Array<string>
    skills: Array<string>
}

const TimelineItem = (props: { experience: ExperienceProps }) => {
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
    }, [isVisible])

    return (
        <Box className={`timeline-card ${isVisible ? 'is-visible' : ''}`}>
            <Card ref={cardRef} className='timeline-content' color="#03a062">
                <SimpleGrid spacing={5} columns={4}>
                    {props.experience.skills.map((skill, index) => (
                            <Tag colorScheme="whatsapp" textAlign='center' key={index}>{skill}</Tag>
                    ))}
                </SimpleGrid>
                <CardHeader>
                    <Text as='h2' fontWeight='bolder' fontSize="2xl">{props.experience.title}</Text>
                    <Text fontWeight='bolder'>{props.experience.work ? props.experience.company : props.experience.school}, {props.experience.location}</Text>
                    <Text>{props.experience.duration}</Text>
                </CardHeader>
                <CardBody>
                    <UnorderedList>
                        {props.experience.description.map((detail, idx) => (
                            <ListItem key={idx}>{detail}</ListItem>
                        ))}
                    </UnorderedList>
                </CardBody>
                <span className='circle' />
            </Card>
        </Box>
    )
}

export default TimelineItem;