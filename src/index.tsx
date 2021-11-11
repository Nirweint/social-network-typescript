import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {store} from "./redux/state";
import React from "react";
import './index.css'

let renderEntireTree = () => {
    ReactDOM.render(<React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}
renderEntireTree();

store.subscribe(renderEntireTree);