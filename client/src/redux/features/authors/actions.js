import types from "./types";

const {
    GOT_AUTHORS,
    ADDED_AUTHOR,
    DELETED_AUTHOR,
    UPDATED_AUTHOR,
    GOT_RELATED_BOOKS,
} = types;

const getAuthors = (authors) => ({
    type: GOT_AUTHORS,
    payload: authors
});

const deleteAuthor = (updatedList) => ({
    type: DELETED_AUTHOR,
    payload: updatedList
})

const addAuthor = (author) => ({
    type: ADDED_AUTHOR,
    payload: author
})
const updateAuthor = (updAuthor) => ({
    type: UPDATED_AUTHOR,
    payload: updAuthor
})

const getRelatedBooks = (books) => ({
    type: GOT_RELATED_BOOKS,
    payload: books,
})
const actions = {
    getAuthors,
    addAuthor,
    deleteAuthor,
    updateAuthor,
    getRelatedBooks
};

export default actions;
