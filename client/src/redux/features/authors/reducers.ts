import types from "./types";
import {ActionTypes} from "./types/types";

const {GOT_AUTHORS, ADDED_AUTHOR, DELETED_AUTHOR, UPDATED_AUTHOR} = types;


const authorsReducer = (state = [], action: ActionTypes) => {
    const {type, payload} = action;

    switch (type) {
        case GOT_AUTHORS: {
            return payload;
        }
        case DELETED_AUTHOR: {
            return payload;
        }
        case ADDED_AUTHOR: {
            return [...state, payload];
        }
        case UPDATED_AUTHOR: {
            return payload;
        }
        default: {
            return state;
        }
    }
}

export default {
    authors: authorsReducer
}