import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import './AddABook.scss';
import { v4 as uuidv4 } from 'uuid';
import {booksOperations} from "../../../redux/features/books";
const AddABook = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [author, setAuthor] = useState('');
    const [authorError, setAuthorError] = useState(false);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [genre, setGenre] = useState('');
    const [genreError, setGenreError] = useState(false);

    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState(false);
    const [img, setImg] = useState('');

    const id = uuidv4();
    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleImage = (e) => {
        setImg(e.target.value)
    }
    const handleGenre = (e) => {
        setGenre(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setAuthorError(false)
        setNameError(false)
        setDescriptionError(false)
        setGenreError(false)

        if (author === ''){
            setAuthorError(true)
        }
        if (name === ''){
            setNameError(true)
        }
        if (description === ''){
            setDescriptionError(true)
        }
        if (genre === ''){
            setGenreError(true)
        }
        if (author && name && description && genre){
            dispatch(booksOperations.addedBook({author, name, genre, description, img, id, section: 'books'}))
            history.push('/books')
        }
    }
    return (
        <div className="wrapper add-a-book">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the author's name" onChange={handleAuthor}/>
                <input type="text" placeholder="Enter the book's name" onChange={handleName}/>
                <input type="text" placeholder="Enter the book's description" onChange={handleDescription}/>
                <input type="text" placeholder="Enter the book's genre" onChange={handleGenre}/>
                <input type="text" placeholder="Provide a web link to an image" onChange={handleImage}/>
                <button type="submit">Add a new book</button>
            </form>
        </div>
    );
};

export default AddABook;