import React from 'react';
import { WorkModel } from '../Interface'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

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
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                },
            }}
        >
            {convertToTimelineItem(props.workList)}
        </Timeline>
    );
}

export default Work