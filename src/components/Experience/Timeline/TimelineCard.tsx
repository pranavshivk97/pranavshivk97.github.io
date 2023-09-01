import { Box, Card, CardBody, CardHeader, SimpleGrid, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from 'usehooks-ts';
import { SlideFade } from '@chakra-ui/react';

// import './TimelineCard.css'

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
    const entry = useIntersectionObserver(cardRef, {});
    const isVisible = !!entry?.isIntersecting;

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach((entry) => {
    //             const card = entry.target.querySelector('.timeline-card');
    //             console.log(card);

    //             if (cardRef.current && isVisible) {
    //                 cardRef.current.classList.add(".card-animation");
    //                 return;
    //             }

    //             card?.classList.remove('.card-animation')
    //         })
    //     })

    //     // const card = document.querySelector('.timeline-card') as HTMLDivElement;

    //     if (cardRef.current) observer.observe(cardRef.current)
    // }, [])

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => setVisible(entry.isIntersecting))
    //     }, options);

    //     if (cardRef.current) {
    //         observer.observe(cardRef.current);
    //     }

    //     return (() => {
    //         if (cardRef.current) observer.unobserve(cardRef.current)
    //     })
    // }, [isVisible])

    return (
        <SlideFade in={isVisible}>
            <Box 
                ref={cardRef} 
                className='timeline-card'
                w="30%" 
                m={10} 
                _odd={{
                    alignSelf: 'flex-end',
                    justifyContent: 'flex-start',
                    pr: 0,
                }}
            >
                <Card className='timeline-content' color="#03a062" p={5}>
                    <SimpleGrid spacing={5} columns={4}>
                        {props.experience.skills.map((skill, index) => (
                                <Tag colorScheme="whatsapp" textAlign='center' key={index}>{skill}</Tag>
                        ))}
                    </SimpleGrid>
                    <CardHeader>
                        <Text as='h2' fontWeight='bolder' fontSize="2xl" textTransform="uppercase">{props.experience.title}</Text>
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
                    <Box className='circle' border="3px solid green" position='absolute' w={20} h={20} right={-40} borderRadius="50%"/>
                    {/* </SlideFade> */}
                </Card>
                {/* </SlideFade> */}
            </Box>
            </SlideFade>
    )
}

export default TimelineItem;