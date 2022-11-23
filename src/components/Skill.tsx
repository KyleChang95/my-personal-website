import React from 'react';
import { Box, Grid, Card, CardHeader, CardContent, Stack, Typography } from '@mui/material';
import { SkillModel } from '../Interface';

interface Props {
    skillList: SkillModel
}

const listSkillItem = (items: string[]) => {
    return items.map(v => <Typography key={v} variant="body1">{v}</Typography>)
}

const setCard = (title: string, items: string[]) => {
    return (
        <Card sx={{ boxShadow: 5 }}>
            <CardHeader title={title} titleTypographyProps={{ align: "center", variant: "h4" }} />
            <CardContent>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                    px={2}
                >
                    {listSkillItem(items)}
                </Stack>
            </CardContent>
        </Card>
    )
}

const Skill = (props: Props) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                py: 5
            }}
        >
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Skill
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                The following are my professional skills.
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={4}
                px={40}
                py={5}
            >
                {Object.keys(props.skillList).map(v => {
                    return <Grid key={v} item xs={4}>{setCard(v, props.skillList[v])}</Grid>
                })}
            </Grid>
        </Box>
    );
}

export default Skill