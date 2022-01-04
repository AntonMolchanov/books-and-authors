import React, {FC, FormEventHandler, useState} from 'react';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {authorsOperations} from "../../../redux/features/authors";
import {IAuthor} from "../../../redux/features/authors/types/types";


const UpdateAuthorForm: FC<IAuthor> = ({genre,name,description,img, id}) => {
    const dispatch = useDispatch();
    const [updGenre,setUpdGenre] = useState(genre);
    const [updName,setUpdName] = useState(name);
    const [updDescription,setUpdDescription] = useState(description);
    const [updImg,setUpdImg] = useState(img);

    const handleName = (e: React.FormEvent<HTMLInputElement>):void => {
        setUpdName((e.target as HTMLInputElement).value)
    }
    const handleDescription = (e: React.FormEvent<HTMLInputElement>):void => {
        setUpdDescription((e.target as HTMLInputElement).value)
    }
    const handleImage = (e: React.FormEvent<HTMLInputElement>):void => {
        setUpdImg((e.target as HTMLInputElement).value)
    }
    const handleGenre = (e: React.FormEvent<HTMLInputElement>):void => {
        setUpdGenre((e.target as HTMLInputElement).value)
    }
    const handleSubmit = (event: React.SyntheticEvent):void => {
        event.preventDefault()
        if (updGenre && updName && updDescription && updImg){
            dispatch(authorsOperations.updatedAuthor({
                genre: updGenre,
                name: updName,
                description: updDescription,
                img: updImg,
                section: 'authors',
                id: id
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