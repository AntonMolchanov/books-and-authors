import React, {FC, useState} from 'react';
import Button from "../Button/Button";
import {booksOperations} from "../../../redux/features/books";
import {useDispatch} from "react-redux";
import {IBook} from "../../../redux/features/books/types/types";


const UpdateBookForm: FC<IBook> = ({genre, name, description, img, id, author}) => {
    const dispatch = useDispatch();
    const [updGenre, setUpdGenre] = useState(genre);
    const [updName, setUpdName] = useState(name);
    const [updDescription, setUpdDescription] = useState(description);
    const [updImg, setUpdImg] = useState(img);

    const handleName = (e: React.FormEvent<HTMLInputElement>) => {
        setUpdName((e.target as HTMLInputElement).value)
    }
    const handleDescription = (e: React.FormEvent<HTMLInputElement>) => {
        setUpdDescription((e.target as HTMLInputElement).value)
    }
    const handleImage = (e: React.FormEvent<HTMLInputElement>) => {
        setUpdImg((e.target as HTMLInputElement).value)
    }
    const handleGenre = (e: React.FormEvent<HTMLInputElement>) => {
        setUpdGenre((e.target as HTMLInputElement).value)
    }
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (updGenre && updName && updDescription && updImg) {
            dispatch(booksOperations.updateBook({
                genre: updGenre,
                name: updName,
                description: updDescription,
                img: updImg,
                author,
                section: 'books',
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

export default UpdateBookForm;