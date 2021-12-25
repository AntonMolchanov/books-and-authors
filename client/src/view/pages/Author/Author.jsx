import React, {useState} from 'react';
import './book.scss';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import {authorsOperations, authorsSelectors} from "../../../redux/features/authors";
import UpdateAuthorForm from "../../components/UpdateAuthorForm/UpdateAuthorForm";

const Author = () => {
    const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
    const { authorId } = useParams();
    const history = useHistory();
    const authors = useSelector(authorsSelectors.authors);
    const currentAuthor = authors.find(author => author.id === authorId);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(authorsOperations.removeAuthor(authorId))
        history.push('/authors')
    }
    const toggleUpdateForm = () => {
        setIsUpdateEnabled(!isUpdateEnabled);
    }
    const goBack = () => {
        history.push('/authors')
    }

    return (
        <>
            {
                currentAuthor
                &&
                <div className="wrapper book">
                    <div className="book-header">
                        <div className="book-cover">
                            <img src={currentAuthor.img} alt="Author"/>
                        </div>
                        <div className="book--btn-wrapper">
                            <Button
                                callback={handleDelete}
                                text="Delete the Author"
                            />
                            <Button
                                callback={toggleUpdateForm}
                                text={isUpdateEnabled ? "Collapse the form" : "Update the author"}
                            />
                            <Button
                                callback={goBack}
                                text="Back to the authors list"
                            />
                        </div>
                    </div>
                    <span className="book-genre book-item__info--genre">{currentAuthor.genre}</span>
                    <h2 className="book-name">{currentAuthor.name}</h2>
                    <p className="book-author">Author: {currentAuthor.author}</p>
                    <p className="book-description">{currentAuthor.description}</p>
                    {
                        isUpdateEnabled
                        &&
                        <UpdateAuthorForm
                            description={currentAuthor.description}
                            name={currentAuthor.name}
                            img={currentAuthor.img}
                            genre={currentAuthor.genre}
                            id={authorId}
                        />
                    }
                </div>
            }
        </>
    );
};

export default Author;