import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';

const possiblyRoot = document.getElementById('root');

if (possiblyRoot) {

    const root = ReactDOM.createRoot(possiblyRoot);
    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
}


