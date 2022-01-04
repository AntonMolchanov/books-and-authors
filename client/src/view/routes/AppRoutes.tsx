// @ts-ignore
import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import Books from "../pages/Books/Books";
import Authors from "../pages/Authors/Authors";
import Book from "../pages/Book/Book";
import AddABook from "../pages/AddABook/AddABook";
import Author from "../pages/Author/Author";
import AddAnAuthor from "../pages/AddAnAuthor/AddAnAuthor";

const AppRoutes = () => {

    return (
            <Switch>
                <Route exact path="/" render={() => <Books/>}/>
                <Route exact path="/books" render={() => <Books/>}/>
                <Route exact path="/authors" render={() => <Authors/>}/>
                <Route exact path="/add-a-new-book" render={() => <AddABook/>}/>
                <Route exact path="/add-a-new-author" render={() => <AddAnAuthor/>}/>
                <Route path="/books/:bookId" render={() => <Book /> }/>
                <Route path="/authors/:authorId" render={() => <Author /> }/>
            </Switch>
    );
};

export default AppRoutes;