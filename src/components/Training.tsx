import React from 'react';
import { Box, Typography, Card, CardMedia, Stack } from '@mui/material';
import { TrainingModel } from '../Interface';

interface Props {
    trainingList: TrainingModel[]
}

const setCard = (title: string, imagePath: string, date: string) => {
    return (
        <Card sx={{ boxShadow: 5 }}>
            <CardMedia
                component="img"
                image={imagePath}
                loading="lazy"
            />
        </Card>
    )
}

export default function Training(props: Props) {
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
                Training
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my training.
            </Typography>
            <Box px={10} py={5}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                    px={2}
                >
                    {props.trainingList.map(v => setCard(v.name, v.image, v.date))}
                </Stack>
            </Box>
        </Box>
    );
}
