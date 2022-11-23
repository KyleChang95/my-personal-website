import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Profile() {
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
                Profile
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my profile.
            </Typography>
            <Box px={10} py={5}>

            </Box>
        </Box>
    );
}
