import React, {FC} from 'react';
import ListItem, {IListItem} from "../ListItem/ListItem";
import './list.scss';

interface IList {
    list: IListItem[]
}

const List: FC<IList> = ({list}) => {
    return (
        <div className="wrapper books-list">
            {list.map((listItem, index) => {
                return (
                    <ListItem
                        name={listItem?.name}
                        index={index}
                        description={listItem?.description}
                        author={listItem?.author}
                        genre={listItem?.genre}
                        img={listItem?.img}
                        key={listItem?.id}
                        id={listItem?.id}
                        section={listItem?.section}
                    />
                )
            })}
        </div>
    );
};

export default List;