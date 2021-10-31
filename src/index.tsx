import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, state, subscribe} from "./redux/state";
import React from "react";
import './index.css'

let renderEntireTree = () => {
    ReactDOM.render(<React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}
renderEntireTree();

subscribe(renderEntireTree);