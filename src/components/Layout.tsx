import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface Props {
    menuList: string[]
}

const capitalizeFirstWord = (menuName: string) => {
    return menuName[0].toUpperCase() + menuName.slice(1).toLowerCase()
}

const Layout = (props: Props) => {
    const menuElementList = props.menuList.map(v => <li key={v}><Link to={'/' + v.toLowerCase()}>{capitalizeFirstWord(v)}</Link></li>)

    return (
        <div>
            <nav>
                <ul>{menuElementList}</ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout