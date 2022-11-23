import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Education() {
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

            </Box>
        </Box>
    );
}
