import types from "./types";
import {IBook} from "./types/types";

const {
    GOT_BOOKS,
    ADDED_BOOK,
    DELETED_BOOK,
    UPDATED_BOOK,
} = types;

const getBooks = (books: IBook[]) => ({
    type: GOT_BOOKS,
    payload: books
});

const deleteBook = (updatedList: IBook[]) => ({
    type: DELETED_BOOK,
    payload: updatedList
})

const addBook = (book: IBook) => ({
    type: ADDED_BOOK,
    payload: book
})
const updatedBook = (updBook: IBook) => ({
    type: UPDATED_BOOK,
    payload: updBook
})

const actions = {
    getBooks,
    addBook,
    deleteBook,
    updatedBook,
};

export default actions;
