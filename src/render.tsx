import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {addMessage, addPost, RootStateType} from "./redux/state";
import React from "react";

export let renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(<React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addMessage={addMessage}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}