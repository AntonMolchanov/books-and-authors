// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import './view/assets/styles/index.scss';
import App from "./view/App";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

