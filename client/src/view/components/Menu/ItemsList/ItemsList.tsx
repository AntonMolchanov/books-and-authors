import React, {FC} from 'react';
import menuItems from "../menuItems";
import MenuItem from "../MenuItem/MenuItem";
import './menuItems.scss';

interface ItemsList {
    toggle: () => void
}

const ItemsList: FC<ItemsList> = ({toggle}) => {
    return (
        <ul className="menu__container">
            {menuItems.map(item => {
                return (
                    <MenuItem
                        callback={toggle}
                        link={item.link}
                        name={item.name}
                        key={item.key}
                    />
                )
            })}
        </ul>
    );
};

export default ItemsList;