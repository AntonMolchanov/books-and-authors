import types from "./types";

const {
    GOT_AUTHORS,
    ADDED_AUTHOR,
    DELETED_AUTHOR,
    UPDATED_AUTHOR,
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

const actions = {
    getAuthors,
    addAuthor,
    deleteAuthor,
    updateAuthor,
};

export default actions;
