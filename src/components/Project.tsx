import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Project() {
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
                Project
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my project.
            </Typography>
            <Box px={10} py={5}>
            </Box>
        </Box>
    );
}
