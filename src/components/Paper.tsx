import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface Props {
    paperList: string[]
}

const listPaperItem = (paperList: string[]) => {
    return paperList.map(v =>
        <ListItem divider>
            <ListItemButton>
                <ListItemText primary={v} />
            </ListItemButton>
        </ListItem>
    )
}

export default function Paper(props: Props) {
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
                Paper
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following is my paper.
            </Typography>
            <Box px={10} py={5}>
                <List>
                    {listPaperItem(props.paperList)}
                </List>
            </Box>
        </Box>
    );
}
