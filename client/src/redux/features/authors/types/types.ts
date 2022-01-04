import types from "../types";

export interface IAuthor {
    index?: number,
    img: string,
    name: string,
    author?: string
    genre: string,
    description: string,
    id: string
    section: string,
}

export interface ActionTypeGetAuthors {
    type: typeof types.GOT_AUTHORS,
    payload: IAuthor[]
}

export interface ActionTypeDeleteAuthor {
    type: typeof types.DELETED_AUTHOR,
    payload: IAuthor[]
}

export interface ActionTypeAddAuthor {
    type: typeof types.ADDED_AUTHOR,
    payload: IAuthor
}

export interface ActionTypeUpdateAuthor {
    type: typeof types.UPDATED_AUTHOR,
    payload: IAuthor
}

export type ActionTypes = ActionTypeGetAuthors | ActionTypeDeleteAuthor | ActionTypeAddAuthor | ActionTypeUpdateAuthor;