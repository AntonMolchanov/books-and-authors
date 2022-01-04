import React, {FC} from 'react';
import {Link} from "react-router-dom";
import './menuItem.scss';

interface IMenuItem {
    callback: () => void,
    link: string,
    name: string,
}

const MenuItem: FC<IMenuItem> = ({callback, link, name}) => {
    return (
        <li className="menu-item" onClick={callback}>
            <Link to={link}>{name}</Link>
        </li>
    );
};

export default MenuItem;