import {IState} from "../CommonTypes/types";

const books = (state: IState) => state.books;

const selectors = {
    books: books
};

export default selectors;