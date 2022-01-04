import React, {FC, useEffect, useState} from 'react';
import './book.scss';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import {authorsOperations, authorsSelectors} from "../../../redux/features/authors";
import UpdateAuthorForm from "../../components/UpdateAuthorForm/UpdateAuthorForm";
import {IAuthor} from "../../../redux/features/authors/types/types";
import {booksOperations, booksSelectors} from "../../../redux/features/books";
import List from "../../components/List/List";

type idParams = {
    authorId: string;
}

const Author: FC = () => {
    const dispatch = useDispatch();
    const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
    const { authorId } = useParams<idParams>();
    const history = useHistory();
    const authors = useSelector(authorsSelectors.authors);
    const currentAuthor: IAuthor | undefined = authors.find(author => author.id === authorId);
    const books = useSelector(booksSelectors.books);
    const author: IAuthor | undefined = authors.find(author => author.id === authorId);
    const authorsBooks = books.filter(book => book.author === author?.name)

    useEffect(() => {
        dispatch(booksOperations.getData())
        if (!author){
            dispatch(authorsOperations.getData())
        }
    }, [])

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
                            section="authors"
                        />
                    }
                    {
                        authorsBooks && <List list={authorsBooks}/>
                    }
                </div>
            }
        </>
    );
};

export default Author;