import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { 
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
    timelineOppositeContentClasses
} from '@mui/lab';
import { EducationModel } from '../Interface';

interface Props {
    educationList: EducationModel[]
}

const convertToTimelineItem = (educationList: EducationModel[]) => {
    return educationList.map(v =>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary" mt={2}>
                {v.start}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <Avatar alt={v.school} src={v.image} />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6">
                    {v.school}
                </Typography>
                <Typography>
                    {v.department}
                </Typography>
                <Typography>
                    {v.degree}
                </Typography>
                <Typography>
                    {v.start} ~ {v.end}
                </Typography>
                <Typography>
                {v.status}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default function Education(props: Props) {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                py: 5,
                alignItem: 'center'
            }}
        >
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Education
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my education.
            </Typography>
            <Box px={10} py={5}>
                <Timeline 
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.35,
                        },
                    }}
                >
                    {convertToTimelineItem(props.educationList)}
                </Timeline>
            </Box>
        </Box>
    );
}
