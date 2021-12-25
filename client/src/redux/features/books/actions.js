import types from "./types";

const {
    GOT_BOOKS,
    ADDED_BOOK,
    DELETED_BOOK,
    UPDATED_BOOK,
} = types;

const getBooks = (books) => ({
    type: GOT_BOOKS,
    payload: books
});

const deleteBook = (updatedList) => ({
    type: DELETED_BOOK,
    payload: updatedList
})

const addBook = (book) => ({
    type: ADDED_BOOK,
    payload: book
})
const updatedBook = (updBook) => ({
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
