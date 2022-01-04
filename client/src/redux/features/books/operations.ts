import actions from "./actions";
import {IBook} from "./types/types";

const { getBooks, addBook, deleteBook,updatedBook } = actions;

const getData = () => (dispatch: any) => {
    fetch('http://localhost:8000/books')
        .then(res => res.json())
        .then(data => dispatch(getBooks(data)))
};

const removeBook = (id: string) => (dispatch: any) => {
    fetch(`http://localhost:8000/books/${id}`, {
        method: 'DELETE',
    })
    fetch('http://localhost:8000/books')
        .then(res => res.json())
        .then(data => dispatch(deleteBook(data)));
}

const addedBook = (book: IBook) => (dispatch: any) => {
    fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(res => res.json())
        .then(dispatch(addBook(book)))
}

const updateBook = (updBook: IBook,id: string) => (dispatch: any,getState: any) => {
    const { books } = getState();
    const updatedState = books.map((book: IBook) =>
    book.id === id
        ?
        {...book, img: updBook.img, genre: updBook.genre, name: updBook.name, description: updBook.description}
        :
        book
    )
    fetch(`http://localhost:8000/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updBook)
    })
        .then(dispatch(updatedBook(updatedState)))
}


const operations = {
    getData,
    removeBook,
    addedBook,
    updateBook
};

export default operations;