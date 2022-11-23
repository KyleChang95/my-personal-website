import { Button, Divider, Stack } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface Props {
    menuList: string[]
}

const capitalizeFirstWord = (menuName: string) => {
    return menuName[0].toUpperCase() + menuName.slice(1).toLowerCase()
}

const Layout = (props: Props) => {
    const menuButtonList = props.menuList.map(v => <Button key={v} component={Link} to={'/' + v.toLowerCase()}>{capitalizeFirstWord(v)}</Button>)

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                my={1}
            >
                {menuButtonList}
            </Stack>
            <Divider />
            <Outlet />
        </div>
    );
}

export default Layout