import React from 'react';
import {Link} from "react-router-dom";
import './menuItem.scss';

const MenuItem = ({callback, link, name}) => {
    return (
        <li className="menu-item" onClick={callback}>
            <Link to={link}>{name}</Link>
        </li>
    );
};

export default MenuItem;