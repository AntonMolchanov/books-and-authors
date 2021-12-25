import React from 'react';
import {useSelector} from "react-redux";
import {authorsSelectors} from "../../../redux/features/authors";
import List from "../../components/List/List";
import {Link} from "react-router-dom";

const Authors = () => {
    const authors = useSelector(authorsSelectors.authors);
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