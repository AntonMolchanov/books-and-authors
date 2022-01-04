import React, {FC} from 'react';
import './menu.scss';
import clsx from 'clsx';
import ItemsList from "./ItemsList/ItemsList";

interface IMenu {
    open: boolean,
    toggle: () => void,
    isDesktop: boolean
}

const Menu: FC<IMenu> = ({open, toggle, isDesktop}) => {
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