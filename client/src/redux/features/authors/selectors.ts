import {IState} from "../CommonTypes/types";

const authors = (state: IState) => state.authors;

const selectors = {
    authors: authors
};

export default selectors;