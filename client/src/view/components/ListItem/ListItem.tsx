import React, {FC} from 'react';
import './listItem.scss';
import {Link} from "react-router-dom";

export interface IListItem {
    index?: number,
    img: string,
    name: string,
    author?: string,
    genre: string,
    description: string,
    id: string,
    section: string,
}

const ListItem: FC<IListItem> = ({index, img,genre, name, author,description, id, section}) => {
    return (
        <div className="book-item">
            <p className="book-item__index">
                {index! + 1}
            </p>
            <div className="book-item-image">
                <Link to={`/${section}/${id}`}>
                <img
                        className="book-item__img"
                        src={img}
                        alt="Book cover"/>
                </Link>
            </div>
            <div className="book-item__info">
                <span className="book-item__info--genre book-item__info--item">{genre}</span>
                <Link to={`/${section}/${id}`}>
                <h2 className="book-item__info--name book-item__info--item">{name}</h2>
                </Link>
                <p className="book-item__info--author book-item__info--item">{author}</p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ListItem;