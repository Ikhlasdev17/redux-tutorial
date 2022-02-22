import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {reducer} from './redux/reducer';
import { createStore } from "redux";
import App from "./components/App";
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);




