import {IAuthor} from "../authors/types/types";

export interface IState {
    authors: IAuthor[],
    books: any[]
}