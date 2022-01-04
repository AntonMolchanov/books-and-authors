import types from "./types";
import {ActionTypes} from './types/types';

const {GOT_BOOKS, ADDED_BOOK, DELETED_BOOK, UPDATED_BOOK} = types;


const booksReducer = (state = [], action: ActionTypes) => {
    const {type, payload} = action;

    switch (type) {
        case GOT_BOOKS: {
            return payload;
        }
        case DELETED_BOOK: {
            return payload;
        }
        case ADDED_BOOK: {
            return [...state, payload];
        }
        case UPDATED_BOOK: {
            return payload;
        }
        default: {
            return state;
        }
    }
}

export default {
    books: booksReducer
}