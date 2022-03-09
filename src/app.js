import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import HomePage from './components/HomePage';
import './styles/styles.scss';

const APPLICATION = (
    <Provider store={store}>
        <HomePage/>
    </Provider>
)

const APPROOT = document.getElementById("app");

const RENDER = () => ReactDOM.render(APPLICATION, APPROOT);

RENDER();