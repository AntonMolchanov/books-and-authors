import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {authorsOperations} from "../../../redux/features/authors";

const AddAuthor = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');

    const id = uuidv4();

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

        if (name && description && genre){
            dispatch(authorsOperations.addedAuthor({ name, genre, description, img, id, section: 'authors'}))
            history.push('/authors')
        }
    }
    return (
        <div className="wrapper add-a-book">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the author's name" onChange={handleName}/>
                <input type="text" placeholder="Enter the author's description" onChange={handleDescription}/>
                <input type="text" placeholder="Enter a genre the author is known for" onChange={handleGenre}/>
                <input type="text" placeholder="Provide a web link to an image" onChange={handleImage}/>
                <button type="submit">Add a new author</button>
            </form>
        </div>
    );
};

export default AddAuthor;