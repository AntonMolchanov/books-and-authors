import actions from "./actions";

const { getAuthors, addAuthor, deleteAuthor,updateAuthor } = actions;

const getData = () => (dispatch) => {
    fetch('http://localhost:8000/authors')
        .then(res => res.json())
        .then(data => dispatch(getAuthors(data)))
};

const removeAuthor = (id) => (dispatch) => {
    fetch(`http://localhost:8000/authors/${id}`, {
        method: 'DELETE',
    })
    fetch('http://localhost:8000/authors')
        .then(res => res.json())
        .then(data => dispatch(deleteAuthor(data)));
}

const addedAuthor = (author) => (dispatch) => {
    fetch('http://localhost:8000/authors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    })
        .then(res => res.json())
        .then(dispatch(addAuthor(author)))
}

const updatedAuthor = (updAuthor,id) => (dispatch,getState) => {
    const { authors } = getState();
    const updatedState = authors.map(author =>
        author.id === id
        ?
        {...author, img: updAuthor.img, genre: updAuthor.genre, name: updAuthor.name, description: updAuthor.description}
        :
            author
    )
    fetch(`http://localhost:8000/authors/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updAuthor)
    })
        .then(dispatch(updateAuthor(updatedState)))
}


const operations = {
    getData,
    removeAuthor,
    addedAuthor,
    updatedAuthor
};

export default operations;