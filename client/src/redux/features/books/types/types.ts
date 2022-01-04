import types from "../types";

export interface IBook {
    genre: string,
    description: string,
    name: string,
    img: string,
    section: string,
    id: string,
    author: string
}

export interface ActionTypeGetBooks {
    type: typeof types.GOT_BOOKS,
    payload: IBook[]
}

export interface ActionTypeDeleteBook {
    type: typeof types.DELETED_BOOK,
    payload: IBook[]
}

export interface ActionTypeAddBook {
    type: typeof types.ADDED_BOOK,
    payload: IBook
}

export interface ActionTypeUpdateBook {
    type: typeof types.UPDATED_BOOK,
    payload: IBook
}

export type ActionTypes = ActionTypeGetBooks | ActionTypeDeleteBook | ActionTypeAddBook | ActionTypeUpdateBook;