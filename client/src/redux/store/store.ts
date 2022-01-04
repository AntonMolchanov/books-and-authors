import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import booksReducer from '../features/books';
import authorsReducer from '../features/authors';

const rootReducer = combineReducers({
    ...booksReducer,
    ...authorsReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;