import React, {useState} from 'react';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {authorsOperations} from "../../../redux/features/authors";

const UpdateAuthorForm = ({genre,name,description,img, id}) => {
    const dispatch = useDispatch();
    const [updGenre,setUpdGenre] = useState(genre);
    const [updName,setUpdName] = useState(name);
    const [updDescription,setUpdDescription] = useState(description);
    const [updImg,setUpdImg] = useState(img);

    const handleName = (e) => {
        setUpdName(e.target.value)
    }
    const handleDescription = (e) => {
        setUpdDescription(e.target.value)
    }
    const handleImage = (e) => {
        setUpdImg(e.target.value)
    }
    const handleGenre = (e) => {
        setUpdGenre(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (updGenre && updName && updDescription && updImg){
            dispatch(authorsOperations.updatedAuthor({
                genre: updGenre,
                name: updName,
                description: updDescription,
                img: updImg,
                section: 'authors'
            }, id));
        }
    }
    return (
        <div className="book-update-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={"Current name - " + name} onChange={handleName}/>
                <input type="text" placeholder={"Current description - " + description} onChange={handleDescription}/>
                <input type="text" placeholder={"Current genre - " + genre} onChange={handleGenre}/>
                <input type="text" placeholder={"Current image url - " + img} onChange={handleImage}/>
                <Button text="Update the book"/>
            </form>
        </div>
    );
};

export default UpdateAuthorForm;