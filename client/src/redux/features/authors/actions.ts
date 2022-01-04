import types from "./types";
import {
    ActionTypeAddAuthor,
    ActionTypeDeleteAuthor,
    ActionTypeGetAuthors,
    ActionTypeUpdateAuthor,
    IAuthor
} from "./types/types";

const {
    GOT_AUTHORS,
    ADDED_AUTHOR,
    DELETED_AUTHOR,
    UPDATED_AUTHOR,
} = types;

const getAuthors = (authors: IAuthor[]): ActionTypeGetAuthors => ({
    type: GOT_AUTHORS,
    payload: authors
});

const deleteAuthor = (updatedList: IAuthor[]): ActionTypeDeleteAuthor => ({
    type: DELETED_AUTHOR,
    payload: updatedList
})

const addAuthor = (author: IAuthor): ActionTypeAddAuthor => ({
    type: ADDED_AUTHOR,
    payload: author
})
const updateAuthor = (updAuthor: IAuthor): ActionTypeUpdateAuthor => ({
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
