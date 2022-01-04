import React, {useEffect} from 'react';
import './books.scss';
import List from "../../components/List/List";
import {useDispatch, useSelector} from "react-redux";
import {booksOperations, booksSelectors} from "../../../redux/features/books";
import {Link} from "react-router-dom";

const Books = () => {
    const dispatch = useDispatch();
    const books = useSelector(booksSelectors.books);
    useEffect(() => {
        dispatch(booksOperations.getData())
    }, [books.length]);

    return (
        <>
            <div className="books">
                <div className="books-header"
                     style={{backgroundImage: "url(/library.jpeg)"}}>
                    <div className="books-header__lens"/>
                </div>
                <div className="wrapper">
                    <h1 className="books-header__title">
                        must-read books
                    </h1>
                </div>
            </div>
            <div className="wrapper books-body">
                <p className="books-body__text">
                    Everyone loves a classic novel, but where to start? From Jane Austen to Charles Dickens, Toni
                    Morrison to Fyodor Dostoevsky, the fiction canon is so vast you can easily get lost in it.
                    So we asked our readers to tell us about their favourite classic books. The resulting list of
                    must-reads is a perfect way to find inspiration to start your classics adventure. There's something
                    for everyone, from family sagas and dystopian fiction to romances and historical fiction.
                </p>
            </div>
            <div className="wrapper add-book">
                <Link to="/add-a-new-book">Add a new book to the list</Link>
            </div>
            <List list={books}/>
        </>
    );
};

export default Books;