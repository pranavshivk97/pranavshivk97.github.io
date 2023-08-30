import { Box, Card, CardBody, CardHeader, SimpleGrid, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react'

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
    return (
        <Box className='timeline-card'>
            <Card className="timeline-content">
                <SimpleGrid spacing={3} columns={4}>
                    {props.experience.skills.map((skill, index) => (
                            <Tag textAlign='center' p={2} key={index}>{skill}</Tag>
                    ))}
                </SimpleGrid>
                <CardHeader>
                    <Text as='h2' fontWeight='bolder' fontSize="2xl">{props.experience.title}</Text>
                    <Text>{props.experience.work ? props.experience.company : props.experience.school}, {props.experience.location}</Text>
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