import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface Props {
    projectList: string[]
}

const listProjectItem = (projectList: string[]) => {
    return projectList.map(v =>
        <ListItem divider>
            <ListItemButton>
                <ListItemText primary={v} />
            </ListItemButton>
        </ListItem>
    )
}

export default function Project(props: Props) {
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
                <List>
                    {listProjectItem(props.projectList)}
                </List>
            </Box>
        </Box>
    );
}
