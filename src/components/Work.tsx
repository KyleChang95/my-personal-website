import React from 'react';
import { WorkModel } from '../Interface'
import { Box, Typography } from '@mui/material';
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

interface Props {
    workList: WorkModel[]
}

const convertToTimelineItem = (workList: WorkModel[]) => {
    return workList.map(v =>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                {v.start}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span">
                    {v.company}
                </Typography>
                <Typography>
                    {v.title}, {v.start} ~ {v.end}
                </Typography>
                <Typography>
                    {v.description}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

const Work = (props: Props) => {
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
                Work
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my work experience.
            </Typography>
            {/* {sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}} */}
            <Box px={40} py={5}>
                <Timeline 
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.5,
                        },
                    }}
                >
                    {convertToTimelineItem(props.workList)}
                </Timeline>
            </Box>
        </Box>
    );
}

export default Work