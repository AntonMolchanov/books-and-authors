import React, {useState} from 'react';
import './book.scss';
import {booksOperations, booksSelectors} from "../../../redux/features/books";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../components/Button/Button";
import UpdateBookForm from "../../components/UpdateBookForm/UpdateBookForm";

const Book = () => {
    const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
    const {bookId} = useParams();
    const history = useHistory();
    const books = useSelector(booksSelectors.books)
    const currentBook = books.find(book => book.id === bookId);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(booksOperations.removeBook(bookId))
        history.push('/books')
    }
    const toggleUpdateForm = () => {
        setIsUpdateEnabled(!isUpdateEnabled);
    }
    const goBack = () => {
        history.push('/books')
    }

    return (
        <>
            {
                currentBook
                &&
                <div className="wrapper book">
                    <div className="book-header">
                        <div className="book-cover">
                            <img src={currentBook.img} alt="Book cover"/>
                        </div>
                        <div className="book--btn-wrapper">
                            <Button
                                callback={handleDelete}
                                text="Delete the book"
                            />
                            <Button
                                callback={toggleUpdateForm}
                                text={isUpdateEnabled ? "Collapse the form" : "Update the book"}
                            />
                            <Button
                                callback={goBack}
                                text="Back to the books list"
                            />
                        </div>
                    </div>
                    <span className="book-genre book-item__info--genre">{currentBook.genre}</span>
                    <h2 className="book-name">{currentBook.name}</h2>
                    <p className="book-author">Author: {currentBook.author}</p>
                    <p className="book-description">{currentBook.description}</p>
                    {
                        isUpdateEnabled
                        &&
                            <UpdateBookForm
                                description={currentBook.description}
                                name={currentBook.name}
                                img={currentBook.img}
                                genre={currentBook.genre}
                                id={bookId}
                                author={currentBook.author}
                            />
                    }
                </div>
            }
        </>
    );
};

export default Book;