import React from 'react';
import './menu.scss';
import clsx from 'clsx';
import ItemsList from "./ItemsList/ItemsList";

const Menu = ({open, toggle, isDesktop}) => {
    const menuStyles = clsx({
        ['menu']: !isDesktop,
        ['show']: open
    })
    return (
        <div className={menuStyles}>
            <ItemsList toggle={toggle} />
        </div>
    );
};

export default Menu;