import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {
    addMessage,
    addPost,
    changeNewPostTextCallBack,
    onChangeInputValueMessage,
    state,
    subscribe
} from "./redux/state";
import React from "react";
import './index.css'

let renderEntireTree = () => {
    ReactDOM.render(<React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    addMessage={addMessage}
                    changeNewPostTextCallBack={changeNewPostTextCallBack}
                    onChangeInputValueMessage={onChangeInputValueMessage}
                />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}
renderEntireTree();

subscribe(renderEntireTree);