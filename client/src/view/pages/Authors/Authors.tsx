import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authorsOperations, authorsSelectors} from "../../../redux/features/authors";
import List from "../../components/List/List";
import {Link} from "react-router-dom";

const Authors: FC = () => {
    const dispatch = useDispatch();
    const authors = useSelector(authorsSelectors.authors);
    useEffect(() => {
        dispatch(authorsOperations.getData())
    }, [authors.length]);

    return (
        <div>
            <div className="wrapper add-book">
                <Link to="/add-a-new-author">Add a new author to the list</Link>
            </div>
            <List list={authors}/>

        </div>
    );
};

export default Authors;