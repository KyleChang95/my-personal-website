import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface Props {
    competitionList: string[]
}

const listCompetitionItem = (competitionList: string[]) => {
    return competitionList.map(v =>
        <ListItem divider>
            <ListItemButton>
                <ListItemText primary={v} />
            </ListItemButton>
        </ListItem>
    )
}

export default function Competition(props: Props) {
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
                Competition
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my competition.
            </Typography>
            <Box px={10} py={5}>
                <List>
                    {listCompetitionItem(props.competitionList)}
                </List>
            </Box>
        </Box>
    );
}
